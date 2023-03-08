import React, { useEffect, useState } from "react";
import { Loader, Modal } from "rsuite";
import Select, { components } from "react-select";
import { Alert } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  getUserRegisterData,
  PostSignTrial,
} from "../../store/redux/CourseReducer/course.action";
import emailjs from "@emailjs/browser";
import CheckInfo from "./CheckInfo";
const PHONE_REGEX = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
const schema = yup.object().shape({
  from_name: yup.string().required("Vui lòng nhập họ tên"),
  from_phone: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .min(10, "Số điện thoại phải nhiều hơn 9 ký tự")
    .max(12, "Sô điện thoại phải ít hơn 12 ký tự")
    .matches(PHONE_REGEX, "Số điện thoại không hợp lệ"),
  from_email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  from_job: yup
    .object()
    .shape({
      label: yup.string().required("Vui lòng chọn nghề nghiệp"),
      value: yup.string().required("Vui lòng chọn nghề nghiệp"),
    })
    .nullable()
    .required("Vui lòng chọn nghề nghiệp"),
});

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
function SignUpTrial({ handleClose }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const [openCheckInfo, setOpenCheckInfo] = React.useState(false);
  const handleOpenCheckInfo = () => {
    setOpenCheckInfo(true);
  };
  const handleCloseCheckInfo = () => {
    setOpenCheckInfo(false);
    handleClose();
  };
  const [loadingSignUpTrial, setLoadingSignUpTrial] = useState(false);
  const { userRegister } = useSelector((state) => state.CourseReducer);
  useEffect(() => {
    dispatch(getUserRegisterData());
  }, []);
  const onSubmit = (data) => {
    const findEmail = userRegister.findIndex(
      (x) => x.email === watch("from_email")
    );
    const findPhone = userRegister.findIndex(
      (x) => x.dien_thoai === watch("from_phone")
    );
    setLoadingSignUpTrial(true);
    const formState = {
      from_name: data.from_name,
      from_phone: data.from_phone,
      from_email: data.from_email,
      from_job: data.from_job.label,
    };
    setTimeout(() => {
      if (findEmail >= 0) {
        setLoadingSignUpTrial(false);
        Swal.fire({
          text: `Email này đã tồn tại`,
          icon: "error",
          showCancelButton: false,
          confirmButtonText: "Đồng ý",
        });
      } else if (findPhone >= 0) {
        setLoadingSignUpTrial(false);
        Swal.fire({
          text: `Số điên thoại đã tồn tại`,
          icon: "error",
          showCancelButton: false,
          confirmButtonText: "Đồng ý",
        });
      } else {
        emailjs
          .send(
            "service_ug5xzoq",
            "template_zhcsmlh",
            formState,
            "n8Aci-Exs7CuotOPb"
          )
          .then(
            function (response) {
              if (response.status === 200) {
                dispatch(
                  PostSignTrial({
                    ten_kh: data.from_name,
                    dien_thoai: data.from_phone,
                    email: data.from_email,
                    cong_viec: data.from_job.label,
                    register_number: String(userRegister?.length + 1) || "1",
                  })
                );
                setLoadingSignUpTrial(false);
                Swal.fire({
                  title: "<h5>Đăng ký thành công</h5>",
                  text: `Cảm ơn anh/chị đã quan tâm tới dịch vụ của The Golf House Việt Nam.
                  Chuyên viên tư vấn của chúng tôi sẽ liên hệ tới anh/chị trong thời
                  gian sớm nhất.`,
                  icon: "success",
                  showCancelButton: false,
                  confirmButtonText: "Kiểm tra",
                  allowOutsideClick: false,
                }).then((result) => {
                  if (result.isConfirmed) {
                    setOpenCheckInfo(true);
                  }
                });
              }
            },
            function (err) {
              Swal.fire({
                text: `Vui lòng nhập lại thông tin`,
                icon: "error",
                showCancelButton: false,
                confirmButtonText: "OK",
              });
            }
          );
      }
    }, 2000);
  };
  useEffect(() => {
    reset({
      from_name: "",
      from_email: "",
      from_phone: "",
      from_job: "",
    });
  }, []);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        id="modal-signup"
        data-aos="fade-down"
        data-aos-delay="800"
        style={{
          display:
            !open && openCheckInfo
              ? "none"
              : open && openCheckInfo
              ? "none"
              : "block",
        }}
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
                placeholder="Email"
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
      {openCheckInfo && (
        <CheckInfo handleClose={handleCloseCheckInfo} watch={watch} />
      )}
    </>
  );
}

export default SignUpTrial;
