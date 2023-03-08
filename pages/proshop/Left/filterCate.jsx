import React, { useEffect, useState } from "react";
import styles from "./left.module.scss";
import { filterarr, multipleFilter } from "./left";
import ProshopAPI from "../../../store/redux/ProshopReducer/proshop.api";
import Cookies from "js-cookie";
export const cate = [
  {
    value: "cate1",
    label: "Fullset",
  },
  {
    value: "cate2",
    label: "Áo",
  },
  {
    value: "cate3",
    label: "Quần",
  },
  {
    value: "cate4",
    label: "Váy",
  },
  {
    value: "cate5",
    label: "Giày",
  },
  {
    value: "cate6",
    label: "Găng",
  },
  {
    value: "cate7",
    label: "Nón",
  },
  {
    value: "cate8",
    label: "Trang phục",
  },
];
function FilterCate({ callFilter }) {
  useEffect(() => {
    document.getElementById("grow").style.height = 310 + "px";
  });
  const cateS = Cookies.get("Pro_DM");
  const filter = (type, index) => {
    Cookies.set("page_shop", 1);
    if (cateS === cate[index].label.toLowerCase()) {
      Cookies.remove("Pro_DM");
      callFilter();
    } else {
      Cookies.set("Pro_DM", type);
      callFilter();
    }
  };
  return (
    <div className={"col-12 col-lg-12 col-md-6" + " " + styles.center_item}>
      <div id="grow">
        <ul className={styles.item_content + " " + "wr"}>
          {cate.map((x, y) => (
            <li
              key={y}
              onClick={() => {
                filter(x.label.toLowerCase(), y);
              }}
              className={cateS === x.label.toLowerCase() && styles.active}
            >
              {x.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterCate;
