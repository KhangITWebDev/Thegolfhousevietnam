import React from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "../Booking.module.scss";

function Step3({ onNext }) {
  const PHONE_REGEX =
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
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
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    onNext();
  };
  return (
    <div className="container">
      <div className={styles.confirm}>
        <div className="heading">
          <h2>CONFIRMATION</h2>
          <div className="line" style={{ width: "60%" }}></div>
        </div>
        <div className="col-8 m-auto">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Name" {...register("name")} />
            {errors?.name && (
              <Alert variant="danger">{errors?.name?.message}</Alert>
            )}
            <input type="text" placeholder="Phone" {...register("phone")} />

            {errors?.phone && (
              <Alert variant="danger">{errors?.phone?.message}</Alert>
            )}
            <input type="text" placeholder="Email" {...register("email")} />
            {errors?.email && (
              <Alert variant="danger">{errors?.email?.message}</Alert>
            )}
            {/* <div className={styles.list_checkBox}>
              <div className={styles.item}>
                <input type="checkbox" name="" id="" />
                <span>85-87 Nguyen Co Thach, An Loi Đong, Q.2, TPHCM</span>
              </div>
              <div className={styles.item}>
                <input type="checkbox" name="" id="" />
                <span>Location 1</span>
              </div>
              <div className={styles.item}>
                <input type="checkbox" name="" id="" />
                <span>Location 2</span>
              </div>
            </div> */}
            <div className="button d-flex justify-content-center">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Step3;
