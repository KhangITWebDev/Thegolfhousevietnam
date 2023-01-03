import Image from "next/image";
import React from "react";
import styles from "./RightMenu.module.scss";
import $ from "jquery";
import { useEffect } from "react";

function RightMenu({ handleCloseRightMenu }) {
  useEffect(() => {
    $("button").on("click", () => {
      $(".sub").css({
        transform: "scaleX(0)",
      });
    });
  }, []);
  return (
    <div
      className={styles.subMenu + " " + "sub"}
      // onClick={handleCloseRightMenu}
      style={{ transform: "scaleX(0)" }}
    >
      <div
        className={
          styles.subMenu_child +
          " " +
          "d-flex justify-content-between flex-column sub-child"
        }
        data-aos="fade-left"
      >
        <div
          className={
            "d-flex justify-content-between align-items-center" +
            " " +
            styles.header
          }
        >
          <Image
            alt="logo"
            src="/images/Logo/Logo12.png"
            width={65}
            height={55}
          />
          <button onClick={handleCloseRightMenu}>
            <i className="fa-light fa-xmark"></i>
          </button>
        </div>
        <div className={styles.center + " " + "d-flex"}>
          <div className={styles.icon + " " + "d-flex flex-column"}>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-dribbble"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className={styles.text + " " + "d-flex flex-column"}>
            <span>Facebook</span>
            <span>Youtube</span>
            <span>Dribble</span>
            <span>Instagram</span>
          </div>
        </div>
        <div className={styles.footer}>
          <p>(+84) 274 035 723</p>
          <span>info@lio.com</span>
        </div>
      </div>
    </div>
  );
}

export default RightMenu;
