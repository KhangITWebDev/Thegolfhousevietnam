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
        >
          <Column flexGrow={2} height={300}>
            <HeaderCell>Sản Phẩm</HeaderCell>
            <Cell>
              {(rowData) => (
                <div>
                  <Image
                    alt="Image"
                    src={rowData.image}
                    width={150}
                    height={150}
                    objectFit="cover"
                  ></Image>
                </div>
              )}
            </Cell>
          </Column>
          <Column flexGrow={1}>
            <HeaderCell>Giá</HeaderCell>
            <Cell>
              {(rowData) => (
                <span>{rowData.price.toLocaleString("vi-VI")} VND</span>
              )}
            </Cell>
          </Column>
          <Column flexGrow={1}>
            <HeaderCell>Số lượng</HeaderCell>
            <Cell dataKey="qty" />
          </Column>
          <Column flexGrow={1}>
            <HeaderCell>Tổng</HeaderCell>
            <Cell>
              {(rowData) => (
                <span>
                  {(rowData.price * rowData.qty).toLocaleString("vi-VI")} VND
                </span>
              )}
            </Cell>
          </Column>
          <Column flexGrow={1}>
            <HeaderCell>Remove</HeaderCell>
            <Cell>
              <i className="fa-light fa-xmark"></i>
            </Cell>
          </Column>
        </Table>
      </div>
    </div>
  );
}

export default Cart;
