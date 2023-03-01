import fakeClientAxios from "../../../clientAxios/fakeClientAxios";

const getProshopAPI = async () => {
  try {
    const resApi = await fakeClientAxios.get(
      `/dmvt?q={"is_service":{"$ne":"true"}}&limit=500&access_token=7d7fea98483f31af4ac3cdd9db2e4a93&sort={"ten_vt":"1"}`
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
