import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Loader } from "rsuite";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { removeAccents } from "../../../utils/function";
import styles from "./right.module.scss";

function ProductList({ loading, proshopData, hiddenFilter }) {
  const router = useRouter();
  const [showInfo2, setShowInfo2] = useState(-1);
  const [url, setUrl] = useState();
  const pictureArray = (data) => {
    let arr = [];
    if (data?.picture) {
      arr.push({
        id: 1,
        url: data.picture,
      });
    }
    if (data?.picture2) {
      arr.push({
        id: 2,
        url: data.picture2,
      });
    }
    if (data?.picture3) {
      arr.push({
        id: 3,
        url: data.picture3,
      });
    }
    if (data?.picture4) {
      arr.push({
        id: 4,
        url: data.picture4,
      });
    }
    return arr;
  };
  const [loader, setloader] = useState(false);
  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 5000);
  }, []);
  return (
    <div
      className={"d-flex flex-wrap" + " " + styles.product}
      style={{
        height: proshopData?.length > 0 ? "auto" : "100%",
      }}
    >
      {proshopData.length <= 0 ? (
        <div className="d-flex mx-auto">
          {loader ? (
            <Loader size="md" content="Đang tải dữ liệu..." />
          ) : (
            <p
              style={{
                fontSize: 20,
                marginTop: 50,
              }}
            >
              Không có dữ liệu
            </p>
          )}
        </div>
      ) : proshopData?.length < 0 ? (
        <div>
          <p>Không có dữ liệu</p>
        </div>
      ) : (
        proshopData?.map((item, index) => (
          <div
            key={index}
            className={
              "col-12 col-sm-6" +
              " " +
              `${hiddenFilter ? "col-lg-3" : "col-lg-4"}` +
              " " +
              styles.item
            }
            onMouseEnter={() => {
              setShowInfo2(index);
            }}
            onMouseLeave={() => {
              setShowInfo2(-1);
              setUrl();
              pictureArray({});
            }}
          >
            <div className={styles.info + " " + "d-flex flex-column"}>
              {showInfo2 === index ? (
                <>
                  <div
                    className={styles.image}
                    style={{ zIndex: 1, position: "relative" }}
                    onClick={() => {
                      router.push(`/proshop/${removeAccents(item.ma_vt)}`);
                    }}
                  >
                    {url ? (
                      <Image
                        alt={"Image" + index + 1}
                        src={url}
                        loader={({ src }) =>
                          `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                        }
                        width={300}
                        height={300}
                        objectFit={"cover"}
                      ></Image>
                    ) : item.picture ? (
                      <Image
                        alt={"Image" + index + 1}
                        loader={({ src }) =>
                          `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                        }
                        src={item.picture}
                        width={300}
                        height={300}
                        objectFit={"cover"}
                      ></Image>
                    ) : (
                      <Image
                        alt={"Image" + index + 1}
                        src="/images/Logo/logo2.png"
                        width={300}
                        height={300}
                        objectFit={"cover"}
                      />
                    )}
                  </div>
                  <div className="d-flex" id="product-info">
                    <Swiper
                      breakpoints={{
                        1200: {
                          slidesPerView: 3,
                        },
                        992: {
                          slidesPerView: 3,
                        },
                        576: {
                          slidesPerView: 3,
                        },
                      }}
                      spaceBetween={30}
                      slidesPerView={1}
                      navigation={true}
                      modules={[Pagination, Navigation, Navigation]}
                      className="mySwiper"
                    >
                      {pictureArray(item)?.map((item, index) => (
                        <SwiperSlide key={index}>
                          <div
                            className="image"
                            onMouseEnter={() => setUrl(item.url)}
                          >
                            <Image
                              alt={"Image" + index + 1}
                              src={item.url}
                              loader={({ src }) =>
                                `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                              }
                              layout="fill"
                              objectFit={"cover"}
                            ></Image>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div
                    onClick={() => {
                      router.push(`/proshop/${removeAccents(item.ma_vt)}`);
                    }}
                  >
                    <p>{item.gia_ban_le.toLocaleString("vi-VI")} VND</p>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={styles.image}
                    style={{ zIndex: -1 }}
                    onClick={() => {
                      router.push(`/proshop/${removeAccents(item.ma_vt)}`);
                    }}
                  >
                    {item.picture ? (
                      <Image
                        alt={"Image" + index + 1}
                        loader={({ src }) =>
                          `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                        }
                        src={item.picture}
                        width={300}
                        height={300}
                        objectFit={"cover"}
                      ></Image>
                    ) : (
                      <Image
                        alt={"Image" + index + 1}
                        src="/images/Logo/logo2.png"
                        width={300}
                        height={300}
                        objectFit={"cover"}
                      />
                    )}
                  </div>
                  <div
                    onClick={() => {
                      router.push(`/proshop/${removeAccents(item.ma_vt)}`);
                    }}
                  >
                    <h5>{item.ten_vt}</h5>
                    <p>{item.gia_ban_le.toLocaleString("vi-VI")} VND</p>
                  </div>
                </>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
