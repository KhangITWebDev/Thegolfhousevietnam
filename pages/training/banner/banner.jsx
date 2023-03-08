import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBannerData } from "../../../store/redux/Banner/banner.action";
import styles from "./banner.module.scss";

function Banner(props) {
  const dispatch = useDispatch();
  const bannerTraining = useSelector((state) =>
    state.BannerReducer.banners.filter((item) => item.danh_muc === "Training")
  );
  useEffect(() => {
    dispatch(getBannerData());
  }, []);
  return (
    <div className={styles.bannerv2} data-aos="fade-right">
      <Image
        loader={({ src }) =>
          `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
        }
        alt="Image 1"
        src={bannerTraining[0]?.hinh_anh}
        layout="fill"
        objectFit="cover"
      />
      <div className={styles.bannerv2_content}>
        <div className="container h-100">
          <div className="d-flex h-100 justify-content-end align-items-center flex-column">
            {/* <div onClick={() => router.push(bannerProshop[0]?.link)}>
                <button className="btn-content">
                  {bannerProshop[0]?.action}
                </button>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
