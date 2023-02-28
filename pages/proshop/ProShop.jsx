import { da } from "date-fns/locale";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select, { components } from "react-select";
import { Loader, RangeSlider } from "rsuite";
import Pagination from "../../components/pagination/pagination";
import { getBannerData } from "../../store/redux/Banner/banner.action";
import { getContentData } from "../../store/redux/LoadContentReducer/content.action";
import { getProshopData } from "../../store/redux/ProshopReducer/proshop.action";
import { removeAccents } from "../../utils/function";
import { usePagination } from "../../utils/usePagination";
import styles from "./ProShop.module.scss";
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: 18,
    color: state.isSelected ? "#fff" : "#000",
    cursor: "pointer",
    backgroundColor: state.isSelected ? "#00B577" : "transparent",
    zIndex: 3000,
    position: "relative",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#000",
    fontSize: 18,
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
    zIndex: 3000,
  }),
  container: (provided, state) => ({
    ...provided,
    width: 200,
    zIndex: 5000,
    "@media screen and (max-width: 576px)": {
      width: "100%",
    },
  }),
  input: (base, state) => ({
    ...base,
    color: "#000",
    fontSize: 18,
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
  const [value, setValue] = React.useState([0, 1]);
  const maxFilterPrice = 100000000;
  const minFilterPrice = 10000;
  const proshopData = useSelector((state) => state.ProshopReducer.proshopList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProshopData());
    dispatch(getBannerData());
    dispatch(getContentData());
  }, []);
  const { banners } = useSelector((state) => state.BannerReducer);
  const { contents } = useSelector((state) => state.ContentReducer);
  const bannerProshop = banners.filter((item) => item.danh_muc === "Proshop");
  const router = useRouter();
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
  const coast = proshopData.filter((x) => x.ten_vt?.includes("Áo"));
  const trousers = proshopData.filter((x) => x.ten_vt?.includes("Quần"));
  const skirt = proshopData.filter((x) => x.ten_vt?.includes("Váy"));
  const glove = proshopData.filter((x) => x.ten_vt?.includes("Găng tay"));
  const shose = proshopData.filter((x) => x.ten_vt?.includes("Giày"));
  const golfClubs = proshopData.filter((x) => x.ten_vt?.includes("Gậy"));
  const golfBall = proshopData.filter((x) => x.ten_nvt?.includes("Bóng"));
  const data = usePagination(proshopData, 6);
  const filter = (type) => {
    data.setCurrentPage(1);
    switch (type) {
      case "Váy": {
        data.setPerData(skirt);
        break;
      }
      case "Áo": {
        data.setPerData(coast);
        break;
      }
      case "Quần": {
        data.setPerData(trousers);
        break;
      }
      case "Gậy": {
        data.setPerData(golfClubs);
        break;
      }
      case "Găng tay": {
        data.setPerData(glove);
        break;
      }
      case "Giày": {
        data.setPerData(shose);
        break;
      }
      case "Bóng": {
        data.setPerData(golfBall);
        break;
      }
      default: {
        data.setPerData(proshopData);
        break;
      }
    }
  };
  const handleSearchInput = (e) => {
    const value = e.target.value;
    const dataSearch = proshopData.filter((x) =>
      removeAccents(x.ten_vt)
        .toLowerCase()
        .includes(removeAccents(value).toLowerCase())
    );
    if (value !== "") {
      data.setPerData(dataSearch);
      data.setCurrentPage(1);
    } else {
      data.setPerData(proshopData);
      data.setCurrentPage(1);
    }
  };
  const sort = (value) => {
    data.setCurrentPage(1);
    switch (value) {
      case "1": {
        const Newest = [...proshopData].sort(
          (a, b) => new Date(b.date_created) - new Date(a.date_created)
        );
        data.setPerData(Newest);
        break;
      }
      case "2": {
        const lostest = [...proshopData].sort(
          (a, b) => new Date(a.date_created) - new Date(b.date_created)
        );
        data.setPerData(lostest);
        break;
      }
      case "3": {
        const Newest = [...proshopData].sort(
          (a, b) => b.gia_ban_le - a.gia_ban_le
        );
        data.setPerData(Newest);
        break;
      }
      case "4": {
        const price = [...proshopData].sort(
          (a, b) => a.gia_ban_le - b.gia_ban_le
        );
        data.setPerData(price);
        break;
      }
      default:
        break;
    }
  };
  const sectiontitle = contents.filter(
    (item) => item.category === "63bc4b5739d2a23b06d91f9e"
  );
  const filterPrice = () => {
    let priceMin = maxFilterPrice * (value[0] / 100);
    let priceMax = maxFilterPrice * (value[1] / 100);
    const dataSearch = proshopData.filter(
      (x) => x.gia_ban_le >= priceMin && x.gia_ban_le <= priceMax
    );
    data.setPerData(dataSearch);
    data.setCurrentPage(1);
  };
  return (
    <div className={styles.proshop_page}>
      <div className="container" data-aos="fade-down">
        <div className="heading">
          <h2>{sectiontitle[0]?.title}</h2>
        </div>
      </div>
      <div className={styles.bannerv2} data-aos="fade-right">
        <Image
          loader={({ src }) =>
            `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
          }
          alt="Image 1"
          src={bannerProshop[0]?.hinh_anh}
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.bannerv2_content}>
          <div className="container h-100">
            <div className="d-flex h-100 justify-content-end align-items-center flex-column">
              {/* <div onClick={() => router.push(bannerProshop[0]?.link)}>
                <button className="btn-content">
                  {bannerProshop[0]?.action}
                </button>
              </div> */}
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
            className={"col-12 col-lg-8" + " " + styles.left}
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
                Hiển thị {data.currentDatas.length} trên {data.perData.length}{" "}
                kết quả
              </span>
              <div
                className="col-12 col-sm-6 d-flex justify-content-start justify-content-sm-end"
                data-aos="fade-left"
              >
                <Select
                  options={options}
                  styles={customStyles}
                  onChange={({ value }) => sort(value)}
                  defaultValue={options[0]}
                  components={{ DropdownIndicator }}
                />
              </div>
            </div>
            <div className={"d-flex flex-wrap" + " " + styles.product}>
              {proshopData.length <= 0 ? (
                <div className="d-flex m-auto">
                  <Loader size="md" content="Đang tải dữ liệu..." />
                </div>
              ) : (
                data.currentDatas.map((item, index) => (
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
                      onClick={() =>
                        router.push(`/proshop/${removeAccents(item.ten_vt)}`)
                      }
                    >
                      <div className={styles.image} style={{ zIndex: 1003 }}>
                        <Image
                          alt={"Image" + index + 1}
                          src="/images/Logo/Logo12.png"
                          width={300}
                          height={300}
                          objectFit="cover"
                        ></Image>
                      </div>
                      <h5>{item.ten_vt}</h5>
                      <p>{item.gia_ban_le.toLocaleString("vi-VI")} VND</p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="d-flex justify-content-center">
              <Pagination data={data} />
            </div>
          </div>
          <div
            className={"col-12 col-lg-4" + " " + styles.right}
            data-aos="fade-right"
          >
            <div className={styles.tabs}>
              <div className={"d-flex flex-wrap" + " " + styles.top}>
                <div className="col-12 col-lg-12 col-md-6">
                  <h5>Mới nhất</h5>
                  <span>Không có sản phẩm nào</span>
                </div>
                <div className="col-12 col-lg-12 col-md-6">
                  <h5>Tìm kiếm</h5>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="icon">
                        <i className="fa-regular fa-magnifying-glass"></i>
                      </div>
                      <input
                        type="text"
                        placeholder="Tìm sản phẩm ..."
                        className="form-control"
                        onChange={(e) => {
                          handleSearchInput(e);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"d-flex flex-wrap" + " " + styles.center}>
                <div className="col-12 col-lg-12 col-md-6">
                  <h5>Loại sản phẩm</h5>
                  <ul>
                    <li onClick={() => filter("Áo")}>Áo ({coast.length})</li>
                    <li onClick={() => filter("Quần")}>
                      Quần ({trousers.length})
                    </li>
                    <li onClick={() => filter("Váy")}>Váy ({skirt.length})</li>
                    <li onClick={() => filter("Giày")}>
                      Giày ({shose.length})
                    </li>
                    <li onClick={() => filter("Găng tay")}>
                      Găng tay ({glove.length})
                    </li>
                    <li onClick={() => filter("Bóng")}>
                      Bóng Golf ({golfBall.length})
                    </li>
                    <li onClick={() => filter("Gậy")}>
                      Gậy Golf ({golfClubs.length})
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-12 col-md-6">
                  <h5>Lọc sản phẩm</h5>
                  <RangeSlider
                    defaultValue={[10, 50]}
                    tooltip={false}
                    onChange={(value) => {
                      if (value[1] === 0) {
                        setValue([1, 2]);
                      } else {
                        setValue(value);
                      }
                    }}
                  />
                  <span>
                    Giá:{" "}
                    {value[0] === 0
                      ? minFilterPrice.toLocaleString("vi-VI")
                      : Math.floor(
                          maxFilterPrice * (value[0] / 100)
                        ).toLocaleString("vi-VI")}{" "}
                    -{" "}
                    {Math.floor(
                      maxFilterPrice * (value[1] / 100)
                    ).toLocaleString("vi-VI")}{" "}
                    VND
                  </span>
                  <div className="button justify-content-start">
                    <button onClick={() => filterPrice()}>Lọc</button>
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
