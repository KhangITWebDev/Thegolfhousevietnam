import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Steps, Table } from "rsuite";
import Swal from "sweetalert2";
import { getContentData } from "../../store/redux/LoadContentReducer/content.action";
import {
  getLocalStorage,
  LOCAL_STORAGE,
  setLocalStorage,
} from "../../utils/handleStorage";
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
  const [step, setStep] = React.useState(0);
  const router = useRouter();
  const cart = getLocalStorage(LOCAL_STORAGE.CART);
  const ship = 15000;
  const dispatch = useDispatch();
  const { contents } = useSelector((state) => state.ContentReducer);
  useEffect(() => {
    dispatch(getContentData());
  }, [dispatch]);
  const sectiontitle = contents.filter(
    (item) => item.category === "63bc4d8b39d2a23b06d92f3d"
  );
  const initialValue = 0;
  const total = cart.reduce(
    (accumulator, current) => accumulator + current.gia_ban_le * current.qty,
    initialValue
  );
  const [qty, setQty] = useState(1);
  const decreasement = () => {
    setQty(qty - 1);
    if (qty <= 1) {
      Swal.fire({
        title: "Lỗi",
        text: "Số lượng phải lớn hơn 0",
        icon: "error",
        showCancelButton: false,
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          setQty(1);
        }
      });
    }
  };
  const handleRemove = (item) => {
    const data = cart.filter((x) => x._id !== item._id);
    Swal.fire({
      title: "",
      html: "<p>Bạn có chắc chắn xóa sản phẩm này không?</p>",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "OK",
      focusConfirm: false,
      confirmButtonText: "<span>Đồng ý</span>",
      cancelButtonText: "<span>Hủy bỏ</span>",
    }).then((rs) => {
      if (rs.isConfirmed) {
        setLocalStorage(LOCAL_STORAGE.CART, data);
      }
    });
  };
  const handleDecreaseQty = (item) => {
    const cart = getLocalStorage(LOCAL_STORAGE.CART);
    const findIndex = cart.findIndex((x) => x._id === item._id);
    cart[findIndex].qty = cart[findIndex].qty - 1;
    setLocalStorage(LOCAL_STORAGE.CART, cart);
    if (item.qty <= 0) {
      alert("lỗi");
      cart[findIndex].qty = 1;
    }
  };
  const handleIncreaseQty = (item) => {
    const cart = getLocalStorage(LOCAL_STORAGE.CART);
    const findIndex = cart.findIndex((x) => x._id === item._id);
    cart[findIndex].qty = cart[findIndex].qty + 1;
    setLocalStorage(LOCAL_STORAGE.CART, cart);
  };
  return (
    <div>
      <div className="container" id="cart-page">
        <div className="heading">
          <h2>{sectiontitle[0]?.title}</h2>
        </div>
        {/* <div className="d-flex justify-content-center">
          <button className="btn-down">
            <i className="fa-regular fa-chevron-down"></i>
          </button>
        </div> */}
        {cart && cart.length > 0 ? (
          <>
            <div className="process-step col-10">
              <Steps current={step}>
                <Steps.Item title="Giỏ Hàng" />
                <Steps.Item title="Thanh Toán & Giao Hàng" />
                <Steps.Item title="Kiểm Tra Đơn Hàng" />
              </Steps>
            </div>
            <Table
              height={420}
              data={cart}
              bordered
              cellBordered
              onSortColumn={(sortColumn, sortType) => {
                console.log(sortColumn, sortType);
              }}
              rowHeight={120}
            >
              <Column flexGrow={2}>
                <HeaderCell>
                  <span className="h-100 header">Sản Phẩm</span>
                </HeaderCell>
                <Cell>
                  {(rowData) => (
                    <div className="d-flex align-items-center box-name">
                      <Image
                        alt="Image"
                        src="/images/Home/Shop/shop1.png"
                        width={80}
                        height={80}
                        objectFit="cover"
                      ></Image>
                      <h5 className="data">{rowData.ten_vt}</h5>
                    </div>
                  )}
                </Cell>
              </Column>
              <Column flexGrow={1}>
                <HeaderCell>
                  <span className="h-100 header">Giá</span>
                </HeaderCell>
                <Cell>
                  {(rowData) => (
                    <span className="h-100 d-flex align-items-center data">
                      {rowData.gia_ban_le.toLocaleString("vi-VI")} VND
                    </span>
                  )}
                </Cell>
              </Column>
              <Column flexGrow={1}>
                <HeaderCell>
                  <span className="h-100 header">Số lượng</span>
                </HeaderCell>
                <Cell>
                  {(rowData) => (
                    <div className="d-flex align-items-center h-100">
                      <div className="quantity">
                        <span className="h-100 d-flex align-items-center data">
                          {rowData.qty}
                        </span>
                        <i
                          className="fa-light fa-chevron-up"
                          onClick={() => handleIncreaseQty(rowData)}
                        ></i>
                        <i
                          onClick={() => handleDecreaseQty(rowData)}
                          className="fa-light fa-chevron-down"
                        ></i>
                      </div>
                    </div>
                  )}
                </Cell>
              </Column>
              <Column flexGrow={1}>
                <HeaderCell>
                  <span className="h-100 header">Tổng</span>
                </HeaderCell>
                <Cell>
                  {(rowData) => (
                    <span className="h-100 d-flex align-items-center data">
                      {(rowData.gia_ban_le * rowData.qty).toLocaleString(
                        "vi-VI"
                      )}{" "}
                      VND
                    </span>
                  )}
                </Cell>
              </Column>
              <Column flexGrow={1}>
                <HeaderCell>
                  <span className="h-100 header">Remove</span>
                </HeaderCell>
                <Cell>
                  {(rowData) => (
                    <span className="h-100 d-flex align-items-center data romove">
                      <i
                        onClick={() => handleRemove(rowData)}
                        className="fa-light fa-xmark"
                      ></i>
                    </span>
                  )}
                </Cell>
              </Column>
            </Table>
            <div className="tool-cart">
              <div className="d-flex justify-content-end align-items-center">
                <button>Tiếp tục mua hàng</button>
                <button>Cập nhật giỏi hàng</button>
              </div>
            </div>
            <div className="box-total d-flex justify-content-end">
              <div className="col-6">
                <h5 className="title">Tổng</h5>
                <div className="content">
                  <div className="item d-flex">
                    <div className="col-4 name">
                      <h3>Tổng phụ</h3>
                    </div>
                    <div className="col-8 detail">
                      <h3>{total.toLocaleString("vi-VI")} VND</h3>
                    </div>
                  </div>
                  <div className="item d-flex">
                    <div className="col-4 name">
                      <h3>Phí vận chuyển</h3>
                    </div>
                    <div className="col-8 detail">
                      <h3>1.000.000 VND</h3>
                    </div>
                  </div>
                  <div className="item d-flex">
                    <div className="col-4 name">
                      <h3>Tổng cộng</h3>
                    </div>
                    <div className="col-8 detail">
                      <h3>{ship} VND</h3>
                    </div>
                  </div>
                </div>
                <div className="w-100 button">
                  <button className="w-100">Thanh toán</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="empty-cart d-flex flex-column align-items-center">
            <h4 className="empty-text">Giỏi hàng của bạn hiện đang trống</h4>
            <button onClick={() => router.push("/proshop")}>
              Trở về mua hàng
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
