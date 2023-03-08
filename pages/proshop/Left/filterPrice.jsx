import React, { useState, useEffect } from "react";
import styles from "./left.module.scss";
import { filterarr, multipleFilter } from "./left";
import ProshopAPI from "../../../store/redux/ProshopReducer/proshop.api";
import Cookies from "js-cookie";

export const price = [
  {
    value: "price1",
    label: "Dưới 1.000.000 đ",
  },
  {
    value: "price2",
    label: "1.000.000 đ - 4.999.999 đ",
  },
  {
    value: "price3",
    label: "5.000.000 đ - 10.000.000 đ",
  },
  {
    value: "price4",
    label: "Trên 10.000.000 đ",
  },
];

function FilterPrice({ callFilter }) {
  const [show, setShow] = useState(true);
  function ToogleFilter() {
    setShow(!show);
    var growDiv = document.getElementById("grow4");
    if (growDiv.clientHeight) {
      growDiv.style.height = 0;
    } else {
      var wrapper = document.querySelector(".wr4");
      growDiv.style.height = wrapper.clientHeight + "px";
    }
  }
  const price_min = Cookies.get("price_min");
  const price_max = Cookies.get("price_max");
  useEffect(() => {
    if (show) {
      document.getElementById("grow4").style.height =
        document.querySelector(".wr4")?.clientHeight + "px";
    }
  }, []);
  const filter2 = (e) => {
    const { value } = e.target;
    Cookies.set("page_shop", 1);
    if (e.target.checked) {
      switch (value) {
        case "price1": {
          Cookies.set("price_min", 100);
          Cookies.set("price_max", 1000000);
          callFilter();
          break;
        }
        case "price2": {
          Cookies.set("price_min", 1000000);
          Cookies.set("price_max", 5000000);
          callFilter();
          break;
        }
        case "price3": {
          Cookies.set("price_min", 5000000);
          Cookies.set("price_max", 10000000);
          callFilter();
          break;
        }
        case "price4": {
          Cookies.set("price_min", 10000000);
          Cookies.remove("price_max");
          Cookies.set("page_shop", 1);
          callFilter();
          break;
        }
        default:
          break;
      }
    } else {
      Cookies.remove("price_min");
      Cookies.remove("price_max");
      callFilter();
    }
  };
  const checkChecked = (item) => {
    if (Number(price_max) === 1000000 && item.value === "price1") {
      return true;
    } else if (
      Number(price_min) === 1000000 &&
      Number(price_max) === 5000000 &&
      item.value === "price2"
    ) {
      return true;
    } else if (
      Number(price_min) === 5000000 &&
      Number(price_max) === 10000000 &&
      item.value === "price3"
    ) {
    } else if (Number(price_min) === 10000000 && item.value === "price4") {
      return true;
    } else {
      return false;
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
        Mức giá
        {show ? (
          <i className="fa-regular fa-chevron-up"></i>
        ) : (
          <i className="fa-regular fa-chevron-down"></i>
        )}
      </h5>
      <div id="grow4">
        <div className={styles.item_content + " " + "d-flex flex-column wr4"}>
          {price.map((item, index) => (
            <label htmlFor={item.value} key={index}>
              <input
                type="checkbox"
                id={item.value}
                value={item.value}
                name="price"
                checked={
                  Number(price_max) === 1000000 && item.value === "price1"
                    ? true
                    : Number(price_max) === 5000000 && item.value === "price2"
                    ? true
                    : Number(price_max) === 10000000 && item.value === "price3"
                    ? true
                    : Number(price_min) === 10000000 && item.value === "price4"
                    ? true
                    : false
                }
                onClick={(e) => {
                  filter2(e);
                }}
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

export default FilterPrice;
