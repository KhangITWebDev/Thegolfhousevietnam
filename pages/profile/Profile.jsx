import Image from "next/image";
import React from "react";
import styles from "./Profile.module.scss";
import { Timeline } from "rsuite";
import CreditCardIcon from "@rsuite/icons/legacy/CreditCard";
import PlaneIcon from "@rsuite/icons/legacy/Plane";
import TruckIcon from "@rsuite/icons/legacy/Truck";
import UserIcon from "@rsuite/icons/legacy/User";
import CheckIcon from "@rsuite/icons/legacy/Check";

function Profile(props) {
  return (
    <div className={styles.profile_page}>
      <div className="container">
        <div className="heading">
          <h2>Profile</h2>
          <div
            className="line"
            style={{
              width: "70%",
            }}
          ></div>
        </div>
        <div className="m-auto col-12 col-md-6">
          <div className={styles.information}>
            <div className={styles.image}>
              <Image
                alt="Avatar"
                src="/images/Profile/avatar.png"
                layout="fill"
              />
            </div>
            <div className="d-flex flex-column align-items-center">
              <h4 className={styles.name}>NGUYỄN MAI THI</h4>
              <span className={styles.position}>CHIEF FINANCE OFFICER</span>
              <h6 className={styles.company}>Lio Holdings</h6>
              <div
                className={
                  styles.social_list + " " + "d-flex align-items-center"
                }
              >
                <Image
                  alt="Avatar"
                  src="/images/Profile/fb.png"
                  width={30}
                  height={30}
                />
                <Image
                  alt="Avatar"
                  src="/images/Profile/fb-m.png"
                  width={30}
                  height={30}
                />
                <Image
                  alt="Avatar"
                  src="/images/Profile/ytb.png"
                  width={30}
                  height={23}
                />
                <Image
                  alt="Avatar"
                  src="/images/Profile/zalo2.png"
                  width={30}
                  height={30}
                />
                <Image
                  alt="Avatar"
                  src="/images/Profile/phone.png"
                  width={30}
                  height={30}
                />
                <Image
                  alt="Avatar"
                  src="/images/Profile/skype.png"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <div className={styles.desc}>
              <p>
                <i className="fa-light fa-globe"></i>https://lioholdings.com
              </p>
              <p>
                <i className="fa-light fa-envelope"></i>
                cfo@lioholdings.com
              </p>
              <p>
                <i className="fa-light fa-phone"></i>
                (+84) 908 230 129
              </p>
              <p>
                <i className="fa-light fa-location-dot"></i>
                85-87 Nguyen Co Thach, An Loi Đong, Q.2, TPHCM
              </p>
            </div>
          </div>
        </div>
        <div className={styles.work_ex}>
          <div
            className="heading"
            style={{
              margin: 0,
            }}
          >
            <h2 className={styles.headTitle}>Work Experience</h2>
            <div
              className="line"
              style={{
                width: "70%",
                margin: 0,
              }}
            ></div>
          </div>
          <div className="container">
            <div className="col-12 col-sm-9 m-auto">
              <div className={styles.content}>
                <Timeline className="custom-timeline">
                  <Timeline.Item dot={<i className="fa-solid fa-circle"></i>}>
                    <h5>GENERAL DIRECTOR</h5>
                    <span>FOSTECH</span>
                    <span>2020-2021</span>
                  </Timeline.Item>

                  <Timeline.Item dot={<i className="fa-solid fa-circle"></i>}>
                    <h5>CHIEF FINANCE OFFICER</h5>
                    <span>LIO HOLDINGS</span>
                    <span>2021- Present</span>
                  </Timeline.Item>
                </Timeline>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.profile}>
          <div
            className="heading"
            style={{
              margin: 0,
            }}
          >
            <h2 className={styles.headTitle}>Profile</h2>
            <div
              className="line"
              style={{
                width: "70%",
                margin: 0,
              }}
            ></div>
          </div>
          <div className={styles.content}>
            <div className={"d-flex" + " " + styles.bg1}>
              <h6 className="col-6 col-md-3 col-lg-2">Experience</h6>
              <p className="col-6 col-md-9 col-lg-10">7 years</p>
            </div>
            <div className={"d-flex" + " " + styles.bg2}>
              <h6 className="col-6 col-md-3 col-lg-2">Introduce</h6>
              <p className="col-6 col-md-9 col-lg-10">
                -Design Web App <br />
                -App E-commerce <br />
                -Namecard
              </p>
            </div>
            <div className={"d-flex" + " " + styles.bg1}>
              <h6 className="col-6 col-md-3 col-lg-2">Marital status</h6>
              <p className="col-6 col-md-9 col-lg-10">Single</p>
            </div>
            <div className={"d-flex" + " " + styles.bg2}>
              <h6 className="col-6 col-md-3 col-lg-2">Hobby</h6>
              <p className="col-6 col-md-9 col-lg-10">Travel, shopping,..</p>
            </div>
            <div className={"d-flex" + " " + styles.bg1}>
              <h6 className="col-6 col-md-3 col-lg-2">Address</h6>
              <p className="col-6 col-md-9 col-lg-10">Ho Chi Minh</p>
            </div>
            <div className={"d-flex" + " " + styles.bg2}>
              <h6 className="col-6 col-md-3 col-lg-2">Target</h6>
              <p className="col-6 col-md-9 col-lg-10">
                - It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here{"'"}, making it look like readable English.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.business}>
          <div
            className="heading"
            style={{
              margin: 0,
            }}
          >
            <h2 className={styles.headTitle}>Business</h2>
            <div
              className="line"
              style={{
                width: "70%",
                margin: 0,
              }}
            ></div>
          </div>
          <div className={styles.content}>
            <p>
              - It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English. Contrary to popular
              belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over
              2000 years old. - Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes
              of Good and Evil) by Cicero, written in 45 BC. This book is a
              treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit
              amet.., comes from a line in section 1.10.32.
            </p>
            <p>
              - It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English. Contrary to popular
              belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over
              2000 years old. - Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes
              of Good and Evil) by Cicero, written in 45 BC. This book is a
              treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit
              amet.., comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
        <div className={styles.gains}>
          <div
            className="heading"
            style={{
              margin: 0,
            }}
          >
            <h2 className={styles.headTitle}>Gains</h2>
            <div
              className="line"
              style={{
                width: "70%",
                margin: 0,
              }}
            ></div>
          </div>
          <div className={styles.content}>
            <div className={styles.list + " " + "d-flex flex-wrap"}>
              <div className={"col-12 col-md-6 col-lg-4" + " " + styles.wrap}>
                <div className={styles.item}>
                  <div className={styles.image}>
                    <Image
                      alt="gains"
                      src="/images/Profile/gain1.png"
                      layout="fill"
                    />
                  </div>
                  <div className={styles.info}>
                    <h5>Goals</h5>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Modi minima in, fugit laboriosam nam suscipit itaque
                      consequatur dolores magnam culpa earum perferendis ut
                      temporibus? Praesentium laborum ipsa molestiae et commodi!
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-12 col-md-6 col-lg-4" + " " + styles.wrap}>
                <div className={styles.item}>
                  <div className={styles.image}>
                    <Image
                      alt="gains"
                      src="/images/Profile/gain2.png"
                      layout="fill"
                    />
                  </div>
                  <div className={styles.info}>
                    <h5>Accomplishments</h5>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Modi minima in, fugit laboriosam nam suscipit itaque
                      consequatur dolores magnam culpa earum perferendis ut
                      temporibus? Praesentium laborum ipsa molestiae et commodi!
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-12 col-md-6 col-lg-4" + " " + styles.wrap}>
                <div className={styles.item}>
                  <div className={styles.image}>
                    <Image
                      alt="gains"
                      src="/images/Profile/gain3.png"
                      layout="fill"
                    />
                  </div>
                  <div className={styles.info}>
                    <h5>Network</h5>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Modi minima in, fugit laboriosam nam suscipit itaque
                      consequatur dolores magnam culpa earum perferendis ut
                      temporibus? Praesentium laborum ipsa molestiae et commodi!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
