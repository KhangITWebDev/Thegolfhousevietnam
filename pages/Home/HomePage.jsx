import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import Image from "next/image";
import CountUp, { useCountUp } from "react-countup";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { getNewData } from "../../store/redux/NewsEvents/news.action";
import { getBannerData } from "../../store/redux/Banner/banner.action";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFlip, Navigation, Pagination } from "swiper";
import {
  IntroList,
  NewsList,
  ShopList,
} from "../../utils/DataDemo/Home/dataHome";
import { removeAccents, time } from "../../utils/function";

const slideHome = [
  {
    img: "/images/Home/slide1.png",
    title: "ACADEMY",
    subTitle:
      "<p>Dù bạn là người mới bắt đầu tìm hiểu, hay người chơi Golf muốn nâng cao trình độ.</p> <p>Học viện The Golf House luôn có lộ trình phù hợp cho bạn!</p>",
    textButton: "Tìm hiểu thêm",
    urlButton: "/academy",
    openNewTab: false,
  },
  {
    img: "/images/Home/slide2.png",
    title: "PROSHOP",
    subTitle:
      "<p>Gậy, quần áo, phụ kiện chơi Golf,... </p><p>Một địa điểm với đầy đủ mọi sản phẩm hỗ trợ bạn trong hành trình khám phá Golf của mình.</p>",
    textButton: "Tìm hiểu thêm",
    urlButton: "/proshop",
    openNewTab: false,
  },
  {
    img: "/images/Home/slide3.png",
    title: "HAIR, NAIL & SPA",
    subTitle:
      "<p>Chăm sóc bản thân sau thời gian tập luyện là điều cần thiết.</p> <p>Tận hưởng thời gian thư giãn tuyệt vời với các dịch vụ chăm sóc tóc,chăm sóc da, massage cao cấp.</p>",
    textButton: "Tìm hiểu thêm",
    urlButton: "",
    openNewTab: false,
  },
  {
    img: "/images/Home/slide4.png",
    title: "VIP LOUNGE",
    subTitle:
      "<p>Không gian riêng tư, rộng rãi, được thiết kề phù hợp cho những hoạt động giải trí kết nối cộng đồng chung niềm đam mê.</p>",
    textButton: "Tìm hiểu thêm",
    urlButton: "",
    openNewTab: false,
  },
];
const slideLogo = [
  "/images/Home/Donors/donor1.png",
  "/images/Home/Donors/donor2.png",
  "/images/Home/Donors/donor3.png",
  "/images/Home/Donors/donor4.png",
  "/images/Home/Donors/donor5.png",
  "/images/Home/Donors/donor2.png",
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

function HomePage(props) {
  const { news } = useSelector((state) => state.NewsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewData());
  }, [dispatch]);

  const { banners } = useSelector((state) => state.BannerReducer);
  useEffect(() => {
    dispatch(getBannerData());
  }, [dispatch]);

  const bannerHome = banners.filter((item) => item.danh_muc === "Slide Home");
  const trainerHome = banners.filter(
    (item) => item.danh_muc === "Trainer Home"
  );
  console.log(banners);
  const router = useRouter();
  const [swiper, setSwiper] = React.useState(null);
  const [swiper2, setSwiper2] = React.useState(null);
  const [swiper3, setSwiper3] = React.useState(null);
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
                      <div className="w-100 d-flex justify-content-center">
                        <button
                          data-aos="fade-right"
                          className="btn-content"
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
        {/* <div className={styles.intro}>
          <div
            className={styles.top + " " + "d-flex flex-wrap align-items-start"}
          >
            <div className="col-12 col-md-6">
              <span>GIỚI THIỆU</span>
              <h2>
                Tham gia <br /> The Golf House
              </h2>
            </div>
            <div className="col-12 col-md-6">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. <br /> <br /> Lorem Ipsum has been the industry{"'"}s
                standard dummy text ever since the 1500s. Lorem Ipsum is simply
                dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>
          <div className={"d-flex flex-wrap" + " " + styles.list}>
            {IntroList.map((item, index) => (
              <div
                className={"col-12 col-sm-6 col-lg-3" + " " + styles.item}
                key={index}
              >
                <div
                  className={
                    styles.info +
                    " " +
                    "d-flex flex-column align-items-center align-items-sm-start"
                  }
                >
                  <div className="d-flex flex-column align-items-center align-items-sm-start">
                    <Image
                      alt="Intro 1"
                      src={item.image}
                      width={102}
                      height={102}
                    />
                    <h5>{item.title}</h5>
                  </div>
                  <div className="mt-auto w-100">
                    <button className="d-flex align-items-center">
                      <span>Xem thêm</span>
                      <i className="fa-light fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <div className={styles.membership}>
          <div className="d-flex flex-wrap align-items-center">
            <div
              className={"col-12 col-md-6" + " " + styles.left}
              data-aos="fade-right"
            >
              <div
                className={
                  styles.header + " " + "d-flex flex-column align-items-end"
                }
              >
                <CountUp start={1000} end={2022} delay={0} duration={2}>
                  {({ countUpRef }) => (
                    <div>
                      <h2 ref={countUpRef}>2022</h2>
                    </div>
                  )}
                </CountUp>
                <span>Bắt đầu</span>
              </div>
              <div className={styles.image1}>
                <Image
                  alt="Image 1"
                  src="/images/Home/MemberShip/mem1.png"
                  layout="fill"
                />
              </div>
              {/* <div className={styles.image2}>
                <Image
                  alt="Image 2"
                  src="/images/Home/MemberShip/mem2.png"
                  width={300}
                  height={361}
                />
              </div> */}
            </div>
            <div className={"col-12 col-md-6" + " " + styles.right}>
              <span data-aos="fade-left">THE GOLF HOUSE</span>
              <h3 data-aos="fade-left">Hệ sinh thái The Golf House Vietnam</h3>
              <p data-aos="fade-left">
                Tại The Golf House Vietnam, tạo nên môi trường giúp học viên
                trải nghiệm việc học và chơi Golf dễ dàng và hiệu quả nhất là ưu
                tiên hàng đầu của chúng tôi.
              </p>
              <div data-aos="fade-left">
                <button>Đăng ký</button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.donar} id="donar">
          <div className="">
            <Swiper
              breakpoints={{
                1920: {
                  slidesPerView: 5,
                },
                1440: {
                  slidesPerView: 5,
                },
                1280: {
                  slidesPerView: 5,
                },
                992: {
                  slidesPerView: 4,
                },
                767: {
                  slidesPerView: 3,
                },
                480: {
                  slidesPerView: 2,
                },
              }}
              slidesPerView={1}
              loop={true}
              spaceBetween={30}
              // pagination={{
              //   clickable: true,
              // }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {slideLogo.map((item) => (
                <SwiperSlide key={item}>
                  <Image alt="item 1" src={item} width={120} height={120} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div> */}
      </div>
      <div className={styles.bannerv2} data-aos="fade-up">
        <Image
          loader={({ src }) =>
            `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
          }
          alt="Image 1"
          src={trainerHome[0]?.hinh_anh}
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.content}>
          <div className="container h-100">
            <div className="d-flex h-100 justify-content-center align-items-center flex-column">
              <span data-aos="fade-right">ĐỘI NGŨ HUẤN LUYỆN</span>
              <h1 data-aos="fade-left">{trainerHome[0]?.tieu_de}</h1>
              <div
                data-aos="fade-right"
                dangerouslySetInnerHTML={{
                  __html: trainerHome[0]?.mo_ta,
                }}
              ></div>
              <div
                data-aos="fade-left"
                onClick={() => router.push(trainerHome[0]?.link)}
              >
                <button className="btn-content">
                  {trainerHome[0]?.action}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.trainer}>
        <div className="container">
          <div className="d-flex flex-wrap">
            <div className="col-12 col-lg-5">
              <div className={styles.content}>
                <span>HUẤN LUYỆN VIÊN</span>
                <h2>Dày dặn kinh nghiệm</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
                <button>Đăng ký</button>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className={"d-flex flex-wrap" + " " + styles.list}>
                <div className={"col-12 col-sm-6" + " " + styles.item}>
                  <div className={styles.info}>
                    <Image
                      alt="Trainer 1"
                      src="/images/Home/Trainer/trainer1.png"
                      layout="fill"
                    />
                    <div className={styles.detail}>
                      <h5>Lewis Dawn</h5>
                      <span>Trainer</span>
                    </div>
                  </div>
                </div>
                <div className={"col-12 col-sm-6" + " " + styles.item}>
                  <div className={styles.info}>
                    <Image
                      alt="Trainer 2"
                      src="/images/Home/Trainer/trainer2.png"
                      layout="fill"
                    />
                    <div className={styles.detail}>
                      <h5>Jennie Kim</h5>
                      <span>Trainer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
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
                  bắt buộc hệ thống golf chuyên nghiệp phải mạnh, được xây dựng
                  bài bản. Tôi tin rằng mô hình của The Golf House Vietnam chắc
                  chắn sẽ góp phần giải quyết bài toán đó. Tôi sẽ cống hiến hết
                  mình để đưa Golf chuyên nghiệp phát triển tại thị trường Việt
                  Nam, giúp đào tạo một thế hệ Golfer giúp Golf Việt Nam vươn
                  tầm khu vực và thế giới.
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
                  Trong 19 năm làm việc trong ngành Golf, tôi đã học hỏi và trải
                  nghiệm nhiều lối kỹ thuật đa dạng từ Mỹ, Nam Phi tới châu Âu,
                  giảng dạy cho nhiều lứa tuổi khác nhau, bao gồm cả trẻ nhỏ.
                  Tôi tự tin sẽ mang những kiến thức của mình tới The Golf House
                  Vietnam để khám phá ra cách Swing hiệu quả nhất cho từng học
                  viên.
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
        <div className={styles.item} data-aos="fade-right">
          <Image alt="Img 1" src="/images/Home/More/img1.png" layout="fill" />
        </div>
        <div className={styles.item} data-aos="fade-down">
          <Image alt="Img 1" src="/images/Home/More/img2.png" layout="fill" />
        </div>
        <div className={styles.item} data-aos="fade-up">
          <Image alt="Img 1" src="/images/Home/More/img3.png" layout="fill" />
        </div>
        <div className={styles.item} data-aos="fade-left">
          <Image alt="Img 1" src="/images/Home/More/img4.png" layout="fill" />
        </div>
      </div>
      {/* <div className={styles.course} id="course">
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
              {slideCourse.map((item) => (
                <SwiperSlide key={item}>
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
      </div> */}
      {/* <div className={styles.shop}>
        <div className="container">
          <div className="heading">
            <span className="text-center">SHOP</span>
            <h2 className="text-center">Các sản phẩm nổi bật</h2>
          </div>
          <div id="shop">
            <div className="">
              <Swiper
                breakpoints={{
                  1920: {
                    slidesPerView: 4,
                  },
                  1440: {
                    slidesPerView: 4,
                  },
                  1080: {
                    slidesPerView: 4,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                  480: {
                    slidesPerView: 1,
                  },
                }}
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {ShopList.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="content h-100 d-flex flex-column align-items-center">
                      <div className="image">
                        <Image
                          alt="item 1"
                          src={item.image}
                          width={250}
                          height={250}
                        />
                      </div>
                      <div className="info h-100 d-flex flex-column align-items-center">
                        <h5 className="text-center">{item.name}</h5>
                        <div className="mt-auto">
                          <p className="text-center">{item.price}</p>
                          <div className="rate">
                            {Array(item.rate)
                              .fill()
                              .map((i) => (
                                <i key={i} className="fa-solid fa-star"></i>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="button">
            <button
              style={{ marginTop: 100 }}
              onClick={() => router.push("/proshop")}
            >
              Xem thêm
            </button>
          </div>
        </div>
      </div> */}
      <div className={styles.news}>
        <div className="container">
          <div className="heading" data-aos="fade-up">
            <span className="text-center">TIN TỨC</span>
            <h2 className="text-center">Các tin tức, sự kiện</h2>
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
                <div className={styles.info + " " + "h-100 d-flex flex-column"}>
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
                        router.push(`/news-events/${removeAccents(item.title)}`)
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
  );
}

export default HomePage;
