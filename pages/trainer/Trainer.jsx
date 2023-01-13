import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Progress } from "rsuite";
import { getContentData } from "../../store/redux/LoadContentReducer/content.action";
import { getTrainerData } from "../../store/redux/Trainer/trainer.action";
import styles from "./Trainer.module.scss";
function Trainer(props) {
  const [showDetailIndex, setShowDetailIndex] = useState(-1);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (index) => {
    setOpen(true);
    setShowDetailIndex(index);
  };
  const handleClose = () => setOpen(false);
  const { trainers } = useSelector((state) => state.TrainerReducer);
  console.log(trainers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrainerData());
  }, [dispatch]);
  const { contents } = useSelector((state) => state.ContentReducer);
  useEffect(() => {
    dispatch(getContentData());
  }, [dispatch]);
  const sectionTitlePage = contents.filter(
    (item) => item.category === "63bc375439d2a23b06d89c18"
  );
  return (
    <div className={styles.trainer_page}>
      <div className="container">
        <div className="heading" data-aos="fade-right">
          <h2 className={styles.title_page}>{sectionTitlePage[0]?.title}</h2>
        </div>
        <div
          className="d-flex justify-content-center heading"
          data-aos="fade-left"
        >
          <p
            dangerouslySetInnerHTML={{ __html: sectionTitlePage[0]?.content }}
          ></p>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {trainers.map((item, index) => (
            <div
              key={index}
              className={"col-12 col-lg-4 col-md-6" + " " + styles.item}
              data-aos={
                index === 0
                  ? "fade-right"
                  : index === 1
                  ? "fade-up"
                  : "fade-left"
              }
            >
              <div
                className={styles.image}
                data-aos={
                  index === 0
                    ? "fade-right"
                    : index === 1
                    ? "fade-down"
                    : "fade-left"
                }
              >
                <Image
                  //   loader={({ src }) => `https://api.fostech.vn${src}?`}
                  alt="Image 1"
                  src={item.thumbnail}
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
              <div className={styles.info}>
                <h3
                  onClick={() => handleOpen(index)}
                  data-aos={
                    index === 0
                      ? "fade-right"
                      : index === 1
                      ? "fade-up"
                      : "fade-left"
                  }
                >
                  {item.fullname}
                </h3>
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
              <h2>{trainers[showDetailIndex]?.fullname}</h2>
            </div>
            <div className="d-flex flex-wrap align-items-start">
              <div className="col-12 col-lg-8 left">
                <div className="image">
                  <Image
                    alt="Iamge Detail"
                    src={trainers[showDetailIndex]?.thumbnail}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="social d-flex">
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-youtube"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </div>
              <div className="col-12 col-lg-12 right">
                {/* <div className="info" style ={{ opacity: 0 }}>
                  <h5>Lý thuyết</h5>
                  <span>{trainers[showDetailIndex]?.theory}%</span>
                  <Progress.Line
                    percent={trainers?.theory}
                    status="success"
                    showInfo={false}
                  />
                </div> */}
                <div className="desc">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: trainers[showDetailIndex]?.description,
                    }}
                  ></p>
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
