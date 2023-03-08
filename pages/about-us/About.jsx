import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getContentData } from "../../store/redux/LoadContentReducer/content.action";
import styles from "./About.module.scss";

function About(props) {
  const [swiper, setSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const dispatch = useDispatch();
  const { contents } = useSelector((state) => state.ContentReducer);
  useEffect(() => {
    dispatch(getContentData());
  }, []);
  const id = localStorage.getItem("id_url");
  useEffect(() => {
    if (id) {
      const section = document.querySelector(`#${id}`);
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [id]);
  const sectionFounder = contents.filter(
    (item) => item.category === "63bc121139d2a23b06d86e59"
  );
  const sectionVision = contents.filter(
    (item) => item.category === "63bc14c639d2a23b06d87101"
  );
  const sectionIntro = contents.filter(
    (item) => item.category === "63bc185f39d2a23b06d87263"
  );
  return (
    <div className={styles.about_page}>
      <div id="founder"></div>
      <div className="container">
        <div className={styles.membership} data-aos="fade-right">
          <div className="d-flex flex-wrap align-items-center">
            <div className={"col-12 col-md-6" + " " + styles.left}>
              <div className={styles.image1}>
                <Image
                  alt="Image 1"
                  loader={({ src }) =>
                    `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                  }
                  src={
                    sectionFounder[0]?.images[
                      sectionFounder[0]?.images.length - 2
                    ]?.source
                  }
                  width={434}
                  height={580}
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
                    sectionFounder[0]?.images[
                      sectionFounder[0]?.images.length - 1
                    ]?.source
                  }
                  width={300}
                  height={361}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className={"col-12 col-md-6" + " " + styles.right}>
              <span>{sectionFounder[0]?.sub_title}</span>
              <h3>{sectionFounder[0]?.title}</h3>
              <p
                dangerouslySetInnerHTML={{ __html: sectionFounder[0]?.content }}
              ></p>
              {/* <div >
                <button>Đăng ký</button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="wrap-special">
          <div className={styles.vision} id="vision" data-aos="fade-right">
            <h5 className={styles.mobile}>
              <span>Tầm nhìn</span> <span>sứ mệnh</span>
            </h5>
            <div className={"d-flex flex-wrap" + " " + styles.detail}>
              <div className="col-2 col-sm-4">
                <h5>
                  <span>Tầm nhìn</span> <span>Sứ mệnh</span>
                </h5>
              </div>
              <div className={"col-12 col-sm-8 flex-wrap" + " " + styles.image}>
                <Image
                  alt="Image Course"
                  loader={({ src }) =>
                    `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                  }
                  src={
                    sectionVision[0]?.images[
                      sectionVision[0]?.images.length - 1
                    ]?.source
                  }
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
            </div>
            <div className={styles.info}>
              <Swiper
                effect={"flip"}
                grabCursor={true}
                slidesPerView={1}
                spaceBetween={30}
                pagination={false}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                // onActiveIndexChange={(s) => setActiveSlide(s.realIndex)}
              >
                <div className={styles.content}>
                  <SwiperSlide>
                    <p
                      className="desc"
                      dangerouslySetInnerHTML={{
                        __html: sectionVision[0]?.content,
                      }}
                    ></p>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
        <div id="about-us"></div>
        <div className={styles.welcome} id="about" data-aos="fade-right">
          <div className={styles.info}>
            <div
              className={
                "d-flex justify-content-between" + " " + styles.navigation
              }
            >
              <span onClick={() => swiper.slidePrev()}>
                <i className="fa-regular fa-chevron-left"></i>
              </span>
              <span onClick={() => swiper.slideNext()}>
                <i className="fa-regular fa-chevron-right"></i>
              </span>
            </div>
            <Swiper
              effect={"flip"}
              grabCursor={true}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={false}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
              onSwiper={(s) => {
                setSwiper(s);
              }}
              onActiveIndexChange={(s) => setActiveSlide(s.realIndex)}
            >
              <div className={styles.content}>
                <SwiperSlide>
                  <div className="step_slide">
                    <span>{sectionIntro[0]?.sub_title}</span>
                  </div>
                  <h3>{sectionIntro[0]?.title}</h3>
                  <div className="desc">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: sectionIntro[0]?.content,
                      }}
                    ></p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="step_slide">
                    <span>{sectionIntro[1]?.sub_title}</span>
                  </div>
                  <h3>{sectionIntro[1]?.title}</h3>
                  <div className="desc">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: sectionIntro[1]?.content,
                      }}
                    ></p>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <h5 className={styles.mobile}>Lio Holding</h5>
          <div className={"d-flex flex-wrap" + " " + styles.detail}>
            <div className={"col-12 col-sm-8 flex-wrap" + " " + styles.image}>
              <Image
                alt="Image Course"
                loader={({ src }) =>
                  `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                }
                src={
                  sectionIntro[activeSlide]?.images[
                    sectionIntro[activeSlide]?.images.length - 1
                  ]?.source
                }
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div className="col-2 col-sm-4">
              <h5>
                Lio <br /> Holding
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
