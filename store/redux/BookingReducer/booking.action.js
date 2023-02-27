import BookingApi from "./booking.api";
import {
  setBookingList,
  setLocationList,
  setRegistration,
  setSchedule,
  setUserLogin,
} from "./booking.reducer";
export const LoginUser = (data) => async (dispatch) => {
  try {
    const resApi = await BookingApi.login(data);
    if (resApi.success) {
      dispatch(setUserLogin(resApi?.data?.result));
    } else {
      dispatch(setUserLogin({}));
    }
  } catch (err) {
    alert(err);
  }
};
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
export const getRegistrationData = () => async (dispatch) => {
  try {
    const resApi = await BookingApi.getRegistrationApi();
    if (resApi.success) {
      dispatch(setRegistration(resApi?.data));
    } else {
      dispatch(setRegistration([]));
    }
  } catch (err) {
    alert(err);
  }
};
export const getScheduleData = () => async (dispatch) => {
  try {
    const resApi = await BookingApi.getScheduleApi();
    if (resApi.success) {
      dispatch(setSchedule(resApi?.data));
    } else {
      dispatch(setSchedule([]));
    }
  } catch (err) {
    alert(err);
  }
};
export const getBookingListData = () => async (dispatch) => {
  try {
    const resApi = await BookingApi.getBookingListApi();
    if (resApi.success) {
      dispatch(setBookingList(resApi?.data));
    } else {
      dispatch(setBookingList([]));
    }
  } catch (err) {
    alert(err);
  }
};
export const ChangeCancelStatus = (id) => async (dispatch) => {
  try {
    const resApi = await BookingApi.CancelBooking(id);
    if (resApi.success) {
    } else {
    }
  } catch (err) {
    alert(err);
  }
};
