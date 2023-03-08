import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Tooltip, Whisper } from "rsuite";
import fakeClientAxios from "../../../clientAxios/fakeClientAxios";
import ProshopAPI from "../../../store/redux/ProshopReducer/proshop.api";
import styles from "./pagination.module.scss";

function Pagination({ callFilter }) {
  const page = Cookies.get("page_shop");
  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const [firstPage, setFirstPage] = useState(0);
  const [lastPage, setLastPage] = useState(3);
  const [totalItem, setTotalItem] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const indexOfLastTodo = currentPage * 6;
  const indexOfFirstTodo = indexOfLastTodo - 6;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItem / 6); i++) {
    pageNumbers.push(i);
  }
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    Cookies.set("page_shop", currentPage - 1);
    callFilter();
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    Cookies.set("page_shop", currentPage + 1);
    callFilter();
  };
  const handleClick = (value) => {
    setCurrentPage(value);
    Cookies.set("page_shop", value);
    callFilter();
  };
  useEffect(() => {
    setTotalPages(Math.ceil(totalItem / 6));
    setCurrentPage(Number(page) || 1);
    if (currentPage === 1) {
      setFirstPage(0);
      setLastPage(3);
    } else if (currentPage === 2) {
      setFirstPage(0);
      setLastPage(3);
    } else if (currentPage === totalPages) {
      setFirstPage(totalPages - 3);
      setLastPage(totalPages);
    } else {
      setFirstPage(currentPage - 2);
      setLastPage(currentPage + 1);
    }
  }, [currentPage, totalPages, totalItem, page]);
  const renderPages = pageNumbers.slice(firstPage, lastPage);
  const cate = Cookies.get("Pro_DM") || "";
  const name = Cookies.get("name") || "";
  const gender = Cookies.get("gender") || "";
  const size = Cookies.get("size") || "";
  const brand = Cookies.get("brand") || "";
  const price_min = Cookies.get("price_min") || 100;
  const price_max = Cookies.get("price_max") || 1000000000;
  const sortType = Cookies.get("sort") || "date_created";
  const incress = Cookies.get("incress") || "-1";
  useEffect(() => {
    fakeClientAxios
      .get(
        `/dmvt?count=1&q={"is_service":{"$ne":"true"},"$and":[{"gia_ban_le":{"$gt":${price_min}}},{"gia_ban_le":{"$lt":${price_max}}},{"ten_vt": {"$regex":"${cate}", "$options":'i'}},{"ten_vt": {"$regex":"${size}", "$options":'i'}},{"ten_vt": {"$regex":"${name}", "$options":'i'}},{"ten_vt": {"$regex":"${brand}", "$options":'i'}},{"ten_vt": {"$regex":"${gender}", "$options":'i'}}]}&access_token=7d7fea98483f31af4ac3cdd9db2e4a93&sort={"${sortType}":"${incress}"}`
      )
      .then((res) => {
        setTotalItem(res.rows_number);
      })
      .catch((err) => console.log(err));
  }, [
    name,
    cate,
    gender,
    size,
    brand,
    price_min,
    price_max,
    sortType,
    incress,
  ]);
  return (
    <div className={styles.list}>
      <nav aria-label="Page navigation example">
        <ul className="pagination pagination-sm d-flex justify-content-center">
          <li
            className={styles.page_item}
            onClick={() => handleClick(1)}
            style={{
              display: currentPage > 1 ? "block" : "none",
            }}
          >
            <span className={styles.page_link} aria-label="First">
              <i className="fa-thin fa-chevrons-left"></i>
            </span>
          </li>
          <li
            className={styles.page_item}
            onClick={() => handlePrev()}
            style={{ display: currentPage === 1 ? "none" : "block" }}
          >
            <span className={styles.page_link} aria-label="Previous">
              <i className="fa-thin fa-chevron-left"></i>
            </span>
          </li>
          {renderPages.map((num) => (
            <li
              className={styles.page_item}
              key={num}
              id={num}
              onClick={() => handleClick(Number(num))}
            >
              <span
                className={
                  currentPage === Number(num)
                    ? [styles.page_link, styles.active].join(" ")
                    : styles.page_link
                }
              >
                {num}
              </span>
            </li>
          ))}
          <li
            className={styles.page_item}
            onClick={() => handleNext()}
            style={{
              display: currentPage === totalPages ? "none" : "block",
            }}
          >
            <span className={styles.page_link} aria-label="Next">
              <i className="fa-thin fa-chevron-right"></i>
            </span>
          </li>
          <li
            className={styles.page_item}
            onClick={() => handleClick(totalPages)}
            style={{
              display: currentPage === totalPages ? "none" : "block",
            }}
          >
            <span className={styles.page_link} aria-label="Cuối">
              <i className="fa-thin fa-chevrons-right"></i>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
