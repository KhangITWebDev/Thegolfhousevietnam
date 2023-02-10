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
  getUserRegisterData,
  PostSignTrial,
} from "../../store/redux/CourseReducer/course.action";
import { getContentData } from "../../store/redux/LoadContentReducer/content.action";
import { removeAccents } from "../../utils/function";
import styles from "./Course.module.scss";
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
  const { userRegister } = useSelector((state) => state.CourseReducer);
  const dispatch = useDispatch();
  const [loadingSignUpTrial, setLoadingSignUpTrial] = useState(false);
  const onSubmit = (data) => {
    const findEmail = userRegister.findIndex(
      (x) => x.email === watch("from_email")
    );
    const findPhone = userRegister.findIndex(
      (x) => x.dien_thoai === watch("from_phone")
    );
    setLoadingSignUpTrial(true);
    const formState = {
      from_name: data.from_name,
      from_phone: data.from_phone,
      from_email: data.from_email,
      from_job: data.from_job.label,
    };
    setTimeout(() => {
      if (findEmail >= 0) {
        setLoadingSignUpTrial(false);
        Swal.fire({
          text: `Email này đã tồn tại`,
          icon: "error",
          showCancelButton: false,
          confirmButtonText: "Đồng ý",
        });
      } else if (findPhone >= 0) {
        setLoadingSignUpTrial(false);
        Swal.fire({
          text: `Số điên thoại đã tồn tại`,
          icon: "error",
          showCancelButton: false,
          confirmButtonText: "Đồng ý",
        });
      } else {
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
                dispatch(
                  PostSignTrial({
                    ten_kh: data.from_name,
                    dien_thoai: data.from_phone,
                    email: data.from_email,
                    cong_viec: data.from_job.label,
                    register_number: String(userRegister?.length + 1) || "1",
                  })
                );
                setLoadingSignUpTrial(false);
                Swal.fire({
                  title: "<h5>Đăng ký thành công</h5>",
                  text: `Cảm ơn anh/chị đã quan tâm tới dịch vụ của The Golf House Việt Nam.
                  Chuyên viên tư vấn của chúng tôi sẽ liên hệ tới anh/chị trong thời
                  gian sớm nhất.`,
                  icon: "success",
                  showCancelButton: false,
                  confirmButtonText: "Kiểm tra",
                  allowOutsideClick: false,
                }).then((result) => {
                  if (result.isConfirmed) {
                    handleClose1();
                    handleOpen4();
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
      }
    }, 2000);
  };
  const [loading, setLoading] = useState(false);
  const token = Cookies.get("access_token");
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
        Cookies.set("erp_token", resApi?.result?.erp_token);
        setOpen2(false);
      }
    }, 2000);
  };
  const router = useRouter();
  const [address, setAddress] = useState();
  const { locationList } = useSelector((state) => state.BookingReducer);
  const { registration } = useSelector((state) => state.BookingReducer);
  useEffect(() => {
    dispatch(getRegistrationData());
    dispatch(getUserRegisterData());
    dispatch(getLocationData());
  }, [token]);
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
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const handleOpen1 = () => {
    setOpen1(true);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
    setOpen(false);
    setOpen5(false);
  };
  const handleClose1 = () => setOpen1(false);
  const handleOpen2 = () => {
    setOpen2(true);
    setOpen(false);
    setOpen1(false);
    setOpen3(false);
    setOpen4(false);
    setOpen5(false);
  };
  const handleClose2 = () => setOpen2(false);
  const handleOpen3 = () => {
    setOpen3(true);
    setOpen2(false);
    setOpen1(false);
    setOpen(false);
    setOpen4(false);
    setOpen5(false);
  };
  const handleClose3 = () => setOpen3(false);
  const handleOpen4 = () => {
    setOpen4(true);
    setOpen2(false);
    setOpen3(false);
    setOpen1(false);
    setOpen(false);
    setOpen5(false);
  };
  const handleClose4 = () => setOpen4(false);
  const handleOpen5 = () => {
    setOpen5(true);
    setOpen4(false);
    setOpen2(false);
    setOpen3(false);
    setOpen1(false);
    setOpen(false);
  };
  const handleClose5 = () => setOpen5(false);
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
  const SectionTrainee = contents.filter(
    (item) => item.category === "63e356cc234bcc47f71bc040"
  );
  const getBg = (index) => {
    setBGDetail($("#detail-course-" + index)?.css("background"));
  };
  useEffect(() => {
    $("#course-team .swiper-pagination-bullet").each(function (indexC) {
      $(this).css({
        backgroundImage: `url(https://api.fostech.vn${
          SectionTrainee[indexC]?.images[
            SectionTrainee[indexC]?.images?.length - 1
          ]?.source
        }?access_token=7d7fea98483f31af4ac3cdd9db2e4a93)`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        opacity: 1,
      });
    });
  }, [SectionTrainee]);
  return (
    <div className={styles.course_page}>
      <div className="container">
        <div className={"heading" + " " + styles.header} data-aos="fade-down">
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
        <div className={styles.training} id="training" data-aos="fade-right">
          <div className={styles.list + " " + "d-flex flex-wrap"}>
            <div
              className={
                "col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center" +
                " " +
                styles.item
              }
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
              <div className={styles.content}>
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
              <div className={styles.content}>
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
              <div className={styles.content}>
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
              <div className={styles.content}>
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
              <div className={styles.content}>
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
      <div className={styles.course} id="course" data-aos="fade-right">
        <div className={styles.top}>
          <div className="container">
            <span>{sectionTitleCourse[0]?.sub_title}</span>
            <h2>{sectionTitleCourse[0]?.title}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: sectionTitleCourse[0]?.content,
              }}
            ></p>
          </div>
        </div>
        <div className="container">
          <div className="list">
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
      <div
        className={styles.course_detail}
        id="course-detail"
        data-aos="fade-right"
      >
        <div className="container">
          <div className="d-flex align-items-center flex-wrap-reverse flex-md-nowrap">
            <div className="d-flex justify-content-center justify-content-md-start left">
              <div className="swiper-slide">
                <div className="d-flex flex-column info">
                  <div>
                    <div className="image">
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
                      <h5 onClick={handleOpen}>
                        {courseData[detailIndex]?.name}
                      </h5>
                      <div className="button">
                        <button onClick={handleOpen1}>Nhận Tư Vấn</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="heading col-12 col-md-8 flex-wrap align-items-start">
              <span>THÔNG TIN KHOÁ HỌC</span>
              <h2 style={{}}>{courseData[detailIndex]?.name}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: courseData[detailIndex]?.description,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.team} id="course-team" data-aos="fade-right">
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
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            onSwiper={(s) => {
              setSwiper2(s);
            }}
          >
            <SwiperSlide>
              <div className="container">
                <div className="content d-flex flex-column align-items-center">
                  <span className="icon">“</span>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: SectionTrainee[0]?.content,
                    }}
                  ></div>
                  <h2>{SectionTrainee[0]?.title}</h2>
                  <span>{SectionTrainee[0]?.sub_title}</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container">
                <div className="content d-flex flex-column align-items-center">
                  <span className="icon">“</span>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: SectionTrainee[1]?.content,
                    }}
                  ></div>
                  <h2>{SectionTrainee[1]?.title}</h2>
                  <span>{SectionTrainee[1]?.sub_title}</span>
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
      <div className={styles.calendar} id="calendar" data-aos="fade-right">
        <div className="container">
          <div className="heading">
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
