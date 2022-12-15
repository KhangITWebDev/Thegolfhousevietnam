import Image from "next/image";
import React from "react";
import styles from "./TourPage.module.scss";

function TourPage(props) {
  return (
    <div className={styles.tour_page + " " + "main"}>
      <div className={[styles.banner, styles.full].join(" ")}>
        <Image alt="Tour Banner" layout="fill" src="/images/Tour/banner.png" />
        <div className={styles.content + " " + "main"}>
          <div className={styles.info}>
            <h2>ELK RIDGE OPEN</h2>
            <div className={styles.button + " " + "d-flex"}>
              <button
                onClick={() => router.push("/academy/course/course-detail")}
              >
                Ticket
              </button>
              <button
                onClick={() => router.push("/academy/course/course-detail")}
              >
                More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.banner_bottom}>
        <Image
          alt="Tour Banner"
          layout="fill"
          src="/images/Tour/bannerbottom.png"
        />
      </div>
      <div className={styles.tool}>
        <div className={styles.list}>
          <div className={styles.item}>
            <Image alt="Ticket" src="/images/Tour/ticket.png" layout="fill" />
            <div className={styles.info}>
              <h5>Ticket</h5>
              <div className={styles.button}>
                <button>More</button>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <Image
              alt="Ticket"
              src="/images/Tour/volunteer.png"
              layout="fill"
            />
            <div className={styles.info}>
              <h5>VOLUNTEERS</h5>
              <div className={styles.button}>
                <button>More</button>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <Image alt="Ticket" src="/images/Tour/sponsor.png" layout="fill" />
            <div className={styles.info}>
              <h5>SPONSORS</h5>
              <div className={styles.button}>
                <button>More</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.banner}>
          <Image
            alt="Tour Banner"
            layout="fill"
            src="/images/Tour/bannertool.png"
          />
        </div>
      </div>
      <div className={styles.feature}>
        <div className={"d-flex" + " " + styles.list}>
          <div className={"col-4" + " " + styles.item1}>
            <div className={styles.item}>
              <div
                className={
                  "d-flex justify-content-between align-items-center" +
                  " " +
                  styles.top
                }
              >
                <div className={"col-6" + " " + styles.content}>
                  <h5>This Week</h5>
                  <h4>ELK Ridge Open</h4>
                  <p>Sep 20 - 23</p>
                </div>
                <div className={"col-6" + " " + styles.logo}>
                  <Image
                    alt="Logo EKR"
                    src="/images/Home/Event/logoEvent.png"
                    layout="fill"
                  />
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
              <div className={styles.button}>
                <button onClick={() => router.push("/tour")}>
                  LEADERBOARD
                </button>
                <button onClick={() => router.push("/tour")}>DETAIL</button>
                <button onClick={() => router.push("/tour")}>COURSE</button>
                <button onClick={() => router.push("/tour")}>TV TIMES</button>
              </div>
            </div>
          </div>
          <div className={"col-8" + " " + styles.item2}>
            <h5>FETURE CONTENT</h5>
            <div className={styles.list}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourPage;
