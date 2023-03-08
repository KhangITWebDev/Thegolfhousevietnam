import $ from "jquery";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getCourseData } from "../../../store/redux/CourseReducer/course.action";
import styles from "./courseIntro.module.scss";
import Detail from "./detail";

function CourseIntroduction({ contents }) {
  const dispatch = useDispatch();
  const [swiper, setSwiper] = React.useState(null);
  const courseData = useSelector((state) => state.CourseReducer.courseList);
  useEffect(() => {
    dispatch(getCourseData());
  }, []);
  const [bgDetail, setBGDetail] = useState(
    "linear-gradient(170deg, transparent 50%, #b2a776 0%)"
  );
  const sectionTitleCourse = contents.filter(
    (item) => item.category === "63bc3d3739d2a23b06d8bafb"
  );
  const [detailIndex, setDetailIndex] = useState(1);
  const getBg = (index) => {
    setBGDetail($("#detail-course-" + index)?.css("background"));
  };
  return (
    <>
      <div className={styles.course} id="course" data-aos="fade-right">
        <div className={styles.top}>
          <div className="container">
            <span>{sectionTitleCourse[0]?.sub_title}</span>
            <h2>{sectionTitleCourse[0]?.title}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: sectionTitleCourse[0]?.content,
              }}
            ></p>
          </div>
        </div>
        <div className="container">
          <div className="list">
            <Swiper
              breakpoints={{
                1200: {
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
              modules={[Pagination, Navigation, Autoplay]}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              onSwiper={(s) => setSwiper(s)}
              className="mySwiper"
            >
              {courseData.map((item, index) => (
                <SwiperSlide
                  key={index}
                  onClick={() => {
                    $("html,body").animate(
                      {
                        scrollTop: $("#course-detail").offset().top,
                      },
                      "slow"
                    );
                    setDetailIndex(index);
                    getBg(index);
                  }}
                >
                  <div className="d-flex flex-column info">
                    <div>
                      <div className="image">
                        <Image
                          alt="Intro 1"
                          loader={({ src }) =>
                            `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                          }
                          src={item.thumb_image}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="detail" id={`detail-course-${index}`}>
                        <h5>{item.name}</h5>
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
        </div>
      </div>
      <Detail
        detailIndex={detailIndex}
        courseData={courseData}
        bgDetail={bgDetail}
      />
    </>
  );
}

export default CourseIntroduction;
