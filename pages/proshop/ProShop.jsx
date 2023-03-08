import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProshopData } from "../../store/redux/ProshopReducer/proshop.action";
import ProshopAPI from "../../store/redux/ProshopReducer/proshop.api";
import { usePagination } from "../../utils/usePagination";
import Banner from "./banner/banner";
import Left from "./Left/left";
import styles from "./ProShop.module.scss";
import Right from "./Right/right";
function ProShop(props) {
  const [hiddenFilter, setHiddenFilter] = useState(false);
  const [proshopData, setProshopData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!proshopData) {
      setHiddenFilter(true);
    } else {
      setHiddenFilter(false);
    }
  }, [proshopData]);
  const dispatch = useDispatch();
  const cate = Cookies.get("Pro_DM");
  const page = Cookies.get("page_shop");
  const name = Cookies.get("name");
  const gender = Cookies.get("gender");
  const size = Cookies.get("size");
  const brand = Cookies.get("brand");
  const price_min = Cookies.get("price_min");
  const price_max = Cookies.get("price_max");
  const sortType = Cookies.get("sort");
  const incress = Cookies.get("incress");
  const callFilter = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      ProshopAPI.getProshopAPI(
        page,
        cate,
        name,
        gender,
        size,
        brand,
        price_min,
        price_max,
        sortType,
        incress
      )
        .then((res) => setProshopData(res?.data))
        .then(() => setProshopData([]));
    }, 3000);
  };
  useEffect(() => {
    ProshopAPI.getProshopAPI(
      page,
      cate,
      name,
      gender,
      size,
      brand,
      price_min,
      price_max,
      sortType,
      incress
    )
      .then((rs) => setProshopData(rs?.data))
      .catch((err) => setProshopData([]));
  }, [
    cate,
    page,
    name,
    gender,
    size,
    brand,
    price_min,
    price_max,
    sortType,
    incress,
  ]);
  return (
    <div className={styles.proshop_page}>
      <Banner />
      <div className="container">
        <div
          className={"d-flex flex-wrap" + " " + styles.content}
          id="pro-shop"
        >
          <Left hiddenFilter={hiddenFilter} callFilter={callFilter} />
          <Right
            proshopData={proshopData}
            setProshopData={setProshopData}
            hiddenFilter={hiddenFilter}
            setHiddenFilter={setHiddenFilter}
            callFilter={callFilter}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default ProShop;
