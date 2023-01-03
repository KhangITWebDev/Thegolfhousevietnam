import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import styles from "./Search.module.scss";
import $ from "jquery";

function Search({ handleCloseSearch }) {
  useEffect(() => {
    $("button").on("click", () => {
      $(".search-dialog").css({
        transform: "scaleY(0)",
      });
    });
  }, []);
  return (
    <div
      className={styles.subMenuCart + " " + "search-dialog"}
      style={{ transform: "scaleY(0)" }}
      data-aos="fade-down"
    >
      <div
        className={
          styles.subMenuCart_child +
          " " +
          "d-flex justify-content-between flex-column container"
        }
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Image
              alt="logo"
              src="/images/Logo/Logo12.png"
              width={104}
              height={87}
            />
          </div>
          <button className={styles.close}>
            {" "}
            <i className="fa-light fa-xmark"></i>
          </button>
        </div>
        <div className={styles.input}>
          <input type="text" placeholder="Enter keyword" />
          <i className="fa-light fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
}

export default Search;
