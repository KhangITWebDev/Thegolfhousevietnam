import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { NewsList } from "../../../utils/DataDemo/Home/dataHome";
import { NewsEventsData } from "../../../utils/DataDemo/News-Events/NewsEventsData";
import { removeAccents } from "../../../utils/function";
import styles from "./detail.module.scss";

function Detail(props) {
  const router = useRouter();
  const findIndex = NewsEventsData.findIndex(
    (x) => removeAccents(x.title) === router.query.title
  );

  return (
    <div className={styles.detail_page}>
      <div className={styles.banner}>
        <Image
          src="/images/NewsEvents/detail.png"
          alt="Image"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.content}>
          <div className="container h-100">
            <div className="d-flex h-100 justify-content-center align-items-center flex-column">
              <span className={styles.type}>Sự Kiện</span>
              <h1>Nhiều sân Golf hiện đại</h1>
              <div className={styles.tool + " " + "d-flex align-items-center"}>
                <div
                  className={styles.people + " " + "d-flex align-items-center"}
                >
                  <Image
                    alt="Iamge"
                    src="/images/NewsEvents/avatar.png"
                    width={18}
                    height={18}
                    objectFit="cover"
                  ></Image>
                  <h6>Ái Như</h6>
                </div>
                <i className="fa-sharp fa-solid fa-circle"></i>
                <span>1 giờ trước</span>
                <i className="fa-sharp fa-solid fa-circle"></i>
                <span>0 Bình luận</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.top + " " + "col-12 col-md-10 m-auto"}>
            <p>
              <strong
                style={{
                  fontSize: 50,
                }}
              >
                Q
              </strong>
              proin faucibus nec mauris a sodales, sed elementum mi tincidunt.
              Sed eget viverra egestas nisi in consequat. Fusce sodales augue a
              accumsan. Cras sollicitudin, ipsum eget blandit pulvinar. Integer
              tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
              vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
              consequat vitae, eleifend ac, enim.
            </p>
            <p>
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo.
            </p>
            <p>
              <strong>Competitions and tournaments</strong>
            </p>
            <p>
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt.
            </p>
          </div>
          <div className={styles.two_image + " " + "d-flex"}>
            <div className={"col-6" + " " + styles.image}>
              <Image
                alt="Image"
                src="/images/NewsEvents/detail_list1.png"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div className={"col-6" + " " + styles.image}>
              <Image
                alt="Image"
                src="/images/NewsEvents/detail_list2.png"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          </div>
          <div className="col-12 col-md-10 m-auto">
            <div className={styles.top}>
              <p>
                Ut perspiciatis, unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt, explicabo.
              </p>
              <p>
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt, explicabo.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
            <div className={styles.spc}>
              <span>“</span>
              <p>
                Curabitur varius eros et lacus rutrum consequat. Mauris
                sollicitudin enim condimentum, luctus justo non, molestie nisl.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
            <div>
              <p>
                <strong>Check and stock up these 20 items</strong>
              </p>
              <p>
                Check and stock up these 20 items Aenean et egestas nulla.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Fusce gravida, ligula non
                molestie tristique, justo elit blandit risus, blandit maximus
                augue magna accumsan ante. Duis id mi tristique, pulvinar neque
                at, lobortis tortor.
              </p>
            </div>
          </div>
          <div className={styles.image_bottom}>
            <div className={"col-12" + " " + styles.image}>
              <Image
                alt="Image"
                src="/images/NewsEvents/detail_list3.png"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
          </div>
          <div className="col-12 col-md-10 m-auto">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
            <p>
              Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies
              risus, vel rutrum erat commodo ut. Praesent finibus congue
              euismod. Nullam scelerisque massa vel augue placerat, a tempor sem
              egestas. Curabitur placerat finibus lacus.
            </p>
          </div>
          <div className="col-12 col-md-10 m-auto">
            <div className={styles.tag}>
              <button>Mới</button>
              <button>Nổi bật</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-10 m-auto">
          <div
            className={
              styles.bonus +
              " " +
              "d-flex justify-content-between align-items-center"
            }
          >
            <div>
              <i className="fa-light fa-heart"></i>
            </div>
            <div className={"d-flex" + " " + styles.right}>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-light fa-envelope"></i>
              <i className="fa-light fa-link"></i>
            </div>
          </div>
          <div className={styles.comment + " " + "d-flex flex-wrap"}>
            <div className={styles.avatar + " " + "col-12 col-md-2"}>
              <Image
                alt="Iamge"
                src="/images/NewsEvents/avatar2.png"
                width={70}
                height={70}
                objectFit="cover"
              ></Image>
            </div>
            <div className={styles.content + "col-12 col-md-10"}>
              <h5>Ái Như</h5>
              <span>NHÀ BÁO</span>
              <p>
                Curabitur varius eros et lacus rutrum consequat. Mauris
                sollicitudin enim condimentum, luctus justo non, molestie nisl.
              </p>
              <div
                className={styles.social + " " + "d-flex align-items-center"}
              >
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-dribbble"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
          <div className={styles.add_comment}>
            <form action="">
              <div className="form-group">
                <label htmlFor="">
                  <h3>Bình luận</h3>
                </label>
                <textarea
                  className="form-control"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="button justify-content-start">
                <button>Gửi</button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.news}>
          <div className="heading">
            <h2 className="text-center">Tin tức khác</h2>
          </div>
          <div
            className={
              "d-flex flex-wrap justify-content-center" + " " + styles.list
            }
          >
            {NewsList.map((item, index) => (
              <div
                key={index}
                className={"col-12 col-sm-6 col-lg-4" + " " + styles.item}
              >
                <div className={styles.info}>
                  <div className={styles.image}>
                    <Image
                      alt={"Image" + index + 1}
                      src={item.image}
                      layout="fill"
                      objectFit="cover"
                    ></Image>
                  </div>
                  <h5>{item.title}</h5>
                  <span>{item.time}</span>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="button">
            <button>Xem thêm</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
