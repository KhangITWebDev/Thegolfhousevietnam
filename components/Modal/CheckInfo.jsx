import React from "react";
import { Modal } from "rsuite";

function CheckInfo({ handleClose4 }) {
  return (
    <Modal
      open={true}
      onClose={handleClose4}
      id="modal-checkinfo"
      data-aos="fade-down"
      data-aos-delay="800"
    >
      <Modal.Header>
        <Modal.Title>Thông tin đặt lịch của bạn</Modal.Title>
        <button onClick={handleClose4}>
          <i className="fa-light fa-times"></i>
        </button>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column">
          <div className="d-flex information_column">
            <h6 className="col-4 col-sm-3">
              <i className="fa-light fa-memo"></i>
              <span>Khoá học:</span>
            </h6>
            <div className="col-8 col-sm-9">
              <h6 className="desc">Khoá Junior</h6>
            </div>
          </div>
          <div className="d-flex information_column">
            <h6 className="col-4 col-sm-3">
              <i className="fa-light fa-user-alt"></i>
              <span>Tên:</span>
            </h6>
            <div className="col-8 col-sm-9">
              <h6 className="desc">Thành Vinh</h6>
            </div>
          </div>
          <div className="d-flex information_column">
            <h6 className="col-4 col-sm-3">
              <i className="fa-light fa-clock"></i>
              <span>Thời gian:</span>
            </h6>
            <div className="col-8 col-sm-9">
              <h6 className="desc">Thứ 3 9:40:22, 20 tháng 12, 2022</h6>
            </div>
          </div>
          <div className="d-flex information_column">
            <h6 className="col-4 col-sm-3">
              <i className="fa-light fa-location-dot"></i>
              <span>Địa điểm:</span>
            </h6>
            <div className="col-8 col-sm-9">
              <h6 className="desc">
                85-87 Nguyen Co Thach, An Loi Đong, Q.2, TPHCM
              </h6>
            </div>
          </div>
          <div className="d-flex information_column">
            <h6 className="col-4 col-sm-3">
              <i className="fa-light fa-file-lines"></i>
              <span>Chi tiết:</span>
            </h6>
            <div className="col-8 col-sm-9">
              <h6 className="desc">
                Tên: Thanh Vinh <br /> Số điện thoại: 0378759723 <br />
                Email: admin@example.com
              </h6>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CheckInfo;
