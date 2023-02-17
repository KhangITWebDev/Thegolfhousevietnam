import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getContentData } from "../../store/redux/LoadContentReducer/content.action";
import styles from "./ContactUs.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { Loader } from "rsuite";
const PHONE_REGEX = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
const schema = yup.object().shape({
  from_name: yup.string().required("Vui lòng nhập họ tên"),
  from_phone: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .min(10, "Số điện thoại phải nhiều hơn 9 ký tự")
    .max(12, "Sô điện thoại phải ít hơn 12 ký tự")
    .matches(PHONE_REGEX, "Số điện thoại không hợp lệ"),
  from_email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
});
function ContactUs(props) {
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
  const dispatch = useDispatch();
  const { contents } = useSelector((state) => state.ContentReducer);
  useEffect(() => {
    dispatch(getContentData());
  }, []);
  const [loading, setLoading] = useState(false);
  const onSubmit = (data) => {
    setLoading(true);
    const formState = {
      name: data.from_name,
      phone: data.from_phone,
      email: data.from_email,
      note: data.note,
    };
    setTimeout(() => {
      emailjs
        .send(
          "service_ug5xzoq",
          "template_5tam0xu",
          formState,
          "n8Aci-Exs7CuotOPb"
        )
        .then(
          function (response) {
            if (response.status === 200) {
              setLoading(false);
              Swal.fire({
                title: "<h5>Đăng ký liên hệ thành công</h5>",
                text: `Cảm ơn anh/chị đã liên hệ với The Golf House Việt Nam.
                  Chuyên viên tư vấn của chúng tôi sẽ liên hệ tới anh/chị trong thời
                  gian sớm nhất.`,
                icon: "success",
                showCancelButton: false,
                confirmButtonText: "Đồng ý",
              });
            }
          },
          function (err) {
            Swal.fire({
              text: `Vui lòng nhập lại thông tin`,
              icon: "error",
              showCancelButton: false,
              confirmButtonText: "Đồng ý",
            });
          }
        );
    }, 2000);
  };
  const sectionContactList = contents.filter(
    (item) => item.category === "63bc447139d2a23b06d8e3c3"
  );
  const sectionTitlePage = contents.filter(
    (item) => item.category === "63bc466939d2a23b06d8f125"
  );
  const sectionTitleForm = contents.filter(
    (item) => item.category === "63db87a8df230754d23088ec"
  );
  const sectionBannerContact = contents.filter(
    (item) => item.category === "63bc470139d2a23b06d8f551"
  );
  const router = useRouter();
  return (
    <div className={styles.contact_page}>
      <div className="heading" data-aos="fade-down">
        <h2 className={styles.title_page}>{sectionTitlePage[0]?.title}</h2>
      </div>
      <div className={styles.training} id="contact">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center">
            {sectionContactList.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="item col-12 col-sm-6 col-lg-4"
                data-aos="fade-right"
              >
                <div
                  className="content h-100 d-flex flex-column align-items-center"
                  onClick={() => {
                    if (item.show_buton) {
                      if (item.open_page) {
                        window.open(item.url_button);
                      } else {
                        router.push(item.url_button);
                      }
                    } else {
                    }
                  }}
                >
                  <div
                    className="image"
                    // data-aos={
                    //   index === 0
                    //     ? "fade-right"
                    //     : index === 1
                    //     ? "fade-down"
                    //     : "fade-left"
                    // }
                  >
                    <Image
                      alt="item 1"
                      loader={({ src }) =>
                        `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                      }
                      src={item.images[item.images.length - 1].source}
                      width={85}
                      height={85}
                      objectFit="cover"
                    />
                  </div>
                  <div className="info d-flex flex-column align-items-center">
                    <h5
                      className="text-center"
                      // data-aos={
                      //   index === 0
                      //     ? "fade-right"
                      //     : index === 1
                      //     ? "fade-up"
                      //     : "fade-left"
                      // }
                    >
                      {item.title}
                    </h5>
                    <div
                      // data-aos={
                      //   index === 0
                      //     ? "fade-right"
                      //     : index === 1
                      //     ? "fade-up"
                      //     : "fade-left"
                      // }
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.form}>
        <div className="d-flex flex-wrap" data-aos="fade-right">
          <div
            className={"col-12 col-lg-6" + " " + styles.left}
            data-aos="fade-right"
          >
            <Image
              alt="map"
              loader={({ src }) =>
                `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
              }
              src={
                sectionTitleForm[0]?.images[
                  sectionTitleForm[0]?.images.length - 1
                ]?.source
              }
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            className={"col-12 col-lg-6" + " " + styles.right}
            data-aos="fade-right"
          >
            <div>
              <div className="heading align-items-start w-100">
                <span>{sectionTitleForm[0]?.sub_title}</span>
                <h2 className={styles.title_page}>
                  {sectionTitleForm[0]?.title}
                </h2>
              </div>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="" className="form-label">
                    Họ tên
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("from_name")}
                    placeholder="Họ tên"
                    autoFocus={true}
                  />
                  {errors?.from_name && (
                    <Alert variant="danger">{errors?.from_name?.message}</Alert>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("from_email")}
                    placeholder="Email"
                  />
                  {errors?.from_email && (
                    <Alert variant="danger">
                      {errors?.from_email?.message}
                    </Alert>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="" className="form-label">
                    Điện Thoại
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("from_phone")}
                    placeholder="Điện thoại"
                  />
                  {errors?.from_phone && (
                    <Alert variant="danger">
                      {errors?.from_phone?.message}
                    </Alert>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="" className="form-label">
                    Ghi chú
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    {...register("note")}
                    placeholder="Ghi chú"
                  ></textarea>
                </div>
                <div className="button">
                  <button>
                    {loading ? <Loader content="Đang Gửi" /> : "Gửi"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
