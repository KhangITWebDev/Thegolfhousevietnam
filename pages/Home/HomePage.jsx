import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import CountUp from "react-countup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import * as yup from "yup";
import CheckInfo from "../../components/Modal/CheckInfo";
import SignUpTrial from "../../components/Modal/SignUpTrial";
import SucessTrial from "../../components/Modal/SucessTrial";
import { getBannerData } from "../../store/redux/Banner/banner.action";
import { getContentData } from "../../store/redux/LoadContentReducer/content.action";
import { getNewData } from "../../store/redux/NewsEvents/news.action";
import { removeAccents, time } from "../../utils/function";
import styles from "./Home.module.scss";
const PHONE_REGEX = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
const schema = yup.object().shape({
  name: yup.string().required("Vui lòng điền họ tên"),
  phone: yup
    .string()
    .required("Vui lòng điền số điện thoại")
    .min(10, "Số điện thoại phải nhiều hơn 9 ký tự")
    .max(12, "Sô điện thoại phải ít hơn 12 ký tự")
    .matches(PHONE_REGEX, "Số điện thoại không hợp lệ"),
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng điền email"),
  job: yup
    .object()
    .shape({
      label: yup.string().required("Vui lòng chọn nghề nghiệp"),
      value: yup.string().required("Vui lòng chọn nghề nghiệp"),
    })
    .nullable()
    .required("Vui lòng chọn nghề nghiệp"),
});
function HomePage(props) {
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
  const onSubmit = (data) => {
    handleOpen5();
  };
  const { news } = useSelector((state) => state.NewsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewData());
  }, [dispatch]);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => {
    setOpen1(true);
    setOpen4(false);
    setOpen5(false);
  };
  const [open4, setOpen4] = React.useState(false);
  const handleOpen4 = () => {
    setOpen4(true);
    setOpen1(false);
    setOpen5(false);
  };
  const handleClose4 = () => setOpen4(false);
  const [open5, setOpen5] = React.useState(false);
  const handleOpen5 = () => {
    setOpen5(true);
    setOpen4(false);
    setOpen1(false);
  };
  const handleClose5 = () => setOpen5(false);
  const handleClose1 = () => setOpen1(false);
  const { banners } = useSelector((state) => state.BannerReducer);
  useEffect(() => {
    dispatch(getBannerData());
  }, [dispatch]);
  const { contents } = useSelector((state) => state.ContentReducer);
  useEffect(() => {
    dispatch(getContentData());
  }, [dispatch]);

  const bannerHome = banners.filter((item) => item.danh_muc === "Slide Home");
  const contentGolf = contents.filter(
    (item) => item.category === "63bbe8a6e17e4f12eead3ec1"
  );
  const sectionTrainer = contents.filter(
    (item) => item.category === "63bc0be839d2a23b06d86307"
  );
  const sectionMoreImage = contents.filter(
    (item) => item.category === "63bc0cd939d2a23b06d867af"
  );
  const sectiontitleNew = contents.filter(
    (item) => item.category === "63bc49ef39d2a23b06d90d05"
  );
  const router = useRouter();
  const [swiper, setSwiper] = React.useState(null);
  const [swiper2, setSwiper2] = React.useState(null);
  const commingSoon = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Comming Soon",
      text: "We are comming soon",
      icon: "warning",
      showCancelButton: false,
      confirmButtonText: "OK",
    });
  };
  return (
    <>
      <div className={styles.home_page}>
        <div className={styles.banner} id="banner" data-aos="fade-up">
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
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            onSwiper={(s) => {
              setSwiper(s);
            }}
          >
            {bannerHome.slice(0, 5).map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.image_container}>
                  <Image
                    loader={({ src }) =>
                      `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                    }
                    alt={"Image"}
                    src={item.hinh_anh}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="content">
                    <div className="container h-100">
                      <div className="d-flex h-100 justify-content-center align-items-center flex-column">
                        <h1 data-aos="fade-right">{item.tieu_de}</h1>
                        <div
                          data-aos="fade-left"
                          dangerouslySetInnerHTML={{
                            __html: item.mo_ta,
                          }}
                        ></div>
                        <div className="button w-100 d-flex justify-content-center">
                          <button
                            data-aos="fade-right"
                            onClick={(e) =>
                              item.link.length > 0 && item.link != ""
                                ? router.push(item.link)
                                : commingSoon(e)
                            }
                          >
                            {item.action}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <button className="btn-prev" onClick={() => swiper.slidePrev()}>
              <i className="fa-thin fa-arrow-left"></i>
            </button>
            <button className="btn-next" onClick={() => swiper.slideNext()}>
              <i className="fa-thin fa-arrow-right"></i>
            </button>
          </Swiper>
        </div>
        <div className="container">
          <div className={styles.membership}>
            <div className="d-flex flex-wrap align-items-center">
              <div
                className={"col-12 col-md-6" + " " + styles.left}
                data-aos="fade-right"
              >
                <div className={styles.image1}>
                  <Image
                    alt="Image 1"
                    loader={({ src }) =>
                      `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                    }
                    src={
                      contentGolf[0]?.images[contentGolf[0]?.images?.length - 2]
                        ?.source
                    }
                    width={547}
                    height={676}
                    objectFit="cover"
                  />
                </div>
                <div className={styles.image2}>
                  <Image
                    alt="Image 2"
                    loader={({ src }) =>
                      `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                    }
                    src={
                      contentGolf[0]?.images[contentGolf[0]?.images?.length - 1]
                        ?.source
                    }
                    width={300}
                    height={361}
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className={"col-12 col-md-6" + " " + styles.right}>
                <span data-aos="fade-left">{contentGolf[0]?.sub_title}</span>
                <h3 data-aos="fade-left">{contentGolf[0]?.title}</h3>
                <p
                  dangerouslySetInnerHTML={{ __html: contentGolf[0]?.content }}
                ></p>
                <div
                  className="button justify-content-start"
                  data-aos="fade-left"
                >
                  <button onClick={handleOpen1}>
                    {contentGolf[0]?.text_button}
                  </button>
                </div>
              </div>
              {open1 && (
                <SignUpTrial
                  errors={errors}
                  register={register}
                  onSubmit={onSubmit}
                  control={control}
                  reset={reset}
                  handleSubmit={handleSubmit}
                  handleClose={handleClose1}
                  handleOpen5={handleOpen5}
                />
              )}
              {open4 && <CheckInfo handleClose4={handleClose4} watch={watch} />}
              {open5 && (
                <SucessTrial
                  handleClose5={handleClose5}
                  handleOpen4={handleOpen4}
                />
              )}
            </div>
          </div>
        </div>
        <div className={styles.bannerv2} data-aos="fade-up">
          <Image
            loader={({ src }) =>
              `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
            }
            alt="Image 1"
            src={
              sectionTrainer[0]?.images[sectionTrainer[0]?.images.length - 1]
                .source
            }
            layout="fill"
            objectFit="cover"
          />
          <div className={styles.content}>
            <div className="container h-100">
              <div className="d-flex h-100 justify-content-center align-items-center flex-column">
                <span data-aos="fade-right">
                  {sectionTrainer[0]?.sub_title}
                </span>
                <h1 data-aos="fade-left">{sectionTrainer[0]?.title}</h1>
                <div
                  data-aos="fade-right"
                  dangerouslySetInnerHTML={{
                    __html: sectionTrainer[0]?.content,
                  }}
                ></div>
                <div
                  className="button"
                  data-aos="fade-left"
                  onClick={() => router.push(sectionTrainer[0]?.url_button)}
                >
                  <button>{sectionTrainer[0]?.text_button}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.team} id="team" data-aos="fade-up">
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
                  <Image
                    alt="Avatar"
                    src="/images/Home/Team/team1.png"
                    width={100}
                    height={100}
                    data-aos="fade-right"
                  />
                  <p data-aos="fade-left">
                    Cũng như tất cả các môn thể thao khác, Golf muốn phát triển
                    bắt buộc hệ thống golf chuyên nghiệp phải mạnh, được xây
                    dựng bài bản. Tôi tin rằng mô hình của The Golf House
                    Vietnam chắc chắn sẽ góp phần giải quyết bài toán đó. Tôi sẽ
                    cống hiến hết mình để đưa Golf chuyên nghiệp phát triển tại
                    thị trường Việt Nam, giúp đào tạo một thế hệ Golfer giúp
                    Golf Việt Nam vươn tầm khu vực và thế giới.
                  </p>
                  <span className="icon" data-aos="fade-right">
                    “
                  </span>
                  <h2 data-aos="fade-left">Ryan O’Flaherty</h2>
                  <span data-aos="fade-right">Giám đốc điều hành</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container">
                <div className="content d-flex flex-column align-items-center">
                  <Image
                    alt="Avatar"
                    src="/images/Home/Team/team2.png"
                    width={100}
                    height={100}
                    data-aos="fade-right"
                  />
                  <p data-aos="fade-left">
                    Trong 19 năm làm việc trong ngành Golf, tôi đã học hỏi và
                    trải nghiệm nhiều lối kỹ thuật đa dạng từ Mỹ, Nam Phi tới
                    châu Âu, giảng dạy cho nhiều lứa tuổi khác nhau, bao gồm cả
                    trẻ nhỏ. Tôi tự tin sẽ mang những kiến thức của mình tới The
                    Golf House Vietnam để khám phá ra cách Swing hiệu quả nhất
                    cho từng học viên.
                  </p>
                  <span data-aos="fade-right" className="icon">
                    “
                  </span>
                  <h2 data-aos="fade-left">Jacques Du Toit</h2>
                  <span data-aos="fade-right">HLV PGA</span>
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
        <div className={styles.moreImage}>
          {sectionMoreImage[0]?.images.slice(0, 4).map((item) => (
            <div key={item} className={styles.item} data-aos="fade-right">
              <Image
                alt="Img 1"
                loader={({ src }) =>
                  `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                }
                src={item.source}
                layout="fill"
              />
            </div>
          ))}
        </div>
        <div className={styles.news}>
          <div className="container">
            <div className="heading" data-aos="fade-up">
              <span className="text-center">
                {sectiontitleNew[0]?.sub_title}
              </span>
              <h2 className="text-center">{sectiontitleNew[0]?.title}</h2>
            </div>
            <div
              className={
                "d-flex flex-wrap justify-content-center" + " " + styles.list
              }
            >
              {news.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className={"col-12 col-sm-6 col-lg-4" + " " + styles.item}
                  data-aos={
                    index === 0
                      ? "fade-right"
                      : index === 1
                      ? "fade-down"
                      : "fade-left"
                  }
                >
                  <div
                    className={styles.info + " " + "h-100 d-flex flex-column"}
                  >
                    <div>
                      <div className={styles.image}>
                        <Image
                          alt={"Image" + index + 1}
                          loader={({ src }) =>
                            `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                          }
                          src={item.picture}
                          layout="fill"
                        ></Image>
                      </div>
                      <h5
                        onClick={() =>
                          router.push(
                            `/news-events/${removeAccents(item.title)}`
                          )
                        }
                      >
                        {item.title}
                      </h5>
                    </div>
                    <div className={styles.bottom}>
                      <span>{time(item.date_created)}</span>
                      <p>{item.mieu_ta_ngan}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="button" data-aos="fade-up">
              <button onClick={() => router.push("/news-events")}>
                Xem thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
