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
        case "/about-us": {
          $(".rs-navbar-item")[1].classList.add("rs-navbar-item-active");
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
        case "/course": {
          $(".rs-navbar-item")[4].classList.add("rs-navbar-item-active");
          break;
        }
        case "/proshop": {
          $(".rs-navbar-item")[5].classList.add("rs-navbar-item-active");
          break;
        }
        default:
          break;
      }
    });
    // $(".rs-dropdown-item").each(function (index) {
    //   switch (router.asPath) {
    //     case "/about-us#founder": {
    //       $(".rs-dropdown-item")[0].classList.add("rs-dropdown-item-active");
    //       break;
    //     }
    //     case "/about-us#about": {
    //       $(".rs-dropdown-item")[1].classList.add("rs-dropdown-item-active");
    //       break;
    //     }
    //     case "/about-us#news": {
    //       $(".rs-dropdown-item")[2].classList.add("rs-dropdown-item-active");
    //       break;
    //     }
    //     case "/course/#course": {
    //       $(".rs-dropdown-item")[3].classList.add("rs-dropdown-item-active");
    //       break;
    //     }
    //     case "/course/#calendar": {
    //       $(".rs-dropdown-item")[4].classList.add("rs-dropdown-item-active");
    //       break;
    //     }
    //     default:
    //       break;
    //   }
    // });
  }, []);
  return (
    <>
      <div className="wrapper-project">
        {router.pathname === "/" ? (
          !visible ? (
            <HeaderMain
              appearance="subtle"
              activeKey={activeKey}
              onSelect={setActiveKey}
              visible={visible}
            />
          ) : (
            <HeaderAccademy
              appearance="subtle"
              activeKey={activeKey}
              onSelect={setActiveKey}
              visible={visible}
            />
          )
        ) : (
          <HeaderAccademy
            appearance="subtle"
            activeKey={activeKey}
            onSelect={setActiveKey}
            visible={visible}
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
