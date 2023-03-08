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
  const [enableToStep2, setEnableToStep2] = useState(false);
  const { schedule } = useSelector((state) => state.BookingReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getScheduleData());
  }, []);
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
      <Calendar
        value={valueD}
        onChange={setValueD}
        schedule={schedule}
        step={step}
        changeStep={setStep}
        setEnableToStep2={setEnableToStep2}
      />
    </div>
  );
}

export default StartBooking;
