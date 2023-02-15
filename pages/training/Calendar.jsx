import moment from "moment";
import React, { useEffect, useState } from "react";
import buildCalendar from "./build";
function Calendar({ value, onChange, openSignIn }) {
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
  const currMonth = () => value.month() + 1;
  const currYear = () => value.year();
  const prevMonth = () => value.clone().subtract(1, "month");
  const nextMonth = () => value.clone().add(1, "month");
  const isMonth = () => value.isSame(new Date(), "month");
  const [show, setShow] = useState(-1);
  return (
    <div className="calendar" data-aos="fade-down">
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
            <div key={index} className="day-in-week" data-aos="fade-left">
              {week.map((day) => (
                <div
                  className="day"
                  key={day}
                  onClick={() => {
                    !beforeToday() && onChange(day);
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
                <div className="content">
                  <h4 className="top">
                    Đặt lịch vào ngày {value.date()} tháng {value.month() + 1},{" "}
                    {value.year()}
                  </h4>
                  <div className="list">
                    <div className="d-flex justify-content-between align-items-center flex-wrap item">
                      <div className="title d-flex align-items-center">
                        <i className="fa-light fa-clock"></i>
                        <div>
                          <h5>10:00 - 11:00</h5>
                          <p>3 chỗ trống</p>
                        </div>
                      </div>
                      <div className="tool">
                        <button onClick={openSignIn}>Đặt Lịch</button>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center flex-wrap item">
                      <div className="title d-flex align-items-center">
                        <i className="fa-light fa-clock"></i>
                        <div>
                          <h5>10:00 - 11:00</h5>
                          <p>3 chỗ trống</p>
                        </div>
                      </div>
                      <div className="tool">
                        <button onClick={openSignIn}>Đặt Lịch</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
export default Calendar;
