import { yupResolver } from "@hookform/resolvers/yup";
import $ from "jquery";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select, { components } from "react-select";
import { Loader, Steps, Table } from "rsuite";
import Swal from "sweetalert2";
import * as yup from "yup";
import ModalAddress from "../../components/Modal/ModalAddress";
import ModalAddressDeliver from "../../components/Modal/ModalAddressDeliver";
import {
  DelteProductInCart,
  getCartData,
  UdateProductInCart,
} from "../../store/redux/CartReducer/cart.action";
import { getContentData } from "../../store/redux/LoadContentReducer/content.action";
import { getProvinceData } from "../../store/redux/ProviceReducer/province.action";
import { convertDate, removeAccents } from "../../utils/function";
import {
  getLocalStorage,
  LOCAL_STORAGE,
  setLocalStorage,
} from "../../utils/handleStorage";
const { Column, HeaderCell, Cell } = Table;

const checkoutList = [
  {
    id: "check1",
    name: "Tiền mặt",
  },
  {
    id: "check2",
    name: "Ví điện tử",
  },
  {
    id: "check3",
    name: "Tài khoản ngân hàng",
  },
];
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
const schema2 = yup.object().shape({
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
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [loadingCheckout, setLoadingCheckout] = useState(false);
  const onSubmit = (data) => {
    setLoadingCheckout(true);
    if (!checkoutMethod) {
      setTimeout(() => {
        setLoadingCheckout(false);
        Swal.fire({
          text: "Vui lòng chọn phương thức thanh toán",
          icon: "error",
          showCancelButton: false,
          cancelButtonText: "Hủy Bỏ",
          confirmButtonText: "Đông ý",
        });
      }, 2000);
    } else {
      setTimeout(() => {
        setLoadingCheckout(false);
        Swal.fire({
          text: "Bạn có chắc chắc chắn đã nhập đúng thông tin đặt hàng",
          icon: "info",
          showCancelButton: true,
          cancelButtonText: "Hủy Bỏ",
          confirmButtonText: "Đông ý",
        }).then((result) => {
          if (result.isConfirmed) {
            onNext();
            console.log({ ...data, checkput: checkoutMethod });
          }
        });
      }, 2000);
    }
  };
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    watch: watch2,
    reset: reset2,
    control: control2,
    formState: { errors: errors2 },
  } = useForm({
    resolver: yupResolver(schema2),
  });
  const [defaultAddress, setDefaultAddress] = useState(false);
  const addressList = getLocalStorage(LOCAL_STORAGE.ADDRESS_LIST);
  const onSubmit2 = (data) => {
    const addressList = getLocalStorage(LOCAL_STORAGE.ADDRESS_LIST);
    if (addressList.length > 0) {
      Swal.fire({
        text: "Bạn có chắc chắn muốn thêm địa chỉ này",
        icon: "info",
        showCancelButton: true,
        cancelButtonText: "Hủy Bỏ",
        confirmButtonText: "Đông ý",
      }).then((result) => {
        if (result.isConfirmed) {
          addressList.unshift({
            ...data,
            default: defaultAddress,
          });
          setLocalStorage(LOCAL_STORAGE.ADDRESS_LIST, addressList);
          if (defaultAddress) {
            const newState = addressList.map((obj, indexD) => {
              if (indexD === 0) {
                return { ...obj, default: true };
              }
              return { ...obj, default: false };
            });
            setLocalStorage(LOCAL_STORAGE.ADDRESS_LIST, newState);
          }
        }
        Swal.fire({
          text: "Bạn đã thêm địa chỉ thành công",
          icon: "success",
          showCancelButton: false,
          confirmButtonText: "Đông ý",
        }).then((result) => {
          if (result.isConfirmed) {
            setOpen(false);
          }
        });
      });
    } else {
      Swal.fire({
        text: "Bạn có chắc chắn muốn thêm địa chỉ này",
        icon: "info",
        showCancelButton: true,
        cancelButtonText: "Hủy Bỏ",
        confirmButtonText: "Đông ý",
      }).then((result) => {
        result.isConfirmed &&
          setLocalStorage(LOCAL_STORAGE.ADDRESS_LIST, [
            { ...data, default: true },
          ]);
        Swal.fire({
          text: "Bạn đã thêm địa chỉ thành công",
          icon: "success",
          showCancelButton: false,
          confirmButtonText: "Đông ý",
        }).then((result) => {
          if (result.isConfirmed) {
            setOpen(false);
            setDefaultAddress(false);
          }
        });
      });
    }
  };
  const [step, setStep] = React.useState(0);
  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };
  const [findAddressDefault, setFindAddressDefault] = useState(
    addressList.findIndex((x) => x.default === true)
  );
  useEffect(() => {
    setFindAddressDefault(addressList.findIndex((x) => x.default === true));
  }, [addressList]);
  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.CartReducer.cartList);
  const { contents } = useSelector((state) => state.ContentReducer);
  useEffect(() => {
    dispatch(getCartData());
    dispatch(getProvinceData());
    dispatch(getContentData());
  }, []);
  const province = useSelector((state) => state.ProvinceReducer.province);
  const district = watch("city")
    ? province[
        province.findIndex((x) => x.code === Number(watch("city")?.value))
      ]?.districts
    : findAddressDefault >= 0
    ? province[
        province?.findIndex(
          (x) => x.code === Number(addressList[findAddressDefault]?.city?.value)
        )
      ]?.districts
    : [];
  const ward =
    watch("city") && watch("district")
      ? district
        ? district[
            district?.findIndex(
              (x) => x.code === Number(watch("district")?.value)
            )
          ]?.wards
        : []
      : findAddressDefault >= 0
      ? district
        ? district[
            district?.findIndex(
              (x) =>
                x.code ===
                Number(addressList[findAddressDefault]?.district?.value)
            )
          ]?.wards
        : []
      : [];
  const optionsCity = province.map((x) => {
    return {
      label: x.name,
      value: x.code,
    };
  });
  const optionsDistrict = district?.map((x) => {
    return {
      label: x.name,
      value: x.code,
    };
  });
  const optionsWards = ward?.map((x) => {
    return {
      label: x.name,
      value: x.code,
    };
  });
  const sectiontitle = contents.filter(
    (item) => item.category === "63bc4d8b39d2a23b06d92f3d"
  );
  const initialValue = 0;
  const total = cart.reduce(
    (accumulator, current) =>
      accumulator + current.gia_ban_le * current.sl_xuat,
    initialValue
  );
  useEffect(() => {
    setValue("city", addressList[findAddressDefault]?.city);
    setValue("district", addressList[findAddressDefault]?.district);
    setValue("ward", addressList[findAddressDefault]?.ward);
    setValue("no", addressList[findAddressDefault]?.no);
    setValue("street", addressList[findAddressDefault]?.street);
    setValue("phone", addressList[findAddressDefault]?.phone);
    setValue("email", addressList[findAddressDefault]?.email);
  }, []);
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
  const [loadingRemove, setLoadingRemove] = useState(-1);
  const [loadingQty, setLoadingQty] = useState(-1);
  const handleRemove = (item) => {
    Swal.fire({
      title: "",
      html: `<p>Bạn có chắc chắn xóa sản phẩm ${item.ten_vt} ra khỏi giỏi hàng ?</p>`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "OK",
      allowOutsideClick: false,
      focusConfirm: false,
      confirmButtonText: "<span>Đồng ý</span>",
      cancelButtonText: "<span>Hủy bỏ</span>",
    }).then((rs) => {
      if (rs.isConfirmed) {
        setLoadingRemove(item._id);
        setTimeout(() => {
          dispatch(DelteProductInCart(item._id));
          setTimeout(() => {
            setTimeout(() => {
              dispatch(getCartData());
            }, 500);
            setLoadingQty(-1);
            Swal.fire({
              html: `<p>Bạn đã xóa ${item.sl_xuat} sản phẩm ${item.ten_vt} thành công !</p>`,
              icon: "success",
              showCancelButton: false,
              confirmButtonText: "<span>Đồng ý</span>",
            });
          }, 1500);
        }, 2000);
      }
    });
  };
  const handleDecreaseQty = (item) => {
    Swal.fire({
      title: "",
      html: `<p>Bạn có chắc chắn giảm số lượng sản phẩm ${item.ten_vt}</p>`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "OK",
      focusConfirm: false,
      confirmButtonText: "<span>Đồng ý</span>",
      cancelButtonText: "<span>Hủy bỏ</span>",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoadingQty(item._id);
        setTimeout(() => {
          dispatch(
            UdateProductInCart(item._id, { item, sl_xuat: item.sl_xuat - 1 })
          );
          if (item.sl_xuat <= 1) {
            Swal.fire({
              title: "Lỗi",
              text: "Số lượng phải lớn hơn 0",
              icon: "error",
              showCancelButton: false,
              confirmButtonText: "Đồng ý",
              allowOutsideClick: false,
            }).then((res) => {
              if (res.isConfirmed) {
                dispatch(UdateProductInCart(item._id, { item, sl_xuat: 1 }));
                setTimeout(() => {
                  setTimeout(() => {
                    dispatch(getCartData());
                  }, 500);
                  setLoadingQty(-1);
                }, 1000);
              }
            });
          } else {
            setTimeout(() => {
              dispatch(getCartData());
            }, 1000);
            setTimeout(() => {
              setLoadingQty(-1);
            }, 1500);
          }
        }, 3000);
      }
    });
  };
  const handleIncreaseQty = (item, index) => {
    Swal.fire({
      title: "",
      html: `<p>Bạn có chắc chắn tăng số lượng sản phẩm ${item.ten_vt}</p>`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "OK",
      focusConfirm: false,
      confirmButtonText: "<span>Đồng ý</span>",
      cancelButtonText: "<span>Hủy bỏ</span>",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoadingQty(item._id);
        if (result.isConfirmed) {
          setTimeout(() => {
            dispatch(
              UdateProductInCart(item._id, {
                ...item,
                sl_xuat: item.sl_xuat + 1,
              })
            );
            setTimeout(() => {
              dispatch(getCartData());
            }, 1000);
            setTimeout(() => {
              setLoadingQty(-1);
            }, 1500);
          }, 3000);
        }
      }
    });
  };
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const [checkoutMethod, setCheckoutMethod] = useState();
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);
  const handleChangeCheckout = (e) => {
    setCheckoutMethod(e.target.value);
  };
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
                    // console.log(sortColumn, sortType);
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
                          <div className="col-3">
                            <Image
                              alt="Image"
                              src="/images/Home/Shop/shop1.png"
                              width={80}
                              height={80}
                              objectFit="cover"
                              onClick={() =>
                                router.push(
                                  `/proshop/${removeAccents(rowData.ten_vt)}`
                                )
                              }
                            ></Image>
                          </div>
                          <div className="col-9">
                            <h5
                              className="data"
                              onClick={() =>
                                router.push(
                                  `/proshop/${removeAccents(rowData.ten_vt)}`
                                )
                              }
                            >
                              {rowData.ten_vt}
                            </h5>
                          </div>
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
                          {rowData?.gia_ban_le} VND
                        </span>
                      )}
                    </Cell>
                  </Column>
                  <Column flexGrow={1}>
                    <HeaderCell>
                      <span className="h-100 header">Số lượng</span>
                    </HeaderCell>
                    <Cell>
                      {(rowData, index) => (
                        <div className="d-flex align-items-center h-100">
                          <div className="quantity d-flex justify-content-center align-items-center">
                            {loadingQty === rowData._id ? (
                              <Loader />
                            ) : (
                              <>
                                <span
                                  style={{
                                    paddingRight: 15,
                                  }}
                                  className="h-100 d-flex align-items-center data"
                                >
                                  {rowData.sl_xuat}
                                </span>
                                <i
                                  className="fa-light fa-chevron-up"
                                  onClick={() => handleIncreaseQty(rowData)}
                                ></i>
                                <i
                                  onClick={() =>
                                    handleDecreaseQty(rowData, index)
                                  }
                                  className="fa-light fa-chevron-down"
                                ></i>
                              </>
                            )}
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
                          {loadingRemove === rowData._id ? (
                            <Loader />
                          ) : (
                            <i
                              onClick={() => handleRemove(rowData)}
                              className="fa-light fa-xmark"
                            ></i>
                          )}
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
                    <button onClick={() => dispatch(getCartData())}>
                      Cập nhật giỏi
                    </button>
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
                          <div className="d-flex flex-column">
                            {findAddressDefault >= 0 && (
                              <div className="d-flex align-items-center">
                                <div className="col-9">
                                  <h4>
                                    {addressList[findAddressDefault]?.no}{" "}
                                    {addressList[findAddressDefault]?.street},{" "}
                                    {
                                      addressList[findAddressDefault]?.district
                                        .label
                                    }
                                  </h4>
                                </div>
                                <button
                                  className="change-address col-3"
                                  onClick={handleOpen2}
                                >
                                  Thay đổi
                                </button>
                              </div>
                            )}
                            <span className="add-address" onClick={handleOpen}>
                              Thêm địa chỉ
                            </span>
                            {open2 && (
                              <ModalAddressDeliver
                                addressList={addressList}
                                defaultValue={findAddressDefault}
                                handleClose={handleClose2}
                                setFindAddressDefault={setFindAddressDefault}
                                customStyles={customStyles}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      {open && (
                        <ModalAddress
                          reset={reset2}
                          errors={errors2}
                          handleSubmit={handleSubmit2}
                          register={register2}
                          onSubmit={onSubmit2}
                          defaultAddress={defaultAddress}
                          setDefaultAddress={setDefaultAddress}
                          control={control2}
                          handleClose={handleClose}
                          customStyles={customStyles}
                          province={province}
                          district={district}
                          ward={ward}
                          watch={watch2}
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
                      <button
                        className="w-100"
                        onClick={() => {
                          if (findAddressDefault < 0) {
                            Swal.fire({
                              text: "Bạn chưa chọn địa chỉ giao hàng?",
                              icon: "error",
                              showCancelButton: false,
                              cancelButtonText: "Hủy Bỏ",
                              confirmButtonText: "Đông ý",
                            });
                          } else {
                            onNext();
                          }
                        }}
                      >
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
                  <form action="">
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
                            options={optionsCity}
                            // onChange={({ value }) => setCode(Number(value))}
                            defaultValue={
                              optionsCity[
                                optionsCity.findIndex(
                                  (x) =>
                                    x.value ===
                                    Number(
                                      addressList[findAddressDefault]?.city
                                        ?.value
                                    )
                                )
                              ]
                            }
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
                            options={optionsDistrict}
                            defaultValue={
                              optionsDistrict[
                                optionsDistrict?.findIndex(
                                  (x) =>
                                    x.value ===
                                    Number(
                                      addressList[findAddressDefault]?.district
                                        ?.value
                                    )
                                )
                              ]
                            }
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
                            options={optionsWards}
                            defaultValue={
                              optionsWards
                                ? optionsWards[
                                    optionsWards?.findIndex(
                                      (x) =>
                                        x.value ===
                                        Number(
                                          addressList[findAddressDefault]?.ward
                                            ?.value
                                        )
                                    )
                                  ]
                                : ""
                            }
                            placeholder="Chọn phường/xã"
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
                        placeholder="Tên đường"
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
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Ghi chú
                      </label>
                      <textarea
                        type="text"
                        rows={8}
                        className="form-control"
                        placeholder="Ghi chú"
                        {...register("note")}
                      />
                    </div>
                  </form>
                </div>
                <div className="col-5 right">
                  <h5>Đơn hàng của bạn</h5>
                  <div className="order">
                    <div
                      className="order_list d-flex flex-column"
                      style={{
                        height: cart.length === 1 ? 50 : 110,
                      }}
                    >
                      {cart.map((item, index) => (
                        <div
                          className="order_item d-flex justify-content-between"
                          key={index}
                        >
                          <div className="col-7">
                            <h6>
                              {item.ten_vt} x {item.qty}
                            </h6>
                          </div>
                          <div className="col-5">
                            <h6
                              style={{
                                textAlign: "right",
                              }}
                            >
                              {(item.gia_ban_le * item.qty).toLocaleString(
                                "vi-VI"
                              )}{" "}
                              VND
                            </h6>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="item">
                      <h6>Giao hàng đến</h6>
                      <h6>
                        {addressList[
                          findAddressDefault
                        ]?.district.label.replace("Thành phố", "TP")}
                        ,{" "}
                        {addressList[findAddressDefault]?.city.label.replace(
                          "Thành phố",
                          "TP"
                        )}
                      </h6>
                    </div>
                    <div className="item">
                      <h6>Tổng giá</h6>
                      <h6>{total.toLocaleString("vi-VI")} VND</h6>
                    </div>
                  </div>
                  <h5>Phương thức thanh toán</h5>
                  <div className="checkout">
                    <label className="item">
                      <input
                        type="checkbox"
                        name="checkout"
                        id=""
                        value="check1"
                        onClick={handleChangeCheckout}
                      />
                      <span className="checkmark"></span>
                      <div className="content">
                        <h6>Thanh toán tiền mặt</h6>
                        <p>Thanh toán khi nhận hàng</p>
                      </div>
                    </label>
                    <label className="item">
                      <input
                        type="checkbox"
                        name="checkout"
                        id=""
                        value="check2"
                        onClick={handleChangeCheckout}
                      />
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
                      <input
                        type="checkbox"
                        name="checkout"
                        id=""
                        value="check3"
                        onClick={handleChangeCheckout}
                      />
                      <span className="checkmark"></span>
                      <div className="content">
                        <h6>Tài khoản ngân hàng</h6>
                        <p>Quét mã QR hoặc chuyển khoản đến tài khoản</p>
                      </div>
                    </label>
                    <div className="button" onClick={handleSubmit(onSubmit)}>
                      <button>
                        {loadingCheckout ? (
                          <Loader content="Đang kiểm tra" />
                        ) : (
                          "Đặt hàng"
                        )}
                      </button>
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
                      <p>{convertDate(new Date()).getDateMonthYear1}</p>
                    </div>
                    <div className="col-4 item">
                      <span className="title">Tổng</span>
                      <p>{total.toLocaleString("VI-vi")} VND</p>
                    </div>
                  </div>
                  <div className="col-6 right">
                    <span className="title">Phương thức thanh toán</span>
                    <p>
                      {checkoutList.find((x) => x.id === checkoutMethod)?.name}
                    </p>
                  </div>
                </div>
                <h3>Chi tiết đơn hàng</h3>
                <div className="view-order">
                  <div
                    className="list d-flex flex-column"
                    style={{
                      height: cart.length === 1 ? 50 : 95,
                    }}
                  >
                    {cart.map((item, index) => (
                      <div
                        className="list_item d-flex justify-content-between"
                        key={index}
                      >
                        <div className="col-7">
                          <h6>
                            {item.ten_vt} x {item.qty}
                          </h6>
                        </div>
                        <div className="col-5">
                          <h6
                            style={{
                              textAlign: "right",
                            }}
                          >
                            {(item.gia_ban_le * item.qty).toLocaleString(
                              "vi-VI"
                            )}{" "}
                            VND
                          </h6>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="item">
                    <h6>Địa chỉ giao hàng</h6>
                    <h6>
                      {addressList[findAddressDefault]?.district.label.replace(
                        "Thành phố",
                        "TP"
                      )}
                      ,{" "}
                      {addressList[findAddressDefault]?.city.label.replace(
                        "Thành phố",
                        "TP"
                      )}
                    </h6>
                  </div>
                  <div className="item">
                    <h6>Phương thức thanh toán</h6>
                    <h6>
                      {" "}
                      {checkoutList.find((x) => x.id === checkoutMethod)?.name}
                    </h6>
                  </div>
                  <div className="item">
                    <h6>Tổng giá</h6>
                    <h6>{total.toLocaleString("VI-vi")} VND</h6>
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
