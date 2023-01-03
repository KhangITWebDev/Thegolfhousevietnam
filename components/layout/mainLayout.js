import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../footer/footer";
import HeaderMain from "../HeaderMain/HeaderMain";
import $ from "jquery";
import HeaderAccademy from "../HeaderAcademy/HeaderAcademy";
import RightMenu from "../RightMenu/RightMenu";
import Cart from "../Cart/cart";
import Search from "../Search/Search";

function MainLayout({ children }) {
  const cart = [];
  const [activeKey, setActiveKey] = React.useState(1);
  const [visible, setVisible] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
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
  const handleShowRightMenu = () => setShowRight(!showRight);
  const handleCloseRightMenu = () => setShowRight();
  const handleShowCart = () => setShowCart(!showCart);
  const handleCloseCart = () => setShowCart(false);
  const handleShowSearch = () => setShowSearch(!showSearch);
  const handleCloseSearch = () => setShowSearch(false);
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
  }, [router]);
  $(".search").on("click", () => {
    $(".search-dialog").css("transform", "scaleY(1)");
  });
  $(".cart").on("click", () => {
    $(".cart-dialog").css("transform", "scaleY(1)");
  });
  $(".sub-menu").on("click", () => {
    $(".sub").css("transform", "scaleX(1)");
  });
  $(".bar").on("click", () => {
    $(".custom-menu").css("transform", "scaleY(1)");
  });
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
              handleShowRightMenu={handleShowRightMenu}
              handleShowCart={handleShowCart}
              handleShowSearch={handleShowSearch}
            />
          ) : (
            <HeaderAccademy
              appearance="subtle"
              activeKey={activeKey}
              onSelect={setActiveKey}
              visible={visible}
              handleShowRightMenu={handleShowRightMenu}
              handleShowCart={handleShowCart}
              handleShowSearch={handleShowSearch}
            />
          )
        ) : (
          <HeaderAccademy
            appearance="subtle"
            activeKey={activeKey}
            onSelect={setActiveKey}
            visible={visible}
            handleShowCart={handleShowCart}
            handleShowRightMenu={handleShowRightMenu}
            handleShowSearch={handleShowSearch}
          />
        )}
        <RightMenu handleCloseRightMenu={handleCloseRightMenu} />
        <Cart handleCloseCart={handleCloseCart} cart={cart} />
        <Search handleCloseSearch={handleCloseSearch} />
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
