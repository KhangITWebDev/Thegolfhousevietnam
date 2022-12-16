import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Alert } from "react-bootstrap";
import { Button, Loader, Modal, Placeholder } from "rsuite";
import {
  CourseData,
  LocationData,
} from "../../../utils/DataDemo/Academy/dataAcademyPage";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Course.module.scss";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { getLocalStorage, LOCAL_STORAGE } from "../../../utils/handleStorage";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsersData } from "../../../store/redux/DemoReducer/demo.action";

function Course(props) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = React.useState(0);
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("This email is not valid")
      .required("Email is required"),
    phone: yup.string().required("Password is required"),
  });
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const listUser = useSelector((state) => state.DemoReducer.usersList) || [];
  useEffect(() => {
    dispatch(getUsersData());
  }, [dispatch]);
  const findIndexEmail = listUser.findIndex((x) => x.email === watch("email"));
  const formatPhone =
    watch("phone")?.length > 0 && watch("phone")?.indexOf("84") === 0
      ? watch("phone")?.replace("84", "0")
      : watch("phone")?.indexOf("+84") === 0
      ? watch("phone")?.replace("+84", "0")
      : watch("phone");
  const findPhone = listUser[findIndexEmail]?.phone === formatPhone;
  const onSubmit = (data) => {
    if (findIndexEmail >= 0 && findPhone) {
      let timerInterval;
      Swal.fire({
        icon: "success",
        title: "Success",
        html: "Login success! Plase await <span></span>s",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("span");
          timerInterval = setInterval(() => {
            b.textContent = Math.floor(Swal.getTimerLeft() / 1000);
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
          Cookies.set("user-login", JSON.stringify(data));
          router.push("/pricing");
        },
      });
      reset({
        email: "",
        phone: "",
      });
    } else {
      Swal.fire({
        title: "Fail",
        icon: "error",
        text: "Plase check your email or phone",
        focusConfirm: false,
        confirmButtonColor: "#0B2B20",
        confirmButtonText: "Ok",
      });
    }
  };
  const userLogin = JSON.parse(Cookies.get(LOCAL_STORAGE.USER_LOGIN) || "{}");
  const handleEntered = () => {
    setTimeout(() => setRows(80), 2000);
  };
  const handleOpen = () => {
    if (userLogin.email && userLogin.phone) {
      router.push("/pricing");
    } else {
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);
  return (
    <div className={styles.course_page}>
      <div className={[styles.banner, styles.full].join(" ")}>
        <Image
          alt="Banner"
          layout="fill"
          src="/images/Academy/Course/banner.png"
        />
        <div className={styles.content}>
          <div
            className="container m-auto d-flex 
          flex-column align-items-center"
          >
            <h2 className="text-center">KHOÁ HỌC GOLF</h2>
            <button onClick={() => router.push("/academy/sign-up")}>
              ĐĂNG KÝ
            </button>
          </div>
        </div>
      </div>
      <div className={styles.golf_options + " " + "container"}>
        <div className={styles.header}>
          <div className="heading">
            <h2>HỌC GOLF BÀI BẢN CÙNG CHUYÊN GIA</h2>
            <div className="line" style={{ width: "40%" }}></div>
          </div>
          <p style={{ marginTop: 20 }}>
            Dù bạn là người mới bắt đầu tìm hiểu, hay người chơi Golf muốn nâng
            cao trình độ. The Golf House luôn có lộ trình phù hợp cho bạn!
          </p>
        </div>
        <div
          className={
            styles.list + " " + "d-flex flex-wrap justify-content-center"
          }
        >
          <div className={"col-6 col-md-4" + " " + styles.item}>
            <div className={styles.image}>
              <Image
                alt="Image"
                src="/images/Academy/Course/options1.png"
                layout="fill"
              />
            </div>
          </div>
          <div className={"col-6 col-md-4" + " " + styles.item}>
            <div className={styles.image}>
              <Image
                alt="Image"
                src="/images/Academy/Course/options2.png"
                layout="fill"
              />
            </div>
          </div>
          <div className={"col-6 col-md-4" + " " + styles.item}>
            <div className={styles.image}>
              <Image
                alt="Image"
                src="/images/Academy/Course/options3.png"
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div className={styles.desc}>
          <p>
            Học viện The Golf House Việt Nam (TGH) được thành lập vào tháng 3
            năm 2022 với sứ mệnh mang lại giá trị cho những người đam mê Golf và
            xây dựng cộng đồng Golfer Việt Nam. TGH cung cấp chương trình giảng
            dạy bài bản theo tiêu chuẩn PGA, đa dạng các gói học phục vụ nhu cầu
            của học viên theo từng giai đoạn, dù là người mới chơi hay người
            chơi golf muốn nâng cao kỹ năng của mình.Sau khóa học, học viên tự
            tin bước ra sân khi được trang bị đầy đủ các yếu tố về kỹ thuật, văn
            hóa golf và luật chơi.Trang thiết bị hiện đại ứng dụng công nghệ
            tiến tiến như hệ thống Sky track, máy phân tích kỹ thuật Dr.Swing
            phân tích từng động tác với thông số chính xác, phục vụ việc rèn
            luyện kỹ thuật trong nhà với sự hướng dẫn tận tình của huấn luyện
            viên quốc tế giàu kinh nghiệm giảng dạy và chơi GolfTGH hợp tác với
            hệ thống sân golf và resort trải rộng trên cả nước, cung cấp những
            buổi ra sân thực tế với nhiều dạng địa hình sân, nâng cao thực chiến
            và sự tự tin của học viên. Không chỉ đào tạo chuyên môn, TGH chú
            trọng phát triển cộng đồng khi trở thành đối tác chiến lược của các
            Hiệp hội Golf tại Việt Nam, phối hợp đăng cai tổ chức các Giải đấu
            như HUBA Golf của Hiệp hội Doanh nhân TP Hồ Chí Minh, Giải Best of
            the Best,...Tại The Golf House, việc kiến tạo môi trường giúp việc
            học tập và chơi golf trở nên đơn giản và hiệu quả nhất luôn là ưu
            tiên hàng đầu của chúng tôi. TGH tập trung xây dựng chuỗi các dịch
            vụ đa dạng bao gồm Học viện - Pro shop - Hair, Nail & Spa - Golf 3D
            - VIP Lounge trong cùng một địa điểm. Giúp người học và chơi Golf
            tận dụng thời gian dành cho môn thể thao mình yêu thích một cách tối
            ưu nhất: vừa nâng cao kỹ năng golf, vừa thư giãn, vừa giao lưu với
            những người chung niềm đam mê.Với khẩu hiệu “Working on a new you”,
            The Golf House Việt Nam hỗ trợ học viên - những người yêu Golf trở
            thành phiên bản tốt hơn của bản thân với lối sống tích cực và năng
            động.
          </p>
        </div>
        {/* <div className="d-flex justify-content-center button">
          <button onClick={() => router.push("/academy/academy-detail")}>
            Detail
          </button>
        </div> */}
      </div>
      <div className={styles.fee}>
        <div className="container">
          <div className="heading">
            <h2 className="text-white text-center fw-bold">
              THÔNG TIN KHOÁ HỌC
            </h2>
            <div className="line" style={{ width: "50%" }}></div>
          </div>
          <p className="text-white">
            TGH cung cấp chương trình giảng dạy bài bản theo tiêu chuẩn PGA, đa
            dạng các gói học phục vụ nhu cầu của học viên theo từng giai đoạn,
            dù là người mới chơi hay người chơi golf muốn nâng cao kỹ năng của
            mình. <br /> Sau khóa học, học viên tự tin bước ra sân khi được
            trang bị đầy đủ các yếu tố về kỹ thuật, văn hóa golf và luật chơi.
          </p>
          <div className="d-flex justify-content-center">
            <button onClick={handleOpen}>Nhận báo giá</button>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            onEntered={handleEntered}
            onExited={() => {
              setRows(0);
            }}
          >
            <Modal.Header>
              <Modal.Title>Login Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {rows ? (
                <>
                  <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <input
                      type="text"
                      placeholder="Email"
                      {...register("email")}
                    />
                    {errors?.email && (
                      <Alert variant="danger">{errors?.email?.message}</Alert>
                    )}
                    <input
                      type="text"
                      placeholder="Phone"
                      {...register("phone")}
                    />
                    {errors?.phone && (
                      <Alert variant="danger">{errors?.phone?.message}</Alert>
                    )}
                  </form>
                  <div className="rs-custom-button d-flex justify-content-end">
                    <button onClick={handleSubmit(onSubmit)}>Sign In</button>
                    <button onClick={handleClose}>Cancle</button>
                  </div>
                </>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <Loader size="md" />
                </div>
              )}
            </Modal.Body>
          </Modal>
          <div className={"d-flex flex-wrap" + " " + styles.list}>
            {CourseData.map((item, index) => (
              <div
                key={index}
                className={
                  "col-12 col-lg-6 d-flex flex-wrap-reverse" + " " + styles.item
                }
              >
                <div className={"col-12 col-sm-6" + " " + styles.info}>
                  <div>
                    <hr />
                    <span
                      style={{
                        background:
                          item.cate === "Khoá người lớn"
                            ? "#0b2b20"
                            : item.cate === "Khoá trẻ em"
                            ? "#F8AB0C"
                            : "#C22300",
                      }}
                    >
                      {item.cate}
                    </span>
                    <h3>{item.title}</h3>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                      className={styles.desc}
                    ></div>
                  </div>
                  <div className="mt-auto">
                    <button>Đăng ký ngay</button>
                  </div>
                </div>
                <div className={"col-12 col-sm-6" + " " + styles.image}>
                  <Image alt={item.title} src={item.image} layout="fill" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.location + " " + "container"}>
        <div className="heading">
          <h2>VỊ TRÍ</h2>
          <div className="line" style={{ width: "100%" }}></div>
        </div>
        <div
          className={
            "d-flex flex-wrap justify-content-between justify-content-md-center" +
            " " +
            styles.list
          }
        >
          {LocationData.map((item, index) => (
            <div
              className={"col-12 col-lg-4 col-md-6" + " " + styles.item}
              key={index}
            >
              <div
                className={styles.info}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div className={styles.image}>
                  <Image alt="Fee" src={item.image} layout="fill" />
                </div>
                <div className={styles.top}>
                  <Link href="/">
                    <a className={styles.title}>{item.title}</a>
                  </Link>
                  <div
                    className={styles.subTitle}
                    dangerouslySetInnerHTML={{ __html: item.subTitle }}
                  ></div>
                </div>
                <div className="mt-auto">
                  <div className="button d-flex justify-content-center">
                    <button>Vị trí</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.coach + " " + "container"}>
        <div className="heading">
          <h2>ĐỘI NGŨ HUẤN LUYỆN</h2>
          <div className="line" style={{ width: "25%" }}></div>
        </div>
        <div
          className={
            "d-flex flex-wrap flex-column-reverse flex-lg-row" +
            " " +
            styles.top
          }
        >
          <div className={"col-12 col-lg-8" + " " + styles.content}>
            <h3>
              TEAM OF PROFESSIONAL COACHES
              <br />
              <span>LED BY THE HEAD COACH OF VIETNAM NATIONAL GOLF TEAM</span>
            </h3>
            <h4>NGUYEN GIA BAO</h4>
            <h5>Founder of | Head coaches</h5>
            <p>
              + Coach Nguyen Thai Duong is the head coach leading the Vietnam
              National Golf team to attend the SEA Games 2022.
            </p>
            <p>
              + More than 20 years of experience competing in Gold in many
              countries
            </p>
            <p>
              + Achieved countless awards: Southeast Asian Youth Championship
              2005, Australian Open Youth Championship 2007, National Fighting
              Championship 2010...{" "}
            </p>
            <p>
              + As the person who directly built the entire curriculum of based
              on international golf textbooks, it has been optimized to suit the
              physical condition and physique of Vietnamese people.
            </p>
            <p>+ Responsible for the quality of every course.</p>
          </div>
          <div className="col-12 col-lg-4">
            <div className={styles.image}>
              <Image
                alt="Coach"
                src="/images/Academy/Course/coach.png"
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div
          className={
            styles.coach_list +
            " " +
            "d-flex flex-wrap justify-content-between justify-content-md-center"
          }
        >
          <div className={styles.item + " " + "col-12 col-lg-4 col-md-6"}>
            <div className={styles.image}>
              <Image
                alt="Coach"
                src="/images/Academy/Course/coach1.png"
                layout="fill"
              />
            </div>
            <Link href="/">
              <a className={styles.name}>
                Name <br /> <span>Coach 1</span>
              </a>
            </Link>
          </div>
          <div className={styles.item + " " + "col-12 col-lg-4 col-md-6"}>
            <div className={styles.image}>
              <Image
                alt="Coach"
                src="/images/Academy/Course/coach2.png"
                layout="fill"
              />
            </div>
            <Link href="/">
              <a className={styles.name}>
                Name <br /> <span>Coach 2</span>
              </a>
            </Link>
          </div>
          <div className={styles.item + " " + "col-12 col-lg-4 col-md-6"}>
            <div className={styles.image}>
              <Image
                alt="Coach"
                src="/images/Academy/Course/coach3.png"
                layout="fill"
              />
            </div>
            <Link href="/">
              <a className={styles.name}>
                Name <br /> <span>Coach 3</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.contact + " " + "container"}>
        <div className="heading">
          <h2>LIÊN HỆ</h2>
          <div className="line" style={{ width: "80%" }}></div>
        </div>
        <div className={"col-12 col-md-10 col-lg-6 m-auto" + " " + styles.form}>
          <form action="">
            <input type="text" placeholder="Họ tên" />
            <input type="text" placeholder="Số điện thoại" />
            <input type="text" placeholder="Email" />
            <textarea type="" rows={5} placeholder="Ghi chú" />
            <div className="button d-flex justify-content-center">
              <button>Gửi</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Course;
