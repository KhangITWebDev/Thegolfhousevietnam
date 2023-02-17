import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "rsuite";
import Pagination from "../../../components/pagination/pagination";
import {
  getBookingListData,
  getLocationData,
} from "../../../store/redux/BookingReducer/booking.action";
import { removeAccents, timeConvert } from "../../../utils/function";
import { usePagination } from "../../../utils/usePagination";
import Select, { components } from "react-select";
import { getTrainerData } from "../../../store/redux/Trainer/trainer.action";
import $ from "jquery";
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: 18,
    fontWeight: 400,
    textTransform: "capitalize",
    "@media screen and (max-width: 992px)": {
      fontSize: 16,
    },
    "@media screen and (max-width: 576px)": {
      fontSize: 16,
    },
    color: state.isSelected ? "#fff" : "#000",
    backgroundColor: state.isSelected ? "#00B577" : "transparent",
    cursor: "pointer",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#000",
    fontSize: 18,
    "@media screen and (max-width: 992px)": {
      fontSize: 16,
    },
    "@media screen and (max-width: 576px)": {
      fontSize: 16,
    },
    fontWeight: 500,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#ECECEC",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  container: (provided, state) => ({
    ...provided,
    width: "100%",
  }),
  input: (base, state) => ({
    ...base,
    color: "#fff",
    fontSize: 18,
    "@media screen and (max-width: 992px)": {
      fontSize: 16,
    },
    fontWeight: 500,
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: "tranparent",
    cursor: "pointer",
    color: "#fff",
    padding: "3px 15px",
    border: state.isFocused ? "1px solid #979797 " : "1px solid #979797",
    // boxShadow: state.isFocused ? 0 : 0,
    // "&:hover": {
    //   border: state.isFocused ? 0 : 0,
    // },
  }),
  placeholder: (base) => {
    return {
      ...base,
      fontSize: 18,
      fontWeight: 500,
      color: "#000",
    };
  },
};
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <i
        className="fa-solid fa-caret-down"
        style={{
          fontSize: 20,
          color: "#A6A6A6",
        }}
      ></i>
    </components.DropdownIndicator>
  );
};
const options = [
  { value: "1", label: "Ngày học" },
  { value: "2", label: "Đại điểm học" },
  { value: "3", label: "Huấn luyện viên" },
  { value: "4", label: "Khóa học" },
  { value: "5", label: "Trạng thái" },
];
function BookingList(props) {
  const dispatch = useDispatch();
  const [selectFilter, setSelectFiler] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState("");
  const [option2, setOption2] = useState();
  const { bookingList } = useSelector((state) => state.BookingReducer);
  const { trainers } = useSelector((state) => state.TrainerReducer);
  const { locationList } = useSelector((state) => state.BookingReducer);
  useEffect(() => {
    dispatch(getTrainerData());
    dispatch(getBookingListData());
    dispatch(getLocationData());
  }, []);
  const data = usePagination(bookingList["academy.booking"] || [], 4);
  const sort = (value) => {
    data.setCurrentPage(1);
    switch (value) {
      case "1": {
        const newData = [...bookingList["academy.booking"]]?.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        data.setPerData(newData);
        break;
      }
      case "2": {
        const newData = [...bookingList["academy.booking"]]?.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        data.setPerData(newData);
        break;
      }
      // case "3": {
      //   const Newest = [...proshopData].sort(
      //     (a, b) => b.gia_ban_le - a.gia_ban_le
      //   );
      //   data.setPerData(Newest);
      //   break;
      // }
      // case "4": {
      //   const price = [...proshopData].sort(
      //     (a, b) => a.gia_ban_le - b.gia_ban_le
      //   );
      //   data.setPerData(price);
      //   break;
      // }
      default:
        break;
    }
  };
  useEffect(() => {
    switch (selectFilter) {
      case "1": {
        setType("date");
        break;
      }
      case "2": {
        setType("location");
        const newOption = locationList["academy.location"]?.map((x) => {
          return {
            value: x.id,
            label: x.name,
          };
        });
        setOption2(newOption);
        break;
      }
      case "3": {
        setType("trainer");
        const newOption = trainers?.map((x) => {
          return {
            value: x.id,
            label: x.fullname,
          };
        });
        setOption2(newOption);
        break;
      }
      case "4": {
        setType("course");
        break;
      }
      case "5": {
        setType("status");
        setOption2([
          {
            value: "1",
            name: "approved",
            label: "Đã xác nhận",
          },
          {
            value: "2",
            label: "Nhận vào lớp",
            name: "checkin",
          },
          {
            value: "3",
            label: "Kết thúc khóa",
            name: "checkout",
          },
          {
            value: "4",
            label: "Hoàn thành",
            name: "done",
          },
          {
            value: "5",
            label: "Hủy bỏ",
            name: "cancel",
          },
        ]);
        break;
      }
      default:
        break;
    }
  }, [selectFilter]);

  const filterBySelect = (value) => {
    data.setCurrentPage(1);
    if (type === "status") {
      const newData = [...bookingList["academy.booking"]]?.filter(
        (item) => item.status === value
      );
      data.setPerData(newData);
    } else if (type === "trainer") {
      const newData = [...bookingList["academy.booking"]]?.filter(
        (item) => item.trainer_id[1] === value
      );
      data.setPerData(newData);
    } else if (type === "location") {
      const newData = [...bookingList["academy.booking"]]?.filter(
        (item) => item.location_id[1] === value
      );
      data.setPerData(newData);
    }
  };
  const handleSearchInput = (e) => {
    data.setCurrentPage(1);
    const value = e.target.value;
    const dataSearchLocation = bookingList["academy.booking"].filter((x) =>
      removeAccents(x.location_id[1]).includes(
        removeAccents(value.toLowerCase())
      )
    );
    const dataSearchCourse = bookingList["academy.booking"].filter((x) =>
      removeAccents(x.course_id[1]).includes(removeAccents(value.toLowerCase()))
    );
    const dataSearchTrainer = bookingList["academy.booking"].filter((x) =>
      removeAccents(x.trainer_id[1]).includes(
        removeAccents(value.toLowerCase())
      )
    );
    if (value !== "") {
      if (type === "location") {
        data.setPerData(dataSearchLocation);
      } else if (type === "course") {
        data.setPerData(dataSearchCourse);
      } else if (type === "trainer") {
        data.setPerData(dataSearchTrainer);
      }
    } else {
      data.setPerData(bookingList["academy.booking"]);
    }
  };
  return (
    <div id="booking-list">
      <div className="heading">
        <h2>Lịch đã đặt</h2>
      </div>
      <div className="container">
        <div className="filter">
          <div className="d-flex align-items-center justify-content-between">
            <div className="col-4 filter_item">
              <div className="form-group">
                <label htmlFor="" className="form-label">
                  Lọc và tìm kiếm
                </label>
                <Select
                  styles={customStyles}
                  components={{ DropdownIndicator }}
                  placeholder="Chọn bộ lọc"
                  onChange={({ value }) => setSelectFiler(value)}
                  options={options}
                />
              </div>
            </div>
            {selectFilter.length > 0 && selectFilter === "5" && (
              <div className="col-4  filter_item">
                <Select
                  styles={customStyles}
                  components={{ DropdownIndicator }}
                  placeholder="Lọc theo trạng thái"
                  onChange={({ name }) => filterBySelect(name)}
                  options={option2}
                />
              </div>
            )}
            {selectFilter.length > 0 &&
              (selectFilter === "3" ||
                selectFilter === "2" ||
                selectFilter === "4") && (
                <div className="col-4  filter_item">
                  <div className="form-group">
                    <div className="input-group">
                      <div className="icon">
                        <i className="fa-regular fa-magnifying-glass"></i>
                      </div>
                      <input
                        type="text"
                        placeholder={`Nhập ${
                          type === "location"
                            ? "địa chỉ học"
                            : type === "trainer"
                            ? "tên huấn luyện viên"
                            : "tên khóa học"
                        }`}
                        className="form-control"
                        onChange={(e) => {
                          handleSearchInput(e);
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
            {/* {selectFilter.length > 0 && selectFilter === "1" && (
              <div className="col-7 d-flex">
                <div className="form-group col-6 date-1">
                  <label htmlFor="" className="form-label">
                    Từ ngày
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="dd-mm-yyyy"
                    onChange={(e) => console.log(e.target.value)}
                  />
                </div>
                <div className="form-group col-6 date-1">
                  <label htmlFor="" className="form-label">
                    Đến ngày
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder=""
                    onChange={(e) => console.log(e.target.value)}
                  />
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="title d-flex">
          <div className="col-2">
            <div className="header d-flex">
              <span>Ngày</span>
              <span className="d-flex flex-column tool">
                <i
                  onClick={() => sort("2")}
                  className="fa-regular fa-angle-up"
                ></i>
                <i
                  onClick={() => sort("1")}
                  className="fa-regular fa-angle-down"
                ></i>
              </span>
            </div>
          </div>
          <div className="col-2">
            <div className="header">Địa điểm</div>
          </div>
          <div className="col-2">
            <div className="header">Khóa học</div>
          </div>
          <div className="col-2">
            <div className="header">Huấn luyện viên</div>
          </div>
          <div className="col-2">
            <div className="header">Trạng thái</div>
          </div>
          <div className="col-2">
            <div className="header">Thời gian</div>
          </div>
        </div>
        {data.currentDatas.map((item, index) => (
          <div className="info d-flex align-items-ceter" key={index}>
            <div className="col-2 item">
              <div className="data">
                {moment(item.date).format("DD/MM/YYYY")}
              </div>
            </div>
            <div className="col-2 item">
              <div className="data">{item.location_id[1]}</div>
            </div>
            <div className="col-2 item">
              <div className="data">{item.course_id[1]}</div>
            </div>
            <div className="col-2 item">
              <div className="data">{item.trainer_id[1]}</div>
            </div>
            <div className="col-2 item">
              <div className="data">
                <span
                  className={`${
                    item.status === "cancel"
                      ? "status-cancel"
                      : item.status === "approved"
                      ? "status-approved"
                      : item.status === "checkin"
                      ? "status-checkin"
                      : item.status === "checkout"
                      ? "status-checkout"
                      : item.status === "done"
                      ? "status-done"
                      : item.status === "pending"
                      ? "status-pending"
                      : ""
                  } status`}
                >
                  {item.status}
                </span>
              </div>
            </div>
            <div className="col-2 item">
              <div className="data">
                {timeConvert(item.start_time)} - {timeConvert(item.end_time)}
              </div>
            </div>
          </div>
        ))}
        <Pagination data={data} />
      </div>
    </div>
  );
}

export default BookingList;
