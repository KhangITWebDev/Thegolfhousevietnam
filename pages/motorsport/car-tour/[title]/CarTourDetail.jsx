import { useRouter } from "next/router";
import React from "react";
import styles from "./CarTourDetail.module.scss";
import { Schedule } from "../../../../utils/DataDemo/CarRacingPage/data";
import {
  removeAccents,
  convertDate,
  getDateArray,
} from "../../../../utils/function";
import Image from "next/image";
import Link from "next/link";
import { NewsOn, Video } from "../../../../utils/DataDemo/CarTourDetails/data";

function CarTourDetail(props) {
  const router = useRouter();
  const findIndex = Schedule.findIndex(
    (x) =>
      removeAccents(x?.title + "-" + x?.country || "") === router.query.title
  );
  const ScheduleDateArr = getDateArray(
    new Date(Schedule[findIndex]?.start),
    new Date(Schedule[findIndex]?.end)
  );

  return (
    <div className={styles.car_tour_detail + " " + "containers"}>
      <div className="heading">
        <h2>Car Tour Detail</h2>
        <div className="line"></div>
      </div>
      <div className={styles.detail}>
        <div className={styles.detail_picture}>
          <Image alt="Image" src={Schedule[findIndex]?.flag} layout="fill" />
        </div>
        <div className={styles.detail_name}>
          <span>Event</span>
          <span>
            {Schedule[findIndex]?.title} {Schedule[findIndex]?.country} (2022)
          </span>
        </div>
        <div className={styles.detail_line}></div>
        <div className={styles.detail_address}>
          <span>{Schedule[findIndex]?.country}</span>
          <span>{Schedule[findIndex]?.street} Street</span>
        </div>
        <div className={styles.detail_day}>
          <div>
            <span className={styles.detail_day_date}>
              {convertDate(Schedule[findIndex]?.start || "").getDateInDate}
            </span>
            <span className={styles.detail_day_month}>
              {convertDate(Schedule[findIndex]?.start || "").getMonthInDate}
            </span>
            <span className={styles.detail_day_deliver}>-</span>
            <span className={styles.detail_day_date}>
              {convertDate(Schedule[findIndex]?.end || "").getDateInDate}
            </span>
            <span className={styles.detail_day_month}>
              {convertDate(Schedule[findIndex]?.start || "").getMonthInDate}
            </span>
          </div>
        </div>
        <div className={styles.detail_time}>
          <i className="fas fa-stopwatch"></i>
          <span>
            In{" "}
            <strong>
              {convertDate(Schedule[findIndex]?.end || "").getDateInDate -
                convertDate(Schedule[findIndex]?.start || "").getDateInDate +
                1}
            </strong>
          </span>
          <span>days</span>
        </div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.navigation_list}>
          <button
            className={styles.navigation_tool}
            style={{ background: "#fff" }}
          >
            <i className="fas fa-home"></i>
            <span>Main</span>
          </button>
          <button className={styles.navigation_tool}>
            <i className="fas fa-newspaper"></i>
            <span>News</span>
          </button>
          <button className={styles.navigation_tool}>
            <i className="fas fa-play-circle"></i>
            <span>Video</span>
          </button>
          <button className={styles.btn_ticket}>Ticket</button>
        </div>
        <div className={styles.navigation_social}>
          <Link href={`/`}>
            <a className={styles.fb}>
              <i className="fab fa-facebook"></i>
            </a>
          </Link>
          <Link href={`/`}>
            <a className={styles.tw}>
              <i className="fab fa-twitter"></i>
            </a>
          </Link>
          <Link href={`/`}>
            <a className={styles.insta}>
              <i className="fab fa-instagram-square"></i>
            </a>
          </Link>
          <Link href={`/`}>
            <a className={styles.ytb}>
              <i className="fab fa-youtube"></i>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.news_on}>
        <div className={styles.news_on_header}>
          <div className={styles.news_on_header_title}>
            <i className="fas fa-newspaper"></i>
            <span>
              News On {Schedule[findIndex]?.title}{" "}
              {Schedule[findIndex]?.country} 2022
            </span>
          </div>
          <button>View More</button>
        </div>
        <div className={styles.news_on_list}>
          {NewsOn.map((item, index) => (
            <div key={index} className={styles.news_on_item}>
              <div className={styles.news_on_picture}>
                <Image alt="Image" src={item.picture} layout="fill" />
                <div className={styles.news_on_flag}>
                  <Image
                    alt="Image"
                    src={Schedule[findIndex]?.flag}
                    layout="fill"
                  />
                </div>
              </div>
              <div className={styles.news_on_boxcate}>
                <span>{Schedule[findIndex]?.title} 2022</span>
                <span className={styles.news_on_time}>1h</span>
              </div>
              <div className={styles.news_on_boxName}>
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.video}>
        <div className={styles.video_header}>
          <div className={styles.video_header_title}>
            <i className="fas fa-newspaper"></i>
            <span>
              Video {Schedule[findIndex]?.title} {Schedule[findIndex]?.country}{" "}
              2022
            </span>
          </div>
          <button>View More</button>
        </div>
        <div className={styles.video_list}>
          {Video.map((item, index) => (
            <div key={index} className={styles.video_item}>
              <div className={styles.video_picture}>
                <Image alt="Image" src={item.picture} layout="fill" />
                <div className={styles.video_icon}>
                  <i className="fas fa-play"></i>
                </div>
                <div className={styles.video_length}>
                  <span>{item.length}</span>
                </div>
              </div>
              <div className={styles.video_boxcate}>
                <span>{Schedule[findIndex]?.title} 2022</span>
                <span className={styles.video_time}>
                  {convertDate(item.date).getFullInDate}
                </span>
              </div>
              <div className={styles.video_boxName}>
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.schedule}>
        <div className={styles.schedule_header}>
          <div className={styles.schedule_header_title}>
            <i className="fas fa-calendar-star"></i>
            <span>Schedule</span>
          </div>
        </div>
        <div className={styles.schedule_list}>
          {ScheduleDateArr.map((item, index) => (
            <div key={index} className={styles.schedule_item}>
              <div className={styles.schedule_item_left}>
                <div className={styles.schedule_item_date}>
                  <span>{convertDate(item).getDateInDate}</span>
                  <span>{convertDate(item).getMonthInDate}</span>
                </div>
                <div className={styles.schedule_item_left_line}></div>
                <div className={styles.schedule_item_time}>
                  <i className="fas fa-stopwatch"></i>
                  <span>{convertDate(item).getTimeInDate}</span>
                </div>
              </div>
              <div className={styles.schedule_item_right}>
                <div className={styles.schedule_item_right_line}></div>
                <span>Up Comming</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarTourDetail;
