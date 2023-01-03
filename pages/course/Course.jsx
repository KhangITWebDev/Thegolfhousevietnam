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
registerLocale("vi", vi);
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: 16,
    "@media screen and (max-width: 992px)": {
      fontSize: 14,
    },
    "@media screen and (max-width: 576px)": {
      fontSize: 14,
    },
    color: state.isSelected ? "#fff" : "#000",
    backgroundColor: state.isSelected ? "#00B577" : "transparent",
    cursor: "pointer",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#A6A6A6",
    fontSize: 18,
    "@media screen and (max-width: 992px)": {
      fontSize: 16,
    },
    "@media screen and (max-width: 576px)": {
      fontSize: 14,
    },
    fontWeight: 500,
  }),
  // dropdownIndicator: (base) => ({
  //   ...base,
  //   color: "#000",
  // }),
  indicatorSeparator: () => ({ display: "none" }),
  container: (provided, state) => ({
    ...provided,
    width: "100%",
    border: "1px solid #979797",
    borderRadius: 4,
  }),
  input: (base, state) => ({
    ...base,
    color: "#A6A6A6",
    fontSize: 18,
    "@media screen and (max-width: 992px)": {
      fontSize: 16,
    },
    "@media screen and (max-width: 576px)": {
      fontSize: 14,
    },
    fontWeight: 500,
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: "tranparent",
    paddingLeft: 20,
    paddingRight: 20,
    "@media screen and (max-width: 992px)": {
      paddingLeft: 12,
      paddingRight: 12,
    },
    paddingTop: 6,
    paddingBottom: 6,
    cursor: "pointer",
    color: "#A6A6A6",
    border: "1px solid #979797",
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? 0 : 0,
    },
  }),
};

