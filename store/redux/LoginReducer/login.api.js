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

import loginClientAxios from "../../../clientAxios/loginClientAxios";

// };
const LoginAPI = async (data) => {
  try {
    console.log(loginClientAxios);
    const resApi = await loginClientAxios.post("/user/login", data);
    console.log("ResApi", resApi);
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
const UserApi = {
  // getUsersAPI,
  LoginAPI,
};
export default UserApi;
