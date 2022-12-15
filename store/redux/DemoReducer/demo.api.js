import fakeClientAxios from "../../../clientAxios/fakeClientAxios";

const getUsersAPI = async () => {
  try {
    const resApi = await fakeClientAxios.get("/users");
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
const DemoApi = {
  getUsersAPI,
  postUsersAPI,
};
export default DemoApi;
