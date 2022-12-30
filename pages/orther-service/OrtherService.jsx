import Image from "next/image";
import React from "react";
import styles from "./OrtherService.module.scss";

function OrtherService(props) {
  return (
    <div className={styles.orther_service}>
      <div className="container">
        <div className="heading">
          <h2>Hair, Nail & Spa</h2>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn-down">
            <i className="fa-regular fa-chevron-down"></i>
          </button>
        </div>
      </div>
      <div className={styles.bannerv2}>
        <Image
          alt="Image 1"
          src="/images/OrtherService/banner1.png"
          layout="fill"
        />
        <div className={styles.bannerv2_content}>
          <div className="container h-100">
            <div className="d-flex h-100 justify-content-center align-items-center flex-column">
              {/* <span></span> */}
              <h1>Hair, Nail & Spa</h1>
              <p>
                Chăm sóc bản thân sau thời gian tập luyện là điều cần thiết. Tận
                hưởng thời gian thư giãn tuyệt vời với các dịch vụ chăm sóc
                tóc,chăm sóc da, massage cao cấp.
              </p>
              {/* <div onClick={() => router.push("/trainer")}>
                <button className="btn-content">Tìm hiểu thêm</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h5>Hình ảnh dịch vụ</h5>
        <div className={styles.list}>
          <div className={styles.image}>
            <Image
              alt="Other Image"
              src="/images/OrtherService/orther5.png"
              layout="fill"
            />
          </div>
          <div className={styles.image}>
            <Image
              alt="Other Image"
              src="/images/OrtherService/orther6.png"
              layout="fill"
            />
          </div>
          <div className={styles.image}>
            <Image
              alt="Other Image"
              src="/images/OrtherService/orther7.png"
              layout="fill"
            />
          </div>
          <div className={styles.image}>
            <Image
              alt="Other Image"
              src="/images/OrtherService/orther8.png"
              layout="fill"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="heading">
          <h2>VIP Lounge</h2>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn-down">
            <i className="fa-regular fa-chevron-down"></i>
          </button>
        </div>
      </div>
      <div className={styles.bannerv2}>
        <Image
          alt="Image 1"
          src="/images/OrtherService/banner2.png"
          layout="fill"
        />
        <div className={styles.bannerv2_content}>
          <div className="container h-100">
            <div className="d-flex h-100 justify-content-center align-items-center flex-column">
              {/* <span></span> */}
              <h1>VIP Lounge</h1>
              <p>
                Không gian riêng tư, rộng rãi, được thiết kề phù hợp cho những
                hoạt động giải trí kết nối cộng đồng chung niềm đam mê.
              </p>
              {/* <div onClick={() => router.push("/trainer")}>
                <button className="btn-content">Tìm hiểu thêm</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h5>Hình ảnh dịch vụ</h5>
        <div className={styles.list}>
          <div className={styles.image}>
            <Image
              alt="Other Image"
              src="/images/OrtherService/orther1.png"
              layout="fill"
            />
          </div>
          <div className={styles.image}>
            <Image
              alt="Other Image"
              src="/images/OrtherService/orther2.png"
              layout="fill"
            />
          </div>
          <div className={styles.image}>
            <Image
              alt="Other Image"
              src="/images/OrtherService/orther3.png"
              layout="fill"
            />
          </div>
          <div className={styles.image}>
            <Image
              alt="Other Image"
              src="/images/OrtherService/orther4.png"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrtherService;
