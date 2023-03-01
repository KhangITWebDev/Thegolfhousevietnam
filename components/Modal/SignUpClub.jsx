import React, { useEffect } from "react";
import { Loader, Modal } from "rsuite";
import Select, { components } from "react-select";
import { Alert } from "react-bootstrap";
import { Controller } from "react-hook-form";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: 16,
    fontWeight: 400,
    color: state.isSelected ? "#fff" : "#000",
    backgroundColor: state.isSelected ? "#00B577" : "transparent",
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
const options = [
  { value: "1", label: "The Golf House 1" },
  { value: "2", label: "The Golf House 2" },
];
const options2 = [
  { value: "1", label: "9h - 12h" },
  { value: "2", label: "12h - 14h" },
  { value: "3", label: "14h - 17h" },
  { value: "4", label: "17h - 22h" },
];
function SignUpClub({
  handleClose,
  errors,
  reset,
  control,
  register,
  onSubmit,
  handleSubmit,
}) {
  useEffect(() => {
    reset({
      from_name: "",
      from_phone: "",
      from_club: "",
      from_time: "",
    });
  }, []);
  return (
    <Modal
      open={true}
      onClose={handleClose}
      id="modal-signup"
      data-aos="fade-down"
      data-aos-delay="800"
    >
      <Modal.Header>
        <Modal.Title>Đăng Tham gia câu lạc bộ</Modal.Title>
        <button onClick={handleClose}>
          <i className="fa-light fa-times"></i>
        </button>
      </Modal.Header>
      <Modal.Body>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              {...register("from_name")}
              placeholder="Họ tên"
              autoFocus={true}
            />
            {errors?.from_name && (
              <Alert variant="danger">{errors?.from_name?.message}</Alert>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              {...register("from_phone")}
              placeholder="Điện thoại"
            />
            {errors?.from_phone && (
              <Alert variant="danger">{errors?.from_phone?.message}</Alert>
            )}
          </div>
          <div className="form-group">
            <Controller
              control={control}
              name="from_club"
              render={({ field }) => (
                <Select
                  {...field}
                  styles={customStyles}
                  components={{ DropdownIndicator }}
                  placeholder="Chọn câu lạc bộ muốn đăng ký"
                  options={options}
                />
              )}
            />
            {errors?.from_club && (
              <Alert variant="danger">
                {errors.from_club?.message || errors.from_club?.label.message}
              </Alert>
            )}
          </div>
          <div className="form-group">
            <Controller
              control={control}
              name="from_time"
              render={({ field }) => (
                <Select
                  {...field}
                  styles={customStyles}
                  components={{ DropdownIndicator }}
                  placeholder="Giờ nào chúng tôi có thể gọi bạn?"
                  options={options2}
                />
              )}
            />
            {errors?.from_time && (
              <Alert variant="danger">
                {errors.from_time?.message || errors.from_time?.label.message}
              </Alert>
            )}
          </div>
          <div className="button">
            <button>Đăng ký ngay</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default SignUpClub;
