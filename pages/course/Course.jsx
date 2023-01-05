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
import Select, { components } from "react-select";
import { vi } from "date-fns/locale"; // the locale you want
import { Button, Loader, Modal, Placeholder } from "rsuite";
import Link from "next/link";
import SignUp from "../../components/Modal/SignUp";
import SignIn from "../../components/Modal/SignIn";
import Sucess from "../../components/Modal/Sucess";
import CheckInfo from "../../components/Modal/CheckInfo";
import SignUpTrial from "../../components/Modal/SignUpTrial";
import SucessTrial from "../../components/Modal/SucessTrial";
registerLocale("vi", vi);

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
  };
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => {
    setOpen1(true);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
    setOpen(false);
    setOpen5(false);
  };
  const handleClose1 = () => setOpen1(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
    setOpen(false);
    setOpen1(false);
    setOpen3(false);
    setOpen4(false);
    setOpen5(false);
  };
  const handleClose2 = () => setOpen2(false);
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => {
    setOpen3(true);
    setOpen2(false);
    setOpen1(false);
    setOpen(false);
    setOpen4(false);
    setOpen5(false);
  };
  const handleClose3 = () => setOpen3(false);
  const [open4, setOpen4] = React.useState(false);
  const handleOpen4 = () => {
    setOpen4(true);
    setOpen2(false);
    setOpen3(false);
    setOpen1(false);
    setOpen(false);
    setOpen5(false);
  };
  const handleClose4 = () => setOpen4(false);
  const [open5, setOpen5] = React.useState(false);
  const handleOpen5 = () => {
    setOpen5(true);
    setOpen4(false);
    setOpen2(false);
    setOpen3(false);
    setOpen1(false);
    setOpen(false);
  };
  const handleClose5 = () => setOpen5(false);
  function insertAtIndex(i) {
    if (i === 0) {
      $("#calendar .react-datepicker__month").prepend("<div>okay things</div>");
      return;
    }
    $("#calendar .react-datepicker__month  > div:nth-child(" + i + ")").after(
      "<div>great things</div>"
    );
  }
  const [detailIndex, setDetailIndex] = useState(2);
  useEffect(() => {
    $("#course-team .swiper-pagination").attr("data-aos", "fade-up");
    $("react-datepicker__day-names").attr("data-aos", "fade-right");
    $("#course-team .swiper-pagination-bullet").each(function (indexC) {
      $(this).css({
        backgroundImage: `url(/images/Home/Team/team${indexC + 3}.png)`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        opacity: 1,
      });
    });
  }, []);
  return (
    <div className={styles.course_page}>
      <div className="container">
        <div className={"heading" + " " + styles.header} data-aos="fade-up">
          <span>Chương trình đào tạo</span>
          <h2 className={styles.title_page}>Học thử miễn phí</h2>
          <div className="button">
            <button onClick={handleOpen1}>Đăng ký</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.training} id="training">
          <div className={styles.list + " " + "d-flex flex-wrap"}>
            <div
              className={
                "col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center" +
                " " +
                styles.item
              }
              data-aos="fade-right"
            >
              <h2>
                Lợi ích học golf tại <span>The Golf House?</span>
              </h2>
            </div>
            <div
              className={
                "col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center" +
                " " +
                styles.item
              }
            >
              <div className={styles.content} data-aos="fade-down">
                <div className={styles.image_container}>
                  <Image
                    alt="item 1"
                    src="/images/Course/bg.png"
                    width={142}
                    height={136}
                    objectFit="cover"
                  />
                  <div className={styles.image}>
                    <Image
                      alt="item 1"
                      src="/images/Course/itro1.png"
                      width={66}
                      height={66}
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="info d-flex flex-column align-items-center">
                  <h5 className="text-center">Giáo trình</h5>
                  <p className="text-center">
                    Đầy đủ 3 yếu tố: kỹ thuật, <br /> văn hóa và luật.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                "col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center" +
                " " +
                styles.item
              }
            >
              <div className={styles.content} data-aos="fade-left">
                <div className={styles.image_container}>
                  <Image
                    alt="item 1"
                    src="/images/Course/bg.png"
                    width={142}
                    height={136}
                    objectFit="cover"
                  />
                  <div className={styles.image}>
                    <Image
                      alt="item 1"
                      src="/images/Course/itro2.png"
                      width={66}
                      height={66}
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="info d-flex flex-column align-items-center">
                  <h5 className="text-center">Đội ngũ HLV</h5>
                  <p className="text-center">
                    Huấn luyện viên quốc tế PGA, VGA.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                "col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center" +
                " " +
                styles.item
              }
            >
              <div className={styles.content} data-aos="fade-right">
                <div className={styles.image_container}>
                  <Image
                    alt="item 1"
                    src="/images/Course/bg.png"
                    objectFit="cover"
                    width={142}
                    height={136}
                  />
                  <div className={styles.image}>
                    <Image
                      alt="item 1"
                      src="/images/Course/itro3.png"
                      width={66}
                      height={66}
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="info d-flex flex-column align-items-center">
                  <h5 className="text-center">Công nghệ</h5>
                  <p className="text-center">
                    Trang thiết bị hiện đại áp dụng <br /> công nghệ tiên tiến.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                "col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center" +
                " " +
                styles.item
              }
            >
              <div className={styles.content} data-aos="fade-up">
                <div className={styles.image_container}>
                  <Image
                    alt="item 1"
                    src="/images/Course/bg.png"
                    width={142}
                    height={136}
                    objectFit="cover"
                  />
                  <div className={styles.image}>
                    <Image
                      alt="item 1"
                      src="/images/Course/itro4.png"
                      width={66}
                      height={66}
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="info d-flex flex-column align-items-center">
                  <h5 className="text-center">Cộng đồng</h5>
                  <p className="text-center">
                    Tạo nên cộng đồng chung niềm đam mê <br /> với nhiều hoạt
                    động kết nối.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                "col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center" +
                " " +
                styles.item
              }
            >
              <div className={styles.content} data-aos="fade-left">
                <div className={styles.image_container}>
                  <Image
                    alt="item 1"
                    src="/images/Course/bg.png"
                    width={142}
                    height={136}
                    objectFit="cover"
                  />
                  <div className={styles.image}>
                    <Image
                      alt="item 1"
                      src="/images/Course/itro5.png"
                      width={66}
                      height={66}
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="info d-flex flex-column align-items-center">
                  <h5 className="text-center">Chi phí</h5>
                  <p className="text-center">
                    Cạnh tranh và phù hợp với <br /> đối tượng người chơi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.course} id="course">
        <div className={styles.top}>
          <div className="container">
            <span data-aos="fade-right">KHOÁ HỌC</span>
            <h2 data-aos="fade-right">Các khoá học của The Golf House</h2>
            <p data-aos="fade-right">
              Dù bạn là người mới bắt đầu tìm hiểu, hay người chơi Golf muốn
              nâng cao trình độ. The Golf House luôn có lộ trình phù hợp cho
              bạn!
            </p>
          </div>
        </div>
        <div className="container">
          <div className="list" data-aos="fade-left">
            <Swiper
              breakpoints={{
                1920: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 3,
                },
                576: {
                  slidesPerView: 2,
                },
              }}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              onSwiper={(s) => setSwiper3(s)}
              className="mySwiper"
            >
              {slideCourse.map((item, index) => (
                <SwiperSlide key={index} onClick={() => setDetailIndex(index)}>
                  <div className="d-flex flex-column info">
                    <div>
                      <div className="image">
                        <Image
                          alt="Intro 1"
                          src={item.image}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
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
                            <span>Nhận tư vấn</span>
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
          <div className="d-flex flex-wrap-reverse flex-lg-nowrap">
            <div className="d-flex justify-content-center justify-content-lg-start left">
              <div className="swiper-slide">
                <div className="d-flex flex-column info">
                  <div>
                    <div className="image" data-aos="fade-right">
                      <Image
                        alt="Intro 1"
                        src={slideCourse[detailIndex]?.image}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    {/* <div className="detail"></div> */}
                    <div className="detail d-flex justify-content-end">
                      <h5 onClick={handleOpen} data-aos="fade-right">
                        {slideCourse[detailIndex]?.title}
                      </h5>
                      <span data-aos="fade-right">
                        Dành cho người tười 4-13 tuổi
                      </span>
                      <h4 data-aos="fade-right">
                        20.000.000 VND <p>/tháng</p>
                      </h4>
                      <p data-aos="fade-right">
                        Học hằng tuần <br /> Giảm giá 10%
                      </p>
                      <div
                        data-aos="fade-right"
                        className="button"
                        onClick={handleOpen}
                      >
                        <button>Đăng ký</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="heading col-12 col-lg-8 flex-wrap align-items-start">
              <span data-aos="fade-left">THÔNG TIN KHOÁ HỌC</span>
              <h2 data-aos="fade-left" style={{}}>
                Chi tiết {slideCourse[detailIndex]?.title.toLocaleLowerCase()}
              </h2>
              <p data-aos="fade-left">
                Khoá học dành cho trẻ em đam mê Golf từ 4-13 tuổi.
              </p>
              <ul>
                <li data-aos="fade-left">
                  Lịch học linh động & phù hợp với lịch học tại trường
                </li>
                <li data-aos="fade-left">Tối đa 4 học viên/lớp</li>
                <li data-aos="fade-left">60 phút/buổi</li>
                <li data-aos="fade-left">Miễn phí phí gậy tập và bóng</li>
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
            modules={[Pagination, Navigation]}
            className="mySwiper"
            onSwiper={(s) => {
              setSwiper2(s);
            }}
          >
            <SwiperSlide>
              <div className="container">
                <div className="content d-flex flex-column align-items-center">
                  <span className="icon" data-aos="fade-down">
                    “
                  </span>
                  <p data-aos="fade-left">
                    Từ một nhân viên văn phòng không mặn mà với hoạt động thể
                    thao, tôi tìm thấy niềm đam mê với Golf tại The Golf House.
                    Đến với Golf, tôi thấy cuộc sống trở nên vui vẻ và thú vị.
                    Đặc biệt, Golf rèn cho tôi tính kiên nhẫn và một lối sống
                    tích cực năng động hơn.
                  </p>
                  <h2 data-aos="fade-right">Nguyễn Ngọc</h2>
                  <span data-aos="fade-left">Nhân viên văn phòng</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container">
                <div className="content d-flex flex-column align-items-center">
                  <span className="icon" data-aos="fade-down">
                    “
                  </span>
                  <p data-aos="fade-left">
                    Là một người chơi Golf hơn 10 năm, tôi gặp khó khăn trong
                    việc xuống Handicap. Nhờ các HLV tại The Golf House phân
                    tích các lỗi sai kỹ thuật mà tôi đã hiểu được vấn đề cần
                    chỉnh sửa để có thể chơi Golf tốt hơn.
                  </p>
                  <h2 data-aos="fade-right">Trần Trung</h2>
                  <span data-aos="fade-left">Nhân viên văn phòng</span>
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
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
            </SwiperSlide> */}
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
          <div className="heading" data-aos="fade-down">
            <h2>Đặt lịch học</h2>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn-down">
              <i className="fa-regular fa-chevron-down"></i>
            </button>
          </div>
          <div className={styles.content}>
            <DatePicker
              data-aos="fade-up"
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                handleOpen2();
              }}
              minDate={moment().toDate()}
              shouldCloseOnSelect={false}
              open={true}
              locale="vi"
              formatWeekDay={(nameOfDay) => {
                return window.screen.width > 576
                  ? nameOfDay
                      .replace("Hai", "2")
                      .replace("Ba", "3")
                      .replace("Tư", "4")
                      .replace("Năm", "5")
                      .replace("Sáu", "6")
                      .replace("Bảy", "7")
                  : nameOfDay
                      .replace("Thứ Hai", "T2")
                      .replace("Thứ Ba", "T3")
                      .replace("Thứ Tư", "T4")
                      .replace("Thứ Năm", "T5")
                      .replace("Thứ Sáu", "T6")
                      .replace("Thứ Bảy", "T7")
                      .replace("Chủ Nhật", "CN");
              }}
              calendarStartDay={1}
              renderCustomHeader={({
                date,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div className="custom-header" data-aos="fade-left">
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
      {open && (
        <SignUp
          handleClose={handleClose}
          detailIndex={detailIndex}
          handleOpen3={handleOpen3}
        />
      )}
      {open1 && (
        <SignUpTrial handleClose={handleClose1} handleOpen5={handleOpen5} />
      )}
      {open2 && <SignIn handleClose2={handleClose2} />}
      {open3 && (
        <Sucess handleClose3={handleClose3} handleOpen4={handleOpen4} />
      )}
      {open4 && <CheckInfo handleClose4={handleClose4} />}
      {open5 && (
        <SucessTrial handleClose5={handleClose5} handleOpen4={handleOpen4} />
      )}
    </div>
  );
}

export default Course;
