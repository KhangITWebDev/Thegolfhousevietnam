import React from "react";
import { Tooltip, Whisper } from "rsuite";
import styles from "./pagination.module.scss";

function Pagination({ data }) {
  return (
    <div className={styles.list}>
      <nav aria-label="Page navigation example">
        <ul className="pagination pagination-sm d-flex justify-content-center">
          <li
            className={styles.page_item}
            onClick={() => data.handleClick(1)}
            style={{
              display: data.currentPage > 1 ? "block" : "none",
            }}
          >
            <span className={styles.page_link} aria-label="First">
              <i className="fa-thin fa-chevrons-left"></i>
            </span>
          </li>
          <li
            className={styles.page_item}
            onClick={() => data.handlePrev()}
            style={{ display: data.currentPage === 1 ? "none" : "block" }}
          >
            <span className={styles.page_link} aria-label="Previous">
              <i className="fa-thin fa-chevron-left"></i>
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
            onClick={() => data.handleNext()}
            style={{
              display: data.currentPage === data.totalPages ? "none" : "block",
            }}
          >
            <span className={styles.page_link} aria-label="Next">
              <i className="fa-thin fa-chevron-right"></i>
            </span>
          </li>
          <li
            className={styles.page_item}
            onClick={() => data.handleClick(data.totalPages)}
            style={{
              display: data.currentPage === data.totalPages ? "none" : "block",
            }}
          >
            <span className={styles.page_link} aria-label="Cuôus">
              <i className="fa-thin fa-chevrons-right"></i>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
