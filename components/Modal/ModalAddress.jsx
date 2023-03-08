import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select, { components } from "react-select";
import { Loader, Modal, Toggle } from "rsuite";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import * as yup from "yup";
import { getProvinceData } from "../../store/redux/ProviceReducer/province.action";
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
const PHONE_REGEX = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
const schema = yup.object().shape({
  phone: yup
    .string()
    .required("Vui lòng điền số điện thoại")
    .min(10, "Số điện thoại phải nhiều hơn 9 ký tự")
    .max(12, "Sô điện thoại phải ít hơn 12 ký tự")
    .matches(PHONE_REGEX, "Số điện thoại không hợp lệ"),
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng điền email"),
  city: yup
    .object()
    .shape({
      label: yup.string().required("Vui lòng chọn tỉnh/thành phố"),
      value: yup.string().required("Vui lòng chọn tỉnh/thành phố"),
    })
    .nullable()
    .required("Vui lòng chọn tỉnh/thành phố"),
  district: yup
    .object()
    .shape({
      label: yup.string().required("Vui lòng chọn quận/huyện"),
      value: yup.string().required("Vui lòng chọn quận/huyện"),
    })
    .nullable()
    .required("Vui lòng chọn quận/huyện"),
  ward: yup
    .object()
    .shape({
      label: yup.string().required("Vui lòng chọn phường/xã"),
      value: yup.string().required("Vui lòng chọn phường/xã"),
    })
    .nullable()
    .required("Vui lòng chọn phường/xã"),
  street: yup.string().required("Vui lòng điền tên đường"),
  no: yup.string().required("Vui lòng điền số nhà"),
});

function ModalAddress({
  handleClose,
  setDefaultAddress,
  defaultAddress,
  checkoutMethod,
}) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
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
  }, []);
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
  const [loading, setLoading] = useState(false);
  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(data);
    }, 2000);
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
