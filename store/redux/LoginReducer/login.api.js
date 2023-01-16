// const getUsersAPI = async () => {
//   try {
//     const resApi = await fakeClientAxios.get("/users");
//     if (resApi)
//       return {
//         success: true,
//         data: resApi,
//       };
//     return {
//       success: false,
//       data: null,
//     };
//   } catch (err) {
//     console.log(err);
//     return {
//       success: false,
//       data: null,
//     };
//   }

import Cookies from "js-cookie";
import loginClientAxios from "../../../clientAxios/loginClientAxios";

// };
const LoginAPI = async (data) => {
  try {
    const resApi = await loginClientAxios.post("/user/login", data);
    if (resApi) {
      return {
        success: true,
        data: resApi,
      };
    }
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
const UserApi = {
  // getUsersAPI,
  LoginAPI,
};
export default UserApi;
