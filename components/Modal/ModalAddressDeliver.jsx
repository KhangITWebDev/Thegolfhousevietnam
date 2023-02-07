import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select, { components } from "react-select";
import { Loader, Modal, Toggle } from "rsuite";
import Swal from "sweetalert2";
import { getProvinceData } from "../../store/redux/ProviceReducer/province.action";
import { LOCAL_STORAGE, setLocalStorage } from "../../utils/handleStorage";

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
  setFindAddressDefault,
}) {
  const options = addressList?.map((item, index) => {
    return {
      label: `${item.no} ${item.street}, ${item.ward.label}, ${item.district.label}, ${item.city.label}`,
      value: index + 1,
    };
  });
  const [loading, setLoading] = useState(false);
  const [newDefaultAddress, setNewDefaultAddress] = useState(
    options[defaultValue]
  );
  const changeDefaultAddress = () => {
    setLoading(true);
    const findIndex = options.findIndex(
      (x) => x.value === newDefaultAddress?.value
    );
    if (findIndex >= 0) {
      if (findIndex === defaultValue) {
        setTimeout(() => {
          setLoading(false);
          Swal.fire({
            text: "Địa chỉ này đã là mặc định",
            icon: "info",
            showCancelButton: false,
            cancelButtonText: "Hủy Bỏ",
            confirmButtonText: "Đông ý",
          });
          setFindAddressDefault(defaultValue);
        }, 2000);
      } else {
        setTimeout(() => {
          Swal.fire({
            text: "Bạn có chắc chắn thay đôỉ địa chỉ này thành mặc định",
            icon: "info",
            cancelButtonText: "Hủy Bỏ",
            confirmButtonText: "Đông ý",
          }).then((result) => {
            if (result.isConfirmed) {
              const newState = addressList.map((obj, indexD) => {
                if (indexD === findIndex) {
                  return { ...obj, default: true };
                }
                return { ...obj, default: false };
              });
              setFindAddressDefault(findIndex);
              setLocalStorage(LOCAL_STORAGE.ADDRESS_LIST, newState);
              Swal.fire({
                text: "Thay đổi địa chỉ thành công",
                icon: "success",
                showCancelButton: false,
                confirmButtonText: "Đông ý",
              }).then((rs) => {
                if (rs.isConfirmed) {
                  handleClose();
                }
              });
            }
          });
        }, 2000);
      }
    }
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
        <Modal.Title>Địa chỉ giao hàng</Modal.Title>
        <button onClick={handleClose}>
          <i className="fa-light fa-times"></i>
        </button>
      </Modal.Header>
      <Modal.Body>
        <h5>Thay đổi địa chỉ giao hàng mặc định</h5>
        <div className="form-group">
          {/* <label htmlFor="" className="form-label">
              Tỉnh/Thành phố
            </label> */}
          <Select
            styles={customStyles}
            components={{ DropdownIndicator }}
            defaultValue={options[defaultValue]}
            onChange={(value) => setNewDefaultAddress(value)}
            options={options}
          />
        </div>
        <div className="button">
          <button onClick={changeDefaultAddress}>
            {loading ? <Loader content="Đang xác nhận" /> : "Xác nhận"}
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
