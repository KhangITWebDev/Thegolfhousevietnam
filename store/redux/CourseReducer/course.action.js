import CourseAPI from "./course.api";
import { setCourseList } from "./course.reducer";

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
