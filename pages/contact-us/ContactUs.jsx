import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContentData } from "../../store/redux/LoadContentReducer/content.action";
import styles from "./ContactUs.module.scss";
function ContactUs(props) {
  const dispatch = useDispatch();
  const { contents } = useSelector((state) => state.ContentReducer);
  useEffect(() => {
    dispatch(getContentData());
  }, [dispatch]);
  const sectionContactList = contents.filter(
    (item) => item.category === "63bc447139d2a23b06d8e3c3"
  );
  const sectionTitlePage = contents.filter(
    (item) => item.category === "63bc466939d2a23b06d8f125"
  );
  const sectionTitleForm = contents.filter(
    (item) => item.category === "63db87a8df230754d23088ec"
  );
  const sectionBannerContact = contents.filter(
    (item) => item.category === "63bc470139d2a23b06d8f551"
  );
  const router = useRouter();
  return (
    <div className={styles.contact_page}>
      <div className="heading" data-aos="fade-up">
        <h2 className={styles.title_page}>{sectionTitlePage[0]?.title}</h2>
      </div>
      <div className={styles.training} id="contact">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center">
            {sectionContactList.slice(0, 3).map((item, index) => (
              <div key={index} className="item col-12 col-sm-6 col-lg-4">
                <div
                  className="content h-100 d-flex flex-column align-items-center"
                  onClick={() => {
                    if (item.show_buton) {
                      if (item.open_page) {
                        window.open(item.url_button);
                      } else {
                        router.push(item.url_button);
                      }
                    } else {
                    }
                  }}
                >
                  <div
                    className="image"
                    data-aos={
                      index === 0
                        ? "fade-right"
                        : index === 1
                        ? "fade-down"
                        : "fade-left"
                    }
                  >
                    <Image
                      alt="item 1"
                      loader={({ src }) =>
                        `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                      }
                      src={item.images[item.images.length - 1].source}
                      width={85}
                      height={85}
                      objectFit="cover"
                    />
                  </div>
                  <div className="info d-flex flex-column align-items-center">
                    <h5
                      className="text-center"
                      data-aos={
                        index === 0
                          ? "fade-right"
                          : index === 1
                          ? "fade-up"
                          : "fade-left"
                      }
                    >
                      {item.title}
                    </h5>
                    <div
                      data-aos={
                        index === 0
                          ? "fade-right"
                          : index === 1
                          ? "fade-up"
                          : "fade-left"
                      }
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.form}>
        <div className="d-flex flex-wrap">
          <div
            className={"col-12 col-lg-6" + " " + styles.left}
            data-aos="fade-right"
          >
            <Image
              alt="map"
              loader={({ src }) =>
                `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
              }
              src={
                sectionTitleForm[0]?.images[
                  sectionTitleForm[0]?.images.length - 1
                ]?.source
              }
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            className={"col-12 col-lg-6" + " " + styles.right}
            data-aos="fade-left"
          >
            <div>
              <div className="heading align-items-start w-100">
                <span data-aos="fade-left">
                  {sectionTitleForm[0]?.sub_title}
                </span>
                <h2 data-aos="fade-left" className={styles.title_page}>
                  {sectionTitleForm[0]?.title}
                </h2>
              </div>
              <form action="">
                <div className="form-group" data-aos="fade-left">
                  <label htmlFor="" className="form-label">
                    Họ tên
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group" data-aos="fade-left">
                  <label htmlFor="" className="form-label">
                    Email
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group" data-aos="fade-left">
                  <label htmlFor="" className="form-label">
                    Điện Thoại
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group" data-aos="fade-left">
                  <label htmlFor="" className="form-label">
                    Ghi chú
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="button" data-aos="fade-left">
                  <button>Gửi</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
