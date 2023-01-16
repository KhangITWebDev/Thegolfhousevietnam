import $ from "jquery";
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
import {
  getLocalStorage,
  LOCAL_STORAGE,
  setLocalStorage,
} from "../../../utils/handleStorage";
import styles from "./detail.module.scss";
import TabDescription from "./TabDescription/TabDescription";
function Detail(props) {
  const router = useRouter();
  const proshopDetail = useSelector((state) =>
    state.ProshopReducer.proshopList.find(
      (x) => removeAccents(x.ten_vt || "") === router.query.name
    )
  );
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
  };
  useEffect(() => {
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
            "z-index": "",
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
  }, []);

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
