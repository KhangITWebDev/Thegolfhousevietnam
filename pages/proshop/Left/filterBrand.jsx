import React, { useState, useEffect } from "react";
import styles from "./left.module.scss";
import { filterarr, multipleFilter } from "./left";
import Cookies from "js-cookie";
import ProshopAPI from "../../../store/redux/ProshopReducer/proshop.api";
export const brandList = [
  {
    value: "brand1",
    label: "Nike",
  },
  {
    value: "brand2",
    label: "Addidas",
  },
  {
    value: "brand3",
    label: "Hazzy",
  },
];
function FilterBrand({ callFilter }) {
  const [show, setShow] = useState(true);
  function ToogleFilter() {
    setShow(!show);
    var growDiv = document.getElementById("grow5");
    if (growDiv.clientHeight) {
      growDiv.style.height = 0;
    } else {
      var wrapper = document.querySelector(".wr5");
      growDiv.style.height = wrapper.clientHeight + "px";
    }
  }
  useEffect(() => {
    if (show) {
      document.getElementById("grow5").style.height =
        document.querySelector(".wr5")?.clientHeight + "px";
    }
  }, []);
  const brand = Cookies.get("brand");

  const filter2 = (type, e) => {
    Cookies.set("page_shop", 1);
    if (e.target.checked) {
      Cookies.set("brand", type);
      callFilter();
    } else {
      Cookies.set("brand", "");
      callFilter();
    }
  };
  return (
    <div className={"col-12 col-lg-12 col-md-6" + " " + styles.center_item}>
      <h5
        className="w-100 d-flex justify-content-between align-items-center"
        onClick={() => {
          ToogleFilter();
        }}
      >
        Thương hiệu
        {show ? (
          <i className="fa-regular fa-chevron-up"></i>
        ) : (
          <i className="fa-regular fa-chevron-down"></i>
        )}
      </h5>
      <div id="grow5">
        <div className={styles.item_content + " " + "d-flex flex-column wr5"}>
          {brandList.map((item, index) => (
            <label htmlFor={item.value} key={index}>
              <input
                type="checkbox"
                id={item.value}
                value={item.value}
                name="brand"
                onClick={(e) => {
                  filter2(item.label.toLowerCase(), e);
                }}
                checked={`${item.label.toLowerCase()}` === brand}
              />
              <span className={styles.checkmark}></span>
              <div className={styles.title}>{item.label}</div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterBrand;
