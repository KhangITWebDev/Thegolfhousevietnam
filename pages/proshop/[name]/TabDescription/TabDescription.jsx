import Image from "next/image";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ShopList } from "../../../../utils/DataDemo/Home/dataHome";
import styles from "./TabDescription.module.scss";

function TabDescription(props) {
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
                767: {
                  slidesPerView: 2,
                },
                480: {
                  slidesPerView: 1,
                },
              }}
              slidesPerView={1}
              spaceBetween={30}
              // pagination={{
              //   clickable: true,
              // }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {ShopList.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="content h-100 d-flex flex-column align-items-center">
                    <div className="image">
                      <Image
                        alt="item 1"
                        src={item.image}
                        width={250}
                        height={250}
                      />
                    </div>
                    <div className="info h-100 d-flex flex-column align-items-center">
                      <h5 className="text-center">{item.name}</h5>
                      <div className="mt-auto">
                        <p className="text-center">{item.price}</p>
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
