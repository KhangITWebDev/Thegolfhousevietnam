import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import styles from "./footer.module.scss";
import { useRouter } from "next/router";

function Footer(props) {
  const router = useRouter();
  return (
    <div className={styles.footer} id="footer">
      <div className={styles.image}>
        <Image
          alt="Background"
          src="/images/Footer/bg.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.wrap_content}>
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className={styles.logo} onClick={() => router.push("/")}>
              <Image
                alt="logo"
                src="/images/Logo/logo2.png"
                width={247}
                height={206}
              />
            </div>
          </div>
          <div className="d-flex flex-wrap align-items-end">
            <div className="col-12 ft1 col-lg-4">
              <div
                className={styles.info + " " + "d-flex flex-wrap flex-column"}
              >
                <div className={styles.head}>The Golf House Viet Nam</div>
                <div
                  className={styles.item + " " + "d-flex align-items-center"}
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/place/The+Golf+House+Sala/@10.7690596,106.7224976,17z/data=!3m1!4b1!4m6!3m5!1s0x317525943f538c6b:0x7e3c7eb3d869df76!8m2!3d10.7690543!4d106.7246863!16s%2Fg%2F11sm7c42t5?hl=vi"
                    )
                  }
                >
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  <span className="">
                    87 Đường Nguyễn Cơ Thạch, phường An Lợi Đông, TP. Hồ Chí
                    Minh
                  </span>
                </div>
                <div
                  className={styles.item + " " + "d-flex align-items-center"}
                  onClick={() =>
                    window.open("mailto:adminthegolfhousevietnam@gmail.com")
                  }
                >
                  <i className="fa-solid fa-envelope"></i>
                  <span className="">adminthegolfhousevietnam@gmail.com</span>
                </div>
                <div
                  className={styles.item + " " + "d-flex align-items-center"}
                  onClick={() => window.open("tel:+84909337777")}
                >
                  <i className="fa-solid fa-phone"></i>
                  <span className="">( +84 ) 909 337 777</span>
                </div>
              </div>
            </div>
            <div className="col-12 ft2 col-lg-8 d-flex flex-wrap">
              <div className="col-4">
                <div className={styles.menu1 + " " + "d-flex flex-column"}>
                  <div
                    className={styles.item + " " + "footer-item"}
                    onClick={(e) => {
                      router.push("/");
                    }}
                  >
                    Trang chủ
                  </div>
                  <div
                    className={styles.item + " " + "footer-item"}
                    onClick={(e) => {
                      router.push("/about-us");
                    }}
                  >
                    Về chúng tôi
                  </div>
                  <div
                    className={styles.item + " " + "footer-item"}
                    onClick={(e) => {
                      router.push("/contact-us");
                    }}
                  >
                    Liên hệ
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.menu2 + " " + "d-flex flex-column"}>
                  <div
                    className={styles.item + " " + "footer-item"}
                    onClick={(e) => {
                      router.push("/academy");
                    }}
                  >
                    Học viện
                  </div>
                  <div
                    className={styles.item + " " + "footer-item"}
                    onClick={(e) => {
                      router.push("/trainer");
                    }}
                  >
                    Huấn luyện viên
                  </div>
                  <div
                    className={styles.item + " " + "footer-item"}
                    onClick={(e) => {
                      router.push("/training");
                    }}
                  >
                    Đào tạo
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.menu3 + " " + "d-flex flex-column"}>
                  <div
                    className={styles.item + " " + "footer-item"}
                    onClick={(e) => {
                      router.push("/proshop");
                    }}
                  >
                    Proshop
                  </div>
                  <div
                    className={styles.item + " " + "footer-item"}
                    onClick={(e) => {
                      router.push("/spa");
                    }}
                  >
                    Spa
                  </div>
                  <div
                    className={styles.item + " " + "footer-item"}
                    onClick={(e) => {
                      router.push("/lounge");
                    }}
                  >
                    Lounge
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              styles.copy_right +
              " " +
              "d-flex flex-wrap justify-content-between"
            }
          >
            <div className="col-12 col-md-8">
              <p>
                &#169; {new Date().getFullYear()}{" "}
                <strong>The Golf House Viet Nam</strong>. All Rights Reserved.
              </p>
            </div>
            <div
              className={
                styles.social +
                " " +
                "col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end"
              }
            >
              <i
                className="fa-brands fa-facebook-f"
                onClick={() => window.open("https://www.facebook.com")}
              ></i>
              <i
                className="fa-brands fa-youtube"
                onClick={() => window.open("https://www.youtube.com")}
              ></i>
              <i
                className="fa-brands fa-twitter"
                onClick={() => window.open("https://www.twitter.com")}
              ></i>
              <i
                className="fa-brands fa-instagram"
                onClick={() => window.open("https://www.instagram.com")}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
