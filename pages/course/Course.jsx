import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import $ from "jquery";
import Cookies from "js-cookie";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select, { components } from "react-select";
import Swal from "sweetalert2";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import * as yup from "yup";
import loginClientAxios from "../../clientAxios/loginClientAxios";
import CheckInfo from "../../components/Modal/CheckInfo";
import SignIn from "../../components/Modal/SignIn";
import SignUp from "../../components/Modal/SignUp";
import SignUpTrial from "../../components/Modal/SignUpTrial";
import Sucess from "../../components/Modal/Sucess";
import emailjs from "@emailjs/browser";
import SucessTrial from "../../components/Modal/SucessTrial";
import {
  getLocationData,
  getRegistrationData,
} from "../../store/redux/BookingReducer/booking.action";
import {
  getCourseData,
  PostSignTrial,
} from "../../store/redux/CourseReducer/course.action";
import { getContentData } from "../../store/redux/LoadContentReducer/content.action";
import { removeAccents } from "../../utils/function";
import styles from "./Course.module.scss";
const slideCourse = [
  {
    image: "/images/Home/Course/img1.jpg",
    title: "Lớp lẻ",
    icon: "/images/Home/Course/icon1.png",
    background: "#576e33",
    description:
      "<p><ul><li> Học 1:1 với HLV chuyên nghiệp</li><li>Tặng 1 buổi ra sân với mỗi 10 buổi đăng ký học</li><li>60 phút/buổi</li><li>Miễn phí gậy tập và bóng</li></ul></p>",
  },
  {
    image: "/images/Home/Course/img2.jpg",
    title: "Khóa học",
    icon: "/images/Home/Course/icon1.png",
    background: "#B2A776",
    description:
      "<p><ul><li>Cam kết đầu ra</li><li>Học 1:1 với HLV chuyên nghiệp</li><li>Lộ trình bài bản từ 3 tháng tới 2 năm</li><li>Giáo trình thiết kế phù hợp từng trình độ từ sơ cấp tới nâng cao</li><li> Hỗ trợ 100% phí học lại nếu chưa đạt được trình độ đầu ra theo cam kết (điều kiện HV tham gia đầy đủ số buổi học quy định)</li><li>60 phút/buổi</li><li>Miễn phí phí gậy tập và bóng</li></ul></p>",
  },
  {
    image: "/images/Home/Course/img3.jpg",
    title: "Khoá trẻ em",
    icon: "/images/Home/Course/icon2.png",
    background: "#DD6B7F",
    description:
      "<p><ul><li>Độ tuổi từ 4 - 13</li><li>Lịch học linh động & phù hợp với lịch học tại trường</li><li>Giảng viên nhiều năm kinh nghiệm hướng dẫn trẻ</li><li>Tối đa 4 học viên/lớp</li><li>60 phút/buổi</li><li>Miễn phí gậy tập và bóng</li></ul></p>",
  },
  {
    image: "/images/Home/Course/img4.jpg",
    title: "Tập luyện theo giờ",
    icon: "/images/Home/Course/icon1.png",
    background: "#6B84DD",
    description:
      "<p><ul><li>Không gian tập luyện trong nhà tiện nghi</li><li> Thiết bị hiện đại</li><li>Chi phí hợp lý</li> </ul></p>",
  },
];
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: 18,
    fontWeight: 400,
    "@media screen and (max-width: 992px)": {
      fontSize: 16,
    },
    "@media screen and (max-width: 576px)": {
      fontSize: 16,
    },
    color: state.isSelected ? "#fff" : "#000",
    backgroundColor: state.isSelected ? "#00B577" : "transparent",
    cursor: "pointer",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#fff",
    fontSize: 18,
    "@media screen and (max-width: 992px)": {
      fontSize: 16,
    },
    "@media screen and (max-width: 576px)": {
      fontSize: 16,
    },
    fontWeight: 500,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#ECECEC",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  container: (provided, state) => ({
    ...provided,
    width: "100%",
  }),
  input: (base, state) => ({
    ...base,
    color: "#fff",
    fontSize: 18,
    "@media screen and (max-width: 992px)": {
      fontSize: 16,
    },
    fontWeight: 500,
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: "tranparent",
    cursor: "pointer",
    color: "#fff",
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? 0 : 0,
    },
  }),
  placeholder: (base) => {
    return {
      ...base,
      fontSize: 18,
      fontWeight: 500,
      color: "#fff",
    };
  },
};
const options = [
  { value: "1", label: "Nguyễn Cơ Thạch, An Lợi Đông, Quận 2, TP Hồ Chí Minh" },
];
const PHONE_REGEX = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
const schema = yup.object().shape({
  from_name: yup.string().required("Vui lòng nhập họ tên"),
  from_phone: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .min(10, "Số điện thoại phải nhiều hơn 9 ký tự")
    .max(12, "Sô điện thoại phải ít hơn 12 ký tự")
    .matches(PHONE_REGEX, "Số điện thoại không hợp lệ"),
  from_email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  from_job: yup
    .object()
    .shape({
      label: yup.string().required("Vui lòng chọn nghề nghiệp"),
      value: yup.string().required("Vui lòng chọn nghề nghiệp"),
    })
    .nullable()
    .required("Vui lòng chọn nghề nghiệp"),
});
const schema2 = yup.object().shape({
  // email: yup
  //   .string()
  //   .email("Email không hợp lệ")
  //   .required("vui lòng nhập email"),
  phone: yup.string().required("Vui lòng nhập số điện thoại"),
  password: yup.string().required("Mật khẩu là trường bắt buộc"),
});
function Course(props) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    watch: watch2,
    reset: reset2,
    formState: { errors: errors2 },
  } = useForm({
    resolver: yupResolver(schema2),
  });
  const form = useRef();
  const [loadingSignUpTrial, setLoadingSignUpTrial] = useState(false);
  const onSubmit = (data) => {
    setLoadingSignUpTrial(true);
    const formState = {
      from_name: data.from_name,
      from_phone: data.from_phone,
      from_email: data.from_email,
      from_job: data.from_job.label,
    };
    setTimeout(() => {
      emailjs
        .send(
          "service_ug5xzoq",
          "template_zhcsmlh",
          formState,
          "n8Aci-Exs7CuotOPb"
        )
        .then(
          function (response) {
            if (response.status === 200) {
              dispatch(PostSignTrial({}));
              setLoadingSignUpTrial(false);
              Swal.fire({
                text: `Bạn đã đăng ký học thử thành công`,
                icon: "success",
                showCancelButton: false,
                confirmButtonText: "OK",
              }).then((result) => {
                if (result.isConfirmed) {
                  handleClose1();
                }
              });
            }
          },
          function (err) {
            Swal.fire({
              text: `Vui lòng nhập lại thông tin`,
              icon: "error",
              showCancelButton: false,
              confirmButtonText: "OK",
            });
          }
        );
    }, 2000);
  };
  const [loading, setLoading] = useState(false);
  const token = Cookies.get("access_token");
  const [clickLocation, setClickLocation] = useState(false);
  const [clickBooking, setClickBooking] = useState(false);
  const onSubmit2 = async (data) => {
    setLoading(true);
    const resApi = await loginClientAxios.post("/user/login", {
      username: data.phone,
      password: data.password,
    });
    setTimeout(() => {
      if (resApi?.result?.message?.length > 0) {
        Swal.fire({
          text: `${resApi.result.message}`,
          icon: "error",
          showCancelButton: false,
          confirmButtonText: "OK",
        });
        setLoading(false);
      } else if (resApi?.result) {
        setLoading(false);
        Cookies.set("access_token", resApi?.result?.access_token);
        Cookies.set("trainee_id", resApi?.result?.id);
        setOpen2(false);
      }
    }, 2000);
  };
  const router = useRouter();
  const [address, setAddress] = useState();
  const { locationList } = useSelector((state) => state.BookingReducer);
  useEffect(() => {
    dispatch(getLocationData());
  }, [dispatch, token]);
  const { registration } = useSelector((state) => state.BookingReducer);
  useEffect(() => {
    dispatch(getRegistrationData());
  }, [dispatch, token]);
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
  useEffect(() => {
    $("#course-team .swiper-pagination-bullet").each(function (indexC) {
      $(this).css({
        backgroundImage: `url(/images/Home/Team/team${indexC + 3}.png)`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        opacity: 1,
      });
    });
  }, []);
  const [detailIndex, setDetailIndex] = useState(1);
  const [bgDetail, setBGDetail] = useState(
    "linear-gradient(170deg, transparent 50%, #b2a776 0%)"
  );
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <i
          className="fa-light fa-chevron-down"
          style={{
            fontSize: 24,
            color: "white",
          }}
        ></i>
      </components.DropdownIndicator>
    );
  };
  const courseData = useSelector((state) => state.CourseReducer.courseList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourseData());
  }, [dispatch]);
  const { contents } = useSelector((state) => state.ContentReducer);
  useEffect(() => {
    dispatch(getContentData());
  }, [dispatch]);
  const sectionTitlePage = contents.filter(
    (item) => item.category === "63bc373939d2a23b06d898a2"
  );
  const sectionTitleCourse = contents.filter(
    (item) => item.category === "63bc3d3739d2a23b06d8bafb"
  );
  const sectionIntroduction = contents.filter(
    (item) => item.category === "63bc39c139d2a23b06d8a316"
  );
  const sectionBooking = contents.filter(
    (item) => item.category === "63bc3d4539d2a23b06d8bb0e"
  );
  const getBg = (index) => {
    setBGDetail($("#detail-course-" + index)?.css("background"));
  };
  return (
    <div className={styles.course_page}>
      <div className="container">
        <div className={"heading" + " " + styles.header} data-aos="fade-up">
          <span>{sectionTitlePage[0]?.sub_title}</span>
          <h2 className={styles.title_page}>{sectionTitlePage[0]?.title}</h2>
          <div className="button">
            <button onClick={handleOpen1}>
              {sectionTitlePage[0]?.text_button}
            </button>
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
                Lợi ích học Golf tại <span>The Golf House?</span>
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
                      loader={({ src }) =>
                        `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                      }
                      src={
                        sectionIntroduction[0]?.images[
                          sectionIntroduction[0]?.images?.length - 1
                        ]?.source
                      }
                      width={66}
                      height={66}
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="info d-flex flex-column align-items-center">
                  <h5 className="text-center">
                    {sectionIntroduction[0]?.title}
                  </h5>
                  <p
                    className="text-center"
                    dangerouslySetInnerHTML={{
                      __html: sectionIntroduction[0]?.content,
                    }}
                  ></p>
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
                      loader={({ src }) =>
                        `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                      }
                      src={
                        sectionIntroduction[1]?.images[
                          sectionIntroduction[1]?.images?.length - 1
                        ]?.source
                      }
                      width={66}
                      height={66}
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="info d-flex flex-column align-items-center">
                  <h5 className="text-center">
                    {sectionIntroduction[1]?.title}
                  </h5>
                  <p
                    className="text-center"
                    dangerouslySetInnerHTML={{
                      __html: sectionIntroduction[1]?.content,
                    }}
                  ></p>
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
                    width={142}
                    height={136}
                    objectFit="cover"
                  />
                  <div className={styles.image}>
                    <Image
                      alt="item 1"
                      loader={({ src }) =>
                        `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                      }
                      src={
                        sectionIntroduction[2]?.images[
                          sectionIntroduction[2]?.images?.length - 1
                        ]?.source
                      }
                      width={66}
                      height={66}
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="info d-flex flex-column align-items-center">
                  <h5 className="text-center">
                    {sectionIntroduction[2]?.title}
                  </h5>
                  <p
                    className="text-center"
                    dangerouslySetInnerHTML={{
                      __html: sectionIntroduction[2]?.content,
                    }}
                  ></p>
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
                      loader={({ src }) =>
                        `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                      }
                      src={
                        sectionIntroduction[3]?.images[
                          sectionIntroduction[3]?.images?.length - 1
                        ]?.source
                      }
                      width={66}
                      height={66}
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="info d-flex flex-column align-items-center">
                  <h5 className="text-center">
                    {sectionIntroduction[3]?.title}
                  </h5>
                  <p
                    className="text-center"
                    dangerouslySetInnerHTML={{
                      __html: sectionIntroduction[3]?.content,
                    }}
                  ></p>
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
                      loader={({ src }) =>
                        `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                      }
                      src={
                        sectionIntroduction[4]?.images[
                          sectionIntroduction[4]?.images?.length - 1
                        ]?.source
                      }
                      width={66}
                      height={66}
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="info d-flex flex-column align-items-center">
                  <h5 className="text-center">
                    {sectionIntroduction[4]?.title}
                  </h5>
                  <p
                    className="text-center"
                    dangerouslySetInnerHTML={{
                      __html: sectionIntroduction[4]?.content,
                    }}
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.course} id="course">
        <div className={styles.top}>
          <div className="container">
            <span data-aos="fade-right">
              {sectionTitleCourse[0]?.sub_title}
            </span>
            <h2 data-aos="fade-right">{sectionTitleCourse[0]?.title}</h2>
            <p
              data-aos="fade-right"
              dangerouslySetInnerHTML={{
                __html: sectionTitleCourse[0]?.content,
              }}
            ></p>
          </div>
        </div>
        <div className="container">
          <div className="list" data-aos="fade-left">
            <Swiper
              breakpoints={{
                1200: {
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
              modules={[Pagination, Navigation, Autoplay]}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              onSwiper={(s) => setSwiper3(s)}
              className="mySwiper"
            >
              {courseData.map((item, index) => (
                <SwiperSlide
                  key={index}
                  onClick={() => {
                    $("html,body").animate(
                      {
                        scrollTop: $("#course-detail").offset().top,
                      },
                      "slow"
                    );
                    setDetailIndex(index);
                    getBg(index);
                  }}
                >
                  <div className="d-flex flex-column info">
                    <div>
                      <div className="image">
                        <Image
                          alt="Intro 1"
                          loader={({ src }) =>
                            `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                          }
                          src={item.thumb_image}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div
                        className="detail"
                        id={`detail-course-${index}`}
                        // style={{
                        //   background: `linear-gradient(170deg, transparent 50%, ${item.background} 0%)`,
                        // }}
                      >
                        {/* <div className="icon">
                          <Image
                            alt="Intro 1"
                            src={item.icon}
                            width={52}
                            height={52}
                            objectFit="cover"
                          />
                        </div> */}
                        <h5>{item.name}</h5>
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
          <div className="d-flex align-items-center flex-wrap-reverse flex-md-nowrap">
            <div className="d-flex justify-content-center justify-content-md-start left">
              <div className="swiper-slide">
                <div className="d-flex flex-column info">
                  <div>
                    <div className="image" data-aos="fade-right">
                      <Image
                        alt="Intro 1"
                        loader={({ src }) =>
                          `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                        }
                        src={courseData[detailIndex]?.thumb_image}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    {/* <div className="detail"></div> */}
                    <div
                      className="detail d-flex justify-content-end"
                      style={{
                        height:
                          window.screen.width < 780 &&
                          window.screen.width > 768 &&
                          removeAccents(courseData[detailIndex]?.name) ===
                            removeAccents("Tập luyện theo giờ")
                            ? 500
                            : 320,
                        background: bgDetail,
                      }}
                    >
                      <h5 onClick={handleOpen} data-aos="fade-right">
                        {courseData[detailIndex]?.name}
                      </h5>
                      <div data-aos="fade-right" className="button">
                        <button onClick={handleOpen1}>Nhận Tư Vấn</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="heading col-12 col-md-8 flex-wrap align-items-start">
              <span data-aos="fade-left">THÔNG TIN KHOÁ HỌC</span>
              <h2 data-aos="fade-left" style={{}}>
                {courseData[detailIndex]?.name}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: courseData[detailIndex]?.description,
                }}
                data-aos="fade-left"
              ></div>
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
            <h2>{sectionBooking[0]?.title}</h2>
          </div>
        </div>
        <div className={styles.bannerv2}>
          <Image
            alt="Booking banner"
            loader={({ src }) =>
              `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
            }
            src={
              sectionBooking[0]?.images[sectionBooking[0]?.images.length - 1]
                ?.source
            }
            layout="fill"
            objectFit="cover"
          />
          <div className={styles.content}>
            <div className="container h-100">
              <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                <div
                  className={
                    "d-flex flex-wrap col-12 col-md-10 col-lg-12 justify-content-end align-items-center" +
                    " " +
                    styles.search
                  }
                >
                  <div
                    className={"col-12 col-lg-9" + " " + styles.select_location}
                  >
                    <span className={styles.title}>Location</span>
                    <div className="d-flex align-items-center">
                      <i
                        className="fa-solid fa-location-dot"
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          address
                            ? window.open(
                                `https://www.google.com/maps/place/${address.lat}+${address.long}
                                `
                              )
                            : Swal.fire({
                                text: "Vui lòng chọn địa chỉ học...",
                                icon: "error",
                                showCancelButton: false,
                                confirmButtonText: "OK",
                              });
                        }}
                      ></i>
                      {!token || token?.length < 0 || token === "" ? (
                        <button type="text" onClick={handleOpen2}>
                          <span> Chọn vị trí học...</span>
                          <i
                            className="fa-light fa-chevron-down"
                            style={{
                              fontSize: 24,
                              color: "white",
                            }}
                          ></i>
                        </button>
                      ) : (
                        <Select
                          options={locationList["academy.location"]?.map(
                            (x) => {
                              return {
                                id: x.id,
                                label: x.name,
                                value: x.address,
                                lat: x.latitude,
                                long: x.longitude,
                              };
                            }
                          )}
                          styles={customStyles}
                          components={{ DropdownIndicator }}
                          noOptionsMessage={() => "Chưa có dữ liệu..."}
                          onChange={(value) => {
                            setAddress({
                              lat: value.lat,
                              long: value.long,
                            });
                            Cookies.set("location_id", value.id);
                            Cookies.set(
                              "program_id",
                              registration["academy.registration"].program_id[0]
                            );
                          }}
                          placeholder="Chọn địa chỉ học..."
                        />
                      )}
                    </div>
                  </div>
                  <div
                    className={
                      "col-12 col-lg-3 d-flex justify-content-end justify-content-lg-center align-center" +
                      " " +
                      styles.tool
                    }
                  >
                    <button
                      onClick={() => {
                        if (!token || token?.length < 0 || token === "") {
                          setClickBooking(true);
                          setClickLocation(false);
                          handleOpen2();
                        } else {
                          if (address) {
                            router.push("/booking");
                          } else {
                            Swal.fire({
                              text: "Vui lòng chọn địa chỉ học...",
                              icon: "error",
                              showCancelButton: false,
                              confirmButtonText: "OK",
                            });
                          }
                        }
                      }}
                    >
                      Booking <i className="fa-light fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
        <SignUpTrial
          errors={errors}
          loadingSignUpTrial={loadingSignUpTrial}
          register={register}
          onSubmit={onSubmit}
          reset={reset}
          watch={watch}
          control={control}
          handleSubmit={handleSubmit}
          handleClose={handleClose1}
          handleOpen5={handleOpen5}
        />
      )}
      {open2 && (
        <SignIn
          errors={errors2}
          register={register2}
          onSubmit={onSubmit2}
          handleSubmit={handleSubmit2}
          handleClose2={handleClose2}
          loading={loading}
          reset={reset2}
        />
      )}
      {open3 && (
        <Sucess handleClose3={handleClose3} handleOpen4={handleOpen4} />
      )}
      {open4 && <CheckInfo handleClose4={handleClose4} watch={watch} />}
      {open5 && (
        <SucessTrial handleClose5={handleClose5} handleOpen4={handleOpen4} />
      )}
    </div>
  );
}
export default Course;
