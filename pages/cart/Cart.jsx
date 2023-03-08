import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Steps } from "rsuite";
import { getCartData } from "../../store/redux/CartReducer/cart.action";
import { getContentData } from "../../store/redux/LoadContentReducer/content.action";
import { getProvinceData } from "../../store/redux/ProviceReducer/province.action";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";

export const checkoutList = [
  {
    id: "check1",
    name: "Tiền mặt",
  },
  {
    id: "check2",
    name: "Ví điện tử",
  },
  {
    id: "check3",
    name: "Tài khoản ngân hàng",
  },
];

function Cart(props) {
  const [step, setStep] = React.useState(0);
  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };
  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.CartReducer.cartList);
  const { contents } = useSelector((state) => state.ContentReducer);
  useEffect(() => {
    dispatch(getCartData());
    dispatch(getProvinceData());
    dispatch(getContentData());
  }, []);
  const sectiontitle = contents.filter(
    (item) => item.category === "63bc4d8b39d2a23b06d92f3d"
  );
  const [checkoutMethod, setCheckoutMethod] = useState();
  const handleChangeCheckout = (e) => {
    setCheckoutMethod(e.target.value);
  };
  return (
    <div>
      <div className="container" id="cart-page">
        <div className="heading">
          <h2>{sectiontitle[0]?.title}</h2>
        </div>
        {cart && cart.length > 0 ? (
          <>
            <div className="process-step col-10">
              <Steps current={step}>
                <Steps.Item title="Giỏ hàng" />
                <Steps.Item title="Phương thức thanh toán" />
                <Steps.Item title="Đặt thành công" />
              </Steps>
            </div>
            {step === 0 && (
              <Step1
                cart={cart}
                checkoutMethod={checkoutMethod}
                onNext={onNext}
              />
            )}
            {step === 1 && (
              <Step2
                onNext={onNext}
                cart={cart}
                checkoutMethod={checkoutMethod}
                handleChangeCheckout={handleChangeCheckout}
              />
            )}
            {step === 2 && (
              <Step3 cart={cart} checkoutMethod={checkoutMethod} />
            )}
          </>
        ) : (
          <div className="empty-cart d-flex flex-column align-items-center">
            <h4 className="empty-text">Giỏi hàng của bạn hiện đang trống</h4>
            <button onClick={() => router.push("/proshop")}>
              Trở về mua hàng
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Cart;
