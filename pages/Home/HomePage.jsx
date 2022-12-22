import React from "react";
import styles from "./Home.module.scss";
import Image from "next/image";
import MainLayout from "../../components/layout/mainLayout";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFlip, Navigation, Pagination } from "swiper";
import {
  IntroList,
  NewsList,
  ShopList,
} from "../../utils/DataDemo/Home/dataHome";

const slideHome = [
  {
    img: "/images/Home/slide3.png",
    title: "THE GOLF HOUSE",
    subTitle: "Working on a new you",
    textButton: "Đăng ký",
    urlButton: "/academy/sign-up",
    openNewTab: false,
  },
  {
    img: "/images/Home/slide1.png",
    title: "BẮT ĐẦU",
    subTitle: "Hãy bắt đầu với niềm đam mê Golf của bạn",
    textButton: "Đăng ký",
    urlButton: "/academy/sign-up",
    openNewTab: false,
  },
  {
    img: "/images/Home/slide2.png",
    title: "BẮT ĐẦU",
    subTitle: "Hãy bắt đầu với niềm đam mê Golf của bạn",
    textButton: "Đăng ký",
    urlButton: "/academy/sign-up",
    openNewTab: false,
  },
];
const slideLogo = [
  "/images/Home/Donors/donor1.png",
  "/images/Home/Donors/donor2.png",
  "/images/Home/Donors/donor3.png",
  "/images/Home/Donors/donor4.png",
  "/images/Home/Donors/donor4.png",
  "/images/Home/Donors/donor4.png",
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
      <div className={styles.banner} id="banner">
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
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          onSwiper={(s) => {
            setSwiper(s);
          }}
        >
          {slideHome.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.image}>
                <Image alt={"Image"} src={item.img} layout="fill" />
                <div className="content">
                  <div className="container h-100">
                    <div className="d-flex h-100 justify-content-center align-items-center flex-column">
                      <h1>{item.title}</h1>
                      <p>{item.subTitle}</p>
                      <div>
                        <button className="btn-content">
                          {item.textButton}
                        </button>
                      </div>
                    </div>
                    <button
                      className="btn-prev"
                      onClick={() => swiper.slidePrev()}
                    >
                      <i className="fa-thin fa-arrow-left"></i>
                    </button>
                    <button
                      className="btn-next"
                      onClick={() => swiper.slideNext()}
                    >
                      <i className="fa-thin fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container">
        <div className={styles.intro}>
          <div className={styles.top + " " + "d-flex align-items-start"}>
            <div className="col-6">
              <span>GIỚI THIỆU</span>
              <h2>
                Tham gia <br /> The Golf House
              </h2>
            </div>
            <div className="col-6">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. <br /> <br /> Lorem Ipsum has been the industry{"'"}s
                standard dummy text ever since the 1500s. Lorem Ipsum is simply
                dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>
          <div className={"d-flex" + " " + styles.list}>
            {IntroList.map((item, index) => (
              <div className={"col-3" + " " + styles.item} key={index}>
                <div className={styles.info + " " + "d-flex flex-column"}>
                  <div>
                    <Image
                      alt="Intro 1"
                      src={item.image}
                      width={102}
                      height={102}
                    />
                    <h5>{item.title}</h5>
                  </div>
                  <div className="mt-auto">
                    <button className="d-flex align-items-center">
                      <span>Xem thêm</span>
                      <i className="fa-light fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.membership}>
          <div className="d-flex align-items-center">
            <div className={"col-6" + " " + styles.left}>
              <div
                className={
                  styles.header + " " + "d-flex flex-column align-items-end"
                }
              >
                <h2>2022</h2>
                <span>Bắt đầu</span>
              </div>
              <div className={styles.image1}>
                <Image
                  alt="Image 1"
                  src="/images/Home/MemberShip/mem1.png"
                  width={434}
                  height={580}
                />
              </div>
              <div className={styles.image2}>
                <Image
                  alt="Image 2"
                  src="/images/Home/MemberShip/mem2.png"
                  width={300}
                  height={361}
                />
              </div>
            </div>
            <div className={"col-6" + " " + styles.right}>
              <span>THÀNH VIÊN KHOÁ HỌC</span>
              <h3>Lộ trình học hợp lý</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
              <p>
                <span>T2-T6: 9 AM - 21 PM</span> <br />
                <span>T7: 9 AM - 20 PM</span>
              </p>
              <div>
                <button>Đăng ký</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.donar} id="donar">
          <div className="">
            <Swiper
              breakpoints={{
                1920: {
                  slidesPerView: 5,
                },
                1280: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 4,
                },
                767: {
                  slidesPerView: 2,
                },
                480: {
                  slidesPerView: 1,
                },
              }}
              // slidesPerView={5}
              spaceBetween={30}
              // pagination={{
              //   clickable: false,
              // }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {slideLogo.map((item) => (
                <SwiperSlide key={item}>
                  <Image alt="item 1" src={item} width={160} height={150} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className={styles.bannerv2}>
        <Image alt="Image 1" src="/images/Home/bannerv2.png" layout="fill" />
        <div className={styles.content}>
          <div className="container h-100">
            <div className="d-flex h-100 justify-content-center align-items-center flex-column">
              <span>KHOÁ HỌC</span>
              <h1>Nhiều sân Golf hiện đại</h1>
              <p></p>
              <div>
                <button className="btn-content">Đăng ký</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.trainer}>
        <div className="container">
          <div className="d-flex">
            <div className="col-5">
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
            <div className="col-7">
              <div className={"d-flex" + " " + styles.list}>
                <div className={"col-6" + " " + styles.item}>
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
                <div className={"col-6" + " " + styles.item}>
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
      </div>
      <div className={styles.team} id="team">
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
                  <Image
                    alt="Avatar"
                    src="/images/Home/Team/team1.png"
                    width={100}
                    height={100}
                  />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry{"'"}
                    s standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <span className="icon">“</span>
                  <h2>La Lisa</h2>
                  <span>Nhân viên kinh doanh</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container">
                <div className="content d-flex flex-column align-items-center">
                  <Image
                    alt="Avatar"
                    src="/images/Home/Team/team1.png"
                    width={100}
                    height={100}
                  />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry{"'"}
                    s standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <span className="icon">“</span>
                  <h2>La Lisa</h2>
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
      <div className={styles.moreImage}>
        <div className={styles.item}>
          <Image alt="Img 1" src="/images/Home/More/img1.png" layout="fill" />
        </div>
        <div className={styles.item}>
          <Image alt="Img 1" src="/images/Home/More/img2.png" layout="fill" />
        </div>
        <div className={styles.item}>
          <Image alt="Img 1" src="/images/Home/More/img3.png" layout="fill" />
        </div>
        <div className={styles.item}>
          <Image alt="Img 1" src="/images/Home/More/img4.png" layout="fill" />
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
      <div className={styles.shop}>
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
                  1280: {
                    slidesPerView: 4,
                  },
                  992: {
                    slidesPerView: 4,
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
                      <div className="info d-flex flex-column align-items-center">
                        <h5 className="text-center">{item.name}</h5>
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="button">
            <button style={{ marginTop: 100 }}>Xem thêm</button>
          </div>
        </div>
      </div>
      <div className={styles.news}>
        <div className="container">
          <div className="heading">
            <span className="text-center">TIN TỨC</span>
            <h2 className="text-center">Các tin tức, sự kiện</h2>
          </div>
          <div className={"d-flex" + " " + styles.list}>
            {NewsList.map((item, index) => (
              <div key={index} className={"col-4" + " " + styles.item}>
                <div className={styles.info}>
                  <div className={styles.image}>
                    <Image
                      alt={"Image" + index + 1}
                      src={item.image}
                      layout="fill"
                    ></Image>
                  </div>
                  <h5>{item.title}</h5>
                  <span>{item.time}</span>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="button">
            <button>Xem thêm</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
