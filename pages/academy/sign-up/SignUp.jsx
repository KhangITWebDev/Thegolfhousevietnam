import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "./SignUp.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Alert } from "react-bootstrap";
import {
  getLocalStorage,
  LOCAL_STORAGE,
  setLocalStorage,
} from "../../../utils/handleStorage";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import SignedIn from "../signed-in/SignedIn";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsersData,
  SignUpAsMember,
} from "../../../store/redux/DemoReducer/demo.action";
import { useEffect } from "react";
import Link from "next/link";

function SignUp(props) {
  const router = useRouter();
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
  const dispatch = useDispatch();
  const listUser = useSelector((state) => state.DemoReducer.usersList) || [];
  console.log(listUser);
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
  console.log(findIndexEmail);
  const findIndexPhone = listUser.findIndex((x) => x.phone === formatPhone);
  const onSubmit = (data) => {
    if (findIndexEmail < 0 && findIndexPhone < 0) {
      dispatch(SignUpAsMember({ ...data, phone: formatPhone }));
      Swal.fire({
        title: "Sign Up Success",
        icon: "success",
        text: "Do you want to login now?",
        showCancelButton: true,
        focusConfirm: false,
        cancelButtonColor: "#AA2626",
        confirmButtonColor: "#0B2B20",
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Ok',
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: '<i class="fa fa-thumbs-down"></i> Cancle',
        cancelButtonAriaLabel: "Thumbs down",
      }).then((result) => {
        if (result.isConfirmed) {
          let timerInterval;
          Swal.fire({
            title: "Great",
            html: "Go to sign in page! Plase await <span></span>s",
            timer: 3000,
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
              router.push("/academy/sign-in");
            },
          });
        }
      });
      reset({
        name: "",
        phone: "",
        email: "",
      });
    }
  };
  return userLogin.email && userLogin.phone ? (
    <SignedIn />
  ) : (
    <div className={styles.sign_up_page + " " + "container"} id="Sign-Up">
      <div className="heading">
        <h2>Sign Up</h2>
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
            src="/images/Academy/SignUp/img.png"
            layout="fill"
          />
        </div>
        <div className={"col-12 col-md-6" + " " + styles.form}>
          <h5>Form</h5>
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
              <input type="text" placeholder="Phone" {...register("phone")} />
            </div>

            {errors?.phone && (
              <Alert variant="danger">{errors?.phone?.message}</Alert>
            )}
            {findIndexPhone >= 0 && (
              <Alert variant="danger">This phone already exists</Alert>
            )}
            <div className="input-positon">
              <div className="icon">
                <i className="fa-light fa-envelope"></i>
              </div>
              <input type="text" placeholder="Email" {...register("email")} />
            </div>
            {errors?.email && (
              <Alert variant="danger">{errors?.email?.message}</Alert>
            )}
            {findIndexEmail >= 0 && (
              <Alert variant="danger">This email already exists</Alert>
            )}
            <div className="button d-flex justify-content-center">
              <button className="">Sign Up</button>
            </div>
          </form>
          <div
            style={{
              marginTop: 30,
              textAlign: "center",
            }}
          >
            <p>
              Do you already have an account?{" "}
              <Link href="/academy/sign-in">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
