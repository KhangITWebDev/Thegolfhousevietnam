import Image from "next/image";
import React from "react";
import $ from "jquery";
import Swal from "sweetalert2";

function Right({
  handleChangeCheckout,
  cart,
  handleSubmit,
  onSubmit,
  checkoutMethod,
}) {
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
  const initialValue = 0;
  const total = cart.reduce(
    (accumulator, current) =>
      accumulator + current.gia_ban_le * current.sl_xuat,
    initialValue
  );
  return (
    <div className="col-5 right">
      <h5>Đơn hàng của bạn</h5>
      <div className="order">
        <div
          className="order_list d-flex flex-column"
          style={{
            height: cart.length === 1 ? 50 : 110,
          }}
        >
          {cart.map((item, index) => (
            <div
              className="order_item d-flex justify-content-between"
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
          <h6>Giao hàng đến</h6>
          <h6>Quận 7 ,Hồ chí Minh</h6>
        </div>
        <div className="item">
          <h6>Tổng giá</h6>
          <h6>{total.toLocaleString("vi-VI")} VND</h6>
        </div>
      </div>
      <h5>Phương thức thanh toán</h5>
      <div className="checkout">
        <label className="item">
          <input
            type="checkbox"
            name="checkout"
            id=""
            value="check1"
            onClick={handleChangeCheckout}
          />
          <span className="checkmark"></span>
          <div className="content">
            <h6>Thanh toán tiền mặt</h6>
            <p>Thanh toán khi nhận hàng</p>
          </div>
        </label>
        <label className="item">
          <input
            type="checkbox"
            name="checkout"
            id=""
            value="check2"
            onClick={handleChangeCheckout}
          />
          <span className="checkmark"></span>
          <div className="box-item">
            <div className="content">
              <h6>Ví điện tử</h6>
              <p>Quét mã QR</p>
            </div>
            <div className="image">
              <Image
                alt="Image momo"
                src="/images/Cart/momo.png"
                width={36}
                height={36}
                objectFit="cover"
              />
              <Image
                alt="Image momo"
                src="/images/Cart/zalo.png"
                width={36}
                height={36}
                objectFit="cover"
              />
              <Image
                alt="Image momo"
                src="/images/Cart/shopeepay.png"
                width={36}
                height={36}
                objectFit="cover"
              />
            </div>
          </div>
        </label>
        <label className="item">
          <input
            type="checkbox"
            name="checkout"
            id=""
            value="check3"
            onClick={handleChangeCheckout}
          />
          <span className="checkmark"></span>
          <div className="content">
            <h6>Tài khoản ngân hàng</h6>
            <p>Quét mã QR hoặc chuyển khoản đến tài khoản</p>
          </div>
        </label>
        <div className="button">
          <button onClick={handleSubmit(onSubmit)}>Đặt hàng</button>
        </div>
      </div>
    </div>
  );
}

export default Right;
