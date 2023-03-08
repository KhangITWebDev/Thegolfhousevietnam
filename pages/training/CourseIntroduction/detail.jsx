import Image from "next/image";
import React from "react";
import SignUpTrial from "../../../components/Modal/SignUpTrial";
import { removeAccents } from "../../../utils/function";
import styles from "./courseIntro.module.scss";

function Detail({ courseData, detailIndex, bgDetail }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <div
      className={styles.course_detail}
      id="course-detail"
      data-aos="fade-right"
    >
      <div className="container">
        <div className="d-flex align-items-center flex-wrap-reverse flex-md-nowrap">
          <div className="d-flex justify-content-center justify-content-md-start left">
            <div className="swiper-slide">
              <div className="d-flex flex-column info">
                <div>
                  <div className="image">
                    <Image
                      alt="Intro 1"
                      loader={({ src }) =>
                        `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                      }
                      src={courseData[detailIndex]?.thumb_image}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  {/* <div className="detail"></div> */}
                  <div
                    className="detail d-flex justify-content-end"
                    style={{
                      height:
                        window.screen.width < 780 &&
                        window.screen.width > 768 &&
                        removeAccents(courseData[detailIndex]?.name) ===
                          removeAccents("Tập luyện theo giờ")
                          ? 500
                          : 320,
                      background: bgDetail,
                    }}
                  >
                    <h5 onClick={handleOpen}>
                      {courseData[detailIndex]?.name}
                    </h5>
                    <div className="button">
                      <button onClick={handleOpen}>Nhận Tư Vấn</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="heading col-12 col-md-8 flex-wrap align-items-start">
            <span>THÔNG TIN KHOÁ HỌC</span>
            <h2 style={{}}>{courseData[detailIndex]?.name}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: courseData[detailIndex]?.description,
              }}
            ></div>
          </div>
        </div>
      </div>
      {open && <SignUpTrial open={open} handleClose={handleClose} />}
    </div>
  );
}

export default Detail;
