import Image from "next/image";
import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Tab1 from "../Tab/tab1";
import styles from "../Course.module.scss";
const coursePromotion = [
  {
    id: 1,
    name: "BEGINNER -> 37",
    time: "03 tháng",
    day: "36 buổi",
    type: [
      {
        name: "1:1",
        pirce: {
          vga: 72000000,
          pga: 126000000,
        },
      },
      {
        name: "Nhóm 2 HLV",
        pirce: {
          vga: 50400000,
          pga: 88200000,
        },
      },
      {
        name: "Nhóm 3 HLV",
        pirce: {
          vga: 36000000,
          pga: 63000000,
        },
      },
      {
        name: "Nhóm 4 HLV",
        pirce: {
          pga: 50400000,
        },
      },
    ],
  },
  {
    id: 2,
    name: "BEGINNER -> 29",
    time: "06 tháng",
    day: "72 buổi",
    type: [
      {
        name: "1:1",
        pirce: {
          vga: 144000000,
          pga: 252000000,
        },
      },
      {
        name: "Nhóm 2 HLV",
        pirce: {
          vga: 108000000,
          pga: 176000000,
        },
      },
      {
        name: "Nhóm 3 HLV",
        pirce: {
          vga: 72000000,
          pga: 126000000,
        },
      },
      {
        name: "Nhóm 4 HLV",
        pirce: {
          pga: 100800000,
        },
      },
    ],
  },
  {
    id: 3,
    name: "BEGINNER -> 17",
    time: "01 name",
    day: "100 buổi",
    type: [
      {
        name: "1:1",
        pirce: {
          vga: 200000000,
          pga: 350000000,
        },
      },
      {
        name: "Nhóm 2 HLV",
        pirce: {
          vga: 140000000,
          pga: 245000000,
        },
      },
      {
        name: "Nhóm 3 HLV",
        pirce: {
          vga: 100000000,
          pga: 175000000,
        },
      },
      {
        name: "Nhóm 4 HLV",
        pirce: {
          pga: 140000000,
        },
      },
    ],
  },
  {
    id: 4,
    name: "BEGINNER -> 9",
    time: "02 năm",
    day: "200 buổi",
    type: [
      {
        name: "1:1",
        pirce: {
          vga: 400000000,
          pga: 700000000,
        },
      },
      {
        name: "Nhóm2 HLV",
        pirce: {
          vga: 280000000,
          pga: 490000000,
        },
      },
      {
        name: "Nhóm3 HLV",
        pirce: {
          vga: 200000000,
          pga: 350000000,
        },
      },
      {
        name: "Nhóm 4 HLV",
        pirce: {
          pga: 280000000,
        },
      },
    ],
  },
];
function CardPack() {
  return (
    <div className="container">
      <div id="bonus-course" className="d-flex align-items-center">
        <div className="col-7 left">
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
        <div className="col-5 right">
          <div className="image">
            <Image
              src="https://api.fostech.vn/getfile/anytype/6281eb1d900bb51266dee8a9_1673411358813_434x580px.jpg.webp?access_token=7d7fea98483f31af4ac3cdd9db2e4a93"
              alt="Image"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPack;
