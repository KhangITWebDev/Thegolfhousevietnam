import $ from "jquery";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
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
    if (cart) {
      const find = cart.findIndex((x) => x._id === item._id);
      if (find < 0) {
        cart.push({ ...item, qty: qty });
        setLocalStorage(LOCAL_STORAGE.CART, cart);
      } else {
        cart[find].qty = cart[find].qty + qty;
        setLocalStorage(LOCAL_STORAGE.CART, cart);
      }
    } else {
      setLocalStorage(LOCAL_STORAGE.CART, { ...item, qty: qty });
    }
  };
  return (
    <div className={styles.detail_page}>
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
                    <div className="image">
                      <Image
                        alt="Image"
                        src="/images/Logo/Logo2.png"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="col-12 col-lg-6 content">
            {/* <span className="sale">-10%</span> */}
            <h2>{proshopDetail?.ten_vt}</h2>
            <div className="d-flex flex-wrap justify-content-lg-between align-items-center justify-content-start">
              <p className="price">
                {/* <span>800.000</span> 720.000 VND */}
                {proshopDetail?.gia_ban_le.toLocaleString("vi-Vi")} VND
              </p>
              {/* <div className="rate">
                {Array(5)
                  .fill()
                  .map((i) => (
                    <i className="fa-solid fa-star" key={i}></i>
                  ))}
              </div> */}
            </div>
            <p>
              Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit
              aut fugit, sed quia consequuntur. Lorem ipsum dolor. Aquia sit
              amet, elitr, sed diam nonum eirmod tempor invidunt labore et
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
                <button onClick={() => handleAddToCart(proshopDetail)}>
                  Thêm vào giỏ hàng
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
                  laborum nam perspiciatis suscipit reprehenderit. Hic sapiente
                  impedit ad? Ratione alias maiores odio?
                </p>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
