import trainerClientAxios from "../../../clientAxios/trainerClientAxios";

const getCourseAPI = async () => {
  try {
    const resApi = await trainerClientAxios.get(`academy/course`);
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
const postUsersAPI = async (data) => {
  try {
    const resApi = await fakeClientAxios.post("/users", data);
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
  postUsersAPI,
};
export default CourseAPI;
