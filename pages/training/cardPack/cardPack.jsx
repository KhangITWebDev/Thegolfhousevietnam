import Image from "next/image";
import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Tab1 from "../Tab/tab1";

const coursePromotion = [
  {
    id: 1,
    name: "BRONZE",
    time: "03 tháng",
    day: 36,
    type: [
      {
        name: "1 HV",
        price: 126000000,
      },
      {
        name: "2 HV",
        price: 88200000,
      },
      {
        name: "3 HV",
        price: 75600000,
      },
      {
        name: "Từ 4 HV",
        price: 63000000,
      },
    ],
  },
  {
    id: 2,
    name: "SILVER",
    time: "06 tháng",
    day: 72,
    type: [
      {
        name: "1:1",
        price: 218400000,
      },
      {
        name: "1:2",
        price: 152880000,
      },
      {
        name: "1:3",
        price: 131040000,
      },
      {
        name: "1:4",
        price: 109200000,
      },
    ],
  },
  {
    id: 3,
    name: "GOLD",
    time: "12 tháng",
    day: 108,
    type: [
      {
        name: "1:1",
        price: 393750000,
      },
      {
        name: "1:2",
        price: 275625000,
      },
      {
        name: "1:3",
        price: 236250000,
      },
      {
        name: "1:4",
        price: 196875000,
      },
    ],
  },
  {
    id: 4,
    name: "DIAMOND",
    time: "18 tháng",
    day: 144,
    type: [
      {
        name: "1:1",
        price: 644000000,
      },
      {
        name: "1:2",
        price: 450800000,
      },
      {
        name: "1:3",
        price: 386400000,
      },
      {
        name: "1:4",
        price: 322000000,
      },
    ],
  },
  {
    id: 5,
    name: "PLATINUM",
    time: "24 tháng",
    day: 180,
    type: [
      {
        name: "1:1",
        price: 840000000,
      },
      {
        name: "1:2",
        price: 588000000,
      },
      {
        name: "1:3",
        price: 504000000,
      },
      {
        name: "1:4",
        price: 420000000,
      },
    ],
  },
];

function CardPack() {
  return (
    <div
      id="bonus-course"
      className="d-flex flex-wrap align-items-center justify-content-center px-0 px-xl-5"
    >
      <div className="col-12 col-md-8 left">
        <Tabs
          defaultActiveKey="tab-1"
          id="uncontrolled-tab-example"
          className="mb-3"
          fill
        >
          {coursePromotion.map((item, i) => (
            <Tab key={i} eventKey={`tab-${item.id}`} title={item.name}>
              <Tab1 item={item} />
            </Tab>
          ))}
        </Tabs>
      </div>

      <div className="col-12 col-sm-10 col-md-4 right mx-auto ps-0 ps-xl-5">
        <div className="image">
          <Image
            src="https://api.fostech.vn/getfile/anytype/6281eb1d900bb51266dee8a9_1673411358813_434x580px.jpg.webp?access_token=7d7fea98483f31af4ac3cdd9db2e4a93"
            alt="Image"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}

export default CardPack;
