import Image from "next/image";
import React, { useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IntroList } from "../../utils/DataDemo/Course/courseData";
import DatePicker, { registerLocale } from "react-datepicker";
import styles from "./Course.module.scss";
import $ from "jquery";
import moment from "moment";
import { convertDate } from "../../utils/function";
import { useEffect } from "react";

import { vi } from "date-fns/locale"; // the locale you want
registerLocale("vi", vi);
const slideLogo = [
  "/images/Home/Donors/donor1.png",
  "/images/Home/Donors/donor2.png",
  "/images/Home/Donors/donor3.png",
  "/images/Home/Donors/donor4.png",
  "/images/Home/Donors/donor4.png",
  "/images/Home/Donors/donor4.png",
];
const months = [
  "Enero ",
  "Febrero ",
  "Marzo ",
  "Abril ",
  "Mayo ",
  "Junio ",
  "Julio ",
  "Agosto ",
  "Septiembre ",
  "Octubre ",
  "Noviembre ",
  "Diciembre ",
];

const slideCourse = [
  {
    image: "/images/Home/Course/img1.jpg",
    title: "Khoá lẻ",
    icon: "/images/Home/Course/icon1.png",
  },
  {
    image: "/images/Home/Course/img2.jpg",
    title: "Khoá học",
    icon: "/images/Home/Course/icon1.png",
  },
  {
    image: "/images/Home/Course/img3.jpg",
    title: "Khoá Junior",
    icon: "/images/Home/Course/icon2.png",
  },
  {
    image: "/images/Home/Course/img1.jpg",
    title: "Tập luyện theo giờ",
    icon: "/images/Home/Course/icon1.png",
  },
];

