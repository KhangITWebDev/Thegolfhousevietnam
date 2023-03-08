import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { Loader, Modal } from "rsuite";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import loginClientAxios from "../../clientAxios/loginClientAxios";

const schema = yup.object().shape({
  phone: yup.string().required("Vui lòng nhập số điện thoại"),
  password: yup.string().required("Mật khẩu là trường bắt buộc"),
});

function SignIn({ handleClose }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    reset({
      phone: "",
      password: "",
    });
  }, []);
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    setLoading(true);
    const resApi = await loginClientAxios.post("/user/login", {
      username: data.phone,
      password: data.password,
    });
    setTimeout(() => {
      if (resApi?.result?.message?.length > 0) {
        Swal.fire({
          text: `${resApi.result.message}`,
          icon: "error",
          showCancelButton: false,
          confirmButtonText: "Đồng ý",
        });
        setLoading(false);
      } else if (resApi?.result) {
        setLoading(false);
        Cookies.set("access_token", resApi?.result?.access_token);
        Cookies.set("user_id", resApi?.result?.id);
        Cookies.set("trainee_id", resApi?.result?.trainee_id);
        Cookies.set("erp_token", resApi?.result?.erp_token);
        handleClose();
        localStorage.setItem("open", "none");
      }
    }, 2000);
  };
  return (
    <Modal
      open={true}
      onClose={handleClose}
      id="modal-signup"
      data-aos="fade-down"
      data-aos-delay="800"
    >
      <Modal.Header>
        <Modal.Title>Đăng nhập</Modal.Title>
        <button onClick={handleClose}>
          <i className="fa-light fa-times"></i>
        </button>
      </Modal.Header>
      <Modal.Body>
        <h5>Hãy đăng nhập với tài khoản của TGH:</h5>
        <form action="">
          {/* <div className="form-group">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              {...register("email")}
            />
            {errors?.email && (
              <Alert variant="danger">{errors?.email?.message}</Alert>
            )}
          </div> */}
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Tài khoản
            </label>
            <input
              type="text"
              className="form-control"
              {...register("phone")}
              placeholder="Email hoặc số điện thoại"
            />
            {errors?.phone && (
              <Alert variant="danger">{errors?.phone?.message}</Alert>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Mật khẩu
            </label>
            <input
              type="password"
              className="form-control"
              {...register("password")}
              placeholder="Mật Khẩu"
            />
            {errors?.password && (
              <Alert variant="danger">{errors?.password?.message}</Alert>
            )}
          </div>
          <div style={{ marginTop: 20 }}>
            <Link href="">
              <a className="link">Quên mật khẩu</a>
            </Link>
          </div>
          <div className="button">
            <button onClick={handleSubmit(onSubmit)}>
              {loading ? <Loader content="Đang đăng nhập" /> : "Đăng nhập"}
            </button>
          </div>
          <div>
            <div className="deliver d-flex align-items-center justify-content-center">
              <span className="left"></span>
              <span>Or</span>
              <span className="right"></span>
            </div>
            <div className="social d-flex justify-content-center">
              <div className="fb">
                <Image
                  alt="FB"
                  src="/images/Logo/fb.png"
                  width={50}
                  height={50}
                />
              </div>
              <div className="gg">
                <Image
                  alt="FB"
                  src="/images/Logo/gg.png"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default SignIn;
