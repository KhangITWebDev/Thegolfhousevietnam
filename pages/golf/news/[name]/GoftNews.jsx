import React from "react";
import styles from "./GoftNews.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  DontMissGolfNews,
  MoreGolfNews,
  RelatedGolfNewsDetail,
} from "../../../../utils/DataDemo/GoftPage/dataGoftPage";
import Link from "next/link";

function GoftNews(props) {
  const router = useRouter();
  return (
    <div className={styles.goft_news}>
      <div className="container">
        <div className={styles.banner}>
          <Image
            alt="Banner"
            src="/images/Home/GoftTour/bannerbottom.png"
            layout="fill"
          />
        </div>
        <div className={styles.goft_news_detail}>
          <div
            className={
              styles.box_title +
              " " +
              "d-flex justify-content-between align-items-center"
            }
          >
            <div className={styles.left + " " + "col-9"}>
              <h4>2022-23 Rookie Ranking</h4>
              <div className="d-flex flex-column">
                <span>
                  October 30, 2022 <br /> By Rob Bolton , PGATOUR.COM
                </span>
              </div>
            </div>
            <div className={styles.right + " " + "col-3"}>
              <Image
                alt="Image"
                src="/images/Golf/News/img1.png"
                layout="fill"
              />
            </div>
          </div>
          <div className={styles.info + " " + "d-flex"}>
            <div className={"col-9" + " " + styles.left}>
              <div className={styles.picture}>
                <Image
                  alt="Image"
                  src="/images/Golf/News/img_info.png"
                  layout="fill"
                />
              </div>
              <p className={styles.sub_image}>
                Thomas Detry finished runner-up in Bermuda, the best finish by
                any rookie this season. (Andy Lyons/Getty Images)
              </p>
              <div className={styles.desc}>
                <p>
                  The Rookie Ranking for the 2022-23 PGA TOUR season has been
                  transitioned into a thread on my Twitter account. Every
                  tournament’s mini-recap will be accompanied by a table of my
                  subjective ranking of all 28 rookies.{" "}
                </p>
                <p>
                  Also, as I did with Rookie Watch during the super season of
                  2020-21, I’m also tracking notable non-members in a separate
                  thread on Twitter.
                </p>
                <p>
                  My latest tweets are visible below. If you click or tap on
                  either, it will take you directly to his original.{" "}
                </p>
                <p>
                  The Rookie Ranking for the 2022-23 PGA TOUR season has been
                  transitioned into a thread on my Twitter account. Every
                  tournament’s mini-recap will be accompanied by a table of my
                  subjective ranking of all 28 rookies.
                </p>
                <p>
                  Also, as I did with Rookie Watch during the super season of
                  2020-21, I’m also tracking notable non-members in a separate
                  thread on Twitter.
                </p>
                <p>
                  My latest tweets are visible below. If you click or tap on
                  either, it will take you directly to his original.
                </p>
              </div>
            </div>
            <div className={"col-3" + " " + styles.right}>
              <div className={styles.related}>
                <h6>Related to this history</h6>
                <div className={styles.list}>
                  {RelatedGolfNewsDetail.map((item, index) => (
                    <div
                      key={index}
                      className={
                        "d-flex align-items-center" + " " + styles.item
                      }
                    >
                      <div className={styles.image}>
                        <Image
                          alt={item.title}
                          src={item.image}
                          layout="fill"
                        />
                      </div>
                      <div className={styles.content}>
                        <span>{item.type}</span>
                        <Link href="/">
                          <a className={styles.title}>{item.title}</a>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.banner}>
                <Image
                  alt="Related Banner"
                  src="/images/Golf/News/related_banner.png"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.more_news}>
          <div className="heading">
            <h2>MORE FROM GOLF NEWS</h2>
            <div className="line"></div>
          </div>
          <div className={styles.list}>
            {MoreGolfNews.map((item, index) => (
              <div key={index} className={styles.item}>
                <div className={styles.image}>
                  <Image alt={item.title} src={item.picture} layout="fill" />
                  <div
                    className={
                      item.type === "Trending"
                        ? styles.labelYellow
                        : styles.labelRed
                    }
                  >
                    <span>{item.type}</span>
                  </div>
                </div>
                <Link href="/">
                  <a className={styles.title}>{item.title}</a>
                </Link>
              </div>
            ))}
          </div>
          <div
            className={styles.button + " " + "d-flex justify-content-center"}
          >
            <button>More</button>
          </div>
        </div>
        <div className={styles.dont_miss}>
          <h5>DON’T MISS THIS</h5>
          <div className={styles.list}>
            {DontMissGolfNews.map((item, index) => (
              <div key={index} className={styles.item}>
                <div className={styles.image}>
                  <Image alt={item.title} src={item.picture} layout="fill" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoftNews;
