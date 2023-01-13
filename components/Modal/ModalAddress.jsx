import React from "react";
import { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { Controller } from "react-hook-form";
import Select, { components } from "react-select";
import { Modal } from "rsuite";

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

function ModalAddress({
  handleClose,
  errors,
  control,
  register,
  onSubmit,
  reset,
  handleSubmit,
  customStyles,
  options,
  optionCity,
  optionDistrict,
  optionWard,
}) {
  useEffect(() => {
    reset({
      city: "",
      district: "",
      ward: "",
      street: "",
      no: "",
      phone: "",
      email: "",
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
        <Modal.Title>Địa chỉ giao hàng</Modal.Title>
        <button onClick={handleClose}>
          <i className="fa-light fa-times"></i>
        </button>
      </Modal.Header>
      <Modal.Body>
        <h5>Vui lòng nhập địa chỉ để LIO giao hàng đến bạn</h5>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Tỉnh/Thành phố
            </label>
            <Controller
              control={control}
              name="city"
              render={({ field }) => (
                <Select
                  {...field}
                  styles={customStyles}
                  components={{ DropdownIndicator }}
                  options={optionCity}
                  placeholder="Chọn tỉnh/thành phố"
                />
              )}
            />
            {errors?.city && (
              <Alert variant="danger">
                {errors?.city?.message || errors?.city?.label?.message}
              </Alert>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Quận/Huyện
            </label>
            <Controller
              control={control}
              name="district"
              render={({ field }) => (
                <Select
                  {...field}
                  styles={customStyles}
                  components={{ DropdownIndicator }}
                  options={optionDistrict}
                  placeholder="Chọn quận/huyện"
                />
              )}
            />
            {errors?.district && (
              <Alert variant="danger">
                {errors?.district?.message || errors?.district?.label?.message}
              </Alert>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Phường/Xã
            </label>
            <Controller
              control={control}
              defaultValue={options.map((c) => c.value)}
              name="ward"
              render={({ field }) => (
                <Select
                  {...field}
                  styles={customStyles}
                  components={{ DropdownIndicator }}
                  options={optionWard}
                  placeholder="Chọn phường"
                />
              )}
            />
            {errors?.ward && (
              <Alert variant="danger">
                {errors?.ward?.message || errors?.ward?.label?.message}
              </Alert>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Tên đường
            </label>
            <input
              type="text"
              className="form-control"
              {...register("street")}
            />
            {errors?.street && (
              <Alert variant="danger">{errors?.street?.message}</Alert>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Số nhà
            </label>
            <input type="text" className="form-control" {...register("no")} />
            {errors?.no && (
              <Alert variant="danger">{errors?.no?.message}</Alert>
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
          <div className="button">
            <button>Xác nhận</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalAddress;
