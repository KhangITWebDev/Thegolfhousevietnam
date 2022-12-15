import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  Golfers,
  LatestGoftersDetail,
} from "../../../../../utils/DataDemo/GoftPage/dataGoftPage";
import { removeAccents } from "../../../../../utils/function";
import styles from "./GolferDetail.module.scss";

function GolferDetail(props) {
  const router = useRouter();
  const { name } = router.query;
  const DetailByName = Golfers.find(
    (x) => removeAccents(x.firstname + "-" + x.lastname) === name
  );
  return (
    <div className={styles.golfer_detail + " " + "container"}>
      <div className="heading">
        <h2>Golfers</h2>
        <div className="line" style={{ width: "70%" }}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.detail + " " + "d-flex align-items-center"}>
          <div className={styles.detail_image}>
            <Image
              alt={DetailByName?.firstname + " " + DetailByName?.lastname}
              layout="fill"
              src={DetailByName?.picture}
            />
          </div>
          <div className={styles.detail_info + " " + "d-flex flex-column"}>
            <div
              className={
                styles.top +
                " " +
                "d-flex justify-content-between align-items-center"
              }
            >
              <div className={styles.top_left}>
                <h5>
                  {DetailByName?.firstname} {DetailByName?.lastname}
                </h5>
                <div className={styles.nationality}>
                  <div className={styles.flag}>
                    <Image
                      alt="Flag"
                      width={52}
                      height={32}
                      loader={({ src }) => `https://flagcdn.com/h20/${src}.png`}
                      src={DetailByName?.flag}
                    />
                  </div>
                  <h6>{DetailByName?.nationality}</h6>
                </div>
              </div>
              <div className={styles.top_right}>
                <Image
                  alt="Cham"
                  width={176}
                  height={146}
                  src="/images/Golf/Golfer/cham.png"
                />
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottom_left}>
                <div className={styles.item}>
                  <span>AGE 33</span>
                  <span>HEIGHT 1M78</span>
                </div>
                <div className={styles.item}>
                  <span>WEIGHT 72KG</span>
                  <span>TURNED PRO 2007</span>
                </div>
              </div>
              <div className={styles.bottom_right}>
                <div className={styles.item}>
                  <div className={styles.left}>
                    <div className={styles.cup}>
                      <div className={styles.image}>
                        <Image
                          alt="Cham"
                          width={46}
                          height={46}
                          src="/images/Golf/Golfer/cup.png"
                        />
                      </div>
                      <span>7</span>
                    </div>
                    <span>FEDEXCUP RANK</span>
                  </div>
                  <div className={styles.right}>
                    <div className={styles.medal}>
                      <div className={styles.image}>
                        <Image
                          alt="Cham"
                          width={46}
                          height={46}
                          src="/images/Golf/Golfer/medal.png"
                        />
                      </div>
                      <span>7</span>
                    </div>
                    <span>OWGR</span>
                  </div>
                </div>
                <div className={styles.item}>
                  <Image
                    alt="Image"
                    width={134}
                    height={70}
                    src="/images/Golf/Golfer/CBTT10-Screen_Primary-RGB1.png"
                  />
                  <div className={styles.scoring}>
                    <h6>67.286</h6>
                    <span>SCORING AVERAGE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.latest}>
          <h5 className={styles.header}>LATEST</h5>
          <div className={styles.list}>
            {LatestGoftersDetail.map((item, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.image}>
                  <Image alt={item.title} layout="fill" src={item.picture} />
                  {item.type === "videos" && <i className="fas fa-play" />}
                </div>
                <Link href="/">
                  <a className={styles.title}>{item.title}</a>
                </Link>
              </div>
            ))}
          </div>
          <div
            className={styles.button + " " + "d-flex justify-content-center"}
          >
            <button>More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GolferDetail;
