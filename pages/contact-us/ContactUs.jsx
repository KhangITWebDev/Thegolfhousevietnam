import Image from "next/image";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./ContactUs.module.scss";

export const ContactList = [
  {
    image: "/images/Contact/contact1.png",
    title: "Mở cửa",
    desc: "<p>T2 - T6: 9:00 - 21:00</p><p>T7 - CN: 9:00 - 20:00</p>",
  },
  {
    image: "/images/Contact/contact2.png",
    title: "Địa chỉ",
    desc: "<p>85 - 87 Nguyễn Cơ Thạch, P.An Lợi Đông, Q2, TPHCM</p>",
  },
  {
    image: "/images/Contact/contact3.png",
    title: "Liên lạc",
    desc: "<p>Telephone: (+84) 274 035 723</p><p>Email: info@lio.com</p>",
  },
];

function ContactUs(props) {
  return (
    <div className={styles.contact_page}>
      <div className="heading">
        <h2 className={styles.title_page}>Liên hệ</h2>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn-down">
          <i className="fa-regular fa-chevron-down"></i>
        </button>
      </div>
      <div className={styles.training} id="contact">
        <div className="container">
          <Swiper
            breakpoints={{
              1920: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 3,
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
            slidesPerView={1}
            spaceBetween={30}
            // pagination={{
            //   clickable: true,
            // }}
            pagination={false}
            // modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {ContactList.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="content h-100 d-flex flex-column align-items-center">
                  <div className="image">
                    <Image
                      alt="item 1"
                      src={item.image}
                      width={85}
                      height={85}
                    />
                  </div>
                  <div className="info d-flex flex-column align-items-center">
                    <h5 className="text-center">{item.title}</h5>
                    <div dangerouslySetInnerHTML={{ __html: item.desc }}></div>
                  </div>
                  <div className="mt-auto">
                    <button className="d-flex align-items-center">
                      <span>Xem thêm</span>
                      <i className="fa-light fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={styles.form}>
        <div className="d-flex">
          <div className={"col-6" + " " + styles.left}>
            <Image alt="map" src="/images/Contact/Map.png" layout="fill" />
          </div>
          <div className={"col-6" + " " + styles.right}>
            <div>
              <div className="heading align-items-start">
                <span>LIÊN HỆ VỚI CHÚNG TÔI</span>
                <h2 className={styles.title_page}>Để lại thông tin với TGH</h2>
              </div>
              <form action="">
                <div className="form-group">
                  <label htmlFor="" className="form-label">
                    Họ tên
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="" className="form-label">
                    Email
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="" className="form-label">
                    Điện Thoại
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="" className="form-label">
                    Ghi chú
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="button">
                  <button>Gửi</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
