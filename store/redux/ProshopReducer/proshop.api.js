import Cookies from "js-cookie";
import fakeClientAxios from "../../../clientAxios/fakeClientAxios";
const getProshopAPI = async (
  page = 1,
  cate = "",
  name = "",
  gender = "",
  size = "",
  brand = "",
  price_min = 100,
  price_max = 1000000000,
  sortType = "date_created",
  incress = "-1"
) => {
  try {
    const resApi = await fakeClientAxios.get(
      `/dmvt?q={"is_service":{"$ne":"true"},"$and":[{"gia_ban_le":{"$gt":${price_min}}},{"gia_ban_le":{"$lt":${price_max}}},{"ten_vt": {"$regex":"${cate}", "$options":'i'}},{"ten_vt": {"$regex":"${size}", "$options":'i'}},{"ten_vt": {"$regex":"${name}", "$options":'i'}},{"ten_vt": {"$regex":"${brand}", "$options":'i'}},{"ten_vt": {"$regex":"${gender}", "$options":'i'}}]}&limit=6&page=${page}&access_token=7d7fea98483f31af4ac3cdd9db2e4a93&sort={"${sortType}": "${incress}"}`
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
const postUsersAPI = async (data) => {
  try {
    const resApi = await fakeClientAxios.post("/users", data);
    console.log(resApi);
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
const ProshopAPI = {
  getProshopAPI,
  postUsersAPI,
};
export default ProshopAPI;
