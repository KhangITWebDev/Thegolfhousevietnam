import React, { useEffect, useState } from "react";
import styles from "./headerAcademy.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { Dropdown } from "react-bootstrap";
import Cookies from "js-cookie";
import { LOCAL_STORAGE } from "../../utils/handleStorage";
import $ from "jquery";
import { Nav, Navbar } from "rsuite";
import HeaderMoblie from "../HeaderMobile/HeaderMobile";
import HeaderMoblieBlack from "../HeaderMobileBlack/HeaderMobileBlack";

export default function HeaderAccademy({
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
  const cart = [];
  const [show, setShow] = useState(false);
  const [showCart, setShowCart] = useState(false);
  // useEffect(() => {
  //   $(".rs-navbar-item").each(function (index) {
  //     $(".rs-navbar-item").on("click", function () {
  //       $(".sub-child").attr("data-aos", "fade-left");
  //     });
  //   });
  // }, []);
  return (
    <>
      <div id="navbar-academy">
        <Navbar
          {...props}
          className="custom-nav"
          data-aos="fade-down"
          style={
            visible
              ? {
                  background: "#fff",
                  transition: "all 0.5s",
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
              <div className="d-flex justify-content-center align-items-center">
                <div className="left d-flex">
                  <Nav.Item
                    eventKey="1"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/");
                    }}
                  >
                    Trang chủ
                  </Nav.Item>
                  <Nav.Menu title="Về Chúng Tôi">
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
                <div className="right d-flex">
                  <Nav.Item
                    eventKey="11"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowCart(!showCart);
                    }}
                  >
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
                    <i className="fa-solid fa-grid"></i>
                  </Nav.Item>
                </div>
              </div>
            </Nav>
          </div>
        </Navbar>
        {show && (
          <div
            className={styles.subMenu + " " + "sub"}
            // style={{ display: show ? "block" : "none" }}
            onClick={() =>
              setTimeout(() => {
                setShow(false);
              }, 2000)
            }
          >
            <div
              className={
                styles.subMenu_child +
                " " +
                "d-flex justify-content-between flex-column sub-child"
              }
              data-aos={show ? "fade-left" : "fade-right"}
              style={{ right: show ? 0 : "-100%" }}
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
                <button onClick={() => setShow(false)}>
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
        )}
        {showCart && (
          <div
            className={styles.subMenuCart + " " + "sub"}
            // style={{ display: show ? "block" : "none" }}
            onClick={() => setShowCart(false)}
          >
            <div
              className={
                styles.subMenuCart_child +
                " " +
                "d-flex justify-content-between flex-column sub-child"
              }
              data-aos={showCart ? "fade-left" : "fade-right"}
            >
              {cart.length > 0 ? (
                ""
              ) : (
                <div
                  className={
                    "d-flex flex-column align-items-center justify-content-center h-100" +
                    " " +
                    styles.empty
                  }
                >
                  <i className="fa-light fa-bag-shopping"></i>
                  <p>No products in cart</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <HeaderMoblieBlack visible={visible} />
    </>
  );
}
