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
import * as yup from "yup";
import Calendar from "../../components/Calendar/Calendar";
import {
  getRegistrationData,
  getScheduleData,
} from "../../store/redux/BookingReducer/booking.action";
import styles from "./Booking.module.scss";
const PHONE_REGEX = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup
    .string()
    .required("Phone is required")
    .min(10, "Phone must be at more 9 characters")
    .max(12, "Phone must be at least 12 characters")
    .matches(PHONE_REGEX, "This phone is not valid"),
  email: yup
    .string()
    .email("This email is not valid")
    .required("Email is required"),
});
function StartBooking() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const token = Cookies.get("access_token");
  const router = useRouter();
  const [value, setValue] = useState(moment());
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("success");
  const { schedule } = useSelector((state) => state.BookingReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getScheduleData());
  }, []);
  useEffect(() => {
    if (!token || token?.length < 0 || token === "") {
      router.back();
    }
  }, []);
  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };
  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);
  const onSubmit = (data) => {
    onNext();
  };
  return (
    <div className="container">
      <div className="col-8 m-auto">
        <Steps current={step} currentStatus={status}>
          <Steps.Item title="Chọn ngày giờ" />
          <Steps.Item title="Thông tin học viên" />
          <Steps.Item title="Thông tin đặt lịch" />
        </Steps>
      </div>
      {step === 0 && (
        <Calendar value={value} onChange={setValue} schedule={schedule} />
      )}
      {step === 1 && (
        <div className="">
          <div className={styles.confirm}>
            <div className="col-8 m-auto">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-position">
                  <div className="icon">
                    <i className="fa-light fa-user-alt"></i>
                  </div>
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    {...register("name")}
                  />
                </div>
                {errors?.name && (
                  <Alert variant="danger">{errors?.name?.message}</Alert>
                )}
                <div className="input-position">
                  <div className="icon">
                    <i className="fa-light fa-mobile"></i>
                  </div>
                  <input
                    type="text"
                    placeholder="Số điện thoại"
                    {...register("phone")}
                  />
                </div>
                {errors?.phone && (
                  <Alert variant="danger">{errors?.phone?.message}</Alert>
                )}
                <div className="input-position">
                  <div className="icon">
                    <i className="fa-light fa-envelope"></i>
                  </div>
                  <input
                    type="text"
                    placeholder="Email"
                    {...register("email")}
                  />
                </div>
                {errors?.email && (
                  <Alert variant="danger">{errors?.email?.message}</Alert>
                )}
              </form>
            </div>
          </div>
        </div>
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
