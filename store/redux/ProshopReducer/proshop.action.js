import ProshopAPI from "./proshop.api";
import { setProshopList } from "./proshop.reducer";

export const getProshopData = () => async (dispatch) => {
  try {
    const resApi = await ProshopAPI.getProshopAPI();
    if (resApi.success) {
      dispatch(setProshopList(resApi?.data));
    } else {
      dispatch(setProshopList([]));
    }
  } catch (err) {
    alert(err);
  }
};
// export const SignUpAsMember = (value) => async (dispatch) => {
//   try {
//     const resApi = await DemoApi.postUsersAPI(value);
//     console.log(`NCH:  => file: User.thunk.js => line 37 => resApi`, resApi);
//     if (resApi.success) {
//     } else {
//     }
//   } catch (err) {
//     alert(err);
//   }
// };
