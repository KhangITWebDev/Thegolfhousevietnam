import Image from "next/image";
import React, { useState } from "react";
import CountUp from "react-countup";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Academy.module.scss";

function Academy(props) {
  const [swiper, setSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className={styles.academy_page}>
      <div className="container">
        <div className="heading" data-aos="fade-up">
          <h2 className={styles.title_page}>Học viện</h2>
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
                  src="/images/Academy/Intro/intro1.png"
                  width={434}
                  height={580}
                />
              </div>
              <div className={styles.image2} data-aos="fade-left">
                <Image
                  alt="Image 2"
                  src="/images/Academy/Intro/intro2.png"
                  width={300}
                  height={361}
                />
              </div>
            </div>
            <div
              className={
                "col-12 col-md-6 d-flex flex-column" + " " + styles.right
              }
            >
              <span data-aos="fade-left">THE GOLF HOUSE</span>
              <h3 data-aos="fade-left">Học Golf bài bản cùng chuyên gia</h3>
              <p data-aos="fade-left">
                Sau chương trình học, học viên tự tin bước ra sân với đầy đủ
                trình độ chuyên môn, đủ hiểu biết về luật và văn hóa.
              </p>
              <div data-aos="fade-left">
                <button>Đăng ký</button>
              </div>
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
                    <span>01</span>
                    <span></span>
                    <span>Đôi lời về The Golf House</span>
                  </div>
                  <h3 data-aos="fade-left">Giáo trình bài bản</h3>
                  <div className="desc" data-aos="fade-right">
                    <p>
                      Học viện đào tạo cung cấp chương trình giảng dạy bài bản
                      theo tiêu chuẩn PGA, cá nhân hóa việc học tập thông qua lộ
                      trình học thiết kế phù hợp cho từng lứa tuổi, theo từng
                      cấp độ từ cơ bản tới nâng cao.
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
                <SwiperSlide>
                  <div className="step_slide" data-aos="fade-right">
                    <span>02</span>
                    <span></span>
                    <span>Đôi lời về The Golf House</span>
                  </div>
                  <h3 data-aos="fade-left">Đội ngũ HLV quốc tế</h3>
                  <div data-aos="fade-right" className="desc">
                    <p>
                      Học viên được học tập với thiết bị hiện đại, luyện tập kỹ
                      thuật trong nhà với sự hướng dẫn tận tình của huấn luyện
                      viên chuẩn quốc tế, với nhiều năm kinh nghiệm chơi và
                      giảng dạy Golf.
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
                <SwiperSlide>
                  <div className="step_slide" data-aos="fade-right">
                    <span>03</span>
                    <span></span>
                    <span>Đôi lời về The Golf House</span>
                  </div>
                  <h3 data-aos="fade-left">Công nghệ tiên tiến</h3>
                  <div data-aos="fade-right" className="desc">
                    <p>
                      Trang thiết bị hiện đại thông minh, phân tích các thông số
                      chi tiết như: khoảng cách đánh bóng, tốc độ bóng, tốc độ
                      đầu gậy, hệ số va chạm. Dựa vào các thông số được tính
                      toán nhanh gọn, chính xác, người chơi rút kinh nghiệm và
                      khắc phục những điểm yếu, từ đó dần cải thiện kỹ thuật của
                      mình.
                    </p>
                    <p>
                      Hệ thống Skytrack tập trong nhà mang đến trải nghiệm chuẩn
                      xác và sống động như khi tập Golf ngoài trời.
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
                <SwiperSlide>
                  <div className="step_slide" data-aos="fade-right">
                    <span>04</span>
                    <span></span>
                    <span>Đôi lời về The Golf House</span>
                  </div>
                  <h3 data-aos="fade-left">Cộng đồng tích cực</h3>
                  <div className="desc" data-aos="fade-right">
                    <p>
                      Tạo nên cộng đồng chung niềm đam mê với nhiều hoạt động
                      kết nối. Với khẩu hiệu “Working on a new you”, The Golf
                      House Vietnam trở thành người bạn đồng hành của người yêu
                      Golf, cùng mỗi người trở thành phiên bản tốt hơn của bản
                      thân với lối sống tích cực và năng động.{" "}
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
                <SwiperSlide>
                  <div className="step_slide" data-aos="fade-right ">
                    <span>05</span>
                    <span></span>
                    <span>Đôi lời về The Golf House</span>
                  </div>
                  <h3 data-aos="fade-left">Chi phí hợp lý</h3>
                  <div data-aos="fade-right" className="desc">
                    <p>Cạnh tranh và phù hợp với mọi đối tượng người chơi.</p>
                  </div>
                  <div
                    data-aos="fade-left"
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
          <div className={"d-flex flex-wrap" + " " + styles.detail}>
            <div className="col-2 col-md-4" data-aos="fade-right">
              <h5>
                Giới thiệu <br /> học viện
              </h5>
            </div>
            <div
              className={"col-10 col-md-8 flex-wrap" + " " + styles.image}
              data-aos="fade-left"
            >
              <Image
                alt="Image Course"
                src={`/images/Academy/AcademyInfo/info${activeSlide + 1}.png`}
                layout="fill"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.academy_detail}>
        <div className="d-flex flex-wrap">
          <div
            className={"col-12 col-md-3" + " " + styles.item}
            data-aos="fade-up"
          >
            <div className={styles.image}>
              <Image
                alt="Image 1"
                src="/images/Academy/Detail/detail1.png"
                layout="fill"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <h5>Không gian tập luyện</h5>
                <p>Subtitle</p>
              </div>
            </div>
          </div>
          <div
            className={"col-12 col-md-3" + " " + styles.item}
            data-aos="fade-down"
          >
            <div className={styles.image}>
              <Image
                alt="Image 2"
                src="/images/Academy/Detail/detail2.png"
                layout="fill"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <h5>Trang thiết bị</h5>
                <p>Subtitle</p>
              </div>
            </div>
          </div>
          <div
            className={"col-12 col-md-3" + " " + styles.item}
            data-aos="fade-up"
          >
            <div className={styles.image}>
              <Image
                alt="Image 1"
                src="/images/Academy/Detail/detail3.png"
                layout="fill"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <h5>Không gian tập luyện</h5>
                <p>Subtitle</p>
              </div>
            </div>
          </div>
          <div
            className={"col-12 col-md-3" + " " + styles.item}
            data-aos="fade-down"
          >
            <div className={styles.image}>
              <Image
                alt="Image 2"
                src="/images/Academy/Detail/detail2.png"
                layout="fill"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <h5>Trang thiết bị</h5>
                <p>Subtitle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bannerv2} data-aos="fade-up">
        <Image alt="Image 1" src="/images/Academy/banner.png" layout="fill" />
        <div className={styles.content}>
          <div className="container h-100">
            <div className="d-flex h-100 justify-content-center align-items-center flex-column">
              <span>VỊ TRÍ</span>
              <h1>Địa điểm The Golf House</h1>
              <p>
                <strong>Địa chỉ:</strong> 85-87 Nguyễn Cơ Thạch, An Lợi Đông,
                Q.2, TPHCM
              </p>
              <div>
                <button className="btn-content">Bản Đồ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academy;
