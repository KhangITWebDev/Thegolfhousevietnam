import axiosClient from "../../pages/api/clientAxios";

const getIndex = async () => {
  try {
    const resApi = await axiosClient.get("/test/");
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
const testApi = {
  getIndex,
};
export default testApi;
