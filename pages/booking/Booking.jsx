import React, { useState } from "react";
import { components } from "react-select";
import styles from "./Booking.module.scss";
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
  return (
    <div className={styles.booking_page} id="Booking">
      <StartBooking />
    </div>
  );
}

export default Booking;
