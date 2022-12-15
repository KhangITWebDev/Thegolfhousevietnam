import React from "react";
import styles from "./Home.module.scss";
import Image from "next/image";
import { GoftTour, Trending } from "../../utils/DataDemo/GoftTour";
import { FeedTour } from "../../utils/DataDemo/FeedTour";
import { CarRacingTour, TrendingCRT } from "../../utils/DataDemo/CarRacingTour";
import { FeedRacingTour, Slide } from "../../utils/DataDemo/FeedRacingTour";
import MainLayout from "../../components/layout/mainLayout";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

function HomePage(props) {
  const router = useRouter();
  const commingSoon = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Comming Soon",
      text: "We are comming soon",
      icon: "warning",
      showCancelButton: false,
      confirmButtonText: "OK",
    });
  };
  return (
    <div className={styles.home_page}>
      <div className="">
        <div className={styles.top}>
          <div className={"d-flex flex-wrap" + " " + styles.top_list}>
            <div className={"col-md-6 col-12" + " " + styles.top_item}>
              <Image
                alt="Banner"
                src="/images/Home/Banner/banner.png"
                layout="fill"
              />
              <div className={styles.top_content}>
                <span>Golf</span>
                <button onClick={() => router.push("/academy")}>More</button>
              </div>
            </div>
            <div className={"col-md-6 col-12" + " " + styles.top_item}>
              <Image
                alt="Banner"
                src="/images/Home/Banner/banner1.png"
                layout="fill"
              />
              <div className={styles.top_content}>
                <span>Motorsports</span>
                <button onClick={commingSoon}>More</button>
              </div>
            </div>
          </div>
          <div className={styles.content + " " + "container"}>
            <div className="heading">
              <h2>GOLF & MOTORSPORT</h2>
              <div
                className="line"
                style={{
                  width: "25%",
                }}
              ></div>
            </div>
            <p className={styles.top_desc}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
