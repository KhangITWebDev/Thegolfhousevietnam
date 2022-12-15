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
import { Steps } from "rsuite";
import { useRouter } from "next/router";
import Select, { components } from "react-select";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Navigation, Pagination } from "swiper";
import StartBooking from "./StartBooking";
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: 14,
    color: state.isSelected ? "#fff" : "#000",
    cursor: "pointer",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#fff",
    fontSize: 20,
    fontWeight: 700,
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
    fontSize: 20,
    fontWeight: 700,
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: "tranparent",
    cursor: "pointer",
    color: "#fff",
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? 0 : 0,
    },
  }),
};

const options = [
  { value: "1", label: "Nguyen Co Thach, An Loi Dong, District 2, HCMC" },
  { value: "2", label: "Location 1" },
  { value: "3", label: "Location 2" },
];

function Booking(props) {
  const [swiper, setSwiper] = useState(null);
  const [address, setAddress] = useState(options[0].label);
  const [startBooking, setStartBooking] = React.useState(false);
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <i
          className="fa-solid fa-chevron-down"
          style={{
            fontSize: 24,
            color: "white",
          }}
        ></i>
      </components.DropdownIndicator>
    );
  };
  console.log(address);
  return (
    <div className={styles.booking_page} id="Booking">
      {!startBooking ? (
        <>
          <div className={styles.banner}>
            <Image
              alt="Booking banner"
              src="/images/Booking/bookingbanner.png"
              layout="fill"
            />
            <div className={styles.content}>
              <div className="container">
                <div className="h-100 d-flex flex-column justify-content-between">
                  <div>
                    <h2 className="text-center">Booking</h2>
                  </div>
                  <div
                    className={
                      "d-flex col-10 justify-content-end align-items-center" +
                      " " +
                      styles.search
                    }
                  >
                    <div className={"col-9" + " " + styles.select_location}>
                      <span className={styles.title}>Location</span>
                      <div className="d-flex align-items-center">
                        <i className="fa-solid fa-location-dot"></i>
                        <Select
                          options={options}
                          styles={customStyles}
                          defaultValue={options[0]}
                          components={{ DropdownIndicator }}
                          onChange={(value) => setAddress(value.label)}
                        />
                      </div>
                    </div>
                    <div
                      className={
                        "col-3 d-flex justify-content-center" +
                        " " +
                        styles.tool
                      }
                    >
                      <button onClick={() => setStartBooking(true)}>
                        Booking <i className="fa-light fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.welcome}>
            <div className="container">
              <div className="heading">
                <h2>WELCOME TO COURSE</h2>
                <div className="line" style={{ width: "45%" }}></div>
              </div>
              <div
                className={"d-flex justify-content-end" + " " + styles.detail}
              >
                <div className={styles.detail_info}>
                  <div className={styles.detail_info_wrapper}>
                    <div
                      className={
                        "d-flex justify-content-between" +
                        " " +
                        styles.navigation
                      }
                    >
                      <span onClick={() => swiper.slidePrev()}>
                        <i className="fa-light fa-chevron-left"></i>
                      </span>
                      <span onClick={() => swiper.slideNext()}>
                        <i className="fa-light fa-chevron-right"></i>
                      </span>
                    </div>
                    <Swiper
                      effect={"flip"}
                      grabCursor={true}
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      pagination={false}
                      navigation={false}
                      modules={[Pagination, Navigation]}
                      className="mySwiper"
                      onSwiper={(s) => {
                        console.log("initialize swiper", s);
                        setSwiper(s);
                      }}
                    >
                      <div className={styles.content}>
                        <SwiperSlide>
                          <div className="step_slide">
                            <span>01</span>
                            <span></span>
                            <span>WELCOME TO COURSE</span>
                          </div>
                          <h3>COURSE</h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum. There are many variations of passages
                            of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected
                            humour, or randomised words which dont look even
                            slightly believable. If you are going to use a
                            passage of Lorem Ipsum, you need to be sure there
                            isnt anything embarrassing hidden in the middle of
                            text. All the Lorem Ipsum generators on the Internet
                            tend to repeat predefined chunks as necessary,
                            making this the first true generator on the
                            Internet. It uses a dictionary of over 200 Latin
                            words, combined with a handful of model sentence
                            structures, to generate Lorem Ipsum which looks
                            reasonable. The generated Lorem Ipsum is therefore
                            always free from repetition, injected humour, or
                            non-characteristic words etc.
                          </p>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="step_slide">
                            <span>02</span>
                            <span></span>
                            <span>Title 02</span>
                          </div>
                          <h3>Coure 02</h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum. There are many variations of passages
                            of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected
                            humour, or randomised words which dont look even
                            slightly believable. If you are going to use a
                            passage of Lorem Ipsum, you need to be sure there
                            isnt anything embarrassing hidden in the middle of
                            text. All the Lorem Ipsum generators on the Internet
                            tend to repeat predefined chunks as necessary,
                            making this the first true generator on the
                            Internet. It uses a dictionary of over 200 Latin
                            words, combined with a handful of model sentence
                            structures, to generate Lorem Ipsum which looks
                            reasonable. The generated Lorem Ipsum is therefore
                            always free from repetition, injected humour, or
                            non-characteristic words etc.
                          </p>
                        </SwiperSlide>
                      </div>
                    </Swiper>
                    <div
                      className={
                        "d-flex justify-content-end" + " " + styles.see_more
                      }
                    >
                      <button>See more</button>
                    </div>
                  </div>
                </div>
                <div className={"col-8" + " " + styles.image}>
                  <Image
                    alt="Image Course"
                    src="/images/Booking/bookinCourse.png"
                    layout="fill"
                  ></Image>
                </div>
              </div>
            </div>
          </div>{" "}
        </>
      ) : (
        <StartBooking setStartBooking={setStartBooking} address={address} />
      )}
    </div>
  );
}

export default Booking;
