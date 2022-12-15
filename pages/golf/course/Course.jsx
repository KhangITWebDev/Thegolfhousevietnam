import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { LocationData } from "../../../utils/DataDemo/Academy/dataAcademyPage";
import styles from "./Course.module.scss";

function Course(props) {
  const router = useRouter();
  return (
    <div className={styles.course_page}>
      <div className={[styles.banner, styles.full].join(" ")}>
        <Image
          alt="Banner"
          layout="fill"
          src="/images/Academy/Course/banner.png"
        />
        <div className={styles.content}>
          <h2>COURSE GOLF</h2>
          <button onClick={() => router.push("/golf/sign-up")}>Sign Up</button>
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
          <button onClick={() => router.push("/academy/course/course-detail")}>
            Detail
          </button>
        </div>
      </div>
      <div className={styles.fee}>
        <div className="heading">
          <h2>Fee</h2>
          <div className="line" style={{ width: "100%" }}></div>
        </div>
        <div className={styles.fee_list}>
          <Image
            alt="Fee"
            layout="fill"
            src="/images/Academy/Course/fee.png"
          ></Image>
        </div>
        <div className={styles.button + " " + "d-flex justify-content-center"}>
          <button>More</button>
        </div>
      </div>
      <div className={styles.location}>
        <div className="heading">
          <h2>Location</h2>
          <div className="line" style={{ width: "80%" }}></div>
        </div>
        <div className={styles.location_list}>
          {LocationData.map((item, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.image}>
                <Image alt="Fee" src={item.image} layout="fill" />
              </div>
              <Link href="/">
                <a className={styles.title}>{item.title}</a>
              </Link>
              <p
                className={styles.subTitle}
                dangerouslySetInnerHTML={{ __html: item.subTitle }}
              ></p>
              <div
                className={
                  styles.button + " " + "d-flex justify-content-center"
                }
              >
                <button>Location</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.coach}>
        <div className="heading">
          <h2>COACH</h2>
          <div className="line" style={{ width: "80%" }}></div>
        </div>
        <div className={styles.coach_top}>
          <div className={styles.content}>
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
          <div className={styles.image}>
            <Image
              alt="Coach"
              src="/images/Academy/Course/coach.png"
              layout="fill"
            />
          </div>
        </div>
        <div className={styles.coach_list}>
          <div className={styles.item}>
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
          <div className={styles.item}>
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
          <div className={styles.item}>
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
      <div className={styles.contact}>
        <div className="heading">
          <h2>CONTACT</h2>
          <div className="line" style={{ width: "80%" }}></div>
        </div>
        <div className={"col-6 m-auto" + " " + styles.form}>
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Email" />
            <textarea type="" placeholder="Note" />
            <div
              className={styles.button + " " + "d-flex justify-content-center"}
            >
              <button>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Course;
