import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Loader, Table } from "rsuite";
import Swal from "sweetalert2";
import {
  DelteProductInCart,
  getCartData,
  UdateProductInCart,
} from "../../../store/redux/CartReducer/cart.action";

const { Column, HeaderCell, Cell } = Table;

function TableCart({ cart }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loadingRemove, setLoadingRemove] = useState(-1);
  const [loadingQty, setLoadingQty] = useState(-1);

  const handleRemove = (item) => {
    Swal.fire({
      title: "",
      html: `<p>Bạn có chắc chắn xóa sản phẩm ${item.ten_vt} ra khỏi giỏi hàng ?</p>`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Đồng ý",
      allowOutsideClick: false,
      focusConfirm: false,
      confirmButtonText: "<span>Đồng ý</span>",
      cancelButtonText: "<span>Hủy bỏ</span>",
    }).then((rs) => {
      if (rs.isConfirmed) {
        setLoadingRemove(item._id);
        setTimeout(() => {
          dispatch(DelteProductInCart(item._id));
          setTimeout(() => {
            setTimeout(() => {
              dispatch(getCartData());
            }, 500);
            setLoadingQty(-1);
            Swal.fire({
              html: `<p>Bạn đã xóa ${item.sl_xuat} sản phẩm ${item.ten_vt} thành công !</p>`,
              icon: "success",
              showCancelButton: false,
              confirmButtonText: "<span>Đồng ý</span>",
            });
          }, 1500);
        }, 2000);
      }
    });
  };

  const handleDecreaseQty = (item) => {
    Swal.fire({
      title: "",
      html: `<p>Bạn có chắc chắn giảm số lượng sản phẩm ${item.ten_vt}</p>`,
      icon: "question",
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "<span>Đồng ý</span>",
      cancelButtonText: "<span>Hủy bỏ</span>",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoadingQty(item._id);
        setTimeout(() => {
          dispatch(
            UdateProductInCart(item._id, { item, sl_xuat: item.sl_xuat - 1 })
          );
          if (item.sl_xuat <= 1) {
            Swal.fire({
              title: "Lỗi",
              text: "Số lượng phải lớn hơn 0",
              icon: "error",
              showCancelButton: false,
              confirmButtonText: "Đồng ý",
              allowOutsideClick: false,
            }).then((res) => {
              if (res.isConfirmed) {
                dispatch(UdateProductInCart(item._id, { item, sl_xuat: 1 }));
                setTimeout(() => {
                  setTimeout(() => {
                    dispatch(getCartData());
                  }, 500);
                  setLoadingQty(-1);
                }, 1000);
              }
            });
          } else {
            setTimeout(() => {
              dispatch(getCartData());
            }, 1000);
            setTimeout(() => {
              setLoadingQty(-1);
            }, 1500);
          }
        }, 3000);
      }
    });
  };

  const handleIncreaseQty = (item, index) => {
    Swal.fire({
      title: "",
      html: `<p>Bạn có chắc chắn tăng số lượng sản phẩm ${item.ten_vt}</p>`,
      icon: "question",
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "<span>Đồng ý</span>",
      cancelButtonText: "<span>Hủy bỏ</span>",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoadingQty(item._id);
        if (result.isConfirmed) {
          setTimeout(() => {
            dispatch(
              UdateProductInCart(item._id, {
                ...item,
                sl_xuat: item.sl_xuat + 1,
              })
            );
            setTimeout(() => {
              dispatch(getCartData());
            }, 1000);
            setTimeout(() => {
              setLoadingQty(-1);
            }, 1500);
          }, 3000);
        }
      }
    });
  };

  return (
    <Table
      height={420}
      data={cart}
      bordered
      cellBordered
      onSortColumn={(sortColumn, sortType) => {
        // console.log(sortColumn, sortType);
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
              <div className="col-3">
                <Image
                  alt="Image"
                  src={rowData.picture}
                  loader={({ src }) =>
                    `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                  }
                  width={80}
                  height={80}
                  objectFit="cover"
                  onClick={() =>
                    router.push(`/proshop/${removeAccents(rowData.ten_vt)}`)
                  }
                ></Image>
              </div>
              <div className="col-9">
                <h5
                  className="data"
                  onClick={() =>
                    router.push(`/proshop/${removeAccents(rowData.ten_vt)}`)
                  }
                >
                  {rowData.ten_vt}
                </h5>
              </div>
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
              {rowData?.gia_ban_le} VND
            </span>
          )}
        </Cell>
      </Column>

      <Column flexGrow={1}>
        <HeaderCell>
          <span className="h-100 header">Số lượng</span>
        </HeaderCell>

        <Cell>
          {(rowData, index) => (
            <div className="d-flex align-items-center h-100">
              <div className="quantity d-flex flex-row justify-content-around align-items-center">
                {loadingQty === rowData._id ? (
                  <Loader />
                ) : (
                  <>
                    <i
                      onClick={() => handleDecreaseQty(rowData, index)}
                      className="fa-light fa-minus"
                    />
                    <span className="h-100 d-flex align-items-center data">
                      {rowData.sl_xuat}
                    </span>
                    <i
                      className="fa-light fa-plus"
                      onClick={() => handleIncreaseQty(rowData)}
                    />
                  </>
                )}
              </div>
            </div>
          )}
        </Cell>
      </Column>

      <Column flexGrow={1}>
        <HeaderCell>
          <span className="h-100 header">Tổng giá</span>
        </HeaderCell>

        <Cell>
          {(rowData) => (
            <span className="h-100 d-flex align-items-center data">
              {(rowData.gia_ban_le * rowData.qty).toLocaleString("vi-VI")} VND
            </span>
          )}
        </Cell>
      </Column>

      <Column flexGrow={1}>
        <HeaderCell>
          <span className="h-100 header">Xóa</span>
        </HeaderCell>

        <Cell>
          {(rowData) => (
            <span className="h-100 d-flex align-items-center data romove">
              {loadingRemove === rowData._id ? (
                <Loader />
              ) : (
                <i
                  onClick={() => handleRemove(rowData)}
                  className="fa-light fa-xmark"
                ></i>
              )}
            </span>
          )}
        </Cell>
      </Column>
    </Table>
  );
}

export default TableCart;
