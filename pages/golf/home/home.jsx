import React from "react";
import styles from "./home.module.scss";
import Image from "next/image";
import { Trending } from "../../../utils/DataDemo/GoftTour";
import GoftLayout from "../../../components/layout/goftLayout";
import {
  Blog,
  CommunitiData,
  GoftNewsData,
  GoftVideo,
  Golfers,
} from "../../../utils/DataDemo/GoftPage/dataGoftPage";
import { removeAccents } from "../../../utils/function";
import { useRouter } from "next/router";

function Home(props) {
  const router = useRouter();
  const handleNavigate = (item) => {
    router.push(`/golf/news/${removeAccents(item.title)}`);
  };
  return (
    <div className={styles.home_page}>
      <div className="container">
        <div className={styles.goft_home}>
          <div className="heading">
            <h2>Goft News</h2>
            <div className="line"></div>
          </div>
          <div className={styles.content + " " + "d-flex"}>
            <div className={styles.trending + " " + "col-5"}>
              {GoftNewsData.filter((x) => x.type === "Trending")
                .slice(0, 4)
                .map((item, index) => (
                  <div className={styles.item} key={index}>
                    <Image alt="Image" src={item.picture} layout="fill" />
                    <div className={styles.label}>
                      <span>{item.type}</span>
                    </div>
                    <div
                      className={styles.title}
                      onClick={() => handleNavigate(item)}
                    >
                      <h5>{item.title}</h5>
                    </div>
                  </div>
                ))}
            </div>
            <div className={styles.feature + " " + "col-3"}>
              {GoftNewsData.filter((x) => x.type === "Feature")
                .slice(0, 3)
                .map((item, index) => (
                  <div className={styles.item} key={index}>
                    <Image
                      alt="Image"
                      src={item.picture}
                      layout="fill"
                      // width={100}
                      // height={100}
                    />
                    <div className={styles.label}>
                      <span>{item.type}</span>
                    </div>
                    <div
                      className={styles.title}
                      onClick={() => handleNavigate(item)}
                    >
                      <h5>{item.title}</h5>
                    </div>
                  </div>
                ))}
            </div>
            <div className={styles.review + " " + "col-4"}>
              <div className={styles.review_content}>
                <div className={styles.heading}>
                  <span>Review</span>
                </div>
                <div className={styles.review_list}>
                  {Trending.map((item, index) => (
                    <div className={styles.item} key={index}>
                      <div className={styles.picture}>
                        <Image alt="Image" src={item.picture} layout="fill" />
                      </div>
                      <h5>{item.title}</h5>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.review_banner}>
                <Image
                  alt="Banner"
                  src="/images/Home/GoftTour/banner-trending.png"
                  layout="fill"
                />
              </div>
            </div>
          </div>
          <div className={styles.banner_bottom}>
            <Image
              alt="Banner Bottom"
              src="/images/Home/GoftTour/bannerbottom.png"
              layout="fill"
            />
          </div>
        </div>
        <div className={styles.event}>
          <div className="heading">
            <h2>Event</h2>
            <div className="line"></div>
          </div>
          <div className={"d-flex" + " " + styles.event_list}>
            <div className={"col-6" + " " + styles.event1}>
              <div className={styles.item}>
                <div className={"d-flex align-items-center" + " " + styles.top}>
                  <div className={"col-6" + " " + styles.logo}>
                    <Image
                      alt="Logo EKR"
                      src="/images/Home/Event/logoEvent.png"
                      layout="fill"
                    />
                  </div>
                  <div className={"col-6" + " " + styles.content}>
                    <h5>This Week</h5>
                    <h4>ELK Ridge Open</h4>
                    <p>Sep 20 - 23</p>
                  </div>
                </div>
                <div className={styles.center}>
                  <p>
                    <strong>BROADCAST SCHEDULE</strong> - Friday, September 23
                  </p>
                  <p>
                    <strong>PGA TOUR Radio</strong> 12:00-5:00a +07{" "}
                    <strong>PGA TOUR Radio</strong> 11:00p-5:00a +07
                  </p>
                </div>
                <div
                  className={
                    styles.button + " " + "d-flex justify-content-center"
                  }
                >
                  <button onClick={() => router.push("/tour")}>More</button>
                </div>
              </div>
            </div>
            <div className={"col-6" + " " + styles.event2}>
              <div className={styles.item}>
                <div className={"d-flex align-items-center" + " " + styles.top}>
                  <div className={"col-6" + " " + styles.logo}>
                    <Image
                      alt="Logo EKR"
                      src="/images/Home/Event/logoEvent.png"
                      layout="fill"
                    />
                  </div>
                  <div className={"col-6" + " " + styles.content}>
                    <h5>This Week</h5>
                    <h4>ELK Ridge Open</h4>
                    <p>Sep 20 - 23</p>
                  </div>
                </div>
                <div className={styles.center}>
                  <p>
                    <strong>BROADCAST SCHEDULE</strong> - Friday, September 23
                  </p>
                  <p>
                    <strong>PGA TOUR Radio</strong> 12:00-5:00a +07{" "}
                    <strong>PGA TOUR Radio</strong> 11:00p-5:00a +07
                  </p>
                </div>
                <div
                  className={
                    styles.button + " " + "d-flex justify-content-center"
                  }
                >
                  <button onClick={() => router.push("/tour")}>More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.video}>
          <div className="heading">
            <h2>Video</h2>
            <div className="line"></div>
          </div>
          <div className={styles.list}>
            {GoftVideo.map((item, index) => (
              <div className={styles.item} key={index}>
                <Image alt="Video" src={item.picture} layout="fill" />
                <div className={styles.title}>
                  <h5>{item.title}</h5>
                </div>
                <div className={styles.icon}>
                  <i className="fas fa-play"></i>
                </div>
              </div>
            ))}
          </div>
          <div
            className={styles.button + " " + "d-flex justify-content-center"}
          >
            <button>More</button>
          </div>
        </div>
        <div className={styles.community}>
          <div className="heading">
            <h2>COMMUNITY</h2>
            <div className="line"></div>
          </div>
          <div className={styles.content + " " + "d-flex"}>
            <div className={styles.trending + " " + "col-5"}>
              {CommunitiData.slice(0, 4).map((item, index) => (
                <div className={styles.item} key={index}>
                  <Image alt="Image" src={item.picture} layout="fill" />
                  <div className={styles.title}>
                    <h5>{item.title}</h5>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.feature + " " + "col-3"}>
              {CommunitiData.slice(4, 7).map((item, index) => (
                <div className={styles.item} key={index}>
                  <Image
                    alt="Image"
                    src={item.picture}
                    layout="fill"
                    // width={100}
                    // height={100}
                  />
                  <div className={styles.title}>
                    <h5>{item.title}</h5>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.review + " " + "col-4"}>
              <div className={styles.review_content}>
                <div className={styles.heading}>
                  <span>Blog</span>
                </div>
                <div className={styles.review_list}>
                  {Blog.map((item, index) => (
                    <div className={styles.item} key={index}>
                      <div className={styles.picture}>
                        <Image alt="Image" src={item.picture} layout="fill" />
                      </div>
                      <h5>{item.title}</h5>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.review_banner}>
                <Image
                  alt="Banner"
                  src="/images/Home/GoftTour/banner-trending.png"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.golfer}>
          <div className="heading">
            <h2>Goflers</h2>
            <div className="line"></div>
          </div>
          <div className={styles.golfer_list}>
            {Golfers.slice(0, 8).map((item, index) => (
              <div key={index} className={styles.golfer_item}>
                <Image
                  alt="Image"
                  src={item.picture}
                  layout="fill"
                  onClick={() =>
                    router.push(
                      `/golf/tour/golfer/${removeAccents(
                        item.firstname + "-" + item.lastname
                      )}`
                    )
                  }
                />
                <div className={styles.golfer_item_content}>
                  <div
                    className={styles.boxname}
                    onClick={() =>
                      router.push(
                        `/golf/tour/golfer/${removeAccents(
                          item.firstname + "-" + item.lastname
                        )}`
                      )
                    }
                  >
                    <span className={styles.fname}>{item.firstname}</span>
                    <span className={styles.lname}>{item.lastname}</span>
                  </div>
                  <div className={styles.boxNationality}>
                    <span className={styles.nationality}>
                      {item.nationality}
                    </span>
                    <div className={styles.golfer_item_flag}>
                      <Image
                        alt="Image"
                        loader={({ src }) =>
                          `https://flagcdn.com/h20/${src}.png`
                        }
                        src={item.flag}
                        layout="fill"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className={styles.button + " " + "d-flex justify-content-center"}
          >
            <button>More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
