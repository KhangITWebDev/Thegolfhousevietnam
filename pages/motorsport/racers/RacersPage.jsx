import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Racers } from "../../../utils/DataDemo/Racers/data";
import { removeAccents } from "../../../utils/function";
import styles from "./Racers.module.scss";

function RacersPage(props) {
  const router = useRouter();
  return (
    <div className={styles.racers_page + " " + "containers"}>
      <div className="heading">
        <h2>Racers</h2>
        <div className="line"></div>
      </div>
      <div className={styles.racers_page_banner}>
        <Image
          src="/images/Racers/Racer-header.png"
          alt="Image"
          layout="fill"
        />
      </div>
      <div className={styles.racers}>
        <div className={styles.racers_header}>
          <div className={styles.racers_header_title}>
            <i className="far fa-steering-wheel"></i>
            <span>RACERS</span>
          </div>
          <button>View More</button>
        </div>
        <div className={styles.racers_list}>
          {Racers.map((item, index) => (
            <div key={index} className={styles.racers_item}>
              <Image
                alt="Image"
                src={item.picture}
                layout="fill"
                onClick={() =>
                  router.push(
                    `/motorsport/racers/${removeAccents(
                      item.firstname + "-" + item.lastname
                    )}`
                  )
                }
              />
              <div className={styles.racers_item_content}>
                <div
                  className={styles.boxname}
                  onClick={() =>
                    router.push(
                      `/motorsport/racers/${removeAccents(
                        item.firstname + "-" + item.lastname
                      )}`
                    )
                  }
                >
                  <span className={styles.fname}>{item.firstname}</span>
                  <span className={styles.lname}>{item.lastname}</span>
                </div>
                <div className={styles.boxteam}>
                  <span className={styles.team}>{item.team}</span>
                  <div className={styles.racers_item_flag}>
                    <Image alt="Image" src={item.flag} layout="fill" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RacersPage;
