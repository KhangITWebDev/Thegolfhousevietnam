import Head from "next/head";
import Script from "next/script";
import { motion } from "framer-motion";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "rsuite/dist/rsuite.css";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import $ from "jquery";

import AOS from "aos";
import "aos/dist/aos.css";
import { DefaultSeo } from "next-seo";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import RouteGuard from "./RouteGuard";

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  const router = useRouter();
  const token = Cookies.get("access_token");
  useEffect(() => {
    if (token) {
      setTimeout(() => {
        Cookies.remove("access_token");
        Swal.fire({
          title: "<h5>Phiên đăng nhập đã hết hạn</h5>",
          text: "Xin lỗi! Phiên đăng nhập của bạn đã hết hạn vui long đăng nhập lại",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Đồng ý",
          cancelButtonText: "Hủy bỏ",
        }).then((result) => {
          if (result.isConfirmed) {
            // router.push("/training");
            window.location.href = "/training";
            localStorage.setItem("open", "open");
          } else {
            localStorage.setItem("open", "none");
          }
        });
      }, 3600000);
    }
  }, [token]);
  useEffect(() => {
    setShowChild(true);
    import("bootstrap/dist/js/bootstrap");
    import("bootstrap/dist/js/bootstrap.bundle");
    import("jquery-ui-bundle");
    AOS.init();
    AOS.init({
      duration: 1500,
    });
  }, []);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [cursorVariants, setCursorVariants] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x + 16,
      y: mousePosition.y + 16,
    },
    text: {
      x: mousePosition.x + 8,
      y: mousePosition.y + 8,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariants("text");
  const textLeave = () => setCursorVariants("default");

  useEffect(() => {
    $("h2").on("mouseenter", textEnter);
    $("h2").on("mouseleave", textLeave);
  }, []);
  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <Provider store={store}>
        {/* <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariants}
        /> */}
        <Head>
          <meta charset="utf-8" />
          <title>LIO HOLDING</title>
          <meta name="description" content="Tại The Golf House Vietnam, tạo nên môi trường giúp học viên trải nghiệm việc học và chơi Golf dễ dàng và hiệu quả nhất là ưu tiên hàng đầu của chúng tôi" />
          <meta
            property="zalo-platform-site-verification"
            content="NlFW6QhNR28knTmYxiS92XNKfJtvfNvbD38"
          ></meta>
          <meta name="theme-color" content="#000000"></meta>
          <meta name="image" content="/images/Logo/Logo12.png"></meta>
          <meta name="description" content="Tại The Golf House Vietnam, tạo nên môi trường giúp học viên trải nghiệm việc học và chơi Golf dễ dàng và hiệu quả nhất là ưu tiên hàng đầu của chúng tôi"></meta>
          <meta name="og:image" content="/images/Logo/Logo12.png"></meta>
          <meta name="og:description" content="Tại The Golf House Vietnam, tạo nên môi trường giúp học viên trải nghiệm việc học và chơi Golf dễ dàng và hiệu quả nhất là ưu tiên hàng đầu của chúng tôi" />
          <link href="/images/Logo/Logo12.png" rel="icon" />
          <link href="/images/Logo/Logo12.png" rel="apple-touch-icon"></link>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
        </Head>
        <RouteGuard>
          <Component {...pageProps} />
        </RouteGuard>
      </Provider>
    );
  }
}

export default MyApp;
