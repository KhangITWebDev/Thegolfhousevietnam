import React from "react";
import { default as Pagination2 } from "../pagination/pagination";
import styles from "./right.module.scss";
import ProductList from "./productList";
import Top from "./top";

function Right({
  proshopData,
  callFilter,
  loading,
  hiddenFilter,
  setHiddenFilter,
}) {
  return (
    <div
      className={
        hiddenFilter ? "col-12" : "col-12 col-lg-9" + " " + styles.right
      }
      id="product"
    >
      <Top
        hiddenFilter={hiddenFilter}
        setHiddenFilter={setHiddenFilter}
        callFilter={callFilter}
      />
      <ProductList
        proshopData={proshopData}
        hiddenFilter={hiddenFilter}
        callFilter={callFilter}
        loading={loading}
      />
      <div className="d-flex justify-content-center">
        <Pagination2 callFilter={callFilter} />
      </div>
    </div>
  );
}

export default Right;
