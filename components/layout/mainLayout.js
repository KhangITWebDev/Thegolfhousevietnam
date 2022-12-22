import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../footer/footer";
import HeaderMain from "../HeaderMain/HeaderMain";
import $ from "jquery";
import HeaderAccademy from "../HeaderAcademy/HeaderAcademy";

function MainLayout({ children }) {
  const [activeKey, setActiveKey] = React.useState(1);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 10) {
      setVisible(true);
    } else if (scrolled <= 10) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  const router = useRouter();
  useEffect(() => {
    $(".rs-navbar-item").each((index) => {
      switch (router.pathname) {
        case "/": {
          $(".rs-navbar-item")[0].classList.add("rs-navbar-item-active");
          break;
        }
        case "/academy": {
          $(".rs-navbar-item")[2].classList.add("rs-navbar-item-active");
          break;
        }
        case "/trainer": {
          $(".rs-navbar-item")[3].classList.add("rs-navbar-item-active");
          break;
        }
        default:
          break;
      }
    });
  }, []);
  return (
    <>
      <div className="wrapper-project">
        {router.pathname === "/" ? (
          <HeaderMain
            appearance="subtle"
            activeKey={activeKey}
            onSelect={setActiveKey}
          />
        ) : (
          <HeaderAccademy
            appearance="subtle"
            activeKey={activeKey}
            onSelect={setActiveKey}
          />
        )}
        <div>{children}</div>
        <button
          className="btn-scroll"
          style={{ display: visible ? "inline" : "none" }}
          onClick={scrollToTop}
        >
          <i className="fa-light fa-arrow-up"></i>
        </button>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
