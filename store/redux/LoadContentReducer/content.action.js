import ContentApi from "./content.api";
import { setContentList } from "./content.reducer";

export const getContentData = () => async (dispatch) => {
  try {
    const resApi = await ContentApi.getContentAPI();
    if (resApi.success) {
      dispatch(setContentList(resApi?.data));
    } else {
      dispatch(setContentList([]));
    }
  } catch (err) {
    alert(err);
  }
};
