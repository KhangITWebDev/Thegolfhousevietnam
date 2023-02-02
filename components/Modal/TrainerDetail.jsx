import Image from "next/image";
import React from "react";
import { Modal } from "rsuite";

function TrainerDetail({ handleClose, trainers, showDetailIndex }) {
  return (
    <Modal
      open={true}
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
                {trainers[showDetailIndex]?.socail_list?.map((item, index) => (
                  <i
                    key={index}
                    onClick={(e) =>
                      item.link.length > 0 && item.link !== ""
                        ? window.open(item.link)
                        : commingSoon(e)
                    }
                    className={`fa-brands fa-${
                      item.name === "facebook" ? "facebook-f" : item.name
                    }`}
                  ></i>
                ))}
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
  );
}

export default TrainerDetail;
