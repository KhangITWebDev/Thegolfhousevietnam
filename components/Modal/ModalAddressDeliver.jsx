import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select, { components } from "react-select";
import { Loader, Modal, Toggle } from "rsuite";
import { getProvinceData } from "../../store/redux/ProviceReducer/province.action";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <i
        className="fa-solid fa-caret-down"
        style={{
          fontSize: 20,
          color: "#A6A6A6",
        }}
      ></i>
    </components.DropdownIndicator>
  );
};

export default function ModalAddressDeliver({
  handleClose,
  customStyles,
  addressList,
  defaultValue,
}) {
  const options = addressList?.map((item, index) => {
    return {
      label: `${item.no} ${item.street}, ${item.ward.label}, ${item.district.label}, ${item.city.label}`,
      value: index + 1,
    };
  });
  return (
    <Modal
      open={true}
      onClose={handleClose}
      id="modal-signup"
      data-aos="fade-down"
      data-aos-delay="800"
    >
      <Modal.Header>
        <Modal.Title>Địa chỉ giao hàng</Modal.Title>
        <button onClick={handleClose}>
          <i className="fa-light fa-times"></i>
        </button>
      </Modal.Header>
      <Modal.Body>
        <h5>Thay đổi địa chỉ giao hàng mặc định</h5>
        <form action="">
          <div className="form-group">
            {/* <label htmlFor="" className="form-label">
              Tỉnh/Thành phố
            </label> */}
            <Select
              styles={customStyles}
              components={{ DropdownIndicator }}
              defaultValue={options[defaultValue]}
              onChange={(value) => console.log(value)}
              options={options}
            />
          </div>
          <div className="button">
            <button>Xác nhận</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
