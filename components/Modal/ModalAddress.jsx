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

function ModalAddress({
  handleClose,
  errors,
  control,
  register,
  onSubmit,
  reset,
  setDefaultAddress,
  watch,
  handleSubmit,
  customStyles,
  defaultAddress,
}) {
  const dispatch = useDispatch();
  const province = useSelector((state) => state.ProvinceReducer.province);
  const district = watch("city")
    ? province[
        province.findIndex((x) => x.code === Number(watch("city")?.value))
      ]?.districts
    : [];
  const ward =
    watch("city") && watch("district")
      ? district[
          district.findIndex((x) => x.code === Number(watch("district")?.value))
        ]?.wards
      : [];
  useEffect(() => {
    dispatch(getProvinceData());
  }, [dispatch]);
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
    setDefaultAddress(false);
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
        {province && district && ward ? (
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
                    options={province.map((x) => {
                      return {
                        value: x.code,
                        label: x.name,
                      };
                    })}
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
                    options={district?.map((x) => {
                      return {
                        value: x.code,
                        label: x.name,
                      };
                    })}
                    placeholder="Chọn quận/huyện"
                  />
                )}
              />
              {errors?.district && (
                <Alert variant="danger">
                  {errors?.district?.message ||
                    errors?.district?.label?.message}
                </Alert>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="" className="form-label">
                Phường/Xã
              </label>
              <Controller
                control={control}
                name="ward"
                render={({ field }) => (
                  <Select
                    {...field}
                    styles={customStyles}
                    components={{ DropdownIndicator }}
                    options={ward?.map((x) => {
                      return {
                        value: x.code,
                        label: x.name,
                      };
                    })}
                    placeholder="Chọn phường/xã"
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
                placeholder="Tên đường"
              />
              {errors?.street && (
                <Alert variant="danger">{errors?.street?.message}</Alert>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="" className="form-label">
                Số nhà
              </label>
              <input
                type="text"
                className="form-control"
                {...register("no")}
                placeholder="Số nhà"
              />
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
                placeholder="Điện thoại"
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
                placeholder="Email"
              />
              {errors?.email && (
                <Alert variant="danger">{errors?.email?.message}</Alert>
              )}
            </div>
            <div className="form-group form-check form-switch">
              <label
                className="form-label form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Đặt làm mặc định
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                checked={defaultAddress}
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={(e) => setDefaultAddress(e.target.checked)}
              />
            </div>
            <div className="button">
              <button>Xác nhận</button>
            </div>
          </form>
        ) : (
          <Loader content="Vui lòng chờ vài giây..." />
        )}
      </Modal.Body>
    </Modal>
  );
}

export default ModalAddress;
