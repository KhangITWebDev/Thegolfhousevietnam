import Cookies from "js-cookie";
import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import ProshopAPI from "../../../store/redux/ProshopReducer/proshop.api";
import styles from "./right.module.scss";

function Top({ hiddenFilter, setHiddenFilter, callFilter }) {
  const name = Cookies.get("name");
  const [keyWord, setKeyword] = useState(name || "");
  const handleSearchInput = (e) => {
    const value = e.target.value;
    if (value && value.length > 0) {
      Cookies.set("page_shop", 1);
      Cookies.set("name", value.toLowerCase());
      callFilter();
    } else {
      Cookies.set("page_shop", 1);
      Cookies.set("name", "");
      callFilter();
    }
  };
  const sortType = Cookies.get("sort");
  const incress = Cookies.get("incress");
  const sort = (value) => {
    Cookies.set("page_shop", 1);
    switch (value) {
      case "1": {
        if (sortType === "date_created" && incress === "1") {
          Cookies.remove("sort");
          Cookies.remove("incress");
          callFilter();
        } else {
          Cookies.set("sort", "date_created");
          Cookies.set("incress", "1");
          callFilter();
        }
        break;
      }
      case "2": {
        if (sortType === "date_created" && incress === "-1") {
          Cookies.remove("sort");
          Cookies.remove("incress");
          callFilter();
        } else {
          Cookies.set("sort", "date_created");
          Cookies.set("incress", "-1");
          callFilter();
        }
        break;
      }
      case "3": {
        if (sortType === "gia_ban_le" && incress === "-1") {
          Cookies.remove("sort");
          Cookies.remove("incress");
          callFilter();
        } else {
          Cookies.set("sort", "gia_ban_le");
          Cookies.set("incress", "-1");
          callFilter();
        }
        break;
      }
      case "4": {
        if (sortType === "gia_ban_le" && incress === "1") {
          Cookies.remove("sort");
          Cookies.remove("incress");
          callFilter();
        } else {
          Cookies.set("sort", "gia_ban_le");
          Cookies.set("incress", "1");
          callFilter();
        }
        break;
      }
      default:
        break;
    }
  };
  return (
    <div
      className={
        "flex-wrap justify-content-between align-items-center" +
        " " +
        `${hiddenFilter ? "d-flex" : "d-flex"}` +
        " " +
        styles.header
      }
    >
      <span className="col-12 col-sm-8">
        <div className="form-group">
          <div className="input-group">
            <div className="icon">
              <i className="fa-regular fa-magnifying-glass"></i>
            </div>
            <input
              type="text"
              placeholder="Tìm sản phẩm ..."
              className="form-control"
              defaultValue={name}
              onChange={(e) => {
                handleSearchInput(e);
              }}
            />
          </div>
        </div>
      </span>
      <div
        className="col-12 col-sm-4 d-flex align-items-center justify-content-start justify-content-sm-end"
        data-aos="fade-left"
      >
        <span
          className={styles.hiddenFilter}
          onClick={() => setHiddenFilter(!hiddenFilter)}
        >
          {hiddenFilter ? "Hiện bộ lọc" : "Ẩn bộ lọc"}
          <i className="fa-sharp fa-regular fa-arrow-right-arrow-left"></i>
        </span>
        <div className="fiter-select">
          <DropdownButton
            id="dropdown-item-button"
            title="Lọc theo"
            align="end"
          >
            <Dropdown.Item
              eventKey="1"
              as="button"
              onClick={() => {
                sort("1");
              }}
              active={
                sortType === "date_created" && incress === "1" ? true : false
              }
            >
              Cũ nhất
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="2"
              as="button"
              onClick={() => {
                sort("2");
              }}
              active={
                sortType === "date_created" && incress === "-1" ? true : false
              }
            >
              Mới nhất
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="3"
              as="button"
              onClick={() => {
                sort("3");
              }}
              active={
                sortType === "gia_ban_le" && incress === "-1" ? true : false
              }
            >
              Giá: Cao nhất
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="4"
              as="button"
              onClick={() => {
                sort("4");
              }}
              active={
                sortType === "gia_ban_le" && incress === "1" ? true : false
              }
            >
              Giá: Thấp nhất
            </Dropdown.Item>
          </DropdownButton>
          <i className="fa-regular fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
}

export default Top;
