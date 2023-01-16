import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewData } from "../../../store/redux/NewsEvents/news.action";
import { NewsEventsData } from "../../../utils/DataDemo/News-Events/NewsEventsData";
import { removeAccents, time } from "../../../utils/function";
import styles from "./detail.module.scss";
function Detail(props) {
  const { news } = useSelector((state) => state.NewsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewData());
  }, [dispatch]);
  const router = useRouter();
  const [findIndex, setFindIndex] = useState(
    news.findIndex((x) => removeAccents(x.title) === router.query.title)
  );
  useEffect(() => {
    setFindIndex(
      news.findIndex((x) => removeAccents(x.title) === router.query.title)
    );
  }, [news, router]);
  const newsDetail = news[findIndex] ? news[findIndex] : NewsEventsData[0];
  const ortherNews = news.filter((x) => x._id !== newsDetail?._id);
  return (
    <div className={styles.detail_page}>
      <div className={styles.banner}>
        <Image
          loader={({ src }) =>
            `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
          }
          alt="Image"
          src={newsDetail?.picture}
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.content}>
          <div className="container h-100">
            <div className="d-flex h-100 justify-content-center align-items-center flex-column">
              <span className={styles.type}>{newsDetail?.cate_name}</span>
              <h1>{newsDetail.title}</h1>
              <div className={styles.tool + " " + "d-flex align-items-center"}>
                <div
                  className={styles.people + " " + "d-flex align-items-center"}
                >
                  <Image
                    alt="Iamge"
                    src="/images/NewsEvents/avatar.png"
                    width={18}
                    height={18}
                    objectFit="cover"
                  ></Image>
                  <h6>{newsDetail.name_user_created}</h6>
                </div>
                <i className="fa-sharp fa-solid fa-circle"></i>
                <span>{time(newsDetail.date_created)}</span>
                <i className="fa-sharp fa-solid fa-circle"></i>
                <span>0 Bình luận</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.top + " " + "col-12 col-md-10 m-auto"}>
            <div
              dangerouslySetInnerHTML={{
                __html: newsDetail?.content,
              }}
            ></div>
          </div>
          <div className="col-12 col-md-10 m-auto">
            <div className={styles.tag}>
              <button>Mới</button>
              <button>Nổi bật</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-10 m-auto">
          <div
            className={
              styles.bonus +
              " " +
              "d-flex justify-content-start justify-content-sm-between align-items-center"
            }
          >
            <div>
              <i className="fa-light fa-heart"></i>
            </div>
            <div className={"d-flex" + " " + styles.right}>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-light fa-envelope"></i>
              <i className="fa-light fa-link"></i>
            </div>
          </div>
          <div className={styles.comment + " " + "d-flex flex-wrap"}>
            <div className={styles.avatar + " " + "col-12 col-md-2"}>
              <Image
                alt="Iamge"
                src="/images/NewsEvents/avatar2.png"
                width={70}
                height={70}
                objectFit="cover"
              ></Image>
            </div>
            <div className={styles.content + "col-12 col-md-10"}>
              <h5>{newsDetail.name_user_created}</h5>
              <span>NHÀ BÁO</span>
              <p>
                Curabitur varius eros et lacus rutrum consequat. Mauris
                sollicitudin enim condimentum, luctus justo non, molestie nisl.
              </p>
              <div
                className={styles.social + " " + "d-flex align-items-center"}
              >
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
          <div className={styles.add_comment}>
            <form action="">
              <div className="form-group">
                <label htmlFor="">
                  <h3>Bình luận</h3>
                </label>
                <textarea
                  className="form-control"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="button justify-content-start">
                <button>Gửi</button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.news}>
          <div className="heading">
            <h2 className="text-center">Tin tức khác</h2>
          </div>
          <div
            className={
              "d-flex flex-wrap justify-content-center" + " " + styles.list
            }
          >
            {ortherNews.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className={"col-12 col-sm-6 col-lg-4" + " " + styles.item}
              >
                <div className={styles.info}>
                  <div
                    className={styles.image}
                    onClick={() => {
                      router.push(`/news-events/${removeAccents(item.title)}`);
                      localStorage.setItem("newsId", item._id);
                      localStorage.setItem(
                        "newsTime",
                        new Date().toLocaleString("en-US", {
                          timeZone: "Asia/Ho_Chi_Minh",
                        })
                      );
                    }}
                  >
                    <Image
                      loader={({ src }) =>
                        `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                      }
                      alt="Image"
                      src={item.picture}
                      layout="fill"
                      objectFit="cover"
                    ></Image>
                  </div>
                  <h5
                    onClick={() => {
                      router.push(`/news-events/${removeAccents(item.title)}`);
                      localStorage.setItem("newsId", item._id);
                      localStorage.setItem(
                        "newsTime",
                        new Date().toLocaleString("en-US", {
                          timeZone: "Asia/Ho_Chi_Minh",
                        })
                      );
                    }}
                  >
                    {item.title}
                  </h5>
                  <span>{time(item.date_created)}</span>
                  <p>{item.mieu_ta_ngan}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="button">
            <button>Xem thêm</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detail;
