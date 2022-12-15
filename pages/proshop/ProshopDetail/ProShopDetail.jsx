import Image from "next/image";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { ProShopCategory } from "../../../utils/DataDemo/ProShop/proShopPageData";
import { removeAccents } from "../../../utils/function";
import styles from "./ProShopDetail.module.scss";
import $ from "jquery";
import { Tab, Tabs } from "react-bootstrap";
import TabDescription from "./TabDescription/TabDescription";
const slideList = [
  {
    id: 1,
    image: "/images/Academy/AcademyDetail/proshop1.png",
  },
  {
    id: 2,
    image: "/images/Academy/AcademyDetail/proshop2.png",
  },
  {
    id: 2,
    image: "/images/Academy/AcademyDetail/proshop3.png",
  },
];

function ProShopDetail(props) {
  const [quantity, setQuantity] = useState(1);
  const [swiper, setSwiper] = React.useState(null);
  useEffect(() => {
    slideList.map((item, index) => {
      $(".swiper-pagination-bullet").each(function (indexC) {
        $(this).css({
          backgroundImage: indexC === index && `url(${slideList[index].image})`,
          width: 100,
          height: 100,
          borderRadius: 0,
          backgroundPosition: "center",
          backgroundSize: "contain",
          opacity: 1,
        });
      });
    });
  }, []);
  return (
    <div className={styles.proshop_detail}>
      <div className="d-flex">
        <div className={"col-6"}>
          <Swiper
            effect={"flip"}
            grabCursor={true}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
            onSwiper={(s) => {
              console.log("initialize swiper", s);
              setSwiper(s);
            }}
          >
            {slideList.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.image}>
                  <Image alt={"Image"} src={item.image} layout="fill" />
                </div>
              </SwiperSlide>
            ))}
            <button
              className={styles.btn_prev}
              onClick={() => swiper.slidePrev()}
            >
              <i className="fa-light fa-chevron-left"></i>
            </button>
            <button
              className={styles.btn_next}
              onClick={() => swiper.slideNext()}
            >
              <i className="fa-light fa-chevron-right"></i>
            </button>
          </Swiper>
        </div>
        <div className={"col-6" + " " + styles.info}>
          <div className={styles.top}>
            <h4>GOLF LOVE | PRO ICON GOLF BALLS</h4>
            <div className={styles.rating}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <span className={styles.category}>
              Category: <strong>Golf</strong>
            </span>
          </div>
          <div className={styles.tool}>
            <div className={styles.box_quantity}>
              <button>-</button>
              <span>{quantity}</span>
              <button>+</button>
            </div>
            <button className={styles.btn_cart}>Add to cart</button>
          </div>
        </div>
      </div>
      <div className={styles.Tabs} id="ProShopDetail">
        <Tabs
          defaultActiveKey="description"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="description" title="Description">
            <TabDescription />
          </Tab>
          <Tab eventKey="infomation" title="Information">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              provident doloribus sunt aliquid et, alias dicta beatae, laborum
              nam perspiciatis suscipit reprehenderit. Hic sapiente impedit ad?
              Ratione alias maiores odio?
            </p>
          </Tab>
          <Tab eventKey="feedback" title="Feedback">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quibusdam minus debitis culpa quos itaque laboriosam
              dignissimos nemo, suscipit nisi et cupiditate expedita eveniet
              ipsam nobis minima modi molestiae eaque.
            </p>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default ProShopDetail;
