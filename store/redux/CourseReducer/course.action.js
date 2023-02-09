import CourseAPI from "./course.api";
import { setCourseList, setUserRegister } from "./course.reducer";

export const getCourseData = () => async (dispatch) => {
  try {
    const resApi = await CourseAPI.getCourseAPI();
    if (resApi.success) {
      dispatch(setCourseList(resApi?.data));
    } else {
      dispatch(setCourseList([]));
    }
  } catch (err) {
    alert(err);
  }
};
export const getUserRegisterData = () => async (dispatch) => {
  try {
    const resApi = await CourseAPI.getUsersRegister();
    if (resApi.success) {
      dispatch(setUserRegister(resApi?.data));
    } else {
      dispatch(setUserRegister([]));
    }
  } catch (err) {
    alert(err);
  }
};
export const PostSignTrial = (value) => async (dispatch) => {
  try {
    const resApi = await CourseAPI.postUsersRegister(value);
    if (resApi.success) {
    } else {
    }
  } catch (err) {
    alert(err);
  }
};
