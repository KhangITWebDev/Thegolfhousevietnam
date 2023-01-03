import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Modal, Progress } from "rsuite";
import { TrainerList } from "../../utils/DataDemo/Trainer/TrainnerData";
import { removeAccents } from "../../utils/function";
import styles from "./Trainer.module.scss";

function Trainer(props) {
  const router = useRouter();
  const theory = 80;
  const practice = 90;
  const creator = 85;
  const [showDetailIndex, setShowDetailIndex] = useState(-1);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (index) => {
    setOpen(true);
    setShowDetailIndex(index);
  };
  const handleClose = () => setOpen(false);
  return (
    <div className={styles.trainer_page}>
      <div className="container">
        <div className="heading" data-aos="fade-up">
          <h2 className={styles.title_page}>Đội ngũ huấn luyện</h2>
        </div>
        <div className="d-flex justify-content-center" data-aos="fade-up">
          <button className="btn-down">
            <i className="fa-regular fa-chevron-down"></i>
          </button>
        </div>
        <div
          className="d-flex justify-content-center heading"
          data-aos="fade-up"
        >
          <p>
            HLV chuyên nghiệp đạt chuẩn VGA hoặc PGA, nhiều năm kinh nghiệm
            trong việc giảng dạy và chơi Golf
          </p>
        </div>
        <div className="d-flex flex-wrap">
          {TrainerList.map((item, index) => (
            <div
              key={index}
              className={"col-12 col-lg-4 col-sm-6" + " " + styles.item}
              data-aos={
                index === 0
                  ? "fade-right"
                  : index === 1
                  ? "fade-up"
                  : "fade-left"
              }
            >
              <div className={styles.image}>
                <Image alt="Image" src={item.image} layout="fill"></Image>
              </div>
              <div className={styles.info}>
                <h3 onClick={() => handleOpen(index)}>{item.name}</h3>
                <p>{item.tag}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="button" data-aos="fade-up">
          <button>Xem tất cả</button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        size="full"
        id="modal-trainer"
        data-aos="fade-down"
        data-aos-delay="800"
      >
        <Modal.Header>
          <Modal.Title></Modal.Title>
          <button onClick={handleClose}>
            <i className="fa-light fa-times"></i>
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="heading">
              <h2>{TrainerList[showDetailIndex]?.name}</h2>
            </div>
            <h3>{TrainerList[showDetailIndex]?.tag}</h3>
            <div className="d-flex align-items-start">
              <div className="col-6 left">
                <div className="image">
                  <Image
                    alt="Iamge Detail"
                    src={TrainerList[showDetailIndex]?.image}
                    layout="fill"
                  />
                </div>
                <div className="social d-flex">
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-youtube"></i>
                  <i className="fa-brands fa-dribbble"></i>
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </div>
              <div className={"col-6 right"}>
                <div className="info">
                  <h5>Lý thuyết</h5>
                  <span>{TrainerList[showDetailIndex]?.info.theory}%</span>
                  <Progress.Line
                    percent={TrainerList[showDetailIndex]?.info.theory}
                    status="success"
                    showInfo={false}
                  />
                </div>
                <div className="info">
                  <h5>Thực hành</h5>
                  <span>{TrainerList[showDetailIndex]?.info.practice}%</span>
                  <Progress.Line
                    percent={TrainerList[showDetailIndex]?.info.practice}
                    status="success"
                    showInfo={false}
                  />
                </div>
                <div className="info">
                  <h5>Lý thuyết</h5>
                  <span>{TrainerList[showDetailIndex]?.info.creator}%</span>
                  <Progress.Line
                    percent={TrainerList[showDetailIndex]?.info.creator}
                    status="success"
                    showInfo={false}
                  />
                </div>
                <div className="desc">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: TrainerList[showDetailIndex]?.desc,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Trainer;
