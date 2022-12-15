import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "../Booking.module.scss";
import { Alert } from "react-bootstrap";
function Step1({ onNext }) {
  const schema = yup.object().shape({
    address: yup.string().required("Address is required"),
  });
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    onNext();
  };
  return (
    <div className="d-flex col-12">
      <div className="col-6 d-flex align-items-center justify-content-center">
        <div className={styles.content}>
          <h1>BOOKING</h1>
          <p>
            Are you looking for a quality and professional golf learning
            place?The GOLF course at LIO Golf Academy will help you with that!!
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form}>
              <div
                className={
                  "d-flex w-100 justify-content-between" + " " + styles.input
                }
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  type="text"
                  placeholder="Enter the address you want to book"
                  className="w-100"
                  {...register("address")}
                />
                <button>
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                </button>
              </div>
              {errors?.address && (
                <Alert variant="danger">{errors?.address?.message}</Alert>
              )}
            </div>
            <button className={styles.button}>Search</button>
          </form>
        </div>
      </div>
      <div className={"col-6" + " " + styles.banner}>
        <Image
          alt="Booking banner"
          src="/images/Booking/bookingbanner.png"
          layout="fill"
        />
      </div>
    </div>
  );
}

export default Step1;
