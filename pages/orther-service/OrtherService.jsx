import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBannerData } from "../../store/redux/Banner/banner.action";
import styles from "./OrtherService.module.scss";

function OrtherService(props) {
  const dispatch = useDispatch();
  const { banners } = useSelector((state) => state.BannerReducer);
  useEffect(() => {
    dispatch(getBannerData());
  }, [dispatch]);
  const bannerHairNailSpa = banners.filter(
    (x) => x.danh_muc === "Hair Nail Spa"
  );
  const BAnnerVipLounge = banners.filter((x) => x.danh_muc === "VIP Lounge");
  return (
    <div className={styles.orther_service}>
      <div className="container">
        <div className="heading" data-aos="fade-up">
          <h2>Hair, Nail & Spa</h2>
        </div>
        <div className="d-flex justify-content-center" data-aos="fade-down">
          <button className="btn-down">
            <i className="fa-regular fa-chevron-down"></i>
          </button>
        </div>
      </div>
      <div className={styles.bannerv2} data-aos="fade-up">
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
          <div className="container h-100">
            <div className="d-flex h-100 justify-content-center align-items-center flex-column">
              {/* <span></span> */}
              <h1 data-aos="fade-right">{bannerHairNailSpa[0]?.tieu_de}</h1>
              <div
                data-aos="fade-left"
                dangerouslySetInnerHTML={{
                  __html: bannerHairNailSpa[0]?.mo_ta,
                }}
              ></div>
              {/* <div onClick={() => router.push("/trainer")}>
                <button className="btn-content">Tìm hiểu thêm</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h5 data-aos="fade-down">Hình ảnh dịch vụ</h5>
        <div className={styles.list}>
          <div className={styles.image} data-aos="fade-right">
            <Image
              alt="Other Image"
              src="/images/OrtherService/orther5.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.image} data-aos="fade-left">
            <Image
              alt="Other Image"
              src="/images/OrtherService/orther6.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.image} data-aos="fade-right">
            <Image
              alt="Other Image"
              src="/images/OrtherService/orther7.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.image} data-aos="fade-left">
            <Image
              alt="Other Image"
              src="/images/OrtherService/orther8.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="heading" data-aos="fade-up">
          <h2>VIP Lounge</h2>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn-down" data-aos="fade-down">
            <i className="fa-regular fa-chevron-down"></i>
          </button>
        </div>
      </div>
      <div className={styles.bannerv2} data-aos="fade-up">
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
              <h1 data-aos="fade-right">{BAnnerVipLounge[0]?.tieu_de}</h1>
              <div
                data-aos="fade-left"
                dangerouslySetInnerHTML={{
                  __html: BAnnerVipLounge[0]?.mo_ta,
                }}
              ></div>
              {/* <div onClick={() => router.push("/trainer")}>
                <button className="btn-content">Tìm hiểu thêm</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h5 data-aos="fade-down">Hình ảnh dịch vụ</h5>
        <div className={styles.list}>
          <div className={styles.image} data-aos="fade-right">
            <Image
              alt="Other Image"
              src="/images/OrtherService/orther1.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.image} data-aos="fade-left">
            <Image
              alt="Other Image"
              src="/images/OrtherService/orther2.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.image} data-aos="fade-right">
            <Image
              alt="Other Image"
              src="/images/OrtherService/orther3.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.image} data-aos="fade-left">
            <Image
              alt="Other Image"
              src="/images/OrtherService/orther4.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrtherService;
