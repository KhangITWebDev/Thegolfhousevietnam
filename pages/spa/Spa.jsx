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
  const sectionMenu = contents.filter(
    (item) => item.category === "63fc4021e469fb4f12ebd45a"
  );
  const sectionFocus = contents.filter(
    (item) => item.category === "63fc4037e469fb4f12ebd470"
  );
  const bannerHairNailSpa = banners.filter((x) => x.danh_muc === "Spa");
  return (
    <div className={styles.orther_service}>
      <div className="container">
        <div className="heading" data-aos="fade-down">
          <h2>Spa</h2>
        </div>
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
        {/* <div className={styles.bannerv2_content}>
          <div className="container h-100">
            <div className="d-flex h-100 justify-content-center align-items-center flex-column">
              <h1>{bannerHairNailSpa[0]?.tieu_de}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: bannerHairNailSpa[0]?.mo_ta,
                }}
              ></div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="container">
        <div className={styles.list}>
          <h5 data-aos="fade-up">{sectionIntro[0]?.title}</h5>
          <div className={styles.image_intro}>
            <Image
              alt="Other Image"
              loader={({ src }) =>
                `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
              }
              src={
                sectionIntro[0]?.images[sectionIntro[0]?.images?.length - 1]
                  ?.source
              }
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h5 data-aos="fade-up">{sectionGreenSpa[0]?.title}</h5>
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
          <h5 data-aos="fade-up">{imageHairNailSpa[0]?.title}</h5>
          <div className={styles.image_more}>
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
          <h5 data-aos="fade-up">{section6Touchs[0]?.title}</h5>
          <div className={styles.image_more}>
            <Image
              alt="Other Image"
              loader={({ src }) =>
                `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
              }
              src={
                section6Touchs[0]?.images[section6Touchs[0]?.images?.length - 1]
                  ?.source
              }
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h5 data-aos="fade-up">{sectionMenu[0]?.title}</h5>
          <div className={styles.image_more}>
            <Image
              alt="Other Image"
              loader={({ src }) =>
                `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
              }
              src={
                sectionMenu[0]?.images[sectionMenu[0]?.images?.length - 1]
                  ?.source
              }
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h5 data-aos="fade-up">{sectionFocus[0]?.title}</h5>
          <div className={styles.image_more}>
            <Image
              alt="Other Image"
              loader={({ src }) =>
                `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
              }
              src={
                sectionFocus[0]?.images[sectionFocus[0]?.images?.length - 1]
                  ?.source
              }
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Spa;
