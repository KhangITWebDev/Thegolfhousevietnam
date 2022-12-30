import Image from "next/image";
import React, { useState } from "react";
import CountUp from "react-countup";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Academy.module.scss";

function Academy(props) {
  const [swiper, setSwiper] = useState(null);
  return (
    <div className={styles.academy_page}>
      <div className="container">
        <div className="heading">
          <h2 className={styles.title_page}>Học viện</h2>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn-down">
            <i className="fa-regular fa-chevron-down"></i>
          </button>
        </div>
        <div className={styles.intro}>
          <div className="d-flex flex-wrap align-items-center">
            <div className={"col-12 col-md-6" + " " + styles.left}>
              <div
                className={
                  styles.header + " " + "d-flex flex-column align-items-end"
                }
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
              <div className={styles.image1}>
                <Image
                  alt="Image 1"
                  src="/images/Academy/Intro/intro1.png"
                  width={434}
                  height={580}
                />
              </div>
              <div className={styles.image2}>
                <Image
                  alt="Image 2"
                  src="/images/Academy/Intro/intro2.png"
                  width={300}
                  height={361}
                />
              </div>
            </div>
            <div className={"col-12 col-md-6" + " " + styles.right}>
              <span>THE GOLF HOUSE</span>
              <h3>Học Golf bài bản cùng chuyên gia</h3>
              <p>
                Dù bạn là người mới bắt đầu tìm hiểu, hay người chơi Golf muốn
                nâng cao trình độ. The Golf House luôn có lộ trình phụ hợp cho
                bạn!
              </p>
              <div>
                <button>Đăng ký</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.welcome} id="welcome">
          <div className={styles.info}>
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
            >
              <div className={styles.content}>
                <SwiperSlide>
                  <div className="step_slide">
                    <span>01</span>
                    <span></span>
                    <span>Đôi lời về The Golf House</span>
                  </div>
                  <h3>Sứ mệnh</h3>
                  <div className="desc">
                    <p>
                      Học viện The Golf House Việt Nam (TGH) được thành lập vào
                      tháng 3 năm 2022 với sứ mệnh mang lại giá trị cho những
                      người đam mê Golf và xây dựng cộng đồng Golfer Việt Nam.{" "}
                    </p>
                    <p>
                      theo tiêu chuẩn PGA, đa dạng các gói học phục vụ nhu cầu
                      của học viên theo từng giai đoạn, dù là người mới chơi hay
                      người chơi golf muôn nâng cao kỹ năng của mình.
                    </p>
                    <p>
                      TGH cung câp chương trình giảng dạy bài bản Sau khóa học,
                      học viên tự tin bước ra sân khi được trang bị đầy đủ các
                      yếu tố về kỹ thuật, văn hóa golf và luật chơi.
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
                <SwiperSlide>
                  <div className="step_slide">
                    <span>02</span>
                    <span></span>
                    <span>Đôi lời về The Golf House</span>
                  </div>
                  <h3>Cơ sở vật chất</h3>
                  <div className="desc">
                    <p>
                      Trang thiêt bị hiện đại ứng dụng công nghệ tiên tiến như
                      hệ thông Sky track, máy phân tích kỹ thuật Dr.Swing phân
                      tích từng động tác với thông sô chính xác, phục vụ việc
                      rèn luyện kỹ thuật trong nhà với sự hướng dẫn tận tình của
                      huân luyện viên quôc tê giàu kinh nghiệm giảng dạy và chơi
                      Golf
                    </p>
                    <p>
                      TGH hợp tác với hệ thông sân golf và resort trải rộng trên
                      cả nước, cung cấp những buổi ra sân thực tê với nhiều dạng
                      địa hình sân, nâng cao thực chiến và sự tự tin của học
                      viên. Không chỉ đào tạo chuyên môn, TGH chú trọng phát
                      triển cộng đồng khi trở thành đôi tác chiên lược của các
                      Hiệp hội Golf tại Việt Nam, phôi hợp đăng cai tổ chức các
                      Giải đấu như HUBA Golf của Hiệp hội Doanh nhân TP Hồ Chí
                      Minh, Giải Best of the Best,...
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
                <SwiperSlide>
                  <div className="step_slide">
                    <span>03</span>
                    <span></span>
                    <span>Đôi lời về The Golf House</span>
                  </div>
                  <h3>Môi trường phát triển</h3>
                  <div className="desc">
                    <p>
                      Tại The Golf House, việc kiên tạo môi trường giúp việc học
                      tập và chơi golf trở nên đơn giản và hiệu quả nhất luôn là
                      ưu tiên hàng đâu của chúng tôi. TGH tập trung xây dựng
                      chuôi các dịch vụ đa dạng bao gôm Học viện - Pro shop -
                      Hair, Nail & Spa - Golf 3D - VIP Lounge trong cùng một địa
                      điểm. Giúp người học và chơi Golf tận dụng thời gian dành
                      cho môn thể thao mình yêu thích một cách tôi ưu nhât: vừa
                      nâng cao kỹ năng golf, vừa thư giãn, vừa giao lưu với
                      những người chung niềm đam mê. Với khẩu hiệu “Working on a
                      new you”, The Golf House Việt Nam hô trợ học viên - những
                      người yêu Golf trở thành phiên bản tốt hơn của bản thân
                      với lối sống tích cực và năng động.
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
          <div className={"d-flex flex-wrap" + " " + styles.detail}>
            <div className="col-2 col-md-4">
              <h5>
                Giới thiệu <br /> học viện
              </h5>
            </div>
            <div className={"col-10 col-md-8 flex-wrap" + " " + styles.image}>
              <Image
                alt="Image Course"
                src="/images/Booking/bookinCourse.png"
                layout="fill"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.academy_detail}>
        <div className="container">
          <div className="d-flex flex-wrap">
            <div className={"col-12 col-md-6" + " " + styles.item}>
              <div className={styles.content}>
                <div className={styles.image}>
                  <Image
                    alt="Image 1"
                    src="/images/Academy/Detail/detail1.png"
                    layout="fill"
                  />
                </div>
                <div className={styles.info}>
                  <h5>Không gian tập luyện</h5>
                  <p>
                    <ul>
                      <li>Không gian trong nhà rộng rãi và tiện nghi</li>
                      <li>Mô phỏng địa hình cỏ trên sân tập Golf ngoài trời</li>
                      <li>Khu tập đẩy, gạt bóng chuyên nghiệp và tách biệt</li>
                    </ul>
                  </p>
                </div>
                <div className="mt-auto">
                  <button className="d-flex align-items-center">
                    <span>Xem thêm</span>
                    <i className="fa-light fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className={"col-12 col-md-6" + " " + styles.item}>
              <div className={styles.content}>
                <div className={styles.image}>
                  <Image
                    alt="Image 2"
                    src="/images/Academy/Detail/detail2.png"
                    layout="fill"
                  />
                </div>
                <div className={styles.info}>
                  <div>
                    <h5>Trang thiết bị</h5>
                    <p>
                      <ul>
                        <li>
                          Máy Dr Swing phân tích chuẩn xác động tác để có sự
                          điều chỉnh và cải thiện kịp thời kỹ thuật Swing{" "}
                        </li>
                        <li>
                          Hệ thống Skytrack, Golf 3D tái hiện lại không gian tập
                          Golf ngoài trời, tạo cảm giác trung thực và sống động
                          như đang được trải nghiệm chơi golf thực tế.
                        </li>
                        <li>Gậy và bóng tập được cung cấp miễn phí.</li>
                      </ul>
                    </p>
                  </div>
                  <div className="mt-auto">
                    <button className="d-flex align-items-center">
                      <span>Xem thêm</span>
                      <i className="fa-light fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bannerv2}>
        <Image
          alt="Image 1"
          src="/images/Academy/banner.png"
          layout="responsive"
          width="100%"
          height="100%"
        />
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
                <button className="btn-content">Đăng ký</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academy;
