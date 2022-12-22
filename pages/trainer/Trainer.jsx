import Image from "next/image";
import React from "react";
import { TrainerList } from "../../utils/DataDemo/Trainer/TrainnerData";
import styles from "./Trainer.module.scss";

function Trainer(props) {
  return (
    <div className={styles.trainer_page}>
      <div className="container">
        <div className="heading">
          <h2 className={styles.title_page}>Đội ngũ huấn luyện</h2>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn-down">
            <i className="fa-regular fa-chevron-down"></i>
          </button>
        </div>
        <div className="d-flex justify-content-center heading">
          <p>
            HLV chuyên nghiệp đạt chuẩn VGA hoặc PGA, nhiều năm kinh nghiệm
            trong việc giảng dạy và chơi Golf
          </p>
        </div>
        <div className="d-flex flex-wrap">
          {TrainerList.map((item, index) => (
            <div key={index} className={"col-4" + " " + styles.item}>
              <div className={styles.image}>
                <Image alt="Image" src={item.image} layout="fill"></Image>
              </div>
              <div className={styles.info}>
                <h3>{item.name}</h3>
                <p>Trainer</p>
              </div>
            </div>
          ))}
        </div>
        <div className="button">
          <button>Xem thêm</button>
        </div>
      </div>
    </div>
  );
}

export default Trainer;
