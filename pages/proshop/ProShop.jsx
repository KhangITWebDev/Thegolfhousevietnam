import React, { useState } from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { AcademyDetailProshopData } from "../../utils/DataDemo/Academy/dataAcademyPage";
import { ProShopCategory } from "../../utils/DataDemo/ProShop/proShopPageData";
import { removeAccents } from "../../utils/function";
import styles from "./ProShop.module.scss";
import Tab1 from "./Tab1/Tab1";

function ProShop(props) {
  const [show1, setShow1] = useState(true);
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
        <div className={styles.content} id="pro-shop">
          <Tab.Container id="left-tabs-example" defaultActiveKey="golf-balls">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link
                      onClick={(e) => {
                        e.preventDefault();
                        setShow1(!show1);
                        setShowDetail(false);
                      }}
                    >
                      <i className="fa-solid fa-grid-2"></i>
                      Category
                      <i className="fa-regular fa-chevron-down"></i>
                    </Nav.Link>
                    {show1 && (
                      <div className="cate-list">
                        {ProShopCategory.map((item, index) => (
                          <Nav.Item key={index}>
                            <Nav.Link onClick={() => setShowDetail(false)}>
                              <span className="item">
                                {item.name}
                                <i className="fa-regular fa-chevron-down"></i>
                              </span>
                            </Nav.Link>
                            {item.subCate.map((subTiem, subIndex) => (
                              <div key={subIndex} className="sub-cate-list">
                                <Nav.Item>
                                  <Nav.Link
                                    eventKey={removeAccents(subTiem.name)}
                                    onClick={() => setShowDetail(false)}
                                  >
                                    <span className="sub-item">
                                      {subTiem.name}
                                    </span>
                                  </Nav.Link>
                                </Nav.Item>
                              </div>
                            ))}
                          </Nav.Item>
                        ))}
                      </div>
                    )}
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <div className="d-flex">
                  <div
                    className="bg-black"
                    style={{
                      width: 1,
                      marginRight: 30,
                    }}
                  ></div>
                  <Tab.Content>
                    <Tab.Pane eventKey="golf-balls">
                      <Tab1
                        showDetail={showDetail}
                        setShowDetail={setShowDetail}
                        data={AcademyDetailProshopData}
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">Tab2</Tab.Pane>
                  </Tab.Content>
                </div>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
}

export default ProShop;
