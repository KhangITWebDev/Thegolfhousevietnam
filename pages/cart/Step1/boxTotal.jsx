import React, { useState } from "react";
import ModalAddress from "../../../components/Modal/ModalAddress";
import ModalAddressDeliver from "../../../components/Modal/ModalAddressDeliver";
import { getLocalStorage, LOCAL_STORAGE } from "../../../utils/handleStorage";

function BoxTotal({ cart, checkoutMethod, onNext }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const initialValue = 0;
  const total = cart.reduce(
    (accumulator, current) =>
      accumulator + current.gia_ban_le * current.sl_xuat,
    initialValue
  );
  return (
    <div className="box-total d-flex justify-content-end">
      <div className="col-6">
        <h5 className="title">Tổng giỏ hàng</h5>
        <div className="content">
          <div className="item d-flex">
            <div className="col-4 name">
              <h3>Địa chỉ</h3>
            </div>
            <div className="col-8 detail">
              <div className="d-flex flex-column">
                <span className="add-address" onClick={handleOpen}>
                  Thêm địa chỉ
                </span>
              </div>
            </div>
          </div>
          {open && (
            <ModalAddress
              handleClose={handleClose}
              checkoutMethod={checkoutMethod}
            />
          )}
          <div className="item d-flex">
            <div className="col-4 name">
              <h3>Tổng cộng</h3>
            </div>
            <div className="col-8 detail">
              <h3>{total.toLocaleString("vi-VI")} VND</h3>
            </div>
          </div>
        </div>
        <div className="w-100 button">
          <button
            className="w-100"
            onClick={() => {
              onNext();
            }}
          >
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
}

export default BoxTotal;
