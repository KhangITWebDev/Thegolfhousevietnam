import React from "react";
import { convertDate } from "../../../utils/function";
import { checkoutList } from "../Cart";

function Step3({ cart, checkoutMethod }) {
  const initialValue = 0;
  const total = cart.reduce(
    (accumulator, current) =>
      accumulator + current.gia_ban_le * current.sl_xuat,
    initialValue
  );
  return (
    <div className="step3">
      <h4>Đơn hàng của bạn đã được nhận. Cảm ơn bạn đã đặt hàng</h4>
      <div className="d-flex list-top">
        <div className="col-6 d-flex left">
          <div className="col-4 item">
            <span className="title">Mã đơn hàng</span>
            <p>20584</p>
          </div>
          <div className="col-4 item">
            <span className="title">Ngày</span>
            <p>{convertDate(new Date()).getDateMonthYear1}</p>
          </div>
          <div className="col-4 item">
            <span className="title">Tổng</span>
            <p>{total.toLocaleString("VI-vi")} VND</p>
          </div>
        </div>
        <div className="col-6 right">
          <span className="title">Phương thức thanh toán</span>
          <p>{checkoutList.find((x) => x.id === checkoutMethod)?.name}</p>
        </div>
      </div>
      <h3>Chi tiết đơn hàng</h3>
      <div className="view-order">
        <div
          className="list d-flex flex-column"
          style={{
            height: cart.length === 1 ? 50 : 95,
          }}
        >
          {cart.map((item, index) => (
            <div
              className="list_item d-flex justify-content-between"
              key={index}
            >
              <div className="col-7">
                <h6>
                  {item.ten_vt} x {item.qty}
                </h6>
              </div>
              <div className="col-5">
                <h6
                  style={{
                    textAlign: "right",
                  }}
                >
                  {(item.gia_ban_le * item.qty).toLocaleString("vi-VI")} VND
                </h6>
              </div>
            </div>
          ))}
        </div>
        <div className="item">
          <h6>Địa chỉ giao hàng</h6>
          <h6>Quận 7 , Tp. Hồ Chí Minh</h6>
        </div>
        <div className="item">
          <h6>Phương thức thanh toán</h6>
          <h6> {checkoutList.find((x) => x.id === checkoutMethod)?.name}</h6>
        </div>
        <div className="item">
          <h6>Tổng giá</h6>
          <h6>{total.toLocaleString("VI-vi")} VND</h6>
        </div>
      </div>
    </div>
  );
}

export default Step3;
