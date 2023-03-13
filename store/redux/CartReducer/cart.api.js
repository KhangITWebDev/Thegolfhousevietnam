import Cookies from "js-cookie";
import ContentAxios from "../../../clientAxios/contentAxios";

const getCartAPI = async () => {
  const erp_token = Cookies.get("erp_token");
  const test_token = "7d7fea98483f31af4ac3cdd9db2e4a93";

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
const putCartAPI = async (id, data) => {
  const erp_token = Cookies.get("erp_token");
  try {
    const resApi = await ContentAxios.put(
      `/cart/${id}?access_token=${erp_token}`,
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
  putCartAPI,
};
export default CartAPI;