const options = [
  { value: "1", label: "Khoá lẻ" },
  { value: "2", label: "Khoá học" },
  { value: "3", label: "Khoá Junior" },
  { value: "4", label: "Tập luyện theo giờ" },
];
const options2 = [
  { value: "1", label: "Chọn tỉnh/thành phố" },
  { value: "2", label: "Thành phố Hồ Chí Minh" },
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
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = React.useState(0);
  const handleOpen = () => {
    setOpen(true);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
  };
  const handleClose = () => setOpen(false);
  const handleEntered = () => {
    setTimeout(() => setRows(80), 2000);
  };
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
    setOpen(false);
    setOpen3(false);
    setOpen4(false);
  };
  const handleClose2 = () => setOpen2(false);
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => {
    setOpen3(true);
    setOpen2(false);
    setOpen(false);
    setOpen4(false);
  };
  const handleClose3 = () => setOpen3(false);
  const [open4, setOpen4] = React.useState(false);
  const handleOpen4 = () => {
    setOpen4(true);
    setOpen2(false);
    setOpen3(false);
    setOpen(false);
  };
  const handleClose4 = () => setOpen4(false);
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
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <i
          className="fa-solid fa-caret-down"
          style={{
            fontSize: 20,
            color: "#A6A6A6",
          }}
        ></i>
      </components.DropdownIndicator>
    );
  };
  return (
    <div className={styles.course_page}>
      <div className="container">
        <div className={"heading" + " " + styles.header} data-aos="fade-up">
          <span>Chương trình đào tạo</span>
          <h2 className={styles.title_page}>Học thử miễn phí</h2>
          <div className="button" onClick={handleOpen}>
            <button>Đăng ký</button>
          </div>
        </div>
        <div className={styles.training} id="training">
          <div className={styles.list + " " + "d-flex flex-wrap"}>
            <div
              className={
                "col-4 d-flex justify-content-center align-items-center" +
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
                "col-4 d-flex flex-column align-items-center" +
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
                  />
                  <div className={styles.image}>
                    <Image
                      alt="item 1"
                      src="/images/Course/itro1.png"
                      width={66}
                      height={66}
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
                "col-4 d-flex flex-column align-items-center" +
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
                  />
                  <div className={styles.image}>
                    <Image
                      alt="item 1"
                      src="/images/Course/itro2.png"
                      width={66}
                      height={66}
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
                "col-4 d-flex flex-column align-items-center" +
                " " +
                styles.item
              }
            >
              <div className={styles.content} data-aos="fade-right">
                <div className={styles.image_container}>
                  <Image
                    alt="item 1"
                    src="/images/Course/bg.png"
                    width={142}
                    height={136}
                  />
                  <div className={styles.image}>
                    <Image
                      alt="item 1"
                      src="/images/Course/itro3.png"
                      width={66}
                      height={66}
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
                "col-4 d-flex flex-column align-items-center" +
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
                  />
                  <div className={styles.image}>
                    <Image
                      alt="item 1"
                      src="/images/Course/itro4.png"
                      width={66}
                      height={66}
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
                "col-4 d-flex flex-column align-items-center" +
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
                  />
                  <div className={styles.image}>
                    <Image
                      alt="item 1"
                      src="/images/Course/itro5.png"
                      width={66}
                      height={66}
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
                <SwiperSlide key={index}>
                  <div className="d-flex flex-column info">
                    <div>
                      <div className="image">
                        <Image alt="Intro 1" src={item.image} layout="fill" />
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
              <h2 data-aos="fade-left">Chi tiết khoá Junior</h2>
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
                  <span className="icon">“</span>
                  <p>
                    Là một người chơi Golf hơn 10 năm, tôi gặp khó khăn trong
                    việc xuống Handicap. Nhờ các HLV tại The Golf House phân
                    tích các lỗi sai kỹ thuật mà tôi đã hiểu được vấn đề cần
                    chỉnh sửa để có thể chơi Golf tốt hơn.
                  </p>
                  <h2>Trần Trung</h2>
                  <span>Nhân viên văn phòng</span>
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
      <Modal
        open={open}
        onClose={handleClose}
        id="modal-signup"
        data-aos="fade-down"
        data-aos-delay="800"
      >
        <Modal.Header>
          <Modal.Title>Đăng ký học</Modal.Title>
          <button onClick={handleClose}>
            <i className="fa-light fa-times"></i>
          </button>
        </Modal.Header>
        <Modal.Body>
          <h5>Chào mừng trở lại, vui lòng đăng ký thông tin:</h5>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              handleOpen3();
            }}
          >
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
                Khóa học
              </label>
              <Select
                options={options}
                styles={customStyles}
                defaultValue={options[detailIndex]}
                components={{ DropdownIndicator }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className="form-label">
                Tỉnh/Thành phố
              </label>
              <Select
                options={options2}
                styles={customStyles}
                defaultValue={options2[0]}
                components={{ DropdownIndicator }}
              />
            </div>
            <div className="button" onClick={handleOpen3}>
              <button>Đăng ký</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        id="modal-signup"
        data-aos="fade-down"
        data-aos-delay="800"
      >
        <Modal.Header>
          <Modal.Title>Yêu cầu khi đặt lịch</Modal.Title>
          <button onClick={handleClose2}>
            <i className="fa-light fa-times"></i>
          </button>
        </Modal.Header>
        <Modal.Body>
          <h5>Chào mừng trở lại, vui lòng đăng nhập:</h5>
          <form action="">
            <div className="form-group">
              <label htmlFor="" className="form-label">
                Email
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="" className="form-label">
                Mật khẩu
              </label>
              <input type="text" className="form-control" />
            </div>
            <div style={{ marginTop: 20 }}>
              <Link href="">
                <a className="link">Quên mật khẩu?</a>
              </Link>
            </div>
            <div className="button">
              <button>Đăng nhập</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <Modal
        open={open3}
        onClose={handleClose3}
        onEntered={handleEntered}
        onExited={() => {
          setRows(0);
        }}
        id="modal-notify"
      >
        <Modal.Header>
          <Modal.Title></Modal.Title>
          <button onClick={handleClose3}>
            <i className="fa-light fa-times"></i>
          </button>
        </Modal.Header>
        {rows ? (
          <Modal.Body>
            <i className="fa-regular fa-circle-check"></i>
            <h5>Chúc mừng bạn đã đặt lịch thành công</h5>
            <h6>Vui lòng kiểm tra lại thông tin của bạn!</h6>
            <div className="button" onClick={handleOpen4}>
              <button>Kiểm tra</button>
            </div>
          </Modal.Body>
        ) : (
          <div style={{ textAlign: "center" }}>
            <Loader size="md" />
          </div>
        )}
      </Modal>
      <Modal
        open={open4}
        onClose={handleClose4}
        id="modal-checkinfo"
        data-aos="fade-down"
        data-aos-delay="800"
      >
        <Modal.Header>
          <Modal.Title>Thông tin đặt lịch của bạn</Modal.Title>
          <button onClick={handleClose4}>
            <i className="fa-light fa-times"></i>
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column">
            <div className="d-flex information_column">
              <h6 className="col-4 col-sm-3">
                <i className="fa-light fa-memo"></i>
                <span>Khoá học:</span>
              </h6>
              <div className="col-8 col-sm-9">
                <h6 className="desc">Khoá Junior</h6>
              </div>
            </div>
            <div className="d-flex information_column">
              <h6 className="col-4 col-sm-3">
                <i className="fa-light fa-user-alt"></i>
                <span>Tên:</span>
              </h6>
              <div className="col-8 col-sm-9">
                <h6 className="desc">Thành Vinh</h6>
              </div>
            </div>
            <div className="d-flex information_column">
              <h6 className="col-4 col-sm-3">
                <i className="fa-light fa-clock"></i>
                <span>Thời gian:</span>
              </h6>
              <div className="col-8 col-sm-9">
                <h6 className="desc">Thứ 3 9:40:22, 20 tháng 12, 2022</h6>
              </div>
            </div>
            <div className="d-flex information_column">
              <h6 className="col-4 col-sm-3">
                <i className="fa-light fa-location-dot"></i>
                <span>Địa điểm:</span>
              </h6>
              <div className="col-8 col-sm-9">
                <h6 className="desc">
                  85-87 Nguyen Co Thach, An Loi Đong, Q.2, TPHCM
                </h6>
              </div>
            </div>
            <div className="d-flex information_column">
              <h6 className="col-4 col-sm-3">
                <i className="fa-light fa-file-lines"></i>
                <span>Chi tiết:</span>
              </h6>
              <div className="col-8 col-sm-9">
                <h6 className="desc">
                  Tên: Thanh Vinh <br /> Số điện thoại: 0378759723 <br />
                  Email: admin@example.com
                </h6>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Course;
