import $ from "jquery";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "rsuite";
import Swal from "sweetalert2";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getProshopData } from "../../../store/redux/ProshopReducer/proshop.action";
import { removeAccents } from "../../../utils/function";
import * as yup from "yup";
import {
  getLocalStorage,
  LOCAL_STORAGE,
  setLocalStorage,
} from "../../../utils/handleStorage";
import styles from "./detail.module.scss";
import TabDescription from "./TabDescription/TabDescription";
import SignIn from "../../../components/Modal/SignIn";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import loginClientAxios from "../../../clientAxios/loginClientAxios";
const schema2 = yup.object().shape({
  // email: yup
  //   .string()
  //   .email("Email không hợp lệ")
  //   .required("vui lòng nhập email"),
  phone: yup.string().required("Vui lòng nhập số điện thoại"),
  password: yup.string().required("Mật khẩu là trường bắt buộc"),
});
function Detail(props) {
  const router = useRouter();
  const proshopDetail = useSelector((state) =>
    state.ProshopReducer.proshopList.find(
      (x) => removeAccents(x.ten_vt || "") === router.query.name
    )
  );
  console.log(proshopDetail);
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    watch: watch2,
    reset: reset2,
    formState: { errors: errors2 },
  } = useForm({
    resolver: yupResolver(schema2),
  });
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => setOpen2(false);
  const [loading, setLoading] = useState(false);
  const token = Cookies.get("access_token");
  const onSubmit2 = async (data) => {
    setLoading(true);
    const resApi = await loginClientAxios.post("/user/login", {
      username: data.phone,
      password: data.password,
    });
    setTimeout(() => {
      if (resApi?.result?.message?.length > 0) {
        Swal.fire({
          text: `${resApi.result.message}`,
          icon: "error",
          showCancelButton: false,
          confirmButtonText: "OK",
        });
        setLoading(false);
      } else if (resApi?.result) {
        setLoading(false);
        Cookies.set("access_token", resApi?.result?.access_token);
        Cookies.set("trainee_id", resApi?.result?.id);
        setOpen2(false);
      }
    }, 2000);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProshopData());
  }, [dispatch]);
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
  useEffect(() => {
    $("#proshop-detail .swiper-pagination-bullet").each(function (indexC) {
      $(this).css({
        backgroundImage: `url(/images/Logo/Logo12.png)`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        opacity: 1,
      });
    });
  }, []);
  const handleAddToCart = (item) => {
    if (token && token.length > 0) {
      const cart = getLocalStorage(LOCAL_STORAGE.CART);
      if (cart.length > 0) {
        const find = cart.findIndex((x) => x._id === item._id);
        if (find < 0) {
          cart.push({ ...item, qty: qty });
          setLocalStorage(LOCAL_STORAGE.CART, cart);
        } else {
          cart[find].qty = cart[find].qty + qty;
          setLocalStorage(LOCAL_STORAGE.CART, cart);
        }
      } else {
        setLocalStorage(LOCAL_STORAGE.CART, [{ ...item, qty: qty }]);
      }
    } else {
      handleOpen2();
    }
  };
  useEffect(() => {
    if (token && token.length > 0) {
      $("#add-cart").on("click", function () {
        var cart = $(".cart");
        var imgtodrag = $("#image-proshop-detail").eq(0);
        console.log($("#image-proshop-detail").eq(0));
        if (imgtodrag) {
          var imgclone = imgtodrag
            .clone()
            .offset({
              top: imgtodrag.offset().top,
              left: imgtodrag.offset().left,
            })
            .css({
              opacity: "0.5",
              position: "absolute",
              height: "150px",
              width: "150px",
              "z-index": "4000",
            })
            .appendTo($("body"))
            .animate(
              {
                top: cart.offset().top + 10,
                left: cart.offset().left + 10,
                width: 75,
                height: 75,
              },
              1000,
              "easeInOutExpo"
            );
          setTimeout(function () {
            cart.effect(
              "shake",
              {
                times: 2,
              },
              200
            );
          }, 1500);
          imgclone.animate(
            {
              width: 0,
              height: 0,
            },
            function () {
              $(this).detach();
            }
          );
        }
      });
    }
  }, [token]);

  return (
    <div className={styles.detail_page} id="detail-page">
      {!proshopDetail ? (
        <div className="container">
          <Loader
            size="md"
            style={{
              marginBottom: 40,
            }}
            content="Đang tải dữ liệu..."
          />
        </div>
      ) : (
        <div className="container">
          <div
            className="d-flex flex-wrap justify-content-start top"
            id="proshop-detail"
          >
            <div className="col-12 col-lg-6 slide">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {Array(3)
                  .fill()
                  .map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="image" id="image-proshop-detail">
                        <Image
                          alt="Image"
                          loader={({ src }) =>
                            `https://thegolfhousevietnam.com/${src}`
                          }
                          src="/images/Logo/logo2.png"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
            <div className="col-12 col-lg-6 content">
              <h2>{proshopDetail?.ten_vt}</h2>
              <div className="d-flex flex-wrap justify-content-lg-between align-items-center justify-content-start">
                <p className="price">
                  {proshopDetail?.gia_ban_le.toLocaleString("vi-Vi")} VND
                </p>
              </div>
              <p>
                Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit
                odit aut fugit, sed quia consequuntur. Lorem ipsum dolor. Aquia
                sit amet, elitr, sed diam nonum eirmod tempor invidunt labore et
                dolore.
              </p>
              <div className="d-flex tool">
                <div className="quantity d-flex align-items-center">
                  <span>{qty}</span>
                  <i
                    className="fa-light fa-chevron-up"
                    onClick={() => setQty(qty + 1)}
                  ></i>
                  <i
                    className="fa-light fa-chevron-down"
                    onClick={decreasement}
                  ></i>
                </div>
                <div className="button">
                  <button
                    onClick={() => handleAddToCart(proshopDetail)}
                    id="add-cart"
                  >
                    Thêm vào giỏ hàng
                    <span className="cart-item"></span>
                  </button>
                </div>
                {open2 && (
                  <SignIn
                    errors={errors2}
                    register={register2}
                    onSubmit={onSubmit2}
                    handleSubmit={handleSubmit2}
                    handleClose2={handleClose2}
                    loading={loading}
                    reset={reset2}
                  />
                )}
                <i className="fa-light fa-heart"></i>
              </div>
              <div className="bonus">
                <p>
                  <strong>Danh mục:</strong> {proshopDetail?.ten_nvt}
                </p>
                <p>
                  <strong>Thẻ:</strong> Giảm giá, Mới
                </p>
                <p>
                  <strong>Mã sản phẩm:</strong> {proshopDetail?.ma_vt}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="Tabs" id="proshop-detail-tabs">
              <Tabs
                defaultActiveKey="desc"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="desc" title="Mô tả">
                  <TabDescription proshopDetail={proshopDetail} />
                </Tab>
                <Tab eventKey="rate" title="Đánh giá (1)">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    provident doloribus sunt aliquid et, alias dicta beatae,
                    laborum nam perspiciatis suscipit reprehenderit. Hic
                    sapiente impedit ad? Ratione alias maiores odio?
                  </p>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
