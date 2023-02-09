import Cookies from "js-cookie";
import ContentAxios from "../../../clientAxios/contentAxios";

const getCartAPI = async () => {
  const erp_token = Cookies.get("erp_token");
  try {
    const resApi = await ContentAxios.get(
      `/cart?limit=500&page=1&access_token=${erp_token}`
    );
    if (resApi)
      return {
        success: true,
        data: resApi,
      };
    return {
      success: false,
      data: null,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      data: null,
    };
  }
};
const deleteProductCartAPI = async (id) => {
  const erp_token = Cookies.get("erp_token");
  try {
    const resApi = await ContentAxios.delete(
      `/cart/${id}?limit=500&page=1&access_token=${erp_token}`
    );
    if (resApi)
      return {
        success: true,
        data: resApi,
      };
    return {
      success: false,
      data: null,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      data: null,
    };
  }
};
const postCartAPI = async (data) => {
  const erp_token = Cookies.get("erp_token");
  try {
    const resApi = await ContentAxios.post(
      `/cart?access_token=${erp_token}`,
      data
    );
    if (resApi)
      return {
        success: true,
        data: resApi,
      };
    return {
      success: false,
      data: null,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      data: null,
    };
  }
};
const CartAPI = {
  getCartAPI,
  deleteProductCartAPI,
  postCartAPI,
};
export default CartAPI;
