import Image from "next/image";
import React from "react";
import styles from "./RightMenu.module.scss";
import $ from "jquery";
import { useEffect } from "react";
import Aos from "aos";

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
            data-aos="fade-right"
          />
          <button onClick={handleCloseRightMenu} data-aos="fade-left">
            <i className="fa-light fa-xmark"></i>
          </button>
        </div>
        <div className={styles.center + " " + "d-flex"}>
          <div className={styles.icon + " " + "d-flex flex-column"}>
            <i className="fa-brands fa-facebook-f" data-aos="fade-right"></i>
            <i data-aos="fade-left" className="fa-brands fa-youtube"></i>
            <i data-aos="fade-right" className="fa-brands fa-twitter"></i>
            <i data-aos="fade-left" className="fa-brands fa-instagram"></i>
          </div>
          <div className={styles.text + " " + "d-flex flex-column"}>
            <span data-aos="fade-left">Facebook</span>
            <span data-aos="fade-right">Youtube</span>
            <span data-aos="fade-left">Twitter</span>
            <span data-aos="fade-right">Instagram</span>
          </div>
        </div>
        <div className={styles.footer}>
          <p>(+84) 909 337 777</p>
          <span>admin@thegolfhousevietnam.com</span>
        </div>
      </div>
    </div>
  );
}

export default RightMenu;
