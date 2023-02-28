import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBannerData } from "../../store/redux/Banner/banner.action";
import { getContentData } from "../../store/redux/LoadContentReducer/content.action";
import styles from "./spa.module.scss";
function Spa(props) {
  const dispatch = useDispatch();
  const { banners } = useSelector((state) => state.BannerReducer);
  const { contents } = useSelector((state) => state.ContentReducer);
  useEffect(() => {
    dispatch(getBannerData());
    dispatch(getContentData());
  }, []);
  const sectionGreenSpa = contents.filter(
    (item) => item.category === "63fc3ffbe469fb4f12ebd40d"
  );
  const imageHairNailSpa = contents.filter(
    (item) => item.category === "63e356cc234bcc47f71bc016"
  );
  const sectionIntro = contents.filter(
    (item) => item.category === "63fc181ee469fb4f12eb80af"
  );
  const section6Touchs = contents.filter(
    (item) => item.category === "63fc4010e469fb4f12ebd420"
  );
  const section6TouchsContent = contents.filter(
    (item) => item.category === "63fc8892e469fb4f12ec4428"
  );
  const sectionMenu = contents.filter(
    (item) => item.category === "63fc4021e469fb4f12ebd45a"
  );
  const sectionFocus = contents.filter(
    (item) => item.category === "63fc4037e469fb4f12ebd470"
  );
  const sectionFocusContent = contents.filter(
    (item) => item.category === "63fcb25ae469fb4f12ec59ef"
  );
  const sectionGreenContent = contents.filter(
    (item) => item.category === "63fd5717e469fb4f12ec7b4e"
  );
  const bannerHairNailSpa = banners.filter((x) => x.danh_muc === "Spa");
  return (
    <div className={styles.orther_service} id="spa">
      <div className="container">
        {/* <div className="heading" data-aos="fade-down">
          <h2>Spa</h2>
        </div> */}
      </div>
      <div className={styles.bannerv2} data-aos="fade-right">
        <Image
          loader={({ src }) =>
            `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
          }
          alt="Image 1"
          src={bannerHairNailSpa[0]?.hinh_anh}
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.bannerv2_content}>
          <div className="h-100">
            <div className="col-6 h-100" style={{ position: "relative" }}>
              {/* <div className={styles.bg}>
                <Image
                  src="/images/OrtherService/bg.jpg"
                  alt="Iamge"
                  className={styles.image}
                  layout="fill"
                ></Image>
              </div> */}
              <div
                dangerouslySetInnerHTML={{
                  __html: bannerHairNailSpa[0]?.mo_ta,
                }}
                className={styles.mota}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.list}>
          <h5 data-aos="fade-up">{sectionIntro[0]?.title}</h5>
          <div className={styles.intro}>
            <div className={styles.bannerv2}>
              <Image
                src="/images/OrtherService/bg.jpg"
                alt="Iamge"
                className={styles.image}
                layout="fill"
              ></Image>
              <div className={styles.bannerv2_content}>
                <div className="h-100 d-flex align-items-center">
                  <div className={"col-6" + " " + styles.left}>
                    <h3>{sectionIntro[0]?.sub_title}</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: sectionIntro[0]?.content,
                      }}
                    ></div>
                  </div>
                  <div className={"col-6" + " " + styles.right}>
                    <div className={styles.image}>
                      <Image
                        alt="Other Image"
                        loader={({ src }) =>
                          `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                        }
                        src={
                          sectionIntro[0]?.images[
                            sectionIntro[0]?.images?.length - 1
                          ]?.source
                        }
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.green_spa}>
            <div className={styles.image_intro}>
              <Image
                alt="Other Image"
                loader={({ src }) =>
                  `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                }
                src={
                  sectionGreenSpa[0]?.images[
                    sectionGreenSpa[0]?.images?.length - 1
                  ]?.source
                }
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.bannerv2}>
              <Image
                src="/images/OrtherService/bg.jpg"
                alt="Iamge"
                className={styles.image}
                layout="fill"
              ></Image>
              <div className={styles.bannerv2_content}>
                <div className="h-100 d-flex">
                  <div className={"col-4" + " " + styles.left}>
                    <h2>{sectionGreenSpa[0]?.title}</h2>
                  </div>
                  <div className={"col-4" + " " + styles.center}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: sectionGreenContent[0]?.content,
                      }}
                    ></div>
                  </div>
                  <div className={"col-4" + " " + styles.right}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: sectionGreenContent[1]?.content,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.bannerv2}>
              <Image
                src="/images/OrtherService/bg.jpg"
                alt="Iamge"
                className={styles.image}
                layout="fill"
              ></Image>
              <div className={styles.bannerv2_content}>
                <div className="h-100 d-flex">
                  <div className={"col-6 h-100" + " " + styles.left}>
                    <h2 data-aos="fade-up">{imageHairNailSpa[0]?.title}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: imageHairNailSpa[0]?.content,
                      }}
                    ></div>
                    <div className={styles.image2}>
                      <Image
                        alt="Other Image"
                        loader={({ src }) =>
                          `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                        }
                        src={
                          imageHairNailSpa[0]?.images[
                            imageHairNailSpa[0]?.images?.length - 1
                          ]?.source
                        }
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div className={"col-6" + " " + styles.right}>
                    <div className={styles.image}>
                      <Image
                        alt="Other Image"
                        loader={({ src }) =>
                          `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                        }
                        src={
                          imageHairNailSpa[0]?.images[
                            imageHairNailSpa[0]?.images?.length - 2
                          ]?.source
                        }
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h5 data-aos="fade-up"></h5>
          <div className={styles.touchs}>
            <div className={styles.image}>
              <Image
                alt="Other Image"
                loader={({ src }) =>
                  `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                }
                src={
                  section6Touchs[0]?.images[
                    section6Touchs[0]?.images?.length - 1
                  ]?.source
                }
                layout="fill"
                objectFit="cover"
              />
              <div
                className={
                  styles.content +
                  " " +
                  "d-flex flex-column justify-content-center align-items-center"
                }
              >
                <div className={styles.title}>
                  <h2>{section6Touchs[0]?.title}</h2>
                  <div className={styles.line}></div>
                </div>
                <div className="touch-list col-10 m-auto">
                  <div className="d-flex flex-wrap">
                    {section6TouchsContent?.map((touch, index) => (
                      <div key={index} className="col-4 item d-flex">
                        <div className="image col-4">
                          <Image
                            alt="Other Image"
                            loader={({ src }) =>
                              `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                            }
                            src={touch?.images[0]?.source}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div className="info col-8">
                          <h3>{touch.title}</h3>
                          <span>{touch.sub_title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h5 data-aos="fade-up"></h5>
          <div className={styles.menu}>
            <div className={styles.image_intro}>
              <Image
                src="/images/OrtherService/bg.jpg"
                alt="Iamge"
                className={styles.image}
                layout="fill"
              ></Image>
              <div className={styles.content}>
                <div className="h-100 d-flex flex-column">
                  <div className={styles.title + " " + "col-6"}>
                    <h2>{sectionMenu[0]?.title}</h2>
                  </div>
                  <div className="d-flex col-10 m-auto">
                    <div className={"col-6" + " " + styles.left}>
                      <div className={styles.image}>
                        <Image
                          alt="Other Image"
                          loader={({ src }) =>
                            `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                          }
                          src={
                            sectionMenu[0]?.images[
                              sectionMenu[0]?.images?.length - 1
                            ]?.source
                          }
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                    <div className={"col-6" + " " + styles.right}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: sectionMenu[0]?.content,
                        }}
                        className={styles.mota}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.foscus}>
            <div className={styles.image_intro}>
              <Image
                src="/images/OrtherService/bg.jpg"
                alt="Iamge"
                className={styles.image}
                layout="fill"
              ></Image>
              <div className={styles.content}>
                <div className="h-100 d-flex flex-column justify-content-center">
                  <div className="d-flex col-10 mx-auto">
                    {sectionFocusContent?.map((item, index) => (
                      <div className={"col-4" + " " + styles.item} key={index}>
                        <div className={styles.image}>
                          <Image
                            alt="Other Image"
                            loader={({ src }) =>
                              `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                            }
                            src={item?.images[0]?.source}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <h3>{item.title}</h3>
                      </div>
                    ))}
                  </div>
                  <div className={styles.title}>
                    <h2>{sectionFocus[0]?.title}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Spa;
