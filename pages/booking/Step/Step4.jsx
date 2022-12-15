import React from "react";
import styles from "../Booking.module.scss";
import { convertDate } from "../../../utils/function";

function Step4(props) {
  return (
    <div className="container m-auto">
      <div className={styles.info}>
        <div className="heading">
          <h2>INFOMATION BOOKING</h2>
          <div className="line" style={{ width: "40%" }}></div>
        </div>
        <div className={styles.content + " " + "w-100"}>
          <div className={styles.header}>
            <h5 className="text-center">YOUR BOOKING HAS BEEN CONFIRMED</h5>
          </div>
          <div className={styles.info}>
            <div className="d-flex align-items-start col-10 m-auto">
              <div
                className={
                  "col-3 d-flex flex-column justify-content-start" +
                  " " +
                  styles.left
                }
              >
                <h6>Your Sooking:</h6>
                <h6>Attendees:</h6>
                <h6>When:</h6>
                <h6>Timezone:</h6>
                <h6>Location:</h6>
                <h6>Description:</h6>
              </div>
              <div
                className={
                  "col-9 d-flex flex-column justify-content-start" +
                  " " +
                  styles.right
                }
              >
                <h6>LIO Academy</h6>
                <h6></h6>
                <h6>{convertDate(new Date()).w} </h6>
                <h6>Vietnam</h6>
                <h6>{""}</h6>
                <h6>
                  Name: <br />
                  Phone: <br />
                  Email:
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step4;
