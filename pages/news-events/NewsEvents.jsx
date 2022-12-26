import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Pagination from "../../components/pagination/pagination";
import { NewsEventsData } from "../../utils/DataDemo/News-Events/NewsEventsData";
import { removeAccents } from "../../utils/function";
import { usePagination } from "../../utils/usePagination";
import styles from "./NewsEvents.module.scss";

function NewsEvents(props) {
  const data = usePagination([1, 2, 3], 1);
  const router = useRouter();
  return (
    <div className={styles.news_page}>
      <div className="container">
        <div className="heading">
          <h2 className={styles.title_page}>Tin tức, sự kiện</h2>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn-down">
            <i className="fa-regular fa-chevron-down"></i>
          </button>
        </div>
        <div className={styles.content}>
          <div className="d-flex">
            <div className="col-8">
              <div className={styles.news_list}>
                {NewsEventsData.map((item, index) => (
                  <div className={"d-flex" + " " + styles.item} key={index}>
                    <div className={"col-6" + " " + styles.image}>
                      <Image alt="Image" src={item.image} layout="fill" />
                    </div>
                    <div
                      className={
                        "col-6  d-flex flex-column justify-content-between" +
                        " " +
                        styles.info
                      }
                    >
                      <span className={styles.type}>{item.type}</span>
                      <h3
                        onClick={() =>
                          router.push(
                            `news-events/${removeAccents(item.title)}`
                          )
                        }
                      >
                        Cơ hội hốt bạc ở chung kết lớn LPGA Tour
                      </h3>
                      <p>Cơ hội hốt bạc ở chung kết lớn LPGA Tour</p>
                      <div className={styles.deliver}></div>
                      <div
                        className={
                          styles.bonus + " " + "d-flex align-items-center"
                        }
                      >
                        <span>{item.time}</span>
                        <i className="fa-sharp fa-solid fa-circle"></i>
                        <span>{item.comment} Bình luận</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-center">
                <Pagination data={data} />
              </div>
            </div>
            <div className={"col-4" + " " + styles.right}>
              <div className={styles.right_content}>
                <h5>Tìm kiếm</h5>
                <div className="input-position">
                  <div className="icon">
                    <i className="fa-regular fa-magnifying-glass"></i>
                  </div>
                  <input type="text" placeholder="Tìm sản phẩm ..." />
                </div>
                <h5>Bài viết đã xem</h5>
                <div
                  className={"d-flex align-items-center" + " " + styles.head}
                >
                  <h4>TIN TỨC</h4>
                  <i className="fa-sharp fa-solid fa-circle"></i>
                  <span>24 tháng 12, 2022</span>
                </div>
                <div
                  className={styles.watched + " " + "d-flex align-items-center"}
                >
                  <div className={styles.watched_image}>
                    <Image
                      alt="Image"
                      src="/images/NewsEvents/newsbonus.png"
                      width={90}
                      height={70}
                    />
                  </div>
                  <div className={styles.watched_info}>
                    <h5>Mùa giải thành công của Lee Minjee trên LPGA Tour</h5>
                  </div>
                </div>
                <h5>Thẻ</h5>
                <div className={styles.tag}>
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
  );
}

export default NewsEvents;
