import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContentData } from "../../store/redux/LoadContentReducer/content.action";
import Banner from "./banner/banner";
import Benefit from "./benefit/benefit";
import Booking from "./booking/booking";
import CardPack from "./cardPack/cardPack";
import styles from "./Course.module.scss";
import CourseIntroduction from "./CourseIntroduction/courseIntroduction";
import Heading from "./heading/heading";
import Trainee from "./trainee/trainee";
function Course(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContentData());
  }, []);
  const { contents } = useSelector((state) => state.ContentReducer);
  return (
    <div className={styles.course_page}>
      <Heading contents={contents} />
      <Banner />
      <CourseIntroduction contents={contents} />
      <div className="container">
        <CardPack />
        <Benefit contents={contents} />
      </div>
      <Trainee contents={contents} />
      <Booking contents={contents} />
    </div>
  );
}
export default Course;
