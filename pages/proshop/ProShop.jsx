import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Select, { components } from "react-select";
import { Progress, Slider } from "rsuite";
import Pagination from "../../components/pagination/pagination";
import { ShopList } from "../../utils/DataDemo/Home/dataHome";
import { removeAccents } from "../../utils/function";
import { usePagination } from "../../utils/usePagination";
import styles from "./ProShop.module.scss";
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: 17,
    color: state.isSelected ? "#fff" : "#000",
    cursor: "pointer",
    backgroundColor: state.isSelected ? "#00B577" : "transparent",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#000",
    fontSize: 17,
    "@media screen and (max-width: 576px)": {
      fontSize: 15,
    },
    fontWeight: 700,
    margin: 0,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#000",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  valueContainer: (provided, state) => ({
    ...provided,
    paddingLeft: 0,
    paddingRight: 0,
  }),
  container: (provided, state) => ({
    ...provided,
    width: 200,
    "@media screen and (max-width: 576px)": {
      width: "100%",
    },
  }),
  input: (base, state) => ({
    ...base,
    color: "#000",
    fontSize: 17,
    "@media screen and (max-width: 576px)": {
      fontSize: 15,
    },
    fontWeight: 700,
    margin: 0,
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: "tranparent",
    cursor: "pointer",
    color: "#000",
    "@media screen and (max-width: 480px)": {
      padding: 0,
    },
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
  const [value, setValue] = React.useState(30);
  const router = useRouter();
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
  return (
    <div className={styles.proshop_page}>
      <div className="container" data-aos="fade-up">
        <div className="heading">
          <h2>Proshop</h2>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn-down">
            <i className="fa-regular fa-chevron-down"></i>
          </button>
        </div>
      </div>
      <div className={styles.bannerv2} data-aos="fade-up">
        <Image
          alt="Image 1"
          src="/images/Proshop/banner.png"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.bannerv2_content}>
          <div className="container h-100">
            <div className="d-flex h-100 justify-content-end align-items-center flex-column">
              {/* <span>PROSHOP</span>
              <h1>Chương trình khuyến mãi 50%</h1> */}
              {/* <p>
                Huấn luyện viên đạt chuẩn PGA, VGA dày dặn kinh nghiệm chơi và
                giảng dạy Golf.
              </p> */}
              <div onClick={() => router.push("/trainer")}>
                <button className="btn-content">Tìm hiểu thêm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className={
            "d-flex flex-wrap align-items-start" + " " + styles.content
          }
          id="pro-shop"
        >
          <div
            className={"col-12 col-lg-7" + " " + styles.left}
            data-aos="fade-right"
          >
            <div
              className={
                "d-flex flex-wrap justify-content-between align-items-center" +
                " " +
                styles.header
              }
            >
              <span className="col-12 col-sm-6" data-aos="fade-right">
                Hiển thị 6 trên 10 kết quả
              </span>
              <div
                className="col-12 col-sm-6 d-flex justify-content-start justify-content-sm-end"
                data-aos="fade-left"
              >
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
                <div
                  key={index}
                  className={"col-12 col-sm-6" + " " + styles.item}
                >
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
                        objectFit="cover"
                      ></Image>
                    </div>
                    <h5
                      onClick={() =>
                        router.push(`/proshop/${removeAccents(item.name)}`)
                      }
                    >
                      {item.name}
                    </h5>
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
          <div
            className={"col-12 col-lg-5" + " " + styles.right}
            data-aos="fade-left"
          >
            <div className={styles.tabs}>
              <div className={"d-flex flex-wrap" + " " + styles.top}>
                <div className="col-12 col-lg-12 col-md-6">
                  <h5>Mới nhất</h5>
                  <span>Không có sản phẩm nào</span>
                </div>
                <div className="col-12 col-lg-12 col-md-6">
                  <h5>Tìm kiếm</h5>
                  <div className="input-position">
                    <div className="icon">
                      <i className="fa-regular fa-magnifying-glass"></i>
                    </div>
                    <input type="text" placeholder="Tìm sản phẩm ..." />
                  </div>
                </div>
              </div>
              <div className={"d-flex flex-wrap" + " " + styles.center}>
                <div className="col-12 col-lg-12 col-md-6">
                  <h5>Loại sản phẩm</h5>
                  <ul>
                    <li>Phụ kiện (1)</li>
                    <li>Trang phục (1)</li>
                    <li>Bóng Golf (1)</li>
                    <li>Combo Golf (2)</li>
                    <li>Gậy Golf (4)</li>
                  </ul>
                </div>
                <div className="col-12 col-lg-12 col-md-6">
                  <h5>Lọc sản phẩm</h5>
                  <Slider
                    progress
                    value={value}
                    tooltip={false}
                    onChange={(value) => {
                      setValue(value);
                    }}
                  />
                  <span>Giá: 500.000 - 2.000.000 VND</span>
                  <div className="button justify-content-start">
                    <button>Lọc</button>
                  </div>
                </div>
              </div>
              <div className={"d-flex flex-wrap" + " " + styles.bottom}>
                <div className="col-12 col-lg-12 col-md-6">
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
      </div>
    </div>
  );
}

export default ProShop;
