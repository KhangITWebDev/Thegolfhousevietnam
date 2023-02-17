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
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const { contents } = useSelector((state) => state.ContentReducer);
  const { trainers } = useSelector((state) => state.TrainerReducer);
  useEffect(() => {
    dispatch(getContentData());
    dispatch(getTrainerData());
  }, []);
  const sectionTitlePage = contents.filter(
    (item) => item.category === "63bc375439d2a23b06d89c18"
  );
  return (
    <div className={styles.trainer_page}>
      <div className="container">
        <div className="heading" data-aos="fade-down">
          <h2 className={styles.title_page}>{sectionTitlePage[0]?.title}</h2>
        </div>
        <div
          className="d-flex justify-content-center heading"
          data-aos="fade-down"
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
              data-aos="fade-right"
            >
              <div className={styles.image}>
                <Image
                  //   loader={({ src }) => `https://api.fostech.vn${src}?`}
                  alt="Image 1"
                  src={item.thumbnail}
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
              <div className={styles.info}>
                <h3>{item.fullname}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="button" data-aos="fade-right">
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
