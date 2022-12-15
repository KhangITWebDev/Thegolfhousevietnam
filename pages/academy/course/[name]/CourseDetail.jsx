import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Accordion } from "react-bootstrap";
import { CourseDetailFeautureData } from "../../../../utils/DataDemo/Academy/dataAcademyPage";
import styles from "./CourseDetail.module.scss";

function CourseDetail(props) {
  const router = useRouter();
  return (
    <div className={styles.course_detail_page}>
      <div className={[styles.banner, styles.full].join(" ")}>
        <Image
          alt="Banner"
          layout="fill"
          src="/images/Academy/Course/banner.png"
        />
        <div className={styles.content}>
          <h2>DETail COURSE</h2>
          <button>Sign Up</button>
        </div>
      </div>
      <div className={styles.golf_options}>
        <div className={styles.header}>
          <h5>GOLF OPTIONS OF MORE THAN 6000 STUDENTS</h5>
          <p>
            Are you looking for a quality and professional golf learning
            place?The GOLF course at LIO Golf Academy will help you with that!!
          </p>
        </div>
        <div className={styles.list}>
          <div className={styles.item}>
            <Image
              alt="Image"
              src="/images/Academy/Course/options1.png"
              layout="fill"
            />
          </div>
          <div className={styles.item}>
            <Image
              alt="Image"
              src="/images/Academy/Course/options2.png"
              layout="fill"
            />
          </div>
          <div className={styles.item}>
            <Image
              alt="Image"
              src="/images/Academy/Course/options3.png"
              layout="fill"
            />
          </div>
        </div>
        <div className={styles.desc}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry{"'"}s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry{"'"}s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className={styles.button + " " + "d-flex justify-content-center"}>
          <button onClick={() => router.push("/academy/academy-detail")}>
            Detail
          </button>
        </div>
      </div>
      <div className={[styles.information, styles.full].join(" ")}>
        <div className={styles.list}>
          <div className={styles.item}>
            <i className="fal fa-user-alt"></i>
            <h6>Subject</h6>
            <span>Adults, children</span>
          </div>
          <div className={styles.item}>
            <i className="fal fa-clock"></i>
            <h6>Time</h6>
            <span>
              2 sessions / week;
              <br /> 3 hours / session
            </span>
          </div>
          <div className={styles.item}>
            <i className="fal fa-calendar-alt"></i>
            <h6>Sessions</h6>
            <span>
              16 sessions / semester <br /> Total 3 semesters (2 months/term)
            </span>
          </div>
          <div className={styles.item}>
            <i className="far fa-graduation-cap"></i>
            <h6>Students</h6>
            <span>10-15 students/class group</span>
          </div>
        </div>
        <div className={styles.button + " " + "d-flex justify-content-center"}>
          <button onClick={() => router.push("/academy/sign-up")}>
            Sign Up
          </button>
        </div>
      </div>
      <div className={styles.personalize}>
        <div className={styles.header}>
          <h5>PERSONALIZE YOUR LEARNING PATH</h5>
          <p>
            The roadmap is personalized according to the student{"'"}s physical
            condition, training priorities and goals.
          </p>
        </div>
        <div className={styles.list + " " + "d-flex"}>
          <div className={"col-5" + " " + styles.image}>
            <Image
              alt="Image"
              src="/images/Academy/CourseDetail/personal.png"
              layout="fill"
            />
          </div>
          <div className={"col-7" + " " + styles.content}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry{"'"}s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <div className={[styles.feature, styles.full].join(" ") + " " + "main"}>
        <div className={styles.header}>
          <h5>FEATURE</h5>
        </div>
        <div className={styles.list}>
          {CourseDetailFeautureData.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.image}>
                <Image alt={item.title} src={item.image} layout="fill" />
              </div>
              <div>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          className={"col-8 m-auto" + " " + styles.study_program}
          id="study-program"
        >
          <div className={styles.header}>
            <h4>STUDY PROGRAM</h4>
          </div>
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>SEMESTER I</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>SEMESTER II</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>SEMESTER III</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div
            className={styles.button + " " + "d-flex justify-content-center"}
          >
            <button
              onClick={() => router.push("/academy/course/course-detail")}
            >
              More
            </button>
          </div>
        </div>
      </div>
      {/* <div className={styles.fee}>
        <div className="heading">
          <h2>Fee</h2>
          <div className="line" style={{ width: "100%" }}></div>
        </div>
        <div className={styles.fee_list}>
          {FeeData.map((item, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.image}>
                <Image alt="Fee" src={item.image} layout="fill" />
              </div>
              <div className="d-flex flex-column align-items-center">
                <Link href="/">
                  <a className={styles.title}>{item.title}</a>
                </Link>
                <p
                  className={styles.subTitle}
                  dangerouslySetInnerHTML={{ __html: item.subTitle }}
                ></p>
                <span className={styles.price}>{item.price}</span>
                <div
                  className={
                    styles.button + " " + "d-flex justify-content-center"
                  }
                >
                  <button>Sign Up</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.button + " " + "d-flex justify-content-center"}>
          <button>More</button>
        </div>
      </div> */}
    </div>
  );
}

export default CourseDetail;
