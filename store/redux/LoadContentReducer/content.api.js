import ContentAxios from "../../../clientAxios/contentAxios";

const getContentAPI = async () => {
  try {
    const resApi = await ContentAxios.get(
      `/contents?limit=500&page=1&access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
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
const ContentApi = {
  getContentAPI,
};
export default ContentApi;
