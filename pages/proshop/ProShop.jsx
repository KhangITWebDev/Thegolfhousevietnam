import React, { useState } from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { AcademyDetailProshopData } from "../../utils/DataDemo/Academy/dataAcademyPage";
import { ProShopCategory } from "../../utils/DataDemo/ProShop/proShopPageData";
import { removeAccents } from "../../utils/function";
import styles from "./ProShop.module.scss";
import Tab1 from "./Tab1/Tab1";
import { Tree, Panel, InputNumber, Button, SelectPicker, Stack } from "rsuite";

const data = [
  {
    label: "Category",
    value: "category",
    level: 0,
    children: [
      {
        label: "Golf",
        value: "golf",
        level: 1,
        children: [
          {
            label: "Golf Balls",
            value: "golf-balls",
            children: null,
            level: 2,
          },
          {
            label: "Shoes",
            value: "shoes",
            children: null,
            level: 2,
          },
          {
            label: "Apparel",
            value: "apparel",
            children: null,
            level: 2,
          },
          {
            label: "Drivers",
            value: "drivers",
            children: null,
            level: 2,
          },
          {
            label: "Irons",
            value: "irons",
            children: null,
            level: 2,
          },
          {
            label: "Wedges",
            value: "wedges",
            children: null,
            level: 2,
          },
          {
            label: "Hats",
            value: "hats",
            children: null,
            level: 2,
          },
          {
            label: "Golf Bags",
            value: "golf-bags",
            children: null,
            level: 2,
          },
        ],
      },
      {
        label: "Car",
        value: "car",
        level: 1,
        children: [
          {
            label: "Racing Suits",
            value: "racing-suits",
            children: null,
            level: 2,
          },
          {
            label: "Racing Helmets",
            value: "racing-helmets",
            children: null,
            level: 2,
          },
          {
            label: "Racing Shoes",
            value: "racing-shoes",
            children: null,
            level: 2,
          },
          {
            label: "Racing Gloves",
            value: "racing-gloves",
            children: null,
            level: 2,
          },
        ],
      },
    ],
  },
];

function ProShop(props) {
  const [show1, setShow1] = useState(true);
  const [nodeValue, setNodeValue] = useState("golf-balls");
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className={styles.proshop_page}>
      <div className="container">
        <div className="heading">
          <h2>Proshop</h2>
          <div
            className="line"
            style={{
              width: "25%",
            }}
          ></div>
        </div>
        <div className={styles.content + " " + "d-flex"} id="pro-shop">
          <div className="col-3">
            <Tree
              data={data}
              // defaultExpandItemValues={["node_modules", "node_modules-rsuite"]}
              defaultExpandAll
              defaultValue={"golf-balls"}
              renderTreeNode={(node) => {
                return (
                  <div
                    onClick={() => setNodeValue(node.value)}
                    className="item"
                  >
                    {node.level === 0 ? (
                      <i className="fa-regular fa-objects-column"></i>
                    ) : node.level === 1 ? (
                      <i />
                    ) : (
                      <i />
                    )}
                    {node.label}
                  </div>
                );
              }}
            />
          </div>
          <div className="col-9">
            {nodeValue === "golf-balls" && (
              <Tab1
                showDetail={showDetail}
                setShowDetail={setShowDetail}
                data={AcademyDetailProshopData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProShop;
