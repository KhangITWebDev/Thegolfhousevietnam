import React, { useState } from "react";
import styles from "./headerMain.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import Cookies from "js-cookie";
import { LOCAL_STORAGE } from "../../utils/handleStorage";
import DropdownUser from "../DropdownUser/dropdownUser";

export default function HeaderMain(props) {
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
  return (
    <div>
      <Navbar
        expand="lg"
        id="navbar_menu"
        fixed="top"
        className={styles.header}
      >
        <Container className={styles.header_content}>
          <div
            className={styles.logo}
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/")}
          >
            <Image alt="logo" src="/images/Logo/Logo11.png" layout="fill" />
          </div>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={styles.navToggle}
          >
            <i
              className="fal fa-bars"
              color="#fff"
              style={{ fontSize: 28 }}
            ></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.header_menu}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="default"
                  id="dropdown-cafe"
                  onClick={() => router.push("/academy")}
                >
                  Golf
                </Dropdown.Toggle>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle
                  variant="default"
                  id="dropdown-cafe"
                  onClick={commingSoon}
                >
                  Motosport
                </Dropdown.Toggle>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle
                  variant="default"
                  id="dropdown-cafe"
                  onClick={() => router.push("/proshop")}
                >
                  Proshop
                </Dropdown.Toggle>
              </Dropdown>
              <Dropdown
                show={show}
                onMouseEnter={() => setShow(!show)}
                onMouseLeave={() => setShow(false)}
              >
                <Dropdown.Toggle variant="default" id="dropdown-cafe">
                  <i className="fal fa-search"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  aria-labelledby="dropdown-user"
                  id="dropdown_end"
                >
                  <div className={"d-flex" + " " + styles.box_search}>
                    <input type="text" placeholder="Enter key word" />
                    <button onClick={commingSoon}>
                      <i className="fa-light fa-search"></i>
                    </button>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              <DropdownUser />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
