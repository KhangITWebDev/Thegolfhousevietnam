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
      <StartBooking setStartBooking={setStartBooking} address={address} />
    </div>
  );
}

export default Booking;
