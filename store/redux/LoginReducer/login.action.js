import UserApi from "./login.api";
export const LoginAsMember = (value) => async (dispatch) => {
  try {
    const resApi = await UserApi.LoginAPI(value);
    console.log("Value", value);
    if (resApi.success) {
    } else {
    }
  } catch (err) {
    alert(err);
  }
};
