import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import CountUp from "react-countup";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
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
  return (
    <div className={styles.about_page}>
      <div className="container">
        <div className={styles.membership} id="founder">
          <div className="d-flex flex-wrap align-items-center">
            <div
              className={"col-12 col-md-6" + " " + styles.left}
              data-aos="fade-right"
            >
              <div
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
              </div>
              <div className={styles.image1} data-aos="fade-right">
                <Image
                  alt="Image 1"
                  src="/images/About/about-intro.png"
                  width={434}
                  height={580}
                  objectFit="cover"
                />
              </div>
              <div className={styles.image2} data-aos="fade-left">
                <Image
                  alt="Image 2"
                  src="/images/About/about-intro1.png"
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
              <span data-aos="fade-left">VỀ CHÚNG TÔI</span>
              <h3 data-aos="fade-left">Nhà sáng lập</h3>
              <p data-aos="fade-left">
                Học viện The Golf House Việt Nam được sáng lập bởi Nguyễn Gia
                Bảo (Bảo Bảo) - một doanh nhân, nữ Golfer với hơn 17 năm kinh
                nghiệm cùng nhiều thành tích thi đấu ấn tượng trong và ngoài
                nước.
              </p>
              <div data-aos="fade-left">
                <button>Đăng ký</button>
              </div>
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
                src="/images/About/vision.png"
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
                  <div className="step_slide" data-aos="fade-right">
                    <span>01</span>
                    <span></span>
                    <span>Về chúng tôi</span>
                  </div>
                  <h3 data-aos="fade-left">Tầm nhìn</h3>
                  <div className="desc" data-aos="fade-right">
                    <p>
                      Học viện đào tạo cung cấp chương trình giảng dạy bài bản
                      theo tiêu chuẩn PGA, cá nhân hóa việc học tập thông qua lộ
                      trình học thiết kế phù hợp cho từng lứa tuổi, theo từng
                      cấp độ từ cơ bản tới nâng cao.
                    </p>
                  </div>
                  <h3 data-aos="fade-left">Sứ mệnh</h3>
                  <div className="desc" data-aos="fade-right">
                    <p>
                      Xây dựng các học viện trên cả nước và thành công đào tạo
                      thế hệ Golfer mới
                    </p>
                  </div>
                  <div
                    className={
                      "d-flex justify-content-end" + " " + styles.see_more
                    }
                    data-aos="fade-left"
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
                    <span>01</span>
                    <span></span>
                    <span>Lio Holding</span>
                  </div>
                  <h3 data-aos="fade-right">The Golf House Vietnam</h3>
                  <div className="desc" data-aos="fade-left">
                    <p>
                      The Golf House Vietnam là thành viên thuộc tập đoàn Lio
                      Holdings. Lio Holdings hoạt động trong lĩnh vực đào tạo,
                      cung cấp các dịch vụ và tổ chức các sự kiện giải trí về
                      Golf & Motorsport mang tầm quốc tế tại thị trường Việt
                      Nam. Với sứ mệnh khai phá và định hướng thị trường, Lio
                      Holdings mong muốn mang Golf & Motorsport đến gần với
                      người yêu thích các bộ môn này tại Việt Nam. Bằng việc xây
                      dựng hệ sinh thái các dịch vụ phục vụ cho ngành Golf &
                      Motorsport, Lio Holdings tạo nên môi trường đào tạo và
                      chơi Golf tiệm cận với trình độ quốc tế, đào tạo và tổ
                      chức các hoạt động Motorsport tại Việt Nam đạt chuẩn thế
                      giới.
                    </p>
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
                  <div className="step_slide">
                    <span>02</span>
                    <span></span>
                    <span>Lio Holding</span>
                  </div>
                  <h3>Đội ngũ HLV quốc tế</h3>
                  <div className="desc">
                    <p>
                      Học viện The Golf House Việt Nam (TGH) được thành lập vào
                      tháng 3 năm 2022 với sứ mệnh mang lại giá trị cho những
                      người đam mê Golf và xây dựng cộng đồng Golfer Việt Nam.
                    </p>
                    <p>
                      TGH cung câp chương trình giảng dạy bài bản theo tiêu
                      chuẩn PGA, đa dạng các gói học phục vụ nhu cầu của học
                      viên theo từng giai đoạn, dù là người mới chơi hay người
                      chơi golf muôn nâng cao kỹ năng của mình.
                    </p>
                    <p>
                      Sau khóa học, học viên tự tin bước ra sân khi được trang
                      bị đầy đủ các yếu tố về kỹ thuật, văn hóa golf và luật
                      chơi.
                    </p>
                  </div>
                  <div
                    className={
                      "d-flex justify-content-end" + " " + styles.see_more
                    }
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
                src={`/images/About/about${activeSlide + 1}.png`}
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
        <div className={styles.news} id="news">
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
        </div>
      </div>
    </div>
  );
}

export default About;
