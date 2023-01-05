import React from "react";
import { Modal } from "rsuite";
import Select, { components } from "react-select";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: 16,
    "@media screen and (max-width: 992px)": {
      fontSize: 14,
    },
    "@media screen and (max-width: 576px)": {
      fontSize: 14,
    },
    color: state.isSelected ? "#fff" : "#000",
    backgroundColor: state.isSelected ? "#00B577" : "transparent",
    cursor: "pointer",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#A6A6A6",
    fontSize: 18,
    "@media screen and (max-width: 992px)": {
      fontSize: 16,
    },
    "@media screen and (max-width: 576px)": {
      fontSize: 14,
    },
    fontWeight: 500,
  }),
  // dropdownIndicator: (base) => ({
  //   ...base,
  //   color: "#000",
  // }),
  indicatorSeparator: () => ({ display: "none" }),
  container: (provided, state) => ({
    ...provided,
    width: "100%",
    border: "1px solid #979797",
    borderRadius: 4,
  }),
  input: (base, state) => ({
    ...base,
    color: "#A6A6A6",
    fontSize: 18,
    "@media screen and (max-width: 992px)": {
      fontSize: 16,
    },
    "@media screen and (max-width: 576px)": {
      fontSize: 14,
    },
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
    color: "#A6A6A6",
    border: "1px solid #979797",
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? 0 : 0,
    },
  }),
};

const options = [
  { value: "1", label: "Khoá lẻ" },
  { value: "2", label: "Khoá học" },
  { value: "3", label: "Khoá Junior" },
  { value: "4", label: "Tập luyện theo giờ" },
];
const options2 = [
  { value: "1", label: "Chọn tỉnh/thành phố" },
  { value: "2", label: "Thành phố Hồ Chí Minh" },
];

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
function SignUp({ handleClose, detailIndex, handleOpen3 }) {
  return (
    <Modal
      open={true}
      onClose={handleClose}
      id="modal-signup"
      data-aos="fade-down"
      data-aos-delay="800"
    >
      <Modal.Header>
        <Modal.Title>Đăng ký học</Modal.Title>
        <button onClick={handleClose}>
          <i className="fa-light fa-times"></i>
        </button>
      </Modal.Header>
      <Modal.Body>
        <h5>Chào mừng trở lại, vui lòng đăng ký thông tin:</h5>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            handleOpen3();
          }}
        >
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Họ tên
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Điện Thoại
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Khóa học
            </label>
            <Select
              options={options}
              styles={customStyles}
              defaultValue={options[detailIndex]}
              components={{ DropdownIndicator }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Tỉnh/Thành phố
            </label>
            <Select
              options={options2}
              styles={customStyles}
              defaultValue={options2[0]}
              components={{ DropdownIndicator }}
            />
          </div>
          <div className="button" onClick={handleOpen3}>
            <button>Đăng ký</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default SignUp;
