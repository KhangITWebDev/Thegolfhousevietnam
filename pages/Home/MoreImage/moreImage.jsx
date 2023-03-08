import Image from "next/image";
import React from "react";
import styles from "./moreImage.module.scss";
function MoreImage({ contents }) {
  const sectionMoreImage = contents.filter(
    (item) => item.category === "63bc0cd939d2a23b06d867af"
  );
  return (
    <div className={styles.moreImage}>
      {sectionMoreImage[0]?.images.slice(0, 4).map((item, index) => (
        <div key={index} className={styles.item} data-aos="fade-right">
          <Image
            alt="Img 1"
            loader={({ src }) =>
              `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
            }
            src={item.source}
            layout="fill"
          />
        </div>
      ))}
    </div>
  );
}

export default MoreImage;
