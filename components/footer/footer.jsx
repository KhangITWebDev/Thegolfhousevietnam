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
      <div className="container">
        <div className="d-flex flex-wrap">
          <div className={styles.logo} onClick={() => router.push("/")}>
            <Image
              alt="logo"
              src="/images/Logo/logo2.png"
              width={127}
              height={106}
            />
          </div>
          <div className="d-flex flex-wrap">
            <div className="col-12 col-sm-6 col-lg-3">
              <div
                className={styles.menu + " " + "d-flex flex-wrap flex-column"}
              >
                <div className={styles.head}>The Golf House Viet Nam</div>
                <div
                  className={styles.item}
                  onClick={(e) => {
                    router.push("/");
                  }}
                >
                  Trang chủ
                </div>
                <div
                  className={styles.item}
                  onClick={(e) => {
                    router.push("/about-us");
                  }}
                >
                  Về chúng tôi
                </div>
                <div
                  className={styles.item}
                  onClick={(e) => {
                    router.push("/academy");
                  }}
                >
                  Học viện
                </div>
                <div
                  className={styles.item}
                  onClick={(e) => {
                    router.push("/trainer");
                  }}
                >
                  Huấn luyện viên
                </div>
                <div
                  className={styles.item}
                  onClick={(e) => {
                    router.push("/course");
                  }}
                >
                  Đào tạo
                </div>
                <div
                  className={styles.item}
                  onClick={(e) => {
                    router.push("/proshop");
                  }}
                >
                  Proshop
                </div>
                <div
                  className={styles.item}
                  onClick={(e) => {
                    router.push("/orther-service");
                  }}
                >
                  Dịch vụ khác
                </div>
                <div
                  className={styles.item}
                  onClick={(e) => {
                    router.push("/contact-us");
                  }}
                >
                  Liên hệ
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className={styles.address + " " + "d-flex flex-column"}>
                <div className={styles.head}>Địa chỉ</div>
                <div
                  className={styles.item}
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/place/The+Golf+House+Sala/@10.7690595,106.7204591,17z/data=!3m1!4b1!4m5!3m4!1s0x317525943f538c6b:0x7e3c7eb3d869df76!8m2!3d10.7690543!4d106.7246863?hl=vi"
                    )
                  }
                >
                  87 Nguyễn Cơ Thạch, phường An Lợi Đông, TP. Hồ Chí Minh
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className={styles.social + " " + "d-flex flex-column"}>
                <div className={styles.head}>Mạng xã hội</div>
                <div className={styles.item}>
                  <i className="fa-brands fa-facebook-f"></i> Facebook
                </div>
                <div className={styles.item}>
                  <i className="fa-brands fa-youtube"></i> Youtube
                </div>
                <div className={styles.item}>
                  <i className="fa-brands fa-twitter"></i> Twitter
                </div>
                <div className={styles.item}>
                  <i className="fa-brands fa-instagram"></i> Instagram
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className={styles.contact + " " + "d-flex flex-column"}>
                <div className={styles.head}>Thông tin liên hệ</div>
                <div className={styles.item}>admin@thegolfhousevietnam.com</div>
                <div className={styles.item}>(+84) 909 337 777</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copy_right}>
          <p>
            &#169; {new Date().getFullYear()}{" "}
            <strong>The Golf House Viet Nam</strong>. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
