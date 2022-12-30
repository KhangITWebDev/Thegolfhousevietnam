import $ from "jquery";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "rsuite";
import Swal from "sweetalert2";
// import styles from "./headerMain.module.scss";

export default function HeaderMoblieBlack({
  onSelect,
  visible,
  activeKey,
  ...props
}) {
  const commingSoon = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Comming Soon",
      text: "We are comming soon",
      icon: "warning",
      showCancelButton: false,
      confirmButtonText: "OK",
    });
  };
  const router = useRouter();
  const [show, setShow] = useState(false);
  useEffect(() => {
    $(".rs-navbar-item").each(function (index) {
      $(".rs-navbar-item").on("click", function () {
        $(".sub-child").attr("data-aos", "fade-left");
      });
    });
  }, []);
  return (
    <div id="navbar-mobile-black">
      <Navbar
        {...props}
        className="custom-nav"
        data-aos="fade-down"
        style={
          visible
            ? {
                background: "#fff",
                boxShadow: "0px 3px 11px rgba(0, 0, 0, 0.25)",
              }
            : {}
        }
      >
        <div className="">
          <Nav onSelect={onSelect} activeKey={activeKey}>
            <Navbar.Brand
              onClick={(e) => {
                e.preventDefault();
                router.push("/");
              }}
            >
              <Image
                alt="logo"
                src="/images/Logo/Logo12.png"
                width={104}
                height={87}
              />
            </Navbar.Brand>
            <div className="d-flex align-items-center">
              <div className="right d-flex">
                <Nav.Item eventKey="11">
                  <div className="cart">
                    <i className="fa-light fa-bag-shopping"></i>
                    <span className="d-flex justify-content-center align-items-center">
                      1
                    </span>
                  </div>
                </Nav.Item>
                <Nav.Item eventKey="12">
                  <i className="fa-light fa-magnifying-glass"></i>
                </Nav.Item>
                <Nav.Item
                  eventKey="13"
                  onClick={(e) => {
                    e.preventDefault();
                    setShow(!show);
                  }}
                >
                  <i className="fa-regular fa-bars"></i>
                </Nav.Item>
              </div>
            </div>
          </Nav>
        </div>
      </Navbar>
      {show && (
        <Navbar
          {...props}
          className="custom-menu"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <Nav onSelect={onSelect} activeKey={activeKey}>
            <div className="tool">
              <Navbar.Brand
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/");
                }}
              >
                <Image
                  alt="logo"
                  src="/images/Logo/Logo12.png"
                  width={104}
                  height={87}
                />
              </Navbar.Brand>
              <Nav.Item
                eventKey="13"
                className="close"
                onClick={(e) => {
                  e.preventDefault();
                  setShow(false);
                }}
              >
                <span>Close</span>
                <i className="fa-regular fa-times"></i>
              </Nav.Item>
            </div>
            <div className="scroll">
              <div className="menu-link d-flex">
                <Nav.Item
                  eventKey="1"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/");
                  }}
                >
                  Trang chủ
                </Nav.Item>
                <Nav.Menu title="Về Chúng Tôi" id="drop1">
                  <Nav.Item
                    eventKey="2"
                    onClick={() => {
                      router.push("/about-us#founder");
                    }}
                  >
                    Nhà sáng lập
                  </Nav.Item>
                  <Nav.Item
                    eventKey="3"
                    onClick={() => {
                      router.push("/about-us#about");
                    }}
                  >
                    Lio Holding
                  </Nav.Item>
                  <Nav.Item
                    eventKey="4"
                    onClick={() => {
                      router.push("/about-us#news");
                    }}
                  >
                    Tin tức, sự kiện
                  </Nav.Item>
                </Nav.Menu>
                <Nav.Item
                  eventKey="5"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/academy");
                  }}
                >
                  Học viện
                </Nav.Item>
                <Nav.Item
                  eventKey="6"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/trainer");
                  }}
                >
                  HLV
                </Nav.Item>
                <Nav.Menu title="Đào Tạo">
                  <Nav.Item
                    eventKey="7"
                    onClick={(e) => {
                      router.push("/course#course");
                    }}
                  >
                    Khoá học
                  </Nav.Item>
                  <Nav.Item
                    eventKey="8"
                    onClick={() => {
                      // $("html,body").animate(
                      //   {
                      //     scrollTop: $("#calendar").offset().top,
                      //   },
                      //   "slow"
                      // );
                      router.push("/course#calendar");
                    }}
                  >
                    Đặt lịch học
                  </Nav.Item>
                </Nav.Menu>
                <Nav.Item
                  eventKey="9"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/proshop");
                  }}
                >
                  Proshop
                </Nav.Item>
                <Nav.Item
                  eventKey="10"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/orther-service");
                  }}
                >
                  Dịch vụ khác
                </Nav.Item>
                <Nav.Item
                  eventKey="11"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/contact-us");
                  }}
                >
                  Liên hệ
                </Nav.Item>
              </div>
            </div>
            <div className="d-flex social justify-content-center">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-dribbble"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </Nav>
        </Navbar>
      )}
    </div>
  );
}
