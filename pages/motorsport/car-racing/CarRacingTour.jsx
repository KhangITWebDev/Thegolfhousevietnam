import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import MotorSportLayout from "../../../components/layout/motorsportLayout";
import {
  CarRacingPage,
  Schedule,
  Stading,
  TrendingCRP,
} from "../../../utils/DataDemo/CarRacingPage/data";
import { convertDate, removeAccents } from "../../../utils/function";
import styles from "./CarRacing.module.scss";

function CarRacingTour(props) {
  const router = useRouter();
  return (
    <MotorSportLayout>
      <div className={"containers" + " " + styles.car_racing_page}>
        <div className="heading">
          <h2>Car Racing</h2>
          <div className="line"></div>
        </div>
        <div className={styles.content}>
          <div className={styles.content_top + " " + "d-flex"}>
            <div className={styles.list + " " + "col-8"}>
              {CarRacingPage.map((item, index) => (
                <div className={styles.item} key={index}>
                  <Image alt="Image" src={item.picture} layout="fill" />
                  <div className={styles.label}>
                    <span>{item.type}</span>
                  </div>
                  <div className={styles.title}>
                    <h5>{item.title}</h5>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-4">
              <div className={styles.trending}>
                <div className={styles.heading}>
                  <div className={styles.icon}>
                    <Image
                      alt="vestor"
                      src="/images/Home/GoftTour/Trending-header.png"
                      layout="fill"
                    />
                  </div>
                  <span>TRENDING</span>
                </div>
                <div className={styles.trending_list}>
                  {TrendingCRP.map((item, index) => (
                    <div className={styles.trending_item} key={index}>
                      <div className={styles.trending_picture}>
                        <Image alt="Image" src={item.picture} layout="fill" />
                      </div>
                      <div className={styles.trending_name}>
                        <span>{item.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.schedule}>
                <div className={styles.schedule_header}>
                  <div className={styles.top}>
                    <div className={styles.left}>
                      <i className="fas fa-calendar-star"></i>
                      <span>SCHEDULE</span>
                    </div>
                    <div className={styles.dropdown}>
                      <span>NASCAR</span>
                      <i className="fal fa-chevron-down"></i>
                    </div>
                  </div>
                  <div className={styles.bottom}>
                    <span>Ticket by</span>
                    <div className={styles.picture}>
                      <Image
                        alt="Image"
                        src="/images/CarRacingPage/schedule-header.png"
                        layout="fill"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.schedule_list}>
                  {Schedule.map((item, index) => (
                    <div key={index} className={styles.schedule_item}>
                      <div className={styles.schedule_item_flag}>
                        <Image alt="Image" src={item.flag} layout="fill" />
                      </div>
                      <div className={styles.schedule_item_box_title}>
                        <span
                          onClick={() =>
                            router.push(
                              `/motorsport/car-tour/${removeAccents(
                                item.title + "-" + item.country
                              )}`
                            )
                          }
                        >
                          {item.title}
                        </span>
                        <span>{item.street}</span>
                      </div>
                      <div className={styles.schedule_item_box_tool}>
                        <span className={styles.time}>
                          {convertDate(item.start).getDateAndMonthInDate} -{" "}
                          {convertDate(item.end).getDateAndMonthInDate}
                        </span>
                        <button
                          onClick={() =>
                            router.push(
                              `/motorsport/car-tour/${removeAccents(
                                item.title + "-" + item.country
                              )}`
                            )
                          }
                        >
                          Ticket
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.schedule_button}>
                  <button>View Full</button>
                </div>
                <div className={styles.schedule_banner}>
                  <Image
                    alt="Images"
                    src="/images/CarRacingPage/schedule-banner.png"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content_bottom + " " + "d-flex"}>
            <div className={styles.content_bottom_left + " " + "col-8"}>
              <Image
                alt="Image"
                src="/images/CarRacingPage/waiting.png"
                layout="fill"
              />
            </div>
            <div className="col-4">
              <div className={styles.stading}>
                <div className={styles.stading_header}>
                  <div className={styles.top}>
                    <div className={styles.left}>
                      <i className="fas fa-trophy"></i>
                      <span>STANDINGS</span>
                    </div>
                    <div className={styles.dropdown}>
                      <span>NASCAR</span>
                      <i className="fal fa-chevron-down"></i>
                    </div>
                  </div>
                  <div className={styles.bottom + " " + "col-12"}>
                    <span className="col-6">Team</span>
                    <span className="col-6">Drives</span>
                  </div>
                </div>
                <div className={styles.stading_list}>
                  {Stading.map((item, index) => (
                    <div key={index} className={styles.stading_item}>
                      <div className={styles.stading_item_flag}>
                        <Image alt="Image" src={item.flag} layout="fill" />
                      </div>
                      <div className={styles.stading_item_box_title}>
                        <span>{item.title}</span>
                      </div>
                      <div className={styles.stading_item_box_desc}>
                        <span className={styles.time}>{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.stading_button}>
                  <button>View Full</button>
                </div>
                <div className={styles.stading_banner}>
                  <Image
                    alt="Images"
                    src="/images/CarRacingPage/banner-stading.png"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotorSportLayout>
  );
}

export default CarRacingTour;
