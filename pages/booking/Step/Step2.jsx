import React from "react";
import DatePicker from "react-datepicker";
import styles from "../Booking.module.scss";
import moment from "moment/moment";
import { convertDate } from "../../../utils/function";
import { useState } from "react";

const ListTime = [
  {
    value: 1,
    label: "15:00",
  },
  {
    value: 2,
    label: "16:00",
  },
  {
    value: 3,
    label: "17:00",
  },
  {
    value: 4,
    label: "18:00",
  },
];

function Step2({ onNext }) {
  const [startDate, setStartDate] = useState(new Date());
  const selectedDate = convertDate(startDate).getDateWithMonthFull;
  const [selectedTime, setSelectedTime] = useState(0);
  return (
    <div className="container">
      <div className={styles.time}>
        <div className="heading">
          <h2>Time</h2>
          <div className="line" style={{ width: "100%" }}></div>
        </div>
        <div className={"d-flex" + " " + styles.time_content}>
          <div className={"col-8" + " " + styles.calendar}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              monthsShown={2}
              minDate={moment().toDate()}
              shouldCloseOnSelect={false}
              open={true}
            />
          </div>
          <div className="col-4">
            <div className={styles.header + " " + "text-center"}>
              {selectedDate}
            </div>
            <div className={"col-6 m-auto" + " " + styles.select_time}>
              {ListTime.map((item, index) => (
                <div
                  key={index}
                  className={styles.item}
                  onClick={() => setSelectedTime(index)}
                  style={{
                    borderColor: selectedTime === index && "#F8AB0C",
                  }}
                >
                  <i className="fa-light fa-clock"></i>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="button d-flex justify-content-center">
              <button onClick={onNext}>CONTINUE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step2;
