import Image from "next/image";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./Booking.module.scss";
import $ from "jquery";
import moment from "moment/moment";
import { convertDate } from "../../utils/function";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Alert } from "react-bootstrap";
import { Button, Loader, Modal, Steps } from "rsuite";
import { useRouter } from "next/router";
import Select, { components } from "react-select";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Navigation, Pagination } from "swiper";
import Swal from "sweetalert2";
import Calendar from "../../components/Calendar/Calendar";

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
function StartBooking({ setStartBooking, address }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState(moment());
  const [rows, setRows] = React.useState(0);
  const handleEntered = () => {
    setTimeout(() => setRows(80), 2000);
  };
  const selectedDate = convertDate(startDate).getDateWithMonthFull;
  const [selectedTime, setSelectedTime] = useState(0);
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("success");
  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };
  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);
  const onSubmit = (data) => {
    onNext();
  };
  const onConfirm = () => {
    Swal.fire({
      title: "Booking Success",
      icon: "success",
      text: "You have successfully booked",
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonColor: "#AA2626",
      confirmButtonColor: "#0B2B20",
      confirmButtonText:
        '<i class="fa-light fa-arrow-left"></i> Continutes Booking',
      cancelButtonText:
        'Check booking order <i class="fa-light fa-arrow-right"></i>  ',
    }).then((result) => {
      if (result.isConfirmed) {
        setStartBooking(false);
      } else if (result.dismiss) {
        Swal.fire({
          title: "Comming Soon",
          text: "We are comming soon",
          icon: "warning",
          showCancelButton: false,
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/academy");
          }
        });
      }
    });
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
      {step === 0 && <Calendar value={value} onChange={setValue} />}
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
                {/* <div className="button d-flex justify-content-center">
                  <button>Submit</button>
                </div> */}
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
      {/* {step === 3 && (
        <div>
          <Modal
            open={true}
            onClose={() => router.push("/")}
            onEntered={handleEntered}
            onExited={() => {
              setRows(0);
            }}
          >
            <Modal.Header>
              <Modal.Title>
                {rows ? "Notification" : "Plase wait..."}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {rows ? (
                <>
                  <h5>You are signed in</h5>
                  <div className="rs-custom-button d-flex justify-content-center">
                    <Button
                      onClick={() => router.push("/profile")}
                      appearance="primary"
                    >
                      Continute Booking
                    </Button>
                    <Button>
                      Check Booking Order{" "}
                      <i className="fa-light fa-arrow-right"></i>
                    </Button>
                  </div>
                </>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <Loader size="md" />
                </div>
              )}
            </Modal.Body>
          </Modal>
        </div>
      )} */}
    </div>
  );
}

export default StartBooking;
