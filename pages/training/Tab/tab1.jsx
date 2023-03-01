import React from "react";
import * as yup from "yup";
import { Tab, Tabs } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import SignUpClub from "../../../components/Modal/SignUpClub";
const PHONE_REGEX = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
const schema = yup.object().shape({
  from_name: yup.string().required("Vui lòng nhập họ tên"),
  from_phone: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .min(10, "Số điện thoại phải nhiều hơn 9 ký tự")
    .max(12, "Sô điện thoại phải ít hơn 12 ký tự")
    .matches(PHONE_REGEX, "Số điện thoại không hợp lệ"),
  from_club: yup
    .object()
    .shape({
      label: yup.string().required("Vui lòng chọn câu lạc bộ"),
      value: yup.string().required("Vui lòng chọn câu lạc bộ"),
    })
    .nullable()
    .required("Vui lòng chọn câu lạc bộ"),
  from_time: yup
    .object()
    .shape({
      label: yup.string().required("Vui lòng chọn thời gian"),
      value: yup.string().required("Vui lòng chọn thời gian"),
    })
    .nullable()
    .required("Vui lòng chọn thời gian"),
});

function Tab1({ item }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const onSubmit = (data) => console.log(data);
  return (
    <div id="course-content">
      <div className="wrap-section d-flex">
        <Tabs
          defaultActiveKey={item.type[0].name}
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          {item.type.map((x, y) => (
            <Tab eventKey={x.name} title={x.name} key={y}>
              <div>
                <p>
                  Thời gian tập luyện: <strong>{item.time}</strong>
                </p>
                <p>
                  Số buổi: <strong>{item.day}</strong>
                </p>
                <p>
                  Chi phí HLV VGA:
                  <strong>{x?.pirce?.vga?.toLocaleString("vi-VI")} VND</strong>
                </p>
                <p>
                  Chi phí HLV PGA:{" "}
                  <strong>{x?.pirce?.pga?.toLocaleString("vi-VI")} VND</strong>
                </p>
                <div className="button" onClick={handleOpen}>
                  <button>Đang ký ngay</button>
                </div>
                {open && (
                  <SignUpClub
                    errors={errors}
                    register={register}
                    onSubmit={onSubmit}
                    reset={reset}
                    watch={watch}
                    control={control}
                    handleSubmit={handleSubmit}
                    handleClose={handleClose}
                  />
                )}
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default Tab1;
