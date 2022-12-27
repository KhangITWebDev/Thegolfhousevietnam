import Image from "next/image";
import React from "react";
import { Progress, Slider } from "rsuite";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./detail.module.scss";

function Detail(props) {
  const theory = 80;
  const practice = 90;
  const creator = 85;
  const slideLogo = [
    "/images/Home/Donors/donor1.png",
    "/images/Home/Donors/donor2.png",
    "/images/Home/Donors/donor3.png",
    "/images/Home/Donors/donor4.png",
    "/images/Home/Donors/donor5.png",
    "/images/Home/Donors/donor2.png",
  ];
  return (
    <div className={styles.detail_page} id="trainer-detail">
      <div className="container">
        <div className="heading">
          <h2 className={styles.title_page}>Lewis Dawn</h2>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn-down">
            <i className="fa-regular fa-chevron-down"></i>
          </button>
        </div>
        <div className={styles.content}>
          <h5 className={styles.top}>Trainer</h5>
          <div className="d-flex align-items-center">
            <div className={"col-6" + " " + styles.left}>
              <div className={styles.image}>
                <Image
                  alt="Iamge Detail"
                  src="/images/Trainer/trainerdetail.png"
                  layout="fill"
                />
              </div>
              <div className={styles.social + " " + "d-flex"}>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-dribbble"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div className={"col-6" + " " + styles.right}>
              <div className={styles.info}>
                <h5>Lý thuyết</h5>
                <span>{theory}%</span>
                <Progress.Line
                  percent={theory}
                  status="success"
                  showInfo={false}
                />
              </div>
              <div className={styles.info}>
                <h5>Thực hành</h5>
                <span>{practice}%</span>
                <Progress.Line
                  percent={practice}
                  status="success"
                  showInfo={false}
                />
              </div>
              <div className={styles.info}>
                <h5>Lý thuyết</h5>
                <span>{creator}%</span>
                <Progress.Line
                  percent={creator}
                  status="success"
                  showInfo={false}
                />
              </div>
              <div className={styles.desc}>
                <p>
                  <strong>L</strong>orem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.donar} id="donar">
            <div className="">
              <Swiper
                breakpoints={{
                  1920: {
                    slidesPerView: 5,
                  },
                  1440: {
                    slidesPerView: 5,
                  },
                  1280: {
                    slidesPerView: 5,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                  767: {
                    slidesPerView: 2,
                  },
                  480: {
                    slidesPerView: 1,
                  },
                }}
                // slidesPerView={5}
                spaceBetween={30}
                // pagination={{
                //   clickable: false,
                // }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {slideLogo.map((item) => (
                  <SwiperSlide key={item}>
                    <Image alt="item 1" src={item} width={120} height={120} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
