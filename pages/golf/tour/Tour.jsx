import React, { useState } from "react";
import styles from "./Tour.module.scss";
import Image from "next/image";
import { Tab, Tabs } from "react-bootstrap";
import { GoftTour, Trending } from "../../../utils/DataDemo/GoftTour";
import { FeedTour } from "../../../utils/DataDemo/FeedTour";
import {
  CarRacingTour,
  TrendingCRT,
} from "../../../utils/DataDemo/CarRacingTour";
import { FeedRacingTour, Slide } from "../../../utils/DataDemo/FeedRacingTour";
import GoftLayout from "../../../components/layout/goftLayout";
import {
  Blog,
  CommunitiData,
  GoftNewsData,
  GoftVideo,
} from "../../../utils/DataDemo/GoftPage/dataGoftPage";
import { Racers } from "../../../utils/DataDemo/Racers/data";
import Tab1 from "./Tab1/Tab1";

function Tour(props) {
  const [key, setKey] = useState("pga-tour-canada");
  return (
    <div className={styles.tour_page}>
      <div className="heading">
        <h2>Tour</h2>
        <div className="line" style={{ width: "100%" }}></div>
      </div>
      <div id="Navigation-Tour" style={{ marginTop: 50 }}>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 d-flex justify-content-center"
        >
          <Tab eventKey="pga-tour" title="PGA TOUR">
            <Tab1 />
          </Tab>
          <Tab eventKey="pga-tour-canada" title="PGA TOUR CANADA">
            <Tab1 />
          </Tab>
          <Tab eventKey="pga-tour-champion" title="PGA TOUR CHAMPIONS">
            <Tab1 />
          </Tab>
        </Tabs>
      </div>
      <div className={styles.banner_bottom}>
        <Image
          alt="Banner Bottom"
          src="/images/Home/GoftTour/bannerbottom.png"
          layout="fill"
        />
      </div>
    </div>
  );
}

export default Tour;
