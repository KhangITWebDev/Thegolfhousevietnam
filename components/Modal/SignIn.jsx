import Link from "next/link";
import React from "react";
import { Modal } from "rsuite";

function SignIn({ handleClose2 }) {
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
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Mật khẩu
            </label>
            <input type="text" className="form-control" />
          </div>
          <div style={{ marginTop: 20 }}>
            <Link href="">
              <a className="link">Quên mật khẩu?</a>
            </Link>
          </div>
          <div className="button">
            <button>Đăng nhập</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default SignIn;
