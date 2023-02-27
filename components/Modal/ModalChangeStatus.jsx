import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select, { components } from "react-select";
import { Loader, Modal, Toggle } from "rsuite";
import Swal from "sweetalert2";
import { getProvinceData } from "../../store/redux/ProviceReducer/province.action";
import { LOCAL_STORAGE, setLocalStorage } from "../../utils/handleStorage";
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: 16,
    fontWeight: 400,
    color: state.isSelected ? "#fff" : "#000",
    backgroundColor: state.isSelected ? "#576e33" : "#fff",
    "&:hover": {
      backgroundColor: "#bbbbbb",
      color: "#fff",
    },
    cursor: "pointer",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#A6A6A6",
    fontSize: 16,
    fontWeight: 500,
  }),
  indicatorSeparator: () => ({ display: "none" }),
  container: (provided, state) => ({
    ...provided,
    width: "100%",
    border: "1px solid #979797",
    borderRadius: 4,
  }),
  input: (base, state) => ({
    ...base,
    color: "#000",
    fontSize: 16,
    fontWeight: 500,
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: "tranparent",
    paddingLeft: 20,
    paddingRight: 20,
    "@media screen and (max-width: 992px)": {
      paddingLeft: 12,
      paddingRight: 12,
    },
    paddingTop: 6,
    paddingBottom: 6,
    cursor: "pointer",
    color: "#000",
    border: "1px solid #979797",
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? 0 : 0,
    },
  }),
  placeholder: (base) => {
    return {
      ...base,
      fontSize: 16,
      fontWeight: 500,
    };
  },
};
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

export default function ModalChangeStatus({ options, setOpenDialog }) {
  const [loading, setLoading] = useState(false);
  const [newDefaultAddress, setNewDefaultAddress] = useState(options[0]);
  const changeDefaultAddress = () => {
    setLoading(true);
  };
  return (
    <Modal
      open={true}
      onClose={() => setOpenDialog(false)}
      id="modal-signup"
      data-aos="fade-down"
      data-aos-delay="800"
    >
      <Modal.Header>
        <Modal.Title>Trạng thái đặt lịch</Modal.Title>
        <button onClick={() => setOpenDialog(false)}>
          <i className="fa-light fa-times"></i>
        </button>
      </Modal.Header>
      <Modal.Body>
        <h5>Thay đổi trạng thái của lịch đang theo học</h5>
        <div className="form-group">
          {/* <label htmlFor="" className="form-label">
              Tỉnh/Thành phố
            </label> */}
          <Select
            styles={customStyles}
            components={{ DropdownIndicator }}
            defaultValue={options[0]}
            onChange={(value) => setNewDefaultAddress(value)}
            options={options}
          />
        </div>
        <div className="button">
          <button onClick={changeDefaultAddress}>
            {loading ? <Loader content="Đang thay đổi" /> : "Thay đổi"}
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
