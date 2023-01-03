import React, { useEffect } from "react";
import styles from "./cart.module.scss";
import $ from "jquery";

function Cart({ handleCloseCart, cart }) {
  useEffect(() => {
    $("#close").on("click", () => {
      $(".cart-dialog").css({
        transform: "scaleY(0)",
      });
    });
  }, []);
  return (
    <div
      className={styles.subMenuCart + " " + "cart-dialog"}
      // style={{ display: show ? "block" : "none" }}
      // onClick={handleCloseCart}
      style={{ transform: "scaleY(0)" }}
    >
      <div
        className={
          styles.subMenuCart_child +
          " " +
          "d-flex justify-content-between flex-column sub-child"
        }
        data-aos="fade-down"
      >
        <div className="h-100 d-flex flex-column">
          <div className="d-flex justify-content-end">
            <button className={styles.close} id="close">
              {" "}
              <i className="fa-light fa-xmark"></i>
            </button>
          </div>
          {cart.length > 0 ? (
            ""
          ) : (
            <div
              className={
                "d-flex flex-column align-items-center justify-content-center h-100" +
                " " +
                styles.empty
              }
            >
              <i className="fa-light fa-bag-shopping"></i>
              <p>No products in cart</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
