import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewData } from "../../../store/redux/NewsEvents/news.action";
import { removeAccents, time } from "../../../utils/function";
import styles from "./news.module.scss";

function News(props) {
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.NewsReducer);
  const router = useRouter();
  useEffect(() => {
    dispatch(getNewData());
  }, []);
  return (
    <div className={styles.news}>
      <div className="container">
        <div className="heading" data-aos="fade-right">
          {/* <span className="text-center">
                {sectiontitleNew[0]?.sub_title}
              </span> */}
          <h2 className="text-center">Tin tức và sự kiên</h2>
        </div>
        <div
          className={
            "d-flex flex-wrap justify-content-center" + " " + styles.list
          }
        >
          {news.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className={"col-12 col-sm-6 col-lg-4" + " " + styles.item}
              data-aos="fade-right"
            >
              <div
                className={styles.info + " " + "h-100 d-flex flex-column"}
                data-aos="fade-right"
              >
                <div>
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
                      alt={"Image" + index + 1}
                      loader={({ src }) =>
                        `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                      }
                      src={item.picture}
                      layout="fill"
                    ></Image>
                  </div>
                  <h5
                    onClick={() =>
                      router.push(`/news-events/${removeAccents(item.title)}`)
                    }
                  >
                    {item.title}
                  </h5>
                </div>
                <div className={styles.bottom}>
                  <span>{time(item.date_created)}</span>
                  <p>{item.mieu_ta_ngan}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="button" data-aos="fade-up">
          <button onClick={() => router.push("/news-events")}>Xem thêm</button>
        </div>
      </div>
    </div>
  );
}

export default News;
