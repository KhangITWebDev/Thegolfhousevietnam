import { yupResolver } from "@hookform/resolvers/yup";
import { React } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Form from "./form";
import Right from "./right";
import { schema } from "./schema";

function Step2({ cart, handleChangeCheckout, onNext, checkoutMethod }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    if (checkoutMethod) {
      console.log(data);
      onNext();
    } else {
      Swal.fire({
        title: "Lỗi",
        text: "Vui lòng chọn phương thức thanh toán",
        icon: "error",
        showCancelButton: false,
        confirmButtonText: "Đồng ý",
        allowOutsideClick: false,
      });
    }
  };
  return (
    <div className="d-flex step2">
      <div className="col-7 left">
        <h5>Chi tiết mua hàng</h5>
        <Form
          register={register}
          handleSubmit={handleSubmit}
          watch={watch}
          reset={reset}
          setValue={setValue}
          control={control}
          errors={errors}
        />
      </div>
      <Right
        handleChangeCheckout={handleChangeCheckout}
        cart={cart}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        onNext={onNext}
        checkoutMethod={checkoutMethod}
      />
    </div>
  );
}

export default Step2;
