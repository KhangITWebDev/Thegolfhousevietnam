import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select, { components } from "react-select";
import Swal from "sweetalert2";
import SignIn from "../../../components/Modal/SignIn";
import {
  getLocationData,
  getRegistrationData,
} from "../../../store/redux/BookingReducer/booking.action";
import styles from "./booking.module.scss";
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: 18,
    fontWeight: 400,
    "@media screen and (max-width: 992px)": {
      fontSize: 16,
    },
    "@media screen and (max-width: 576px)": {
      fontSize: 16,
    },
    color: state.isSelected ? "#fff" : "#000",
    backgroundColor: state.isSelected ? "#00B577" : "transparent",
    cursor: "pointer",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#fff",
    fontSize: 18,
    "@media screen and (max-width: 992px)": {
      fontSize: 16,
    },
    "@media screen and (max-width: 576px)": {
      fontSize: 16,
    },
    fontWeight: 500,
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
    fontSize: 18,
    "@media screen and (max-width: 992px)": {
      fontSize: 16,
    },
    fontWeight: 500,
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
  placeholder: (base) => {
    return {
      ...base,
      fontSize: 18,
      fontWeight: 500,
      color: "#fff",
    };
  },
};
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <i
        className="fa-light fa-chevron-down"
        style={{
          fontSize: 24,
          color: "white",
        }}
      ></i>
    </components.DropdownIndicator>
  );
};
function Booking({ contents }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [address, setAddress] = useState();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const token = Cookies.get("access_token");
  const { locationList } = useSelector((state) => state.BookingReducer);
  const { registration } = useSelector((state) => state.BookingReducer);
  useEffect(() => {
    dispatch(getRegistrationData());
    dispatch(getLocationData());
  }, [token]);
  const sectionBooking = contents.filter(
    (item) => item.category === "63bc3d4539d2a23b06d8bb0e"
  );
  return (
    <div className={styles.Booking} data-aos="fade-right">
      <div className="container">
        <div className="heading">
          <h2>{sectionBooking[0]?.title}</h2>
        </div>
      </div>
      <div className={styles.bannerv2}>
        <Image
          alt="Booking banner"
          loader={({ src }) =>
            `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
          }
          src={
            sectionBooking[0]?.images[sectionBooking[0]?.images.length - 1]
              ?.source
          }
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.content}>
          <div className="container h-100">
            <div className="h-100 d-flex flex-column justify-content-center align-items-center">
              <div
                className={
                  "d-flex flex-wrap col-12 col-md-10 col-lg-12 justify-content-end align-items-center" +
                  " " +
                  styles.search
                }
              >
                <div
                  className={"col-12 col-lg-9" + " " + styles.select_location}
                >
                  <span className={styles.title}>Location</span>
                  <div className="d-flex align-items-center">
                    <i
                      className="fa-solid fa-location-dot"
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        address
                          ? window.open(
                              `https://www.google.com/maps/place/${address.lat}+${address.long}
                                `
                            )
                          : Swal.fire({
                              text: "Vui lòng chọn địa chỉ học...",
                              icon: "error",
                              showCancelButton: false,
                              confirmButtonText: "Đồng ý",
                            });
                      }}
                    ></i>
                    {!token ? (
                      <button type="text" onClick={() => setOpen(true)}>
                        <span> Chọn vị trí học...</span>
                        <i
                          className="fa-light fa-chevron-down"
                          style={{
                            fontSize: 24,
                            color: "white",
                          }}
                        ></i>
                      </button>
                    ) : (
                      <Select
                        options={locationList["academy.location"]?.map((x) => {
                          return {
                            label: x.name,
                            value: x.id,
                            lat: x.latitude,
                            long: x.longitude,
                            detail_ids: x.detail_ids[0],
                          };
                        })}
                        styles={customStyles}
                        components={{ DropdownIndicator }}
                        noOptionsMessage={() => "Chưa có dữ liệu..."}
                        onChange={(value) => {
                          setAddress({
                            lat: value.lat,
                            long: value.long,
                          });
                          Cookies.set("location_id", value.value);
                          Cookies.set("location_detail_id", value.detail_ids);
                          Cookies.set(
                            "program_id",
                            registration["academy.registration"].program_id[0]
                          );
                        }}
                        placeholder="Chọn địa chỉ học..."
                      />
                    )}
                  </div>
                </div>
                <div
                  className={
                    "col-12 col-lg-3 d-flex justify-content-end justify-content-lg-center align-center" +
                    " " +
                    styles.tool
                  }
                >
                  <button
                    onClick={() => {
                      if (token) {
                        if (address) {
                          router.push("/booking");
                        } else {
                          Swal.fire({
                            text: "Vui lòng chọn địa chỉ học...",
                            icon: "error",
                            showCancelButton: false,
                            confirmButtonText: "Đồng ý",
                          });
                        }
                      } else {
                        setOpen(true);
                      }
                    }}
                  >
                    Booking <i className="fa-light fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              {open && <SignIn setOpen={setOpen} handleClose={handleClose} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
