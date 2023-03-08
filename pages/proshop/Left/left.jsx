import $ from "jquery";
import React, { useState } from "react";
import FilterBrand from "./filterBrand";
import FilterCate from "./filterCate";
import FilterGender from "./filterGender";
import FilterPrice from "./filterPrice";
import FilterSize from "./filterSize";
import styles from "./left.module.scss";
function Left({ hiddenFilter, callFilter }) {
  $("input:checkbox").on("click", function () {
    var $box = $(this);
    if ($box.is(":checked")) {
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });
  return (
    <div
      className={"col-12 col-lg-3" + " " + styles.left}
      style={{
        display: hiddenFilter && "none",
      }}
    >
      <div
        className={styles.tabs}
        style={{
          height: 955,
        }}
      >
        <div className={"d-flex flex-wrap" + " " + styles.center}>
          <FilterCate callFilter={callFilter} />
          <FilterGender callFilter={callFilter} />
          <FilterSize callFilter={callFilter} />
          <FilterPrice callFilter={callFilter} />
          <FilterBrand callFilter={callFilter} />
        </div>
      </div>
    </div>
  );
}

export default Left;
