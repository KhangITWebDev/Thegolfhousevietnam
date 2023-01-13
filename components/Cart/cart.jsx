import React, { useEffect } from "react";
import styles from "./cart.module.scss";
import $ from "jquery";
import Image from "next/image";
import {
  getLocalStorage,
  LOCAL_STORAGE,
  setLocalStorage,
} from "../../utils/handleStorage";
import { useRouter } from "next/router";

function Cart({ handleCloseCart }) {
  const cart = getLocalStorage(LOCAL_STORAGE.CART);
  const router = useRouter();
  useEffect(() => {
    $("#close").on("click", () => {
      $(".cart-dialog").css({
        transform: "scaleY(0)",
      });
    });
    if (!cart) {
      setLocalStorage(LOCAL_STORAGE.CART, []);
    }
  }, [cart]);
  const initialValue = 0;
  // const total = cart.reduce(
  //   (accumulator, current) => accumulator + current.gia_ban_le * current.qty,
  //   initialValue
  // );
  const total = 1;
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
                {cart.map((item, index) => (
                  <div
                    className={"d-flex align-items-center" + " " + styles.have}
                    key={index}
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
                      <h4>{item.ten_vt}</h4>
                      <p>
                        {item.qty} x {item.gia_ban_le.toLocaleString("vi-VI")}{" "}
                        VND
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.total}>
                <h6>Tổng cộng: {total.toLocaleString("vi-VI")} VND</h6>
              </div>
              <div className={styles.tool + " " + "d-flex"}>
                <div className={"col-6" + " " + styles.btn}>
                  <button onClick={() => router.push("/cart")}>Giỏ Hàng</button>
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
              <p>Không có sản phẩm trong giỏ hàng</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
