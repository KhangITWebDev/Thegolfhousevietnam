import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContentData } from "../../store/redux/LoadContentReducer/content.action";
import Banner from "./Banner/banner";
import styles from "./Home.module.scss";
import Intro from "./Intro/intro";
import MoreImage from "./MoreImage/moreImage";
import News from "./News/news";
import OurTeam from "./OurTeam/ourTeam";
import Trainer from "./Trainer/Trainer";
function HomePage(props) {
  const dispatch = useDispatch();
  const { contents } = useSelector((state) => state.ContentReducer);
  useEffect(() => {
    dispatch(getContentData());
  }, []);
  return (
    <>
      <div className={styles.home_page}>
        <Banner />
        <Intro contents={contents} />
        <Trainer contents={contents} />
        <OurTeam contents={contents} />
        <MoreImage contents={contents} />
        <News contents={contents} />
      </div>
    </>
  );
}

export default HomePage;
