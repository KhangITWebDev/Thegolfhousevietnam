import Image from "next/image";
import React from "react";
import styles from "./Tab1.module.scss";

function Tab1(props) {
  return (
    <div className={styles.Tab1}>
      <div className={styles.list}>
        <div className={styles.item}>
          <Image
            alt="Tour Image"
            layout="fill"
            src="/images/Golf/Tour/tour1.png"
          />
          <button>More</button>
        </div>
        <div className={styles.item}>
          <Image
            alt="Tour Image"
            layout="fill"
            src="/images/Golf/Tour/tour2.png"
          />
          <button>More</button>
        </div>
        <div className={styles.item}>
          <Image
            alt="Tour Image"
            layout="fill"
            src="/images/Golf/Tour/tour3.png"
          />
          <button>More</button>
        </div>
      </div>
    </div>
  );
}

export default Tab1;
