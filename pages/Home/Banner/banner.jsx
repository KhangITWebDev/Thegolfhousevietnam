import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getBannerData } from "../../../store/redux/Banner/banner.action";
import styles from "./banner.module.scss";

function Banner(props) {
  const dispatch = useDispatch();
  const bannerHome = useSelector((state) =>
    state.BannerReducer.banners.filter((item) => item.danh_muc === "Slide Home")
  );
  useEffect(() => {
    dispatch(getBannerData());
  }, []);
  const [swiper, setSwiper] = React.useState(null);
  return (
    <div>
      <div className={styles.banner} id="banner" data-aos="fade-right">
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
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
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
          {bannerHome.slice(0, 5).map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.image_container}>
                <Image
                  loader={({ src }) =>
                    `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                  }
                  alt={"Image"}
                  src={item.hinh_anh}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="content">
                  <div className="container h-100">
                    <div className="d-flex h-100 justify-content-center align-items-center flex-column">
                      <h1 data-aos="fade-right">{item.tieu_de}</h1>
                      <div
                        data-aos="fade-right"
                        dangerouslySetInnerHTML={{
                          __html: item.mo_ta,
                        }}
                      ></div>
                      <div className="button w-100 d-flex justify-content-center">
                        <button
                          data-aos="fade-right"
                          onClick={(e) =>
                            item.link.length > 0 && item.link != ""
                              ? !item.cua_so_moi
                                ? router.push(item.link)
                                : window.open(item.link)
                              : ""
                          }
                        >
                          {item.action}
                        </button>
                      </div>
                    </div>
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
  );
}

export default Banner;
