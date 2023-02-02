import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Progress } from "rsuite";
import Swal from "sweetalert2";
import TrainerDetail from "../../components/Modal/TrainerDetail";
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
  const handleClose = () => setOpen(false);
  const { trainers } = useSelector((state) => state.TrainerReducer);
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
              onClick={() => handleOpen(index)}
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
      {open && showDetailIndex >= 0 && (
        <TrainerDetail
          handleClose={handleClose}
          showDetailIndex={showDetailIndex}
          trainers={trainers}
        />
      )}
    </div>
  );
}

export default Trainer;
