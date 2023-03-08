import React, { useEffect, useState } from "react";
import styles from "./left.module.scss";
import { filterarr, multipleFilter } from "./left";
import ProshopAPI from "../../../store/redux/ProshopReducer/proshop.api";
import Cookies from "js-cookie";

export const Filter1 = [
  {
    value: "gen3",
    label: "Unisex",
  },
  {
    value: "gen1",
    label: "Nam",
  },
  {
    value: "gen2",
    label: "Nữ",
  },
  {
    value: "gen4",
    label: "Bé trai",
  },
  {
    value: "gen5",
    label: "Bé gái",
  },
  {
    value: "gen6",
    label: "Trẻ em",
  },
];

function FilterGender({ callFilter }) {
  const [show, setShow] = useState(true);
  function ToogleFilter() {
    setShow(!show);
    var growDiv = document.getElementById("grow2");
    if (growDiv.clientHeight) {
      growDiv.style.height = 0;
    } else {
      var wrapper = document.querySelector(".wr2");
      growDiv.style.height = wrapper.clientHeight + "px";
    }
  }
  useEffect(() => {
    if (show) {
      document.getElementById("grow2").style.height =
        document.querySelector(".wr2")?.clientHeight + "px";
    }
  }, []);
  const gender = Cookies.get("gender");
  const filter2 = (type, e) => {
    Cookies.set("page_shop", 1);
    if (e.target.checked) {
      Cookies.set("gender", type);
      callFilter();
    } else {
      Cookies.set("gender", "");
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
        Giới tính
        {show ? (
          <i className="fa-regular fa-chevron-up"></i>
        ) : (
          <i className="fa-regular fa-chevron-down"></i>
        )}
      </h5>
      <div id="grow2">
        <div className={styles.item_content + " " + "d-flex flex-column wr2"}>
          {Filter1.map((item, index) => (
            <label htmlFor={item.value} key={index}>
              <input
                type="checkbox"
                id={item.value}
                value={item.value}
                name="gen"
                onClick={(e) => {
                  filter2(item.label.toLowerCase(), e);
                }}
                checked={`${item.label.toLowerCase()}` === gender}
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

export default FilterGender;
