import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "rsuite";
import Swal from "sweetalert2";
import bookingClientAxios from "../../clientAxios/bookingClientAxios";
import { BookingForSchedule } from "../../store/redux/BookingReducer/booking.action";
import { getTrainerData } from "../../store/redux/Trainer/trainer.action";
import { generateDatabaseDateTime, removeAccents } from "../../utils/function";
import TrainerDetail from "../Modal/TrainerDetail";
import buildCalendar from "./build";

function Calendar({
  value,
  onChange,
  schedule,
  step,
  changeStep,
  setEnableToStep2,
}) {
  const [calendar, setCalendar] = useState([]);
  const dayNames = [
    "Chủ Nhật",
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
  ];
  const dayNameShort = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);
  const isSelected = (day) => {
    return value.isSame(day, "day");
  };
  const beforeToday = (day) => {
    return moment(day).isBefore(new Date(), "day");
  };
  const isToday = (day) => {
    return day.isSame(new Date(), "day");
  };
  const dayStyled = (day) => {
    if (beforeToday(day)) return "before";
    if (isSelected(day)) return "selected";
    if (isToday(day)) return "today";
    return "next";
  };
  const sameDay = (day) => {
    let now = moment(new Date());
    if (day.year() < now.year()) {
      return true;
    } else if (day.month() < now.month()) {
      return true;
    } else if (day.dayOfYear() < now.dayOfYear()) {
      return true;
    } else {
      return false;
    }
  };
  const timeConvert = (input) => moment(input, "HH").format("HH:mm");
  const currMonth = () => value.month() + 1;
  const currYear = () => value.year();
  const prevMonth = () => value.clone().subtract(1, "month");
  const nextMonth = () => value.clone().add(1, "month");
  const isMonth = () => value.isSame(new Date(), "month");
  const [show, setShow] = useState(-1);
  const [showDetailIndex, setShowDetailIndex] = useState(-1);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (item) => {
    setOpen(true);
    const index = trainers.findIndex(
      (x) => removeAccents(x.fullname) === removeAccents(item?.trainer_id[1])
    );
    setShowDetailIndex(index);
  };
  const handleClose = () => setOpen(false);
  const { trainers } = useSelector((state) => state.TrainerReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrainerData());
  }, []);
  const [loadingBooking, setLoadingBooking] = useState();
  const HandleBookingForSchedule = async (value) => {
    const locationId = Number(Cookies.get("location_id"));
    const locationDetailID = Number(Cookies.get("location_detail_id"));
    const traineeId = Number(Cookies.get("trainee_id"));
    const token = Cookies.get("access_token");
    setLoadingBooking(value.id);
    Swal.fire({
      text: "Bạn có chắc chắn đặt lịch này",
      icon: "question",
      showCancelButton: true,
      allowOutsideClick: false,
      confirmButtonText: "Đồng ý",
      cancelButtonText: "Hủy Bỏ",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setTimeout(async () => {
          setLoadingBooking(-1);
          await axios
            .post(
              `https://betatgh.fostech.vn/restapi/1.0/object/academy.booking?vals={'location_id':'${locationId}','location_detail_id':'${locationDetailID}','trainee_id':'${traineeId}','course_id':'${value.course_id[0]}','trainer_id':'${value.trainer_id[0]}','date':'${value.date}','start_time':'${value.start_time}.0','end_time':'${value.end_time}.0','note':'','status':'pending','schedule_booking_id':'${value.id}'}`,
              "",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            .then((response) => {
              if (response.status === 201) {
                Swal.fire({
                  text: "Bạn đã đăng ký lịch thành công",
                  icon: "success",
                  showCancelButton: true,
                  allowOutsideClick: false,
                  confirmButtonText: "Xem lịch",
                  cancelButtonText: "Tiếp tục đặt",
                }).then((rs) => {
                  if (rs.isConfirmed) {
                    changeStep(step + 1);
                    setEnableToStep2(true);
                  } else if (rs.isDismissed) {
                    changeStep(0);
                    setEnableToStep2(false);
                  }
                });
              } else {
                changeStep(0);
                setEnableToStep2(false);
              }
            })
            .catch((err) => {
              setEnableToStep2(false);
              switch (err?.response?.data?.error?.message) {
                case "1": {
                  Swal.fire({
                    text: "Xin lỗi! Không thể book lịch nhỏ hơn hôm nay",
                    icon: "error",
                    showCancelButton: false,
                    confirmButtonText: "Đồng ý",
                  });
                  break;
                }
                case "2": {
                  Swal.fire({
                    text: "Đã hết chỗ trống để đăng ký",
                    icon: "error",
                    showCancelButton: false,
                    confirmButtonText: "Đồng ý",
                  });
                  break;
                }
                case "3": {
                  Swal.fire({
                    text: "Xin lỗi! anh/chị đã đăng ký đủ buổi. Một tuần chỉ được đăng ký 2 buổi",
                    icon: "error",
                    showCancelButton: false,
                    confirmButtonText: "Đồng ý",
                  });
                  break;
                }
                case "4": {
                  Swal.fire({
                    text: "Xin lỗi! lịch tập này đã được anh/chị đăng ký",
                    icon: "error",
                    showCancelButton: false,
                    confirmButtonText: "Đồng ý",
                  });
                  break;
                }
                default:
                  break;
              }
            });
        }, 3000);
      }
    });
  };
  return (
    <div id="calendar">
      <div className="calendar" data-aos="fade-right">
        <div className="header">
          <div onClick={() => !isMonth() && onChange(prevMonth())}>
            {!isMonth() ? <i className="fa-light fa-arrow-left"></i> : null}
          </div>
          <div>
            Tháng {currMonth()} năm {currYear()}
          </div>
          <div onClick={() => onChange(nextMonth())}>
            <i className="fa-light fa-arrow-right"></i>
          </div>
        </div>
        <div className="day-names">
          {window.screen.width > 768
            ? dayNames.map((d) => (
                <div className="week" key={d}>
                  {d}
                </div>
              ))
            : dayNameShort.map((d) => (
                <div className="week" key={d}>
                  {d}
                </div>
              ))}
        </div>
        <div className="body">
          {calendar.map((week, index) => (
            <>
              <div key={index} className="day-in-week">
                {week.map((day) => (
                  <div
                    className="day"
                    key={day}
                    onClick={() => {
                      // if (sameDay(day)) {
                      //   Swal.fire({
                      //     text: "Bạn không thể đặt lịch ở quá khứ",
                      //     icon: "error",
                      //     showCancelButton: false,
                      //     confirmButtonText: "OK",
                      //   });
                      // } else {
                      //   onChange(day);
                      //   setShow(index);
                      // }
                      onChange(day);
                      setShow(index);
                    }}
                  >
                    <div className={dayStyled(day)}>
                      {day.format("D").toString()}
                    </div>
                  </div>
                ))}
              </div>
              {show === index && (
                <div className="schedule" data-aos="fade-down">
                  {schedule["academy.schedule.booking"]?.filter((item) =>
                    value.isSame(item.date)
                  )?.length > 0 ? (
                    <div className="content">
                      <h4 className="top">
                        Đặt lịch vào ngày {value.date()} tháng{" "}
                        {value.month() + 1}, {value.year()}
                      </h4>
                      <div className="list">
                        {schedule["academy.schedule.booking"]
                          ?.filter((item) => value.isSame(item.date))
                          ?.map((item, i) => (
                            <div
                              key={i}
                              className="d-flex justify-content-between align-items-center flex-wrap item"
                            >
                              <div className="title d-flex align-items-center">
                                <i className="fa-light fa-clock"></i>
                                <div>
                                  <h5
                                    style={{
                                      cursor: "pointer",
                                    }}
                                    onClick={() => handleOpen(item)}
                                  >
                                    {item.trainer_id[1]}
                                  </h5>
                                  <h5>
                                    {timeConvert(item.start_time)} -{" "}
                                    {timeConvert(item.end_time)}
                                  </h5>
                                  <p>{item.slot} chỗ trống</p>
                                </div>
                              </div>
                              <div className="tool">
                                <button
                                  onClick={() => HandleBookingForSchedule(item)}
                                >
                                  {loadingBooking === item.id ? (
                                    <Loader content="Đang xử lý" />
                                  ) : (
                                    "Đặt Lịch"
                                  )}
                                </button>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ) : (
                    <div className="content">
                      <h4 className="top">
                        <h5>
                          Không có lịch trống vào ngày {value.date()} tháng{" "}
                          {value.month() + 1}, {value.year()}
                        </h5>
                      </h4>
                    </div>
                  )}
                </div>
              )}
            </>
          ))}
          {open && showDetailIndex >= 0 && (
            <TrainerDetail
              handleClose={handleClose}
              showDetailIndex={showDetailIndex}
              trainers={trainers}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
