import React from "react";
import { Modal } from "rsuite";

function CheckInfo({ handleClose4, watch }) {
  return (
    <Modal
      open={true}
      onClose={handleClose4}
      id="modal-checkinfo"
      data-aos="fade-down"
      data-aos-delay="800"
    >
      <Modal.Header>
        <Modal.Title>Thông tin đăng ký học thử</Modal.Title>
        <button onClick={handleClose4}>
          <i className="fa-light fa-times"></i>
        </button>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column">
          <div className="d-flex information_column">
            <h6 className="col-4 col-sm-3">
              <i className="fa-light fa-user-alt"></i>
              <span>Tên:</span>
            </h6>
            <div className="col-8 col-sm-9">
              <h6 className="desc">{watch("from_name")}</h6>
            </div>
          </div>
          <div className="d-flex information_column">
            <h6 className="col-4 col-sm-3">
              <i className="fa-light fa-envelope"></i>
              <span>Email:</span>
            </h6>
            <div className="col-8 col-sm-9">
              <h6 className="desc">{watch("from_email")}</h6>
            </div>
          </div>
          <div className="d-flex information_column">
            <h6 className="col-4 col-sm-3">
              <i className="fa-light fa-phone"></i>
              <span>Điện thoại:</span>
            </h6>
            <div className="col-8 col-sm-9">
              <h6 className="desc">{watch("from_phone")}</h6>
            </div>
          </div>
          <div className="d-flex information_column">
            <h6 className="col-4 col-sm-3">
              <i className="fa-light fa-briefcase"></i>
              <span>Nghề nghiệp:</span>
            </h6>
            <div className="col-8 col-sm-9">
              <h6 className="desc">{watch("from_job")?.label}</h6>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CheckInfo;
