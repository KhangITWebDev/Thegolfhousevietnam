import React from "react";
import styles from "./pagination.module.scss";

function Pagination({ data }) {
  return (
    <div className={styles.list}>
      <nav aria-label="Page navigation example">
        <ul className="pagination pagination-sm d-flex justify-content-center">
          <li
            className={styles.page_item}
            onClick={() => data.handlePrev()}
            style={{ display: data.currentPage === 1 ? "none" : "block" }}
          >
            <span className={styles.page_link} aria-label="Previous">
              <i className="fa-light fa-arrow-left"></i>
            </span>
          </li>
          {data.renderPages.map((num) => (
            <li
              className={styles.page_item}
              key={num}
              id={num}
              onClick={() => data.handleClick(Number(num))}
            >
              <span
                className={
                  data.currentPage === Number(num)
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
            key={data.totalPages}
            id={data.totalPages}
            style={{
              paddingLeft:
                data.totalPages <= 4 ||
                data.currentPage === data.totalPages - 2 ||
                data.currentPage === data.totalPages - 1 ||
                data.currentPage === data.totalPages
                  ? 0
                  : 10,
            }}
          >
            <span
              className={
                data.totalPages <= 4 ||
                data.currentPage === data.totalPages - 2 ||
                data.currentPage === data.totalPages - 1 ||
                data.currentPage === data.totalPages
                  ? [styles.page_link, styles.dots].join(" ")
                  : [styles.page_link, styles.dots_show].join(" ")
              }
            >
              <i className="fal fa-ellipsis-h"></i>
            </span>
          </li>
          <li
            className={styles.page_item}
            onClick={() => data.handleNext()}
            style={{
              display: data.currentPage === data.totalPages ? "none" : "block",
            }}
          >
            <span className={styles.page_link} aria-label="Next">
              <i className="fa-light fa-arrow-right"></i>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
