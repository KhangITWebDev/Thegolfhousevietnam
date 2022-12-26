import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { NewsList } from "../../../utils/DataDemo/Home/dataHome";
import { NewsEventsData } from "../../../utils/DataDemo/News-Events/NewsEventsData";
import { removeAccents } from "../../../utils/function";
import styles from "./detail.module.scss";

function Detail(props) {
  const router = useRouter();
  return (
    <div className={styles.detail_page} id="proshop-detail">
      <div className="container">
        <div className="col-6">
          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image alt="Image" src="/images/Proshop/ps1.png" layout="fill" />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="Image" src="/images/Proshop/ps1.png" layout="fill" />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="Image" src="/images/Proshop/ps1.png" layout="fill" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-6">
          <span>-10%</span>
          <h2>Bóng Golf</h2>
          <div>
            <p className={styles.price}>
              <span>800.000</span> 720.000 VND
            </p>
            <div>
              {Array(5)
                .fill()
                .map((i) => (
                  <i className="fa-solid fa-star" key={i}></i>
                ))}
            </div>
          </div>
        </div>
        <p>
          Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut
          fugit, sed quia consequuntur. Lorem ipsum dolor. Aquia sit amet,
          elitr, sed diam nonum eirmod tempor invidunt labore et dolore.
        </p>
        <div>
          <input type="number" />
          <div className="button">
            <button>Đăng ký</button>
          </div>
          <i className="fa-light fa-heart"></i>
        </div>
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
  );
}

export default Detail;
