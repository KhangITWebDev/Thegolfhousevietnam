import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBannerData } from "../../../store/redux/Banner/banner.action";
import { getContentData } from "../../../store/redux/LoadContentReducer/content.action";
import styles from "./Lounge.module.scss";
function Lounge(props) {
  const dispatch = useDispatch();
  const { banners } = useSelector((state) => state.BannerReducer);
  const { contents } = useSelector((state) => state.ContentReducer);
  useEffect(() => {
    dispatch(getBannerData());
    dispatch(getContentData());
  }, []);
  const sectionTitleVipLouge = contents.filter(
    (item) => item.category === "63bc439839d2a23b06d8dede"
  );
  const imageVipLouge = contents.filter(
    (item) => item.category === "63bc3f2439d2a23b06d8c50f"
  );
  const BAnnerVipLounge = banners.filter((x) => x.danh_muc === "VIP Lounge");
  return (
    <div className={styles.orther_service}>
      <div className="container" id="lounge">
        <div className="heading" data-aos="fade-down">
          <h2>{sectionTitleVipLouge[0]?.title}</h2>
        </div>
      </div>
      <div className={styles.bannerv2} data-aos="fade-right">
        <Image
          loader={({ src }) =>
            `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
          }
          alt="Image 1"
          src={BAnnerVipLounge[0]?.hinh_anh}
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.bannerv2_content}>
          <div className="container h-100">
            <div className="d-flex h-100 justify-content-center align-items-center flex-column">
              {/* <span></span> */}
              <h1>{BAnnerVipLounge[0]?.tieu_de}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: BAnnerVipLounge[0]?.mo_ta,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h5 data-aos="fade-up">Dịch vụ</h5>
        <div className={styles.list}>
          {imageVipLouge[0]?.images?.slice(0, 4).map((item, index) => {
            return (
              <div key={index} className={styles.image} data-aos="fade-right">
                <Image
                  alt="Other Image"
                  loader={({ src }) =>
                    `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                  }
                  src={item.source}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Lounge;
