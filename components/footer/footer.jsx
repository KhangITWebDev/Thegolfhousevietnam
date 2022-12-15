import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import styles from "./footer.module.scss";

function Footer(props) {
  return (
    <div className={styles.footer} id="footer">
      <div className="container">
        <div className={styles.logo_list}>
          <Swiper
            breakpoints={{
              1920: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 3,
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
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                alt="logo"
                src="/images/Logo/Logo11.png"
                width={200}
                height={136}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="logo"
                src="/images/Logo/Logo12.png"
                width={200}
                height={136}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="logo"
                src="/images/Logo/Logo13.png"
                width={200}
                height={136}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="logo"
                src="/images/Logo/Logo11.png"
                width={200}
                height={136}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          className={
            "d-flex justify-content-center flex-wrap" + " " + styles.menu_list
          }
        >
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Accessibility Statement</span>
          <span>Cookie Choices</span>
          <span>Tournament Tickets</span>
          <span>Careers</span>
          <span>Contact Us</span>
          <span>Sitemap</span>
          <span>Media</span>
        </div>
        <p
          className={styles.copy_right + " " + "d-flex justify-content-center"}
        >
          © 2022 PGA TOUR, Inc | All Rights Reserved
        </p>
        <p
          className={
            "d-flex justify-content-center text-center text-white" +
            " " +
            styles.footer_desc
          }
        >
          PGA TOUR, PGA TOUR Champions, and the Swinging Golfer design are
          registered trademarks. The Korn Ferry trademark is also a registered
          trademark, and is used in the Korn Ferry Tour logo with permission.
        </p>
        <div
          className={
            styles.social + " " + "d-flex flex-column align-items-center"
          }
        >
          <h5 className={styles.heading}>CONNECT WITH THE PGA TOUR ON</h5>
          <div className={styles.social_list}>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
