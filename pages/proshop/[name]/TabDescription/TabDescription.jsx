import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getProshopData } from "../../../../store/redux/ProshopReducer/proshop.action";
import { removeAccents } from "../../../../utils/function";
import styles from "./TabDescription.module.scss";
function TabDescription({ proshopDetail }) {
  const router = useRouter();
  const related = useSelector((state) =>
    state.ProshopReducer.proshopList.filter(
      (x) => x.ten_nvt === proshopDetail?.ten_nvt
    )
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProshopData());
  }, [dispatch]);
  return (
    <div className="tab-desc">
      <p>
        Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut
        fugit, sed quia consequuntur. Lorem ipsum dolor. Aquia sit amet, elitr,
        sed diam nonum eirmod tempor invidunt labore et dolore magna
        aliquyam.erat, sed diam voluptua. At vero accusam et justo duo dolores
        et ea rebum. Stet clitain vidunt ut labore eirmod tempor invidunt magna
        aliquyam.
      </p>
      <div className={styles.shop}>
        <div id="tab-desc">
          <div className="">
            <Swiper
              breakpoints={{
                1920: {
                  slidesPerView: 4,
                },
                1440: {
                  slidesPerView: 4,
                },
                1280: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 3,
                },
                567: {
                  slidesPerView: 2,
                },
              }}
              slidesPerView={1}
              spaceBetween={30}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {related.map((item, index) => (
                <SwiperSlide
                  key={index}
                  onClick={() =>
                    router.push(`/proshop/${removeAccents(item.ten_vt)}`)
                  }
                >
                  <div className="content h-100 d-flex flex-column align-items-center">
                    <div className="image">
                      <Image
                        alt="item 1"
                        src="/images/Logo/Logo12.png"
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="info h-100 d-flex flex-column align-items-center">
                      <h5 className="text-center">{item.ten_vt}</h5>
                      <div className="mt-auto">
                        <p className="text-center">
                          {item.gia_ban_le.toLocaleString("vi-Vi")} VND
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TabDescription;
