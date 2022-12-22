import Image from "next/image";
import React, { useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
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
  return (
    <div className={styles.about_page}>
      <div className="container">
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
                  src="/images/About/about-intro.png"
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
              <span>VỀ CHÚNG TÔI</span>
              <h3>Nhà sáng lập</h3>
              <p>
                Học viện The Golf House Việt Nam (TGH) được thành lập vào tháng
                3 năm 2022 với sứ mệnh mang lại giá trị cho những người đam mê
                Golf và xây dựng cộng đồng Golfer Việt Nam.
              </p>
              <div>
                <button>Đăng ký</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.welcome} id="about">
          <Swiper
            effect={"flip"}
            grabCursor={true}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={false}
            navigation={false}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            onSwiper={(s) => {
              setSwiper(s);
            }}
          >
            <SwiperSlide>
              <div className="detail d-flex flex-row-reverse">
                <div className="col-4 d-flex flex-column justify-content-between">
                  <h5>
                    Lio <br /> Holding
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
                <div className="col-8 image">
                  <Image
                    alt="Image Course"
                    src="/images/About/about2.png"
                    layout="fill"
                  ></Image>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="detail d-flex flex-row-reverse">
                <div className="col-4 d-flex flex-column justify-content-between">
                  <h5>
                    Lio <br /> Holding
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
                <div className="col-8 image">
                  <Image
                    alt="Image Course"
                    src="/images/About/about3.png"
                    layout="fill"
                  ></Image>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.news}>
          <div className="heading">
            <h2 className={styles.title_page}>Tin tức, Sự kiện</h2>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn-down">
              <i className="fa-regular fa-chevron-down"></i>
            </button>
          </div>
          <div className={"d-flex" + " " + styles.contain}>
            <div className="col-6">
              <div className={styles.info_left}>
                <div className={styles.image}>
                  <Image
                    alt="Image"
                    src="/images/About/new1.png"
                    layout="fill"
                  />
                </div>
                <h3>Quỹ thưởng LPGA Tour 2023 vượt mốc 100 triệu USD</h3>
                <span>1 giờ trước</span>
                <p>
                  Đấu trường golf nữ hạng nhât Mỹ sẽ chi tổng cộng 101,4 triệu
                  USD tiên thưởng cho mùa tới, theo công bố ngày 18/11.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className={styles.right + " " + "d-flex flex-column"}>
                {newList.map((item, index) => {
                  return (
                    <div className={styles.item + " " + "d-flex"} key={index}>
                      <div className={styles.wrapp + " " + "col-4"}>
                        <div className={styles.image}>
                          <Image alt="Image" src={item.image} layout="fill" />
                        </div>
                      </div>
                      <div
                        className={
                          "d-flex flex-column justify-content-between col-8" +
                          " " +
                          styles.content
                        }
                      >
                        <h3>{item.title}</h3>
                        <span>1 giờ trước</span>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
