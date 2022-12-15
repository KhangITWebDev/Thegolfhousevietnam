import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  getLocalStorage,
  LOCAL_STORAGE,
  setLocalStorage,
} from "../../../utils/handleStorage";
import styles from "./SignIn.module.scss";
import Cookies from "js-cookie";
import { Button, Loader, Modal } from "rsuite";
import SignedIn from "../signed-in/SignedIn";
import { useDispatch, useSelector } from "react-redux";
import { getUsersData } from "../../../store/redux/DemoReducer/demo.action";
import { useEffect } from "react";
import Link from "next/link";

function SignIn(props) {
  const router = useRouter();
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("This email is not valid")
      .required("Email is required"),
    phone: yup.string().required("Password is required"),
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
  const dispatch = useDispatch();
  const listUser = useSelector((state) => state.DemoReducer.usersList) || [];
  useEffect(() => {
    dispatch(getUsersData());
  }, [dispatch]);
  const userLogin = JSON.parse(Cookies.get(LOCAL_STORAGE.USER_LOGIN) || "{}");
  const findIndexEmail = listUser.findIndex((x) => x.email === watch("email"));
  const formatPhone =
    watch("phone")?.length > 0 && watch("phone")?.indexOf("84") === 0
      ? watch("phone")?.replace("84", "0")
      : watch("phone")?.indexOf("+84") === 0
      ? watch("phone")?.replace("+84", "0")
      : watch("phone");
  const findPhone = listUser[findIndexEmail]?.phone === formatPhone;
  const onSubmit = (data) => {
    if (findIndexEmail >= 0 && findPhone) {
      let timerInterval;
      Swal.fire({
        icon: "success",
        title: "Success",
        html: "Login success! Plase await <span></span>s",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("span");
          timerInterval = setInterval(() => {
            b.textContent = Math.floor(Swal.getTimerLeft() / 1000);
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
          Cookies.set("user-login", JSON.stringify(data));
          router.push("/profile");
        },
      });
      reset({
        email: "",
        phone: "",
      });
    } else {
      Swal.fire({
        title: "Fail",
        icon: "error",
        text: "Plase check your email or phone",
        focusConfirm: false,
        confirmButtonColor: "#0B2B20",
        confirmButtonText: "Ok",
      });
    }
  };
  return userLogin.email && userLogin.phone ? (
    <SignedIn />
  ) : (
    <div className={styles.sign_up_page + " " + "container"} id="SignIn">
      <div className="heading">
        <h2>Sign In</h2>
        <div className="line" style={{ width: "100%" }}></div>
      </div>
      <div
        className={
          "m-auto col-12 col-lg-8 d-flex flex-wrap justify-content-center" +
          " " +
          styles.content
        }
      >
        <div className={"col-12 col-md-6" + " " + styles.image}>
          <Image
            alt="Image"
            src="/images/Academy/SignIn/banner.png"
            layout="fill"
          />
        </div>
        <div className={"col-12 col-md-6" + " " + styles.form}>
          <h5>Form</h5>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-positon">
              <div className="icon">
                <i className="fa-light fa-envelope"></i>
              </div>
              <input type="text" placeholder="Email" {...register("email")} />
            </div>
            {errors?.email && (
              <Alert variant="danger">{errors?.email?.message}</Alert>
            )}
            <div className="input-positon">
              <div className="icon">
                <i className="fa-light fa-mobile"></i>
              </div>
              <input type="text" placeholder="Phone" {...register("phone")} />
            </div>
            {errors?.phone && (
              <Alert variant="danger">{errors?.phone?.message}</Alert>
            )}
            <div
              className="d-flex justify-content-end"
              style={{
                marginTop: 20,
              }}
            >
              <p>Forgot Password</p>
            </div>
            <div className="button d-flex justify-content-center">
              <button>Sign In</button>
            </div>
          </form>
          <div
            style={{
              marginTop: 30,
              textAlign: "center",
            }}
          >
            <p>
              Don{"'"}t you already have an account?{" "}
              <Link href="/academy/sign-up">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
