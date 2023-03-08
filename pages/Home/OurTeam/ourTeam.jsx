import Image from "next/image";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./ourTeam.module.scss";

function OurTeam({ contents }) {
  const [swiper, setSwiper] = React.useState(null);
  const sectionTeam = contents.filter(
    (item) => item.category === "63e34f6eca71c51ca0ed6bb2"
  );
  return (
    <div className={styles.team} id="team" data-aos="fade-right">
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
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        onSwiper={(s) => {
          setSwiper(s);
        }}
      >
        {sectionTeam.slice(0, 3).map((item, index) => (
          <SwiperSlide key={index}>
            <div className="container">
              <div className="content d-flex flex-column align-items-center">
                <Image
                  alt="Avatar"
                  loader={({ src }) =>
                    `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                  }
                  src={item?.images[item?.images.length - 1].source}
                  width={100}
                  height={100}
                  data-aos="fade-right"
                />
                <div
                  data-aos="fade-right"
                  dangerouslySetInnerHTML={{
                    __html: item?.content,
                  }}
                ></div>
                <span className="icon" data-aos="fade-right">
                  “
                </span>
                <h2 data-aos="fade-right">{item.title}</h2>
                <span data-aos="fade-right">{item.sub_title}</span>
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
  );
}

export default OurTeam;
