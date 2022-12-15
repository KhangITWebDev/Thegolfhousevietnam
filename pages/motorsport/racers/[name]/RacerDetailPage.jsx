import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  NewsOn,
  NewsOnRoss,
  Video,
} from "../../../../utils/DataDemo/RacerDetailPage/data";
import { Racers } from "../../../../utils/DataDemo/Racers/data";
import { removeAccents, convertDate } from "../../../../utils/function";
import styles from "./RacerDetails.module.scss";

function RacerDetailPage(props) {
  const router = useRouter();
  const findIndex = Racers.findIndex(
    (x) =>
      removeAccents(x?.firstname + "-" + x?.lastname || "") ===
      router.query.name
  );
  return (
    <div className={styles.car_tour_detail + " " + "containers"}>
      <div className="heading">
        <h2>Car Tour Detail</h2>
        <div className="line"></div>
      </div>
      <div className={styles.detail}>
        <div className={styles.detail_picture}>
          <Image alt="Image" src={Racers[findIndex]?.picture} layout="fill" />
        </div>
        <div className={styles.detail_flag}>
          <Image alt="Image" src={Racers[findIndex]?.flag} layout="fill" />
        </div>
        <div className={styles.detail_name}>
          <span>Racer</span>
          <span>
            {Racers[findIndex]?.firstname} {Racers[findIndex]?.lastname}
          </span>
          <span>
            {Racers[findIndex]?.birthDay} (age{" "}
            {convertDate(new Date()).getFullYearInDate -
              convertDate(Racers[findIndex]?.birthDay).getFullYearInDate}
            )
          </span>
        </div>
        <div className={styles.detail_line}></div>
        <div className={styles.detail_team}>
          <span>Team</span>
          <span>{Racers[findIndex]?.team}</span>
        </div>
        <div className={styles.detail_no}>
          <span>{Racers[findIndex]?.id}</span>
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
              News On {Racers[findIndex]?.firstname}{" "}
              {Racers[findIndex]?.lastname}
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
                    src={Racers[findIndex]?.flag}
                    layout="fill"
                  />
                </div>
              </div>
              <div className={styles.news_on_boxcate}>
                <span>NASCAR 2022</span>
                <span className={styles.news_on_time}>1h</span>
              </div>
              <div className={styles.news_on_boxName}>
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.ross}>
        <div className={styles.ross_header}>
          <div className={styles.ross_header_title}>
            <i className="fas fa-newspaper"></i>
            <span>News On Ross {Racers[findIndex]?.lastname}</span>
          </div>
          <button>View More</button>
        </div>
        <div className={styles.ross_list}>
          {NewsOnRoss.map((item, index) => (
            <div key={index} className={styles.ross_item}>
              <div className={styles.ross_picture}>
                <Image alt="Image" src={item.picture} layout="fill" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.video}>
        <div className={styles.video_header}>
          <div className={styles.video_header_title}>
            <i className="fas fa-newspaper"></i>
            <span>Video Ross {Racers[findIndex]?.lastname}</span>
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
                {/* <div className={styles.video_length}>
                  <span>{item.length}</span>
                </div> */}
              </div>
              <div className={styles.video_boxcate}>
                <span>NASCAR 2022</span>
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
    </div>
  );
}

export default RacerDetailPage;
