import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ProShopDetail from "../ProshopDetail/ProShopDetail";
import styles from "./Tab1.module.scss";

function Tab1({ showDetail, setShowDetail, data }) {
  return (
    <div>
      <div className={styles.Tab1}>
        <div>
          {!showDetail && (
            <>
              <div className={styles.list}>
                {data.map((item, index) => (
                  <div className={styles.item} key={index}>
                    <div className={styles.image}>
                      <Image alt={item.name} src={item.image} layout="fill" />
                    </div>
                    <div className={styles.content}>
                      <Link href="/">
                        <a
                          className={styles.title}
                          onClick={(e) => {
                            e.preventDefault();
                            setShowDetail(true);
                          }}
                        >
                          {item.title}
                        </a>
                      </Link>
                      <p>{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="button d-flex justify-content-center">
                <button
                  onClick={() => router.push("/academy/course/course-detail")}
                >
                  Detail
                </button>
              </div>
            </>
          )}
          {showDetail && <ProShopDetail />}
        </div>
      </div>
    </div>
  );
}

export default Tab1;
