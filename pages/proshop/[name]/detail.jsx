import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { NewsList } from "../../../utils/DataDemo/Home/dataHome";
import { NewsEventsData } from "../../../utils/DataDemo/News-Events/NewsEventsData";
import { removeAccents } from "../../../utils/function";
import $ from "jquery";
import styles from "./detail.module.scss";
import TabDescription from "./TabDescription/TabDescription";

function Detail(props) {
  const router = useRouter();
  useEffect(() => {
    $("#proshop-detail .swiper-pagination-bullet").each(function (indexC) {
      $(this).css({
        backgroundImage: `url(/images/Proshop/ps1.png)`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        opacity: 1,
      });
    });
  }, []);
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
              <SwiperSlide>
                <div className="image">
                  <Image
                    alt="Image"
                    src="/images/Proshop/ps1.png"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image">
                  <Image
                    alt="Image"
                    src="/images/Proshop/ps1.png"
                    layout="fill"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="image">
                  <Image
                    alt="Image"
                    src="/images/Proshop/ps1.png"
                    layout="fill"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-12 col-lg-6 content">
            <span className="sale">-10%</span>
            <h2>Bóng Golf</h2>
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <p className="price">
                <span>800.000</span> 720.000 VND
              </p>
              <div className="rate">
                {Array(5)
                  .fill()
                  .map((i) => (
                    <i className="fa-solid fa-star" key={i}></i>
                  ))}
              </div>
            </div>
            <p>
              Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit
              aut fugit, sed quia consequuntur. Lorem ipsum dolor. Aquia sit
              amet, elitr, sed diam nonum eirmod tempor invidunt labore et
              dolore.
            </p>
            <div className="d-flex tool">
              <div className="quantity d-flex align-items-center">
                <span>1</span>
                <i className="fa-light fa-chevron-up"></i>
                <i className="fa-light fa-chevron-down"></i>
              </div>
              <div className="button">
                <button>Thêm vào giỏ hàng</button>
              </div>
              <i className="fa-light fa-heart"></i>
            </div>
            <div className="bonus">
              <p>
                <strong>Danh mục:</strong> Bóng golf
              </p>
              <p>
                <strong>Thẻ:</strong> Giảm giá, Mới
              </p>
              <p>
                <strong>Mã sản phẩm:</strong> 2381
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
                <TabDescription />
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