function Course(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [swiper2, setSwiper2] = React.useState(null);
  const [swiper3, setSwiper3] = React.useState(null);
  function insertAtIndex(i) {
    if (i === 0) {
      $("#calendar .react-datepicker__month").prepend("<div>okay things</div>");
      return;
    }
    $("#calendar .react-datepicker__month  > div:nth-child(" + i + ")").after(
      "<div>great things</div>"
    );
  }
  useEffect(() => {
    $("#course-team .swiper-pagination-bullet").each(function (indexC) {
      $(this).css({
        backgroundImage: `url(/images/Home/Team/team${indexC + 1}.png)`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        opacity: 1,
      });
    });
  }, []);

  return (
    <div className={styles.course_page}>
      <div className="container">
        <div className={"heading" + " " + styles.header}>
          <span>Chương trình đào tạo</span>
          <h2 className={styles.title_page}>Thông tin đào tạo</h2>
        </div>
        <div className={styles.training} id="training">
          <div className="">
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
              navigation={false}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {IntroList.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="content h-100 d-flex flex-column align-items-center">
                    <div className="image">
                      <Image
                        alt="item 1"
                        src={item.image}
                        width={66}
                        height={66}
                      />
                    </div>
                    <div className="info d-flex flex-column align-items-center">
                      <h5 className="text-center">{item.title}</h5>
                      <p className="text-center">{item.desc}</p>
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
      </div>
      <div className={styles.course} id="course">
        <div className={styles.top}>
          <div className="container">
            <span>KHOÁ HỌC</span>
            <h2>Các khoá học của The Golf House</h2>
            <p>
              Dù bạn là người mới bắt đầu tìm hiểu, hay người chơi Golf muốn
              nâng cao trình độ. The Golf House luôn có lộ trình phù hợp cho
              bạn!
            </p>
          </div>
        </div>
        <div className="container">
          <div className="list">
            <Swiper
              breakpoints={{
                1920: {
                  slidesPerView: 4,
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
              spaceBetween={30}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation]}
              onSwiper={(s) => setSwiper3(s)}
              className="mySwiper"
            >
              {slideCourse.map((item) => (
                <SwiperSlide key={item}>
                  <div className="d-flex flex-column info">
                    <div>
                      <div className="image">
                        <Image alt="Intro 1" src={item.image} layout="fill" />
                      </div>
                      {/* <div className="detail"></div> */}
                      <div className="detail">
                        <div className="icon">
                          <Image
                            alt="Intro 1"
                            src={item.icon}
                            width={52}
                            height={52}
                          />
                        </div>
                        <h5>{item.title}</h5>
                        <div className="tool">
                          <button className="d-flex align-items-center">
                            <span>Xem thêm</span>
                            <i className="fa-light fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <button className="btn-prev" onClick={() => swiper3.slidePrev()}>
                <i className="fa-thin fa-arrow-left"></i>
              </button>
              <button className="btn-next" onClick={() => swiper3.slideNext()}>
                <i className="fa-thin fa-arrow-right"></i>
              </button>
            </Swiper>
          </div>
        </div>
      </div>
      <div className={styles.course_detail} id="course-detail">
        <div className="container">
          <div className="d-flex">
            <div className="swiper-slide">
              <div className="d-flex flex-column info">
                <div>
                  <div className="image">
                    <Image
                      alt="Intro 1"
                      src="/images/Home/Course/img3.jpg"
                      layout="fill"
                    />
                  </div>
                  {/* <div className="detail"></div> */}
                  <div className="detail d-flex justify-content-end">
                    <h5>Khoá Junior</h5>
                    <span>Dành cho người tười 4-13 tuổi</span>
                    <h4>
                      20.000.000 VND <p>/tháng</p>
                    </h4>
                    <p>
                      Học hằng tuần <br /> Giảm giá 10%
                    </p>
                    <div className="button">
                      <button>Đăng ký</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="heading align-items-start">
              <span>THÔNG TIN KHOÁ HỌC</span>
              <h2>Chi tiết khoá Junior</h2>
              <p>Khoá học dành cho trẻ em đam mê Golf từ 4-13 tuổi.</p>
              <ul>
                <li>Lịch học linh động & phù hợp với lịch học tại trường</li>
                <li>Tối đa 4 học viên/lớp</li>
                <li>60 phút/buổi</li>
                <li>Miễn phí phí gậy tập và bóng</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.team} id="course-team">
        <div className="container">
          <Swiper
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            onSwiper={(s) => {
              setSwiper2(s);
            }}
          >
            <SwiperSlide>
              <div className="container">
                <div className="content d-flex flex-column align-items-center">
                  <span className="icon">“</span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry{"'"}
                    s standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <h2>La Lisa</h2>
                  <span>Nhân viên kinh doanh</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container">
                <div className="content d-flex flex-column align-items-center">
                  <span className="icon">“</span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry{"'"}
                    s standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <h2>Lisandro</h2>
                  <span>Nhân viên kinh doanh</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container">
                <div className="content d-flex flex-column align-items-center">
                  <span className="icon">“</span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry{"'"}
                    s standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <h2>Nami</h2>
                  <span>Nhân viên kinh doanh</span>
                </div>
              </div>
            </SwiperSlide>
            <button className="btn-prev" onClick={() => swiper2.slidePrev()}>
              <i className="fa-thin fa-arrow-left"></i>
            </button>
            <button className="btn-next" onClick={() => swiper2.slideNext()}>
              <i className="fa-thin fa-arrow-right"></i>
            </button>
          </Swiper>
        </div>
      </div>
      <div className={styles.calendar} id="calendar">
        <div className="container">
          <div className="heading">
            <h2>Đặt lịch học</h2>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn-down">
              <i className="fa-regular fa-chevron-down"></i>
            </button>
          </div>
          <div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={moment().toDate()}
              shouldCloseOnSelect={false}
              open={true}
              locale="vi"
              formatWeekDay={(nameOfDay) => {
                return nameOfDay
                  .replace("Hai", "2")
                  .replace("Ba", "3")
                  .replace("Tư", "4")
                  .replace("Năm", "5")
                  .replace("Sáu", "6")
                  .replace("Bảy", "7");
              }}
              calendarStartDay={1}
              renderCustomHeader={({
                date,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div className="custom-header">
                  <button
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                  >
                    <i className="fa-light fa-arrow-left"></i>
                  </button>
                  <h3>{convertDate(date).getMonthandYearVi}</h3>
                  <button
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                  >
                    <i className="fa-light fa-arrow-right"></i>
                  </button>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
