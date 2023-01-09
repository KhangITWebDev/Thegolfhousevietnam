import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getContentData } from "../../store/redux/LoadContentReducer/content.action";
import { removeAccents } from "../../utils/function";
import styles from "./About.module.scss";

const newList = [
  {
    image: "/images/About/new2.png",
    title: "PGA Tour nới lỏng tiêu chí cho golfer trẻ",
    desc: "Giới golf cao đẳng - đại học ở Mỹ sẽ có thêm hai cơ hội vào đấu trường ngoại hạng",
  },
  {
    image: "/images/About/new3.png",
    title: "Cơ hội hốt bạc ở chung kết lớn LPGA Tour",
    desc: "Đấu trường golf nữ hạng nhât Mỹ sẽ chi tổng cộng 101,4 triệu USD tiên thưởng cho mùa tới, theo công bố ngày 18/11.",
  },
  {
    image: "/images/About/new4.png",
    title: "Mùa giải thành công của Lee Minjee trên LPGA Tour",
    desc: "Đấu trường golf nữ hạng nhât Mỹ sẽ chi tổng cộng 101,4 triệu USD tiên thưởng cho mùa tới, theo công bố ngày 18/11.",
  },
];

function About(props) {
  const [swiper, setSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch();
  const { contents } = useSelector((state) => state.ContentReducer);
  useEffect(() => {
    dispatch(getContentData());
  }, [dispatch]);
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
      <div className="container">
        <div className={styles.membership} id="founder">
          <div className="d-flex flex-wrap align-items-center">
            <div
              className={"col-12 col-md-6" + " " + styles.left}
              data-aos="fade-right"
            >
              {/* <div
                className={
                  styles.header + " " + "d-flex flex-column align-items-end"
                }
                data-aos="fade-down"
              >
                <CountUp start={1000} end={2022} delay={0} duration={1.5}>
                  {({ countUpRef }) => (
                    <div>
                      <h2 ref={countUpRef}>2022</h2>
                    </div>
                  )}
                </CountUp>
                <span>Bắt đầu</span>
              </div> */}
              <div className={styles.image1} data-aos="fade-right">
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
              <div className={styles.image2} data-aos="fade-left">
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
            <div
              className={"col-12 col-md-6" + " " + styles.right}
              data-aos="fade-left"
            >
              <span data-aos="fade-left">{sectionFounder[0]?.sub_title}</span>
              <h3 data-aos="fade-left">{sectionFounder[0]?.title}</h3>
              <p
                data-aos="fade-left"
                dangerouslySetInnerHTML={{ __html: sectionFounder[0]?.content }}
              ></p>
              {/* <div data-aos="fade-left">
                <button>Đăng ký</button>
              </div> */}
            </div>
          </div>
        </div>
        <div className={styles.vision} id="vision">
          <h5 className={styles.mobile}>
            <span>Tầm nhìn</span> <span>sứ mệnh</span>
          </h5>
          <div className={"d-flex flex-wrap" + " " + styles.detail}>
            <div className="col-2 col-sm-4" data-aos="fade-right">
              <h5>
                <span>Tầm nhìn</span> <span>Sứ mệnh</span>
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
                  sectionVision[0]?.images[sectionVision[0]?.images.length - 1]
                    ?.source
                }
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          </div>
          <div className={styles.info} data-aos="fade-right">
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
                    data-aos="fade-right"
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
        <div className={styles.welcome} id="about">
          <div className={styles.info} data-aos="fade-left">
            <div
              className={
                "d-flex justify-content-between" + " " + styles.navigation
              }
            >
              <span onClick={() => swiper.slidePrev()}>
                <i className="fa-light fa-chevron-left"></i>
              </span>
              <span onClick={() => swiper.slideNext()}>
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
                  <div className="step_slide" data-aos="fade-left">
                    {/* <span>01</span>
                    <span></span> */}
                    <span>{sectionIntro[0]?.sub_title}</span>
                  </div>
                  <h3 data-aos="fade-right">{sectionIntro[0]?.title}</h3>
                  <div className="desc" data-aos="fade-left">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: sectionIntro[0]?.content,
                      }}
                    ></p>
                  </div>
                  <div
                    className={
                      "d-flex justify-content-end" + " " + styles.see_more
                    }
                    data-aos="fade-right"
                  >
                    <button className="d-flex align-items-center">
                      <span>Xem thêm</span>
                      <i className="fa-regular fa-arrow-right"></i>
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="step_slide" data-aos="fade-left">
                    {/* <span>01</span>
                    <span></span> */}
                    <span>{sectionIntro[1]?.sub_title}</span>
                  </div>
                  <h3 data-aos="fade-right">{sectionIntro[1]?.title}</h3>
                  <div className="desc" data-aos="fade-left">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: sectionIntro[1]?.content,
                      }}
                    ></p>
                  </div>
                  <div
                    className={
                      "d-flex justify-content-end" + " " + styles.see_more
                    }
                    data-aos="fade-right"
                  >
                    <button className="d-flex align-items-center">
                      <span>Xem thêm</span>
                      <i className="fa-regular fa-arrow-right"></i>
                    </button>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <h5 className={styles.mobile}>Lio Holding</h5>
          <div className={"d-flex flex-wrap" + " " + styles.detail}>
            <div
              className={"col-12 col-sm-8 flex-wrap" + " " + styles.image}
              data-aos="fade-right"
            >
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
            <div className="col-2 col-sm-4" data-aos="fade-left">
              <h5>
                Lio <br /> Holding
              </h5>
            </div>
          </div>
        </div>
        {/* <div className={styles.welcome} id="about">
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
          >
            <SwiperSlide>
              <div className="detail d-flex flex-wrap-reverse  flex-row-reverse justify-content-start">
                <div className="col-12 col-sm-4 d-flex flex-column justify-content-between">
                  <h5 className="d-flex flex-row flex-sm-column">
                    <strong>Lio</strong>
                    <strong>Holding</strong>
                  </h5>
                  <div className="info">
                    <div className="d-flex justify-content-between navigation">
                      <span onClick={() => swiper.slidePrev()}>
                        <i className="fa-light fa-chevron-left"></i>
                      </span>
                      <span onClick={() => swiper.slideNext()}>
                        <i className="fa-light fa-chevron-right"></i>
                      </span>
                    </div>
                    <div className="content">
                      <div className="step_slide">
                        <span>01</span>
                        <span></span>
                        <span>Lio Holding</span>
                      </div>
                      <h3>Golf</h3>
                      <div className="desc">
                        <p>
                          Học viện The Golf House Việt Nam (TGH) được thành lập
                          vào tháng 3 năm 2022 với sứ mệnh mang lại giá trị cho
                          những người đam mê Golf và xây dựng cộng đồng Golfer
                          Việt Nam.
                        </p>
                        <p>
                          TGH cung câp chương trình giảng dạy bài bản theo tiêu
                          chuẩn PGA, đa dạng các gói học phục vụ nhu cầu của học
                          viên theo từng giai đoạn, dù là người mới chơi hay
                          người chơi golf muôn nâng cao kỹ năng của mình. Sau
                          khóa học, học viên tự tin bước ra sân khi được trang
                          bị đầy đủ các yếu tố về kỹ thuật, văn hóa golf và luật
                          chơi.
                        </p>
                      </div>
                      <div className="d-flex justify-content-end see_more">
                        <button className="d-flex align-items-center">
                          <span>Xem thêm</span>
                          <i className="fa-regular fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-8 image">
                  <Image
                    alt="Image Course"
                    src="/images/About/about2.png"
                    layout="fill"
                  ></Image>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="detail d-flex flex-wrap-reverse flex-row-reverse">
                <div className="col-12 col-sm-4 d-flex flex-column justify-content-between">
                  <h5 className="d-flex flex-row flex-sm-column">
                    <strong>Lio</strong>
                    <strong>Holding</strong>
                  </h5>
                  <div className="info">
                    <div className="d-flex justify-content-between navigation">
                      <span onClick={() => swiper.slidePrev()}>
                        <i className="fa-light fa-chevron-left"></i>
                      </span>
                      <span onClick={() => swiper.slideNext()}>
                        <i className="fa-light fa-chevron-right"></i>
                      </span>
                    </div>
                    <div className="content">
                      <div className="step_slide">
                        <span>02</span>
                        <span></span>
                        <span>Motorsport</span>
                      </div>
                      <h3>Golf</h3>
                      <div className="desc">
                        <p>
                          Học viện The Golf House Việt Nam (TGH) được thành lập
                          vào tháng 3 năm 2022 với sứ mệnh mang lại giá trị cho
                          những người đam mê Golf và xây dựng cộng đồng Golfer
                          Việt Nam.
                        </p>
                        <p>
                          TGH cung câp chương trình giảng dạy bài bản theo tiêu
                          chuẩn PGA, đa dạng các gói học phục vụ nhu cầu của học
                          viên theo từng giai đoạn, dù là người mới chơi hay
                          người chơi golf muôn nâng cao kỹ năng của mình. Sau
                          khóa học, học viên tự tin bước ra sân khi được trang
                          bị đầy đủ các yếu tố về kỹ thuật, văn hóa golf và luật
                          chơi.
                        </p>
                      </div>
                      <div className="d-flex justify-content-end see_more">
                        <button className="d-flex align-items-center">
                          <span>Xem thêm</span>
                          <i className="fa-regular fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-8 image">
                  <Image
                    alt="Image Course"
                    src="/images/About/about3.png"
                    layout="fill"
                  ></Image>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div> */}
        {/* <div className={styles.news} id="news">
          <div className="heading" data-aos="fade-up">
            <h2 className={styles.title_page}>Tin tức, Sự kiện</h2>
          </div>
          <div className="d-flex justify-content-center" data-aos="fade-down">
            <button className="btn-down">
              <i className="fa-regular fa-chevron-down"></i>
            </button>
          </div>
          <div className={"d-flex flex-wrap" + " " + styles.contain}>
            <div className="col-12 col-lg-6" data-aos="fade-right">
              <div
                className={
                  styles.info_left +
                  " " +
                  "d-flex flex-column flex-lg-column flex-sm-row"
                }
              >
                <div
                  className={"col-12 col-lg-12 col-sm-4" + " " + styles.wrap}
                >
                  <div className={styles.image}>
                    <Image
                      alt="Image"
                      src="/images/About/new1.png"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div
                  className={
                    "d-flex flex-column justify-content-start justify-content-lg-between col-12 col-lg-12 col-sm-8" +
                    " " +
                    styles.content
                  }
                >
                  <h3
                    onClick={() =>
                      router.push(
                        `/news-events/${removeAccents(
                          "Quỹ thưởng LPGA Tour 2023 vượt mốc 100 triệu USD"
                        )}`
                      )
                    }
                  >
                    Quỹ thưởng LPGA Tour 2023 vượt mốc 100 triệu USD
                  </h3>
                  <span>1 giờ trước</span>
                  <p>
                    Đấu trường golf nữ hạng nhât Mỹ sẽ chi tổng cộng 101,4 triệu
                    USD tiên thưởng cho mùa tới, theo công bố ngày 18/11.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className={styles.right + " " + "d-flex flex-column"}>
                {newList.map((item, index) => {
                  return (
                    <div
                      className={styles.item + " " + "d-flex flex-wrap"}
                      key={index}
                    >
                      <div
                        className={
                          styles.wrapp + " " + "col-12 col-lg-4 col-sm-4"
                        }
                      >
                        <div className={styles.image}>
                          <Image
                            alt="Image"
                            src={item.image}
                            layout="fill"
                            objectFit="cover"
                            data-aos="fade-left"
                          />
                        </div>
                      </div>
                      <div
                        className={
                          "d-flex flex-column justify-content-start  justify-content-lg-between col-12 col-lg-8 col-sm-8" +
                          " " +
                          styles.content
                        }
                      >
                        <h3
                          onClick={() =>
                            router.push(
                              `/news-events/${removeAccents(item.title)}`
                            )
                          }
                          data-aos="fade-right"
                        >
                          {item.title}
                        </h3>
                        <span data-aos="fade-left">1 giờ trước</span>
                        <p data-aos="fade-right">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="button" data-aos="fade-up">
            <button onClick={() => router.push("/news-events")}>
              Xem thêm
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default About;
