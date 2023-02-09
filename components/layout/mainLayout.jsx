import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../footer/footer";
import HeaderMain from "../HeaderMain/HeaderMain";
import $ from "jquery";
import HeaderAccademy from "../HeaderAcademy/HeaderAcademy";
import RightMenu from "../RightMenu/RightMenu";
import Cart from "../Cart/cart";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SignIn from "../Modal/SignIn";
import loginClientAxios from "../../clientAxios/loginClientAxios";
import Swal from "sweetalert2";
const schema2 = yup.object().shape({
  // email: yup
  //   .string()
  //   .email("Email không hợp lệ")
  //   .required("vui lòng nhập email"),
  phone: yup.string().required("Vui lòng nhập số điện thoại"),
  password: yup.string().required("Mật khẩu là trường bắt buộc"),
});
function MainLayout({ children }) {
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    watch: watch2,
    reset: reset2,
    formState: { errors: errors2 },
  } = useForm({
    resolver: yupResolver(schema2),
  });
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => setOpen2(false);
  const [loading, setLoading] = useState(false);
  const onSubmit2 = async (data) => {
    setLoading(true);
    const resApi = await loginClientAxios.post("/user/login", {
      username: data.phone,
      password: data.password,
    });
    setTimeout(() => {
      if (resApi?.result?.message?.length > 0) {
        Swal.fire({
          text: `${resApi.result.message}`,
          icon: "error",
          showCancelButton: false,
          confirmButtonText: "OK",
        });
        setLoading(false);
      } else if (resApi?.result) {
        setLoading(false);
        Cookies.set("access_token", resApi?.result?.access_token);
        Cookies.set("trainee_id", resApi?.result?.id);
        setOpen2(false);
      }
    }, 2000);
  };
  const cart = [1];
  const [activeKey, setActiveKey] = React.useState(1);
  const [visible, setVisible] = useState(false);
  const [visibleHome, setVisibleHome] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 10) {
      setVisible(true);
    } else if (scrolled <= 10) {
      setVisible(false);
    }
    if (scrolled > 900) {
      setVisibleHome(true);
    } else if (scrolled <= 900) {
      setVisibleHome(false);
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
  window.addEventListener("scroll", toggleVisible);
  const router = useRouter();
  const token = Cookies.get("access_token");
  useEffect(() => {
    $(".rs-navbar-item").each((index) => {
      switch (router.asPath) {
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
          $(".rs-navbar-item")[2].classList.add("rs-navbar-item-active");
          break;
        }
        case "/course": {
          $(".rs-navbar-item")[2].classList.add("rs-navbar-item-active");
          break;
        }
        case "/proshop": {
          $(".rs-navbar-item")[3].classList.add("rs-navbar-item-active");
          break;
        }
        case "/orther-service#spa": {
          $(".rs-navbar-item")[4].classList.add("rs-navbar-item-active");
          break;
        }
        case "/orther-service#lounge": {
          $(".rs-navbar-item")[5].classList.add("rs-navbar-item-active");
          break;
        }
        case "/contact-us": {
          $(".rs-navbar-item")[6].classList.add("rs-navbar-item-active");
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
    if (token && token.length > 0) {
      setOpen2(false);
      $(".cart-dialog").css("transform", "scaleY(1)");
    } else {
      setOpen2(true);
    }
  });
  $(".sub-menu").on("click", () => {
    $(".sub").css("transform", "scaleX(1)");
  });
  $(".bar").on("click", () => {
    $(".custom-menu").css("transform", "scaleY(1)");
  });
  $(".rs-dropdown").on({
    mouseenter: function () {
      if ($(this).index() === 1) {
        $(".rs-dropdown-menu")[0].removeAttribute("hidden");
      } else {
        $(".rs-dropdown-menu")[1].removeAttribute("hidden");
      }
    },
    mouseenter: function () {
      if ($(this).index() === 1) {
        $(".rs-dropdown-menu")[0].removeAttribute("hidden");
      } else {
        $(".rs-dropdown-menu")[1].removeAttribute("hidden");
      }
    },
    mouseleave: function () {
      if ($(this).index() === 1) {
        $(".rs-dropdown-menu")[0].setAttribute("hidden", "");
      } else {
        $(".rs-dropdown-menu")[1].setAttribute("hidden", "");
      }
    },
  });
  // $("#memu-about").on("mouseenter", () => {
  //   console.log($(".rs-dropdown-menu"));
  // });
  return (
    <>
      <div className="wrapper-project">
        {router.pathname === "/" ? (
          <HeaderMain
            appearance="subtle"
            activeKey={activeKey}
            onSelect={setActiveKey}
            visible={visibleHome}
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
            handleShowCart={handleShowCart}
            handleShowRightMenu={handleShowRightMenu}
            handleShowSearch={handleShowSearch}
          />
        )}
        <RightMenu handleCloseRightMenu={handleCloseRightMenu} />
        <Cart handleCloseCart={handleCloseCart} cart={cart} />
        {open2 && (
          <SignIn
            errors={errors2}
            register={register2}
            onSubmit={onSubmit2}
            handleSubmit={handleSubmit2}
            handleClose2={handleClose2}
            loading={loading}
            reset={reset2}
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
