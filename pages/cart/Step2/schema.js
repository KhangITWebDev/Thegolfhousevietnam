import * as yup from "yup";
const PHONE_REGEX = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
export const schema = yup.object().shape({
  phone: yup
    .string()
    .required("Vui lòng điền số điện thoại")
    .min(10, "Số điện thoại phải nhiều hơn 9 ký tự")
    .max(12, "Sô điện thoại phải ít hơn 12 ký tự")
    .matches(PHONE_REGEX, "Số điện thoại không hợp lệ"),
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng điền email"),
  city: yup
    .object()
    .shape({
      label: yup.string().required("Vui lòng chọn tỉnh/thành phố"),
      value: yup.string().required("Vui lòng chọn tỉnh/thành phố"),
    })
    .nullable()
    .required("Vui lòng chọn tỉnh/thành phố"),
  district: yup
    .object()
    .shape({
      label: yup.string().required("Vui lòng chọn quận/huyện"),
      value: yup.string().required("Vui lòng chọn quận/huyện"),
    })
    .nullable()
    .required("Vui lòng chọn quận/huyện"),
  ward: yup
    .object()
    .shape({
      label: yup.string().required("Vui lòng chọn phường/xã"),
      value: yup.string().required("Vui lòng chọn phường/xã"),
    })
    .nullable()
    .required("Vui lòng chọn phường/xã"),
  street: yup.string().required("Vui lòng điền tên đường"),
  no: yup.string().required("Vui lòng điền số nhà"),
});
export default function Validation() {
  return;
}
