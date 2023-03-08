import Image from "next/image";
import React from "react";
import styles from "./Trainer.module.scss";
function Trainer({ contents }) {
  const sectionTrainer = contents.filter(
    (item) => item.category === "63bc0be839d2a23b06d86307"
  );
  return (
    <div className={styles.bannerv2} data-aos="fade-right">
      <Image
        loader={({ src }) =>
          `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
        }
        alt="Image 1"
        src={
          sectionTrainer[0]?.images[sectionTrainer[0]?.images.length - 1].source
        }
        layout="fill"
        // objectFit="cover"
      />
      <div className={styles.content}>
        <div className="container h-100">
          <div className="d-flex h-100 justify-content-center align-items-center flex-column">
            <span data-aos="fade-right">{sectionTrainer[0]?.sub_title}</span>
            <h1 data-aos="fade-right">{sectionTrainer[0]?.title}</h1>
            <div
              data-aos="fade-right"
              dangerouslySetInnerHTML={{
                __html: sectionTrainer[0]?.content,
              }}
            ></div>
            <div
              className="button"
              data-aos="fade-right"
              onClick={() => router.push(sectionTrainer[0]?.url_button)}
            >
              <button>{sectionTrainer[0]?.text_button}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trainer;
