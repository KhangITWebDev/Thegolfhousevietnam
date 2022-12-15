import DemoApi from "./demo.api";
import { setUsersList } from "./demo.reducer";

export const getUsersData = () => async (dispatch) => {
  try {
    const resApi = await DemoApi.getUsersAPI();
    if (resApi.success) {
      dispatch(setUsersList(resApi?.data));
    } else {
      dispatch(setUsersList([]));
    }
  } catch (err) {
    alert(err);
  }
};
export const SignUpAsMember = (value) => async (dispatch) => {
  try {
    const resApi = await DemoApi.postUsersAPI(value);
    console.log(`NCH:  => file: User.thunk.js => line 37 => resApi`, resApi);
    if (resApi.success) {
    } else {
    }
  } catch (err) {
    alert(err);
  }
};
