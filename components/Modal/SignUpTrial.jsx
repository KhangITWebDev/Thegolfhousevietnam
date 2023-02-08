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
  { value: "1", label: "Kế Toán" },
  { value: "2", label: "Kiến trúc" },
  { value: "3", label: "Bất động sản" },
  { value: "4", label: "Công nghệ thông tin" },
];
function SignUpTrial({
  handleClose,
  handleOpen5,
  errors,
  reset,
  control,
  register,
  onSubmit,
  handleSubmit,
  loadingSignUpTrial,
}) {
  useEffect(() => {
    reset({
      from_name: "",
      from_email: "",
      from_phone: "",
      from_job: "",
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
        <Modal.Title>Đăng ký học</Modal.Title>
        <button onClick={handleClose}>
          <i className="fa-light fa-times"></i>
        </button>
      </Modal.Header>
      <Modal.Body>
        <h5>Học thử miễn phí với HLV chuẩn quốc tế</h5>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Họ tên
            </label>
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
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              {...register("from_email")}
              placeholder="email"
            />
            {errors?.from_email && (
              <Alert variant="danger">{errors?.from_email?.message}</Alert>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Điện Thoại
            </label>
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
            <label htmlFor="" className="form-label">
              Nghề nghiệp
            </label>
            <Controller
              control={control}
              name="from_job"
              render={({ field }) => (
                <Select
                  {...field}
                  styles={customStyles}
                  components={{ DropdownIndicator }}
                  placeholder="Chọn ngành nghề"
                  options={options}
                />
              )}
            />
            {errors?.from_job && (
              <Alert variant="danger">
                {errors.from_job?.message || errors.from_job?.label.message}
              </Alert>
            )}
          </div>
          <div className="button">
            <button>
              {loadingSignUpTrial ? (
                <Loader content="Đăng đăng ký" />
              ) : (
                "Đăng ký"
              )}
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default SignUpTrial;
