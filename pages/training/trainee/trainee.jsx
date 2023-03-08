import React, { useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import $ from "jquery";
import styles from "../Course.module.scss";

function Trainee({ contents }) {
  const SectionTrainee = contents.filter(
    (item) => item.category === "63e356cc234bcc47f71bc040"
  );
  useEffect(() => {
    $("#course-team .swiper-pagination-bullet").each(function (indexC) {
      $(this).css({
        backgroundImage: `url(https://api.fostech.vn${
          SectionTrainee[indexC]?.images[
            SectionTrainee[indexC]?.images?.length - 1
          ]?.source
        }?access_token=7d7fea98483f31af4ac3cdd9db2e4a93)`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        opacity: 1,
      });
    });
  }, [SectionTrainee]);
  const [swiper, setSwiper] = React.useState(null);
  return (
    <div className={styles.team} id="course-team" data-aos="fade-right">
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
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          onSwiper={(s) => {
            setSwiper(s);
          }}
        >
          <SwiperSlide>
            <div className="container">
              <div className="content d-flex flex-column align-items-center">
                <span className="icon">“</span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: SectionTrainee[0]?.content,
                  }}
                ></div>
                <h2>{SectionTrainee[0]?.title}</h2>
                <span>{SectionTrainee[0]?.sub_title}</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="content d-flex flex-column align-items-center">
                <span className="icon">“</span>
                <div
                  dangerouslySetInnerHTML={{
                    __html: SectionTrainee[1]?.content,
                  }}
                ></div>
                <h2>{SectionTrainee[1]?.title}</h2>
                <span>{SectionTrainee[1]?.sub_title}</span>
              </div>
            </div>
          </SwiperSlide>
          <button className="btn-prev" onClick={() => swiper.slidePrev()}>
            <i className="fa-thin fa-arrow-left"></i>
          </button>
          <button className="btn-next" onClick={() => swiper.slideNext()}>
            <i className="fa-thin fa-arrow-right"></i>
          </button>
        </Swiper>
      </div>
    </div>
  );
}

export default Trainee;
