import Image from "next/image";
import React, { useState } from "react";
import styles from "./RightMenu.module.scss";
import $ from "jquery";
import { useEffect } from "react";
import Aos from "aos";
import { useRouter } from "next/router";

function RightMenu({ handleCloseRightMenu }) {
  const router = useRouter();
  const [color1, setColor1] = useState();
  const [color2, setColor2] = useState();
  const [color3, setColor3] = useState();
  const [color4, setColor4] = useState();
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
            onClick={() => router.push("/")}
          />
          <button onClick={handleCloseRightMenu} data-aos="fade-left">
            <i className="fa-light fa-xmark"></i>
          </button>
        </div>
        <div className={styles.center + " " + "d-flex"}>
          <div className={styles.icon + " " + "d-flex flex-column"}>
            <i
              className="fa-brands fa-facebook-f"
              data-aos="fade-right"
              style={{
                color: color1,
              }}
            ></i>
            <i
              data-aos="fade-left"
              className="fa-brands fa-youtube"
              style={{
                color: color2,
              }}
            ></i>
            <i
              data-aos="fade-right"
              className="fa-brands fa-twitter"
              style={{
                color: color3,
              }}
            ></i>
            <i
              data-aos="fade-left"
              className="fa-brands fa-instagram"
              style={{
                color: color4,
              }}
            ></i>
          </div>
          <div className={styles.text + " " + "d-flex flex-column"}>
            <span
              data-aos="fade-left"
              onMouseEnter={() => setColor1("#3b5998")}
              onMouseLeave={() => setColor1("#000")}
              style={{
                color: color1,
              }}
            >
              Facebook
            </span>
            <span
              data-aos="fade-right"
              onMouseEnter={() => setColor2("#ea4c89")}
              onMouseLeave={() => setColor2("#000")}
              style={{
                color: color2,
              }}
            >
              Youtube
            </span>
            <span
              data-aos="fade-left"
              onMouseEnter={() => setColor3("#00ffff")}
              onMouseLeave={() => setColor3("#000")}
              style={{
                color: color3,
              }}
            >
              Twitter
            </span>
            <span
              data-aos="fade-right"
              onMouseEnter={() => setColor4("#c862dc")}
              onMouseLeave={() => setColor4("#000")}
              style={{
                color: color4,
              }}
            >
              Instagram
            </span>
          </div>
        </div>
        <div className={styles.footer}>
          <p onClick={() => window.open("tel:+84909337777")}>
            (+84) 909 337 777
          </p>
          <span
            onClick={() =>
              window.open("mailto:adminthegolfhousevietnam@gmail.com")
            }
          >
            admin@thegolfhousevietnam.com
          </span>
        </div>
      </div>
    </div>
  );
}

export default RightMenu;
