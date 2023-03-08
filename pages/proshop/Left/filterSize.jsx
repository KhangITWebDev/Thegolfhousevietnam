import React, { useEffect, useState } from "react";
import styles from "./left.module.scss";
import { filterarr, multipleFilter } from "./left";
import ProshopAPI from "../../../store/redux/ProshopReducer/proshop.api";
import Cookies from "js-cookie";

export const SizeList = [
  {
    value: "size1",
    label: "XS",
  },
  {
    value: "size2",
    label: "S",
  },
  {
    value: "size3",
    label: "M",
  },
  {
    value: "size4",
    label: "L",
  },
];
function FilterSize({ callFilter }) {
  const [show, setShow] = useState(true);
  function ToogleFilter() {
    setShow(!show);
    var growDiv = document.getElementById("grow3");
    if (growDiv.clientHeight) {
      growDiv.style.height = 0;
    } else {
      var wrapper = document.querySelector(".wr3");
      growDiv.style.height = wrapper.clientHeight + "px";
    }
  }
  useEffect(() => {
    if (show) {
      document.getElementById("grow3").style.height =
        document.querySelector(".wr3")?.clientHeight + "px";
    }
  }, []);
  const size = Cookies.get("size");
  const filter2 = (type, e) => {
    Cookies.set("page_shop", 1);
    if (e.target.checked) {
      Cookies.set("size", `size ${type}`);
      callFilter();
    } else {
      Cookies.set("size", "");
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
        Kích cỡ
        {show ? (
          <i className="fa-regular fa-chevron-up"></i>
        ) : (
          <i className="fa-regular fa-chevron-down"></i>
        )}
      </h5>
      <div id="grow3">
        <div className={styles.item_content + " " + "d-flex flex-column wr3"}>
          {SizeList.map((item, index) => (
            <label htmlFor={item.value} key={index}>
              <input
                type="checkbox"
                id={item.value}
                value={item.value}
                name="size"
                onClick={(e) => {
                  filter2(item.label.toLowerCase(), e);
                }}
                checked={`size ${item.label.toLowerCase()}` === size}
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

export default FilterSize;
