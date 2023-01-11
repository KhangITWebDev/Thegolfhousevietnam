import React from "react";
import { Modal } from "rsuite";
import Select, { components } from "react-select";
import { Alert } from "react-bootstrap";
import { Controller } from "react-hook-form";

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
  { value: "1", label: "Ngành nghề" },
  { value: "2", label: "Kiến trúc" },
  { value: "3", label: "Bất động sản" },
  { value: "4", label: "Công nghệ thông tin" },
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
function SignUpTrial({
  handleClose,
  handleOpen5,
  errors,
  control,
  register,
  onSubmit,
  handleSubmit,
}) {
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
            <input type="text" className="form-control" {...register("name")} />
            {errors?.name && (
              <Alert variant="danger">{errors?.name?.message}</Alert>
            )}
          </div>
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
              Điện Thoại
            </label>
            <input
              type="text"
              className="form-control"
              {...register("phone")}
            />
            {errors?.phone && (
              <Alert variant="danger">{errors?.phone?.message}</Alert>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Nghề nghiệp
            </label>
            {/* <Select
              {...register("job")}
              options={options}
              styles={customStyles}
              defaultValue={options[0]}
              components={{ DropdownIndicator }}
            /> */}
            <Controller
              control={control}
              defaultValue={options.map((c) => c.value)}
              name="job"
              render={({ field: { onChange, value, ref } }) => (
                <Select
                  styles={customStyles}
                  inputRef={ref}
                  components={{ DropdownIndicator }}
                  // value={options.filter((c) => value.includes(c.value))}
                  defaultValue={options[0]}
                  onChange={(val) => onChange(val.label)}
                  options={options}
                  // isMulti
                />
              )}
            />
          </div>
          <div className="button">
            <button onClick={handleSubmit(onSubmit)}>Đăng ký</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default SignUpTrial;
