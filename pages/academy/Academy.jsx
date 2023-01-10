import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";
import CountUp from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getBannerData } from "../../store/redux/Banner/banner.action";
import { getContentData } from "../../store/redux/LoadContentReducer/content.action";
import styles from "./Academy.module.scss";

function Academy(props) {
  const [swiper, setSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const dispatch = useDispatch();
  const { banners } = useSelector((state) => state.BannerReducer);
  useEffect(() => {
    dispatch(getBannerData());
  }, [dispatch]);
  const { contents } = useSelector((state) => state.ContentReducer);
  useEffect(() => {
    dispatch(getContentData());
  }, [dispatch]);

  const sectionLocation = contents.filter(
    (item) => item.category === "63bc31a139d2a23b06d8835c"
  );
  const sectionIntro = contents.filter(
    (item) => item.category === "63bc214439d2a23b06d877e5"
  );
  const sectionInfoAcademy = contents.filter(
    (item) => item.category === "63bc2c8c39d2a23b06d87ab0"
  );
  const sectionEquid = contents.filter(
    (item) => item.category === "63bc310539d2a23b06d8822b"
  );
  const sectionTitle = contents.filter(
    (item) => item.category === "63bc4abb39d2a23b06d917a4"
  );
  return (
    <div className={styles.academy_page}>
      <div className="container">
        <div className="heading" data-aos="fade-up">
          <h2 className={styles.title_page}>{sectionTitle[0]?.title}</h2>
        </div>
        <div className="d-flex justify-content-center" data-aos="fade-down">
          <button className="btn-down">
            <i className="fa-regular fa-chevron-down"></i>
          </button>
        </div>
        <div className={styles.intro}>
          <div className="d-flex flex-wrap align-items-center">
            <div
              className={"col-12 col-md-6" + " " + styles.left}
              data-aos="fade-right"
            >
              <div
                className={
                  styles.header + " " + "d-flex flex-column align-items-end"
                }
                style={{ opacity: 0 }}
                data-aos="fade-down"
              >
                <CountUp start={1000} end={2022} delay={0} duration={1.4}>
                  {({ countUpRef }) => (
                    <div>
                      <h2 ref={countUpRef}>2022</h2>
                    </div>
                  )}
                </CountUp>
                <span>Bắt đầu</span>
              </div>
              <div className={styles.image1} data-aos="fade-right">
                <Image
                  alt="Image 1"
                  loader={({ src }) =>
                    `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                  }
                  src={
                    sectionIntro[0]?.images[sectionIntro[0].images.length - 2]
                      ?.source
                  }
                  width={434}
                  height={580}
                  objectFit="cover"
                />
              </div>
              <div className={styles.image2} data-aos="fade-left">
                <Image
                  alt="Image 2"
                  loader={({ src }) =>
                    `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                  }
                  src={
                    sectionIntro[0]?.images[sectionIntro[0].images.length - 1]
                      ?.source
                  }
                  width={300}
                  height={361}
                  objectFit="cover"
                />
              </div>
            </div>
            <div
              className={
                "col-12 col-md-6 d-flex flex-column" + " " + styles.right
              }
            >
              <span data-aos="fade-left">{sectionIntro[0]?.sub_title}</span>
              <h3 data-aos="fade-left">{sectionIntro[0]?.title}</h3>
              <p
                data-aos="fade-left"
                dangerouslySetInnerHTML={{ __html: sectionIntro[0]?.content }}
              ></p>
              {sectionIntro[0]?.text_button && (
                <div data-aos="fade-left">
                  <button>{sectionIntro[0]?.text_button}</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.welcome} id="welcome">
          <div className={styles.info} data-aos="fade-right">
            <div
              className={
                "d-flex justify-content-between" + " " + styles.navigation
              }
            >
              <span onClick={() => swiper.slidePrev()} data-aos="fade-right">
                <i className="fa-light fa-chevron-left"></i>
              </span>
              <span onClick={() => swiper.slideNext()} data-aos="fade-left">
                <i className="fa-light fa-chevron-right"></i>
              </span>
            </div>
            <Swiper
              effect={"flip"}
              grabCursor={true}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={false}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              onSwiper={(s) => {
                setSwiper(s);
              }}
              onActiveIndexChange={(s) => setActiveSlide(s.realIndex)}
            >
              <div className={styles.content}>
                <SwiperSlide>
                  <div className="step_slide" data-aos="fade-right">
                    {/* <span>01</span>
                    <span></span> */}
                    <span>{sectionInfoAcademy[0]?.sub_title}</span>
                  </div>
                  <h3 data-aos="fade-left">{sectionInfoAcademy[0]?.title}</h3>
                  <div className="desc" data-aos="fade-right">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: sectionInfoAcademy[0]?.content,
                      }}
                    ></p>
                  </div>
                  {/* <div
                    className={
                      "d-flex justify-content-end" + " " + styles.see_more
                    }
                    data-aos="fade-left"
                  >
                    <button className="d-flex align-items-center">
                      <span>Xem thêm</span>
                      <i className="fa-regular fa-arrow-right"></i>
                    </button>
                  </div> */}
                </SwiperSlide>
                <SwiperSlide>
                  <div className="step_slide" data-aos="fade-right">
                    {/* <span>01</span>
                    <span></span> */}
                    <span>{sectionInfoAcademy[1]?.sub_title}</span>
                  </div>
                  <h3 data-aos="fade-left">{sectionInfoAcademy[1]?.title}</h3>
                  <div className="desc" data-aos="fade-right">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: sectionInfoAcademy[1]?.content,
                      }}
                    ></p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="step_slide" data-aos="fade-right">
                    {/* <span>01</span>
                    <span></span> */}
                    <span>{sectionInfoAcademy[2]?.sub_title}</span>
                  </div>
                  <h3 data-aos="fade-left">{sectionInfoAcademy[2]?.title}</h3>
                  <div className="desc" data-aos="fade-right">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: sectionInfoAcademy[2]?.content,
                      }}
                    ></p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="step_slide" data-aos="fade-right">
                    {/* <span>01</span>
                    <span></span> */}
                    <span>{sectionInfoAcademy[3]?.sub_title}</span>
                  </div>
                  <h3 data-aos="fade-left">{sectionInfoAcademy[3]?.title}</h3>
                  <div className="desc" data-aos="fade-right">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: sectionInfoAcademy[3]?.content,
                      }}
                    ></p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="step_slide" data-aos="fade-right">
                    {/* <span>01</span>
                    <span></span> */}
                    <span>{sectionInfoAcademy[4]?.sub_title}</span>
                  </div>
                  <h3 data-aos="fade-left">{sectionInfoAcademy[4]?.title}</h3>
                  <div className="desc" data-aos="fade-right">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: sectionInfoAcademy[4]?.content,
                      }}
                    ></p>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <h5 className={styles.mobile}>
            <span> Giới thiệu</span> <span>học viện</span>
          </h5>
          <div className={"d-flex flex-wrap" + " " + styles.detail}>
            <div className="col-2 col-sm-4" data-aos="fade-right">
              <h5>
                Giới thiệu <br /> học viện
              </h5>
            </div>
            <div
              className={"col-12 col-sm-8 flex-wrap" + " " + styles.image}
              data-aos="fade-left"
            >
              <Image
                alt="Image Course"
                loader={({ src }) =>
                  `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                }
                src={
                  sectionInfoAcademy[activeSlide]?.images[
                    sectionInfoAcademy[activeSlide]?.images?.length - 1
                  ]?.source
                }
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.academy_detail}>
        <div className="d-flex flex-wrap">
          <div
            className={"col-12 col-lg-3 col-md-6" + " " + styles.item}
            data-aos="fade-up"
          >
            <div className={styles.image}>
              <Image
                alt="Image 1"
                loader={({ src }) =>
                  `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                }
                src={
                  sectionEquid[0]?.images[sectionEquid[0]?.images?.length - 1]
                    ?.source
                }
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <h5>{sectionEquid[0]?.title}</h5>
                {/* <p>Subtitle</p> */}
              </div>
            </div>
          </div>
          <div
            className={"col-12 col-lg-3 col-md-6" + " " + styles.item}
            data-aos="fade-down"
          >
            <div className={styles.image}>
              <Image
                alt="Image 1"
                loader={({ src }) =>
                  `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                }
                src={
                  sectionEquid[1]?.images[sectionEquid[1]?.images?.length - 1]
                    ?.source
                }
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <h5>{sectionEquid[1]?.title}</h5>
                {/* <p>Subtitle</p> */}
              </div>
            </div>
          </div>
          <div
            className={"col-12 col-lg-3 col-md-6" + " " + styles.item}
            data-aos="fade-up"
          >
            <div className={styles.image}>
              <Image
                alt="Image 1"
                loader={({ src }) =>
                  `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                }
                src={
                  sectionEquid[2]?.images[sectionEquid[2]?.images?.length - 1]
                    ?.source
                }
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <h5>{sectionEquid[2]?.title}</h5>
                {/* <p>Subtitle</p> */}
              </div>
            </div>
          </div>
          <div
            className={"col-12 col-lg-3 col-md-6" + " " + styles.item}
            data-aos="fade-down"
          >
            <div className={styles.image}>
              <Image
                alt="Image 1"
                loader={({ src }) =>
                  `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                }
                src={
                  sectionEquid[3]?.images[sectionEquid[3]?.images?.length - 1]
                    ?.source
                }
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <h5>{sectionEquid[3]?.title}</h5>
                {/* <p>Subtitle</p> */}
              </div>
            </div>
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
            sectionLocation[0]?.images[sectionLocation[0]?.images?.length - 1]
              .source
          }
          layout="fill"
          objectFit="cover"
          data-aos="fade-right"
        />
        <div className={styles.content}>
          <div className="container h-100">
            <div className="d-flex h-100 justify-content-center align-items-center flex-column">
              <span data-aos="fade-left">{sectionLocation[0]?.sub_title}</span>
              <h1 data-aos="fade-right">{sectionLocation[0]?.title}</h1>
              <div
                data-aos="fade-left"
                dangerouslySetInnerHTML={{
                  __html: sectionLocation[0]?.content,
                }}
              ></div>
              <div>
                <button
                  onClick={() => {
                    window.open(sectionLocation[0]?.url_button);
                  }}
                  className="btn-content"
                  data-aos="fade-right"
                >
                  {sectionLocation[0]?.text_button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academy;
