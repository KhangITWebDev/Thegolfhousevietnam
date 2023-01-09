import Image from "next/image";
import React from "react";
import { Table } from "rsuite";
const { Column, HeaderCell, Cell } = Table;

export const ShopList = [
  {
    image: "/images/Home/Shop/shop1.png",
    name: "Gậy Golf",
    price: 1200000,
    rate: 5,
    qty: 1,
  },
  {
    image: "/images/Home/Shop/shop2.png",
    name: "Bóng Golf",
    price: 800000,
    rate: 5,
    qty: 2,
  },
  {
    image: "/images/Home/Shop/shop3.png",
    name: "Gậy Golf",
    price: 1000000,
    rate: 5,
    qty: 1,
  },
  {
    image: "/images/Home/Shop/shop4.png",
    name: "Nón Golf",
    price: 500000,
    rate: 5,
    qty: 3,
  },
  {
    image: "/images/Home/Shop/shop5.png",
    name: "Gậy Golf sắt lai",
    price: 1800000,
    rate: 5,
    qty: 1,
  },
  {
    image: "/images/Home/Shop/shop6.png",
    name: "Gậy Golf sắt nam",
    price: 1400000,
    rate: 5,
    qty: 1,
  },
];

function Cart(props) {
  return (
    <div
      style={{
        paddingTop: 200,
      }}
    >
      <div className="container">
        <Table
          height={420}
          data={ShopList}
          bordered
          cellBordered
          onSortColumn={(sortColumn, sortType) => {
            console.log(sortColumn, sortType);
          }}
          rowHeight={100}
        >
          <Column flexGrow={2}>
            <HeaderCell>Sản Phẩm</HeaderCell>
            <Cell>
              {(rowData) => (
                <div className="d-flex align-items-center">
                  <Image
                    alt="Image"
                    src={rowData.image}
                    width={80}
                    height={80}
                    objectFit="cover"
                  ></Image>
                  <h5>{rowData.name}</h5>
                </div>
              )}
            </Cell>
          </Column>
          <Column flexGrow={1}>
            <HeaderCell>Giá</HeaderCell>
            <Cell>
              {(rowData) => (
                <span className="h-100 d-flex align-items-center">
                  {rowData.price.toLocaleString("vi-VI")} VND
                </span>
              )}
            </Cell>
          </Column>
          <Column flexGrow={1}>
            <HeaderCell>Số lượng</HeaderCell>
            <Cell>
              {(rowData) => (
                <span className="h-100 d-flex align-items-center">
                  {rowData.qty}
                </span>
              )}
            </Cell>
          </Column>
          <Column flexGrow={1}>
            <HeaderCell>Tổng</HeaderCell>
            <Cell>
              {(rowData) => (
                <span className="h-100 d-flex align-items-center">
                  {(rowData.price * rowData.qty).toLocaleString("vi-VI")} VND
                </span>
              )}
            </Cell>
          </Column>
          <Column flexGrow={1}>
            <HeaderCell>Remove</HeaderCell>
            <Cell>
              <span className="h-100 d-flex align-items-center">
                <i className="fa-light fa-xmark"></i>
              </span>
            </Cell>
          </Column>
        </Table>
      </div>
    </div>
  );
}

export default Cart;
