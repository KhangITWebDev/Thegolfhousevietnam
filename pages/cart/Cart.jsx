import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Radio, RadioGroup, Steps, Table } from "rsuite";
import Swal from "sweetalert2";
import ModalAddress from "../../components/Modal/ModalAddress";
import { getContentData } from "../../store/redux/LoadContentReducer/content.action";
import * as yup from "yup";
import {
  getLocalStorage,
  LOCAL_STORAGE,
  setLocalStorage,
} from "../../utils/handleStorage";
import { Alert } from "react-bootstrap";
import Select, { components } from "react-select";
const { Column, HeaderCell, Cell } = Table;
import $ from "jquery";

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

const optionCity = [
  { value: 1, label: "Hồ Chí Minh" },
  { value: 2, label: "Hà Nội" },
];
const optionDistrict = [
  { value: 1, label: "Quận 1" },
  { value: 2, label: "Quận 2" },
];
const optionWard = [
  { value: 1, label: "Phường 1" },
  { value: 2, label: "Phường 2" },
];
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
const PHONE_REGEX = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
const schema = yup.object().shape({
  name: yup.string().required("Vui lòng điền họ tên"),
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
function Cart(props) {
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
  const onSubmit = (data) => {
    console.log(data);
  };
  const [step, setStep] = React.useState(2);
  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };
  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);
  const router = useRouter();
  const cart = getLocalStorage(LOCAL_STORAGE.CART);
  const ship = 15000;
  const dispatch = useDispatch();
  const { contents } = useSelector((state) => state.ContentReducer);
  useEffect(() => {
    dispatch(getContentData());
  }, [dispatch]);
  const sectiontitle = contents.filter(
    (item) => item.category === "63bc4d8b39d2a23b06d92f3d"
  );
  const initialValue = 0;
  const total = cart.reduce(
    (accumulator, current) => accumulator + current.gia_ban_le * current.qty,
    initialValue
  );
  $("input:checkbox").on("click", function () {
    var $box = $(this);
    if ($box.is(":checked")) {
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });
  const [qty, setQty] = useState(1);
  const decreasement = () => {
    setQty(qty - 1);
    if (qty <= 1) {
      Swal.fire({
        title: "Lỗi",
        text: "Số lượng phải lớn hơn 0",
        icon: "error",
        showCancelButton: false,
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          setQty(1);
        }
      });
    }
  };
  const handleRemove = (item) => {
    const data = cart.filter((x) => x._id !== item._id);
    Swal.fire({
      title: "",
      html: "<p>Bạn có chắc chắn xóa sản phẩm này không?</p>",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "OK",
      focusConfirm: false,
      confirmButtonText: "<span>Đồng ý</span>",
      cancelButtonText: "<span>Hủy bỏ</span>",
    }).then((rs) => {
      if (rs.isConfirmed) {
        setLocalStorage(LOCAL_STORAGE.CART, data);
      }
    });
  };
  const handleDecreaseQty = (item) => {
    const cart = getLocalStorage(LOCAL_STORAGE.CART);
    const findIndex = cart.findIndex((x) => x._id === item._id);
    cart[findIndex].qty = cart[findIndex].qty - 1;
    setLocalStorage(LOCAL_STORAGE.CART, cart);
    if (item.qty <= 0) {
      alert("lỗi");
      cart[findIndex].qty = 1;
    }
  };
  const handleIncreaseQty = (item) => {
    const cart = getLocalStorage(LOCAL_STORAGE.CART);
    const findIndex = cart.findIndex((x) => x._id === item._id);
    cart[findIndex].qty = cart[findIndex].qty + 1;
    setLocalStorage(LOCAL_STORAGE.CART, cart);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div className="container" id="cart-page">
        <div className="heading">
          <h2>{sectiontitle[0]?.title}</h2>
        </div>
        {cart && cart.length > 0 ? (
          <>
            <div className="process-step col-10">
              <Steps current={step}>
                <Steps.Item title="Giỏ hàng" />
                <Steps.Item title="Phương thức thanh toán" />
                <Steps.Item title="Đặt thành công" />
              </Steps>
            </div>
            {step === 0 && (
              <>
                <Table
                  height={420}
                  data={cart}
                  bordered
                  cellBordered
                  onSortColumn={(sortColumn, sortType) => {
                    console.log(sortColumn, sortType);
                  }}
                  rowHeight={120}
                >
                  <Column flexGrow={2}>
                    <HeaderCell>
                      <span className="h-100 header">Sản Phẩm</span>
                    </HeaderCell>
                    <Cell>
                      {(rowData) => (
                        <div className="d-flex align-items-center box-name">
                          <Image
                            alt="Image"
                            src="/images/Home/Shop/shop1.png"
                            width={80}
                            height={80}
                            objectFit="cover"
                          ></Image>
                          <h5 className="data">{rowData.ten_vt}</h5>
                        </div>
                      )}
                    </Cell>
                  </Column>
                  <Column flexGrow={1}>
                    <HeaderCell>
                      <span className="h-100 header">Giá</span>
                    </HeaderCell>
                    <Cell>
                      {(rowData) => (
                        <span className="h-100 d-flex align-items-center data">
                          {rowData.gia_ban_le.toLocaleString("vi-VI")} VND
                        </span>
                      )}
                    </Cell>
                  </Column>
                  <Column flexGrow={1}>
                    <HeaderCell>
                      <span className="h-100 header">Số lượng</span>
                    </HeaderCell>
                    <Cell>
                      {(rowData) => (
                        <div className="d-flex align-items-center h-100">
                          <div className="quantity">
                            <span className="h-100 d-flex align-items-center data">
                              {rowData.qty}
                            </span>
                            <i
                              className="fa-light fa-chevron-up"
                              onClick={() => handleIncreaseQty(rowData)}
                            ></i>
                            <i
                              onClick={() => handleDecreaseQty(rowData)}
                              className="fa-light fa-chevron-down"
                            ></i>
                          </div>
                        </div>
                      )}
                    </Cell>
                  </Column>
                  <Column flexGrow={1}>
                    <HeaderCell>
                      <span className="h-100 header">Tổng giá</span>
                    </HeaderCell>
                    <Cell>
                      {(rowData) => (
                        <span className="h-100 d-flex align-items-center data">
                          {(rowData.gia_ban_le * rowData.qty).toLocaleString(
                            "vi-VI"
                          )}{" "}
                          VND
                        </span>
                      )}
                    </Cell>
                  </Column>
                  <Column flexGrow={1}>
                    <HeaderCell>
                      <span className="h-100 header">Xóa</span>
                    </HeaderCell>
                    <Cell>
                      {(rowData) => (
                        <span className="h-100 d-flex align-items-center data romove">
                          <i
                            onClick={() => handleRemove(rowData)}
                            className="fa-light fa-xmark"
                          ></i>
                        </span>
                      )}
                    </Cell>
                  </Column>
                </Table>
                <div className="tool-cart">
                  <div className="d-flex justify-content-end align-items-center">
                    <button onClick={() => router.push("/proshop")}>
                      Tiếp tục mua
                    </button>
                    <button>Cập nhật giỏi</button>
                  </div>
                </div>
                <div className="box-total d-flex justify-content-end">
                  <div className="col-6">
                    <h5 className="title">Tổng giỏ hàng</h5>
                    <div className="content">
                      <div className="item d-flex">
                        <div className="col-4 name">
                          <h3>Địa chỉ</h3>
                        </div>
                        <div className="col-8 detail">
                          <span className="add-address" onClick={handleOpen}>
                            Thêm địa chỉ
                          </span>
                        </div>
                      </div>
                      {open && (
                        <ModalAddress
                          reset={reset}
                          errors={errors}
                          handleSubmit={handleSubmit}
                          register={register}
                          onSubmit={onSubmit}
                          control={control}
                          handleClose={handleClose}
                          customStyles={customStyles}
                          options={options}
                          optionCity={optionCity}
                          optionDistrict={optionDistrict}
                          optionWard={optionWard}
                        />
                      )}
                      <div className="item d-flex">
                        <div className="col-4 name">
                          <h3>Tổng cộng</h3>
                        </div>
                        <div className="col-8 detail">
                          <h3>{total.toLocaleString("vi-VI")} VND</h3>
                        </div>
                      </div>
                    </div>
                    <div className="w-100 button">
                      <button className="w-100" onClick={onNext}>
                        Thanh toán
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
            {step === 1 && (
              <div className="d-flex step2">
                <div className="col-7 left">
                  <h5>Chi tiết mua hàng</h5>
                  <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Họ tên
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        {...register("name")}
                      />
                      {errors?.name && (
                        <Alert variant="danger">{errors?.name?.message}</Alert>
                      )}
                    </div>
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
                          {errors?.city?.message ||
                            errors?.city?.label?.message}
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
                            options={optionWard}
                            placeholder="Chọn phường"
                          />
                        )}
                      />
                      {errors?.ward && (
                        <Alert variant="danger">
                          {errors?.ward?.message ||
                            errors?.ward?.label?.message}
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
                        <Alert variant="danger">
                          {errors?.street?.message}
                        </Alert>
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
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Ghi chú
                      </label>
                      <textarea
                        type="text"
                        rows={8}
                        className="form-control"
                        {...register("note")}
                      />
                    </div>
                  </form>
                </div>
                <div className="col-5 right">
                  <h5>Đơn hàng của bạn</h5>
                  <div className="order">
                    <div className="item">
                      <h6>Bóng Golf x 1</h6>
                      <h6>720.000 VND</h6>
                    </div>
                    <div className="item">
                      <h6>Giao hàng đến</h6>
                      <h6>Quận 7, TPHCM</h6>
                    </div>
                    <div className="item">
                      <h6>Tổng giá</h6>
                      <h6>720.000 VND</h6>
                    </div>
                  </div>
                  <h5>Phương thức thanh toán</h5>
                  <div className="checkout">
                    <label className="item">
                      <input type="checkbox" name="checkout" id="" />
                      <span className="checkmark"></span>
                      <div className="content">
                        <h6>Thanh toán tiền mặt</h6>
                        <p>Thanh toán khi nhận hàng</p>
                      </div>
                    </label>
                    <label className="item">
                      <input type="checkbox" name="checkout" id="" />
                      <span className="checkmark"></span>
                      <div className="box-item">
                        <div className="content">
                          <h6>Ví điện tử</h6>
                          <p>Quét mã QR</p>
                        </div>
                        <div className="image">
                          <Image
                            alt="Image momo"
                            src="/images/Cart/momo.png"
                            width={36}
                            height={36}
                            objectFit="cover"
                          />
                          <Image
                            alt="Image momo"
                            src="/images/Cart/zalo.png"
                            width={36}
                            height={36}
                            objectFit="cover"
                          />
                          <Image
                            alt="Image momo"
                            src="/images/Cart/shopeepay.png"
                            width={36}
                            height={36}
                            objectFit="cover"
                          />
                        </div>
                      </div>
                    </label>
                    <label className="item">
                      <input type="checkbox" name="checkout" id="" />
                      <span className="checkmark"></span>
                      <div className="content">
                        <h6>Tài khoản ngân hàng</h6>
                        <p>Quét mã QR hoặc chuyển khoản đến tài khoản</p>
                      </div>
                    </label>
                    <div className="button" onClick={handleSubmit(onSubmit)}>
                      <button>Đặt hàng</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="step3">
                <h4>Đơn hàng của bạn đã được nhận. Cảm ơn bạn đã đặt hàng</h4>
                <div className="d-flex list-top">
                  <div className="col-6 d-flex left">
                    <div className="col-4 item">
                      <span className="title">Mã đơn hàng</span>
                      <p>20584</p>
                    </div>
                    <div className="col-4 item">
                      <span className="title">Ngày</span>
                      <p>11/01/2023</p>
                    </div>
                    <div className="col-4 item">
                      <span className="title">Tổng</span>
                      <p>720.000 VND</p>
                    </div>
                  </div>
                  <div className="col-6 right">
                    <span className="title">Phương thức thanh toán</span>
                    <p>Tiền mặt</p>
                  </div>
                </div>
                <h3>Chi tiết đơn hàng</h3>
                <div className="view-order">
                  <div className="item">
                    <h6>Bóng Golf x 1</h6>
                    <h6>720.000 VND</h6>
                  </div>
                  <div className="item">
                    <h6>Địa chỉ giao hàng</h6>
                    <h6>Quận 7, TPHCM</h6>
                  </div>
                  <div className="item">
                    <h6>Phương thức thanh toán</h6>
                    <h6>Tiền mặt</h6>
                  </div>
                  <div className="item">
                    <h6>Tổng giá</h6>
                    <h6>720.000 VND</h6>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="empty-cart d-flex flex-column align-items-center">
            <h4 className="empty-text">Giỏi hàng của bạn hiện đang trống</h4>
            <button onClick={() => router.push("/proshop")}>
              Trở về mua hàng
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Cart;
