import CartAPI from "./cart.api";
import { setCartList } from "./cart.reducer";

export const getCartData = () => async (dispatch) => {
  try {
    const resApi = await CartAPI.getCartAPI();
    if (resApi.success) {
      dispatch(setCartList(resApi?.data));
    } else {
      dispatch(setCartList([]));
    }
  } catch (err) {
    alert(err);
  }
};
export const AddToCart = (value) => async (dispatch) => {
  try {
    const resApi = await CartAPI.postCartAPI(value);
    if (resApi.success) {
    } else {
    }
  } catch (err) {
    alert(err);
  }
};
export const DelteProductInCart = (id) => async (dispatch) => {
  try {
    const resApi = await CartAPI.deleteProductCartAPI(id);
    if (resApi.success) {
    } else {
    }
  } catch (err) {
    alert(err);
  }
};
export const UdateProductInCart = (id, value) => async (dispatch) => {
  try {
    const resApi = await CartAPI.putCartAPI(id, value);
    if (resApi.success) {
    } else {
    }
  } catch (err) {
    alert(err);
  }
};
