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
          <Steps.Item title="Time" />
          <Steps.Item title="Confirmation" />
          <Steps.Item title="Infomation booking" />
        </Steps>
      </div>
      {step === 0 && (
        <div>
          <div className={styles.time}>
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
                  <button onClick={() => setStep(1)}>CONTINUE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 1 && (
        <div className="">
          <div className={styles.confirm}>
            <div className="col-8 m-auto">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-positon">
                  <div className="icon">
                    <i className="fa-light fa-user-alt"></i>
                  </div>
                  <input type="text" placeholder="Name" {...register("name")} />
                </div>
                {errors?.name && (
                  <Alert variant="danger">{errors?.name?.message}</Alert>
                )}
                <div className="input-positon">
                  <div className="icon">
                    <i className="fa-light fa-mobile"></i>
                  </div>
                  <input
                    type="text"
                    placeholder="Phone"
                    {...register("phone")}
                  />
                </div>
                {errors?.phone && (
                  <Alert variant="danger">{errors?.phone?.message}</Alert>
                )}
                <div className="input-positon">
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
                <div className="button d-flex justify-content-center">
                  <button>Submit</button>
                </div>
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
                <h5 className="text-center">YOUR BOOKING HAS BEEN CONFIRMED</h5>
              </div>
              <div className={styles.info}>
                <div className="d-flex flex-column col-12 col-lg-10 m-auto">
                  <div className={"d-flex" + " " + styles.information_column}>
                    <h6 className="col-3">
                      <i className="fa-light fa-memo"></i>Your Booking:
                    </h6>
                    <div className="col-9">
                      <h6 className={styles.desc}>LIO Academy</h6>
                    </div>
                  </div>
                  <div className={"d-flex" + " " + styles.information_column}>
                    <h6 className="col-3">
                      <i className="fa-light fa-user-alt"></i>Attendees:
                    </h6>
                    <div className="col-9">
                      <h6 className={styles.desc}>{watch("name")}</h6>
                    </div>
                  </div>
                  <div className={"d-flex" + " " + styles.information_column}>
                    <h6 className="col-3">
                      <i className="fa-light fa-clock"></i>When:
                    </h6>
                    <div className="col-9">
                      <h6 className={styles.desc}>
                        {`${convertDate(startDate).w}, ${
                          ListTime[selectedTime].label
                        }, ${convertDate(startDate).getDateMonthYear}`}
                      </h6>
                    </div>
                  </div>
                  <div className={"d-flex" + " " + styles.information_column}>
                    <h6 className="col-3">
                      <i className="fa-light fa-globe"></i>Timezone:
                    </h6>
                    <div className="col-9">
                      <h6 className={styles.desc}>Vietnam</h6>
                    </div>
                  </div>
                  <div className={"d-flex" + " " + styles.information_column}>
                    <h6 className="col-3">
                      <i className="fa-light fa-location-dot"></i>Location:
                    </h6>
                    <div className="col-9">
                      <h6 className={styles.desc}>{address}</h6>
                    </div>
                  </div>
                  <div className={"d-flex" + " " + styles.information_column}>
                    <h6 className="col-3">
                      <i className="fa-light fa-file-lines"></i>Description:
                    </h6>
                    <div className="col-9">
                      <h6 className={styles.desc}>
                        Name: {watch("name")} <br />
                        Phone: {watch("phone")} <br />
                        Email: {watch("email")}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="button d-flex justify-content-center">
                  <button onClick={onConfirm}>Confirm Booking</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
