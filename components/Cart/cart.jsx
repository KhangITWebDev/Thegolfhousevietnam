import React, { useEffect } from "react";
import styles from "./cart.module.scss";
import $ from "jquery";
import Image from "next/image";

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
            <div>
              <div className={styles.product}>
                <div
                  className={"d-flex align-items-center" + " " + styles.have}
                >
                  <div className="col-4">
                    <Image
                      width={150}
                      height={150}
                      objectFit="cover"
                      src="/images/Home/Shop/shop1.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.content}>
                    <h4>Gậy Golf nam</h4>
                    <p>1 x 1.000.000 VND</p>
                  </div>
                </div>
                <div
                  className={"d-flex align-items-center" + " " + styles.have}
                >
                  <div className="col-4">
                    <Image
                      width={150}
                      height={150}
                      objectFit="cover"
                      src="/images/Home/Shop/shop1.png"
                      alt=""
                    />
                  </div>
                  <div className={styles.content}>
                    <h4>Gậy Golf nam</h4>
                    <p>1 x 1.000.000 VND</p>
                  </div>
                </div>
              </div>
              <div className={styles.total}>
                <h6>Tổng cộng: 1.000.000 VND</h6>
              </div>
              <div className={styles.tool + " " + "d-flex"}>
                <div className={"col-6" + " " + styles.btn}>
                  <button>Giỏ Hàng</button>
                </div>
                <divv className={"col-6" + " " + styles.btn}>
                  <button>Thanh Toán</button>
                </divv>
              </div>
            </div>
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
