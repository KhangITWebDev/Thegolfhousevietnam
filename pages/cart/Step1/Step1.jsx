import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { getCartData } from "../../../store/redux/CartReducer/cart.action";
import BoxTotal from "./boxTotal";
import TableCart from "./TableCart";

function Step1({ cart, checkoutMethod, onNext }) {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <>
      <TableCart cart={cart} />
      <div className="tool-cart">
        <div className="d-flex justify-content-end align-items-center">
          <button onClick={() => router.push("/proshop")}>Tiếp tục mua</button>
          <button onClick={() => dispatch(getCartData())}>Cập nhật giỏ</button>
        </div>
      </div>
      <BoxTotal cart={cart} checkoutMethod={checkoutMethod} onNext={onNext} />
    </>
  );
}

export default Step1;
