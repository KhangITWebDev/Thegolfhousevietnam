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

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
    import("bootstrap/dist/js/bootstrap");
    import("bootstrap/dist/js/bootstrap.bundle");
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
        <DefaultSeo
          title="The Golf House"
          description="Tại The Golf House Vietnam, tạo nên môi trường giúp học viên trải nghiệm việc học và chơi Golf dễ dàng và hiệu quả nhất là ưu tiên hàng đầu của chúng tôi."
          additionalLinkTags={[
            {
              rel: "icon",
              href: "/images/Logo/Logo12.png",
            },
            {
              rel: "apple-touch-icon",
              href: "/images/Logo/Logo12.png",
              sizes: "76x76",
            },
          ]}
          openGraph={{
            type: "website",
            locale: "en_IE",
            url: "https://www.url.ie/",
            siteName: "SiteName",
            images: {
              url: "/images/Logo/Logo12.png",
              width: 850,
              height: 650,
              alt: "Photo of text",
            },
          }}
          twitter={{
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
