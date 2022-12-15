import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  AcademyDetailProshopData,
  FeeData,
} from "../../../utils/DataDemo/Academy/dataAcademyPage";
import styles from "./AcademyDetail.module.scss";

function AcademyDetail(props) {
  const router = useRouter();
  return (
    <div className={styles.course_page}>
      <div className={[styles.banner, styles.full].join(" ")}>
        <Image
          alt="Banner"
          layout="fill"
          src="/images/Academy/AcademyDetail/banner.png"
        />
        <div className={styles.content}>
          <h2>ACADEMY</h2>
          <button>Detail</button>
        </div>
      </div>
      <div className="container">
        <div className={styles.golf_options}>
          <div className={styles.header}>
            <h5>AREA</h5>
            <p>
              8.000 m
              <sub style={{ verticalAlign: "super", fontSize: 10 }}>2</sub>
            </p>
          </div>
          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.image}>
                <Image
                  alt="Image"
                  src="/images/Academy/AcademyDetail/area1.png"
                  layout="fill"
                />
              </div>
              <Link href="/">
                <a className={styles.title}>Image 1</a>
              </Link>
            </div>
            <div className={styles.item}>
              <div className={styles.image}>
                <Image
                  alt="Image"
                  src="/images/Academy/AcademyDetail/area2.png"
                  layout="fill"
                />
              </div>
              <Link href="/">
                <a className={styles.title}>Image 2</a>
              </Link>
            </div>
            <div className={styles.item}>
              <div className={styles.image}>
                <Image
                  alt="Image"
                  src="/images/Academy/AcademyDetail/area3.png"
                  layout="fill"
                />
              </div>
              <Link href="/">
                <a className={styles.title}>Image 3</a>
              </Link>
            </div>
          </div>
          <div className={styles.desc}>
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
              <br />
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
        <div className={styles.equipment}>
          <div className={styles.header}>
            <h5>EQUIPMENT</h5>
            <p>
              Are you looking for a quality and professional golf learning
              place?The GOLF course at LIO Golf Academy will help you with
              that!!
            </p>
          </div>
          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.image}>
                <Image
                  alt="Image"
                  src="/images/Academy/AcademyDetail/equipment1.png"
                  layout="fill"
                />
              </div>
              <Link href="/">
                <a className={styles.title}>Image 1</a>
              </Link>
            </div>
            <div className={styles.item}>
              <div className={styles.image}>
                <Image
                  alt="Image"
                  src="/images/Academy/AcademyDetail/equipment2.png"
                  layout="fill"
                />
              </div>
              <Link href="/">
                <a className={styles.title}>Image 2</a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.coach}>
          <div className={styles.header}>
            <h5>COACH</h5>
          </div>
          <div className={styles.coach_top}>
            <div className={styles.content}>
              <h3>
                TEAM OF PROFESSIONAL COACHES
                <br />
                <span>LED BY THE HEAD COACH OF VIETNAM NATIONAL GOLF TEAM</span>
              </h3>
              <h4>NGUYEN THAI DUONG</h4>
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
                + As the person who directly built the entire curriculum of
                based on international golf textbooks, it has been optimized to
                suit the physical condition and physique of Vietnamese people.
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
        <div className={styles.proshop}>
          <div className={styles.header}>
            <h5>PROSHOP</h5>
          </div>
          <div className={styles.list}>
            {AcademyDetailProshopData.map((item, index) => (
              <div className={styles.item} key={index}>
                <div className={styles.image}>
                  <Image alt={item.name} src={item.image} layout="fill" />
                </div>
                <div className={styles.content}>
                  <Link href="/">
                    <a className={styles.title}>{item.title}</a>
                  </Link>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
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
    </div>
  );
}

export default AcademyDetail;
