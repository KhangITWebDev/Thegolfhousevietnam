import Link from "next/link";
import React, { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { Loader, Modal } from "rsuite";
function SignIn({
  handleClose2,
  errors,
  register,
  onSubmit,
  handleSubmit,
  loading,
  reset,
}) {
  useEffect(() => {
    reset({
      phone: "",
      password: "",
    });
  }, []);
  return (
    <Modal
      open={true}
      onClose={handleClose2}
      id="modal-signup"
      data-aos="fade-down"
      data-aos-delay="800"
    >
      <Modal.Header>
        <Modal.Title>Đăng nhập</Modal.Title>
        <button onClick={handleClose2}>
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
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default SignIn;
