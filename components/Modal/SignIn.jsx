import Link from "next/link";
import React from "react";
import { Alert } from "react-bootstrap";
import { Modal } from "rsuite";
function SignIn({ handleClose2, errors, register, onSubmit, handleSubmit }) {
  return (
    <Modal
      open={true}
      onClose={handleClose2}
      id="modal-signup"
      data-aos="fade-down"
      data-aos-delay="800"
    >
      <Modal.Header>
        <Modal.Title>Yêu cầu khi đặt lịch</Modal.Title>
        <button onClick={handleClose2}>
          <i className="fa-light fa-times"></i>
        </button>
      </Modal.Header>
      <Modal.Body>
        <h5>Chào mừng trở lại, vui lòng đăng nhập:</h5>
        <form action="">
          <div className="form-group">
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
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Mật khẩu
            </label>
            <input
              type="password"
              className="form-control"
              {...register("password")}
            />
            {errors?.password && (
              <Alert variant="danger">{errors?.password?.message}</Alert>
            )}
          </div>
          <div style={{ marginTop: 20 }}>
            <Link href="">
              <a className="link">Quên mật khẩu?</a>
            </Link>
          </div>
          <div className="button">
            <button onClick={handleSubmit(onSubmit)}>Đăng nhập</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default SignIn;
