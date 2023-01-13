import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getNewData } from "../../store/redux/NewsEvents/news.action";
import Pagination from "../../components/pagination/pagination";
import { NewsEventsData } from "../../utils/DataDemo/News-Events/NewsEventsData";
import { removeAccents } from "../../utils/function";
import { usePagination } from "../../utils/usePagination";
import { time } from "../../utils/function";
import styles from "./NewsEvents.module.scss";
function NewsEvents(props) {
  const { news } = useSelector((state) => state.NewsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewData());
  }, [dispatch]);
  const data = usePagination(news, 4);
  const router = useRouter();
  const findIndex = news.findIndex(
    (x) => removeAccents(x._id) === localStorage.getItem("newsId")
  );
  const newsDetail = news[findIndex] ? news[findIndex] : NewsEventsData[0];
  const handleSearchInput = (e) => {
    const value = e.target.value;
    const dataSearch = news.filter((x) =>
      removeAccents(x.title).includes(removeAccents(value.toLowerCase()))
    );
    if (value !== "") {
      data.setPerData(dataSearch);
    } else {
      data.setPerData(news);
    }
  };
  const customDate = () => {
    const date = localStorage.getItem("newsTime");
    const dateObj = new Date(date);
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    return `${day} tháng ${month}, ${year}`;
  };
  return (
    <div className={styles.news_page}>
      <div className="container">
        <div className="heading" data-aos="fade-up">
          <h2 className={styles.title_page}>Tin tức sự kiện</h2>
        </div>
        {/* <div className="d-flex justify-content-center" data-aos="fade-down">
          <button className="btn-down">
            <i className="fa-regular fa-chevron-down"></i>
          </button>
        </div> */}
        <div className={styles.content}>
          <div className="d-flex flex-wrap">
            <div className="col-12 col-lg-7">
              <div className={styles.news_list}>
                {data.currentDatas.map((item, index) => (
                  <div
                    className={"d-flex flex-wrap" + " " + styles.item}
                    key={index}
                  >
                    <div className={"col-12 col-sm-6" + " " + styles.image}>
                      <Image
                        loader={({ src }) =>
                          `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                        }
                        alt="Image"
                        src={item.picture}
                        layout="fill"
                        objectFit="cover"
                        data-aos="fade-right"
                      />
                    </div>
                    <div
                      className={
                        "col-12 col-sm-6  d-flex flex-column justify-content-between" +
                        " " +
                        styles.info
                      }
                    >
                      <span className={styles.type} data-aos="fade-left">
                        {item.cate_name}
                      </span>
                      <h3
                        data-aos="fade-right"
                        onClick={() => {
                          router.push(
                            `/news-events/${removeAccents(item.title)}`
                          );
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
                      </h3>
                      <p data-aos="fade-left">{item.mieu_ta_ngan}</p>
                      <div className={styles.deliver}></div>
                      <div
                        className={
                          styles.bonus + " " + "d-flex align-items-center"
                        }
                      >
                        <span data-aos="fade-right">
                          {time(item.date_created)}
                        </span>
                        <i className="fa-sharp fa-solid fa-circle"></i>
                        <span data-aos="fade-left">
                          {item.comment} Bình luận
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-center" data-aos="fade-up">
                <Pagination data={data} />
              </div>
            </div>
            <div className={"col-12 col-lg-5" + " " + styles.right}>
              <div className={styles.right_content + " " + "d-flex flex-wrap"}>
                <div
                  className={"col-12 col-lg-12 col-md-6" + " " + styles.search}
                >
                  <h5 data-aos="fade-right">Tìm kiếm</h5>
                  <div className="input-position" data-aos="fade-right">
                    <div className="icon">
                      <i className="fa-regular fa-magnifying-glass"></i>
                    </div>
                    <input
                      type="text"
                      placeholder="Tìm sản phẩm ..."
                      onChange={(e) => {
                        handleSearchInput(e);
                      }}
                    />
                  </div>
                </div>
                <div
                  className={"col-12 col-lg-12 col-md-6" + " " + styles.post}
                >
                  <h5 data-aos="fade-left">Bài viết đã xem</h5>
                  {newsDetail.cate_name && (
                    <div
                      className={
                        "d-flex align-items-center" + " " + styles.head
                      }
                    >
                      <h4 data-aos="fade-right">{newsDetail.cate_name}</h4>
                      <i className="fa-sharp fa-solid fa-circle"></i>
                      <span data-aos="fade-left">{customDate()}</span>
                    </div>
                  )}
                  {newsDetail.picture && (
                    <div
                      className={
                        styles.watched + " " + "d-flex align-items-center"
                      }
                    >
                      <div className={styles.watched_image}>
                        <Image
                          loader={({ src }) =>
                            `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                          }
                          alt="Image"
                          src={newsDetail.picture}
                          width={90}
                          height={70}
                          objectFit="cover"
                          data-aos="fade-right"
                        />
                      </div>
                      <div className={styles.watched_info}>
                        <h5 data-aos="fade-left">{newsDetail.title}</h5>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={styles.tags + " " + "col-12 col-lg-12 col-md-6"}
                >
                  <h5 data-aos="fade-right">Thẻ</h5>
                  <div data-aos="fade-right" className={styles.tag}>
                    <button>Sự kiện</button>
                    <button>Mới</button>
                    <button>Nổi bật</button>
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

export default NewsEvents;
