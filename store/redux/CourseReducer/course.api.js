import ContentAxios from "../../../clientAxios/contentAxios";
const getCourseAPI = async () => {
  try {
    const resApi = await ContentAxios.get(
      `/course?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
    );
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
const postUsersRegister = async (data) => {
  try {
    const resApi = await ContentAxios.post(
      `/course_register?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`,
      data
    );
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
const CourseAPI = {
  getCourseAPI,
  postUsersRegister,
};
export default CourseAPI;
