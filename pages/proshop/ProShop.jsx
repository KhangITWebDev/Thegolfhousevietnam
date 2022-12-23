import Image from "next/image";
import React, { useState } from "react";
import Select, { components } from "react-select";
import { Progress } from "rsuite";
import Pagination from "../../components/pagination/pagination";
import { ShopList } from "../../utils/DataDemo/Home/dataHome";
import { usePagination } from "../../utils/usePagination";
import styles from "./ProShop.module.scss";
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: 17,
    color: state.isSelected ? "#fff" : "#000",
    cursor: "pointer",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#000",
    fontSize: 17,
    fontWeight: 700,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#000",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  container: (provided, state) => ({
    ...provided,
    width: 300,
  }),
  input: (base, state) => ({
    ...base,
    color: "#000",
    fontSize: 17,
    fontWeight: 700,
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: "tranparent",
    cursor: "pointer",
    color: "#000",
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? 0 : 0,
    },
  }),
};

const options = [
  { value: "1", label: "Mới nhất" },
  { value: "2", label: "Cũ nhất" },
  { value: "3", label: "Giá cao nhất" },
  { value: "4", label: "Giá thấp nhất" },
];

function ProShop(props) {
  const [show1, setShow1] = useState(true);
  const [activePage, setActivePage] = React.useState(1);
  const [nodeValue, setNodeValue] = useState("golf-balls");
  const data = usePagination(ShopList, 6);
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <i
          className="fa-solid fa-chevron-down"
          style={{
            fontSize: 16,
            color: "#5F5F5F",
          }}
        ></i>
      </components.DropdownIndicator>
    );
  };
  const page = [1, 2];
  const [percent, setPercent] = React.useState(30);
  const status = percent === 100 ? "success" : null;
  const color = percent === 100 ? "#7C8E5B" : "#7C8E5B";

  return (
    <div className={styles.proshop_page}>
      <div className="container">
        <div className="heading">
          <h2>Proshop</h2>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn-down">
            <i className="fa-regular fa-chevron-down"></i>
          </button>
        </div>
        <div
          className={"d-flex align-items-start" + " " + styles.content}
          id="pro-shop"
        >
          <div className={"col-8" + " " + styles.left}>
            <div
              className={
                "d-flex justify-content-between align-items-center" +
                " " +
                styles.header
              }
            >
              <span>Hiển thị 6 trên 10 kết quả</span>
              <div>
                <Select
                  options={options}
                  styles={customStyles}
                  defaultValue={options[0]}
                  components={{ DropdownIndicator }}
                />
              </div>
            </div>
            <div className={"d-flex flex-wrap" + " " + styles.product}>
              {data.currentDatas.map((item, index) => (
                <div key={index} className={"col-6" + " " + styles.item}>
                  <div
                    className={
                      styles.info +
                      " " +
                      "d-flex flex-column align-items-center"
                    }
                  >
                    <div className={styles.image}>
                      <Image
                        alt={"Image" + index + 1}
                        src={item.image}
                        width={250}
                        height={250}
                      ></Image>
                    </div>
                    <h5>{item.name}</h5>
                    <p>{item.price}</p>
                    <div className={"d-flex" + " " + styles.rate}>
                      {Array(item.rate)
                        .fill()
                        .map((i) => (
                          <i className="fa-solid fa-star" key={i}></i>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-center">
              <Pagination data={data} />
            </div>
          </div>
          <div className={"col-4" + " " + styles.right}>
            <div className={styles.tabs}>
              <h5>Mới nhất</h5>
              <span>Không có sản phẩm nào</span>
              <h5>Tìm kiếm</h5>
              <div className="input-position">
                <div className="icon">
                  <i className="fa-regular fa-magnifying-glass"></i>
                </div>
                <input type="text" placeholder="Tìm sản phẩm ..." />
              </div>
              <h5>Loại sản phẩm</h5>
              <ul>
                <li>Phụ kiện (1)</li>
                <li>Trang phục (1)</li>
                <li>Bóng Golf (1)</li>
                <li>Combo Golf (2)</li>
                <li>Gậy Golf (4)</li>
              </ul>
              <h5>Lọc sản phẩm</h5>
              <Progress.Line
                percent={percent}
                strokeColor={color}
                status={status}
                showInfo={false}
              />
              <span>Giá: 500.000 - 2.000.000 VND</span>
              <div className="button justify-content-start">
                <button>Lọc</button>
              </div>
              <h5>Thẻ</h5>
              <div className={styles.tag}>
                <button>Giảm giá</button>
                <button>Mới</button>
                <button>KM</button>
                <button>Nổi bật</button>
                <button>Shop</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProShop;
