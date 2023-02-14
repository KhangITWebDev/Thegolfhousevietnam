import { yupResolver } from "@hookform/resolvers/yup";
import Cookies from "js-cookie";
import moment from "moment/moment";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Steps } from "rsuite";
import Swal from "sweetalert2";
import * as yup from "yup";
import Calendar from "../../components/Calendar/Calendar";
import {
  getRegistrationData,
  getScheduleData,
} from "../../store/redux/BookingReducer/booking.action";
import styles from "./Booking.module.scss";
function StartBooking() {
  const token = Cookies.get("access_token");
  const router = useRouter();
  const [valueD, setValueD] = useState(moment());
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("success");
  const [enableToStep2, setEnableToStep2] = useState(false);
  const { schedule } = useSelector((state) => state.BookingReducer);
  const dispatch = useDispatch();
  const trainee_id = Cookies.get("trainee_id");
  useEffect(() => {
    dispatch(getScheduleData());
    // setValue("name", `Học Viên số ${trainee_id}`);
    // setValue("phone", `0123456789`);
    // setValue("email", `Traninee${trainee_id}@gmail.com`);
  }, []);
  useEffect(() => {
    if (!token || token?.length < 0 || token === "") {
      router.back();
    } else {
      // setTimeout(() => {
      //   router.push("/course");
      // }, 3599999);
    }
  }, [token]);
  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };
  const onNext = () => {
    if (step === 0) {
      if (enableToStep2) {
        onChange(step + 1);
      } else {
        Swal.fire({
          text: "Bạn chưa chọn ngày để đặt lịch",
          icon: "error",
          showCancelButton: false,
          confirmButtonText: "Đồng ý",
        });
      }
    }
  };
  const onPrevious = () => onChange(step - 1);
  const onSubmit = (data) => {
    onNext();
  };
  return (
    <div className="container">
      {/* <div className="col-8 m-auto">
        <Steps current={step} currentStatus={status}>
          <Steps.Item title="Chọn ngày giờ" />
          <Steps.Item title="Thông tin đặt lịch" />
        </Steps>
      </div> */}
      {step === 0 && (
        <Calendar
          value={valueD}
          onChange={setValueD}
          schedule={schedule}
          step={step}
          changeStep={setStep}
          setEnableToStep2={setEnableToStep2}
        />
      )}
      {step === 2 && (
        <div className="m-auto">
          <div className={styles.info}>
            <div className={styles.content + " " + "w-100"}>
              <div className={styles.header}>
                <h5 className="text-center">Thông tin đặt lịch của bạn</h5>
              </div>
              <div className="wrap">
                <div className="d-flex flex-column">
                  <div className="d-flex information_column">
                    <h6 className="col-4 col-sm-3">
                      <i className="fa-light fa-memo"></i>
                      <span>Khoá học:</span>
                    </h6>
                    <div className="col-8 col-sm-9">
                      <h6 className="desc">Khoá Junior</h6>
                    </div>
                  </div>
                  <div className="d-flex information_column">
                    <h6 className="col-4 col-sm-3">
                      <i className="fa-light fa-user-alt"></i>
                      <span>Tên:</span>
                    </h6>
                    <div className="col-8 col-sm-9">
                      <h6 className="desc">Thành Vinh</h6>
                    </div>
                  </div>
                  <div className="d-flex information_column">
                    <h6 className="col-4 col-sm-3">
                      <i className="fa-light fa-clock"></i>
                      <span>Thời gian:</span>
                    </h6>
                    <div className="col-8 col-sm-9">
                      <h6 className="desc">Thứ 3 9:40:22, 20 tháng 12, 2022</h6>
                    </div>
                  </div>
                  <div className="d-flex information_column">
                    <h6 className="col-4 col-sm-3">
                      <i className="fa-light fa-location-dot"></i>
                      <span>Địa điểm:</span>
                    </h6>
                    <div className="col-8 col-sm-9">
                      <h6 className="desc">
                        85-87 Nguyen Co Thach, An Loi Đong, Q.2, TPHCM
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex information_column">
                    <h6 className="col-4 col-sm-3">
                      <i className="fa-light fa-file-lines"></i>
                      <span>Chi tiết:</span>
                    </h6>
                    <div className="col-8 col-sm-9">
                      <h6 className="desc">
                        Tên: Thanh Vinh <br /> Số điện thoại: 0378759723 <br />
                        Email: admin@example.com
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="d-flex justify-content-between booking-tool">
        <button onClick={onPrevious}>
          <i className="fa-light fa-arrow-left"></i>
          Quay lại
        </button>
        <button onClick={onNext}>
          Tiếp theo<i className="fa-light fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default StartBooking;
