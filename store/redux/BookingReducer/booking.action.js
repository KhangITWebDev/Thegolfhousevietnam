import BookingApi from "./booking.api";
import { setLocationList } from "./booking.reducer";
export const getLocationData = () => async (dispatch) => {
  try {
    const resApi = await BookingApi.getLocationApi();
    if (resApi.success) {
      dispatch(setLocationList(resApi?.data));
    } else {
      dispatch(setLocationList([]));
    }
  } catch (err) {
    alert(err);
  }
};
