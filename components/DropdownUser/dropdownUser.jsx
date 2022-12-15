import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Swal from "sweetalert2";
import { LOCAL_STORAGE } from "../../utils/handleStorage";

function DropdownUser(props) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const userData = JSON.parse(Cookies.get(LOCAL_STORAGE.USER_LOGIN) || "{}");
  const onLogout = () => {
    let timerInterval;
    Swal.fire({
      title: "",
      html: "Signing out! Plase await <span></span>s",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("span");
        timerInterval = setInterval(() => {
          b.textContent = Math.floor(Swal.getTimerLeft() / 1000);
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
        Cookies.set("user-login", JSON.stringify([]));
        Swal.fire({
          title: "Success",
          icon: "success",
          title: "Sign out success",
          showConfirmButton: false,
          timer: 1000,
          willClose: () => {
            router.push("/academy/sign-in");
          },
        });
      },
    });
  };
  return (
    <Dropdown
      show={show}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
    >
      <Dropdown.Toggle variant="default" id="dropdown-user">
        <i className="fal fa-user-alt"></i>
      </Dropdown.Toggle>
      {!userData.email ? (
        <Dropdown.Menu aria-labelledby="dropdown-user" id="dropdown_end">
          <Dropdown.Item
            href="#"
            onClick={(e) => {
              e.preventDefault();
              router.push("/academy/sign-up");
            }}
          >
            SIGN UP
          </Dropdown.Item>
          <Dropdown.Item
            href="#"
            onClick={(e) => {
              e.preventDefault();
              router.push("/academy/sign-in");
            }}
          >
            SIGN IN
          </Dropdown.Item>
        </Dropdown.Menu>
      ) : (
        <Dropdown.Menu aria-labelledby="dropdown-user" id="dropdown_end">
          <div
            href="#"
            className="top"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Hello <br /> <span>{userData.email}</span>
          </div>
          <Dropdown.Item
            href="#"
            onClick={(e) => {
              e.preventDefault();
              router.push("/profile");
            }}
          >
            MANAGE PROFILE
          </Dropdown.Item>
          <Dropdown.Item
            href="#"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            NOTIFICATION SETTINGS
          </Dropdown.Item>
          <Dropdown.Item
            href="#"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            FAVORITE PLAYERS
          </Dropdown.Item>
          <Dropdown.Item
            href="#"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            CHANGE PASSWORD
          </Dropdown.Item>
          <Dropdown.Item
            href="#"
            onClick={(e) => {
              e.preventDefault();
            }}
            style={{
              paddingBottom: 0,
              paddingTop: 0,
              borderTop: "1px solid",
              marginBottom: 5,
              marginTop: 10,
            }}
          ></Dropdown.Item>
          <Dropdown.Item
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onLogout();
            }}
          >
            SIGN OUT
          </Dropdown.Item>
        </Dropdown.Menu>
      )}
    </Dropdown>
  );
}

export default DropdownUser;
