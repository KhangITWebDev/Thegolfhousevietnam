import NewsApi from "./news.api";
import { setNewsList } from "./news.reducer";

export const getNewData = () => async (dispatch) => {
  try {
    const resApi = await NewsApi.getNewAPI();
    if (resApi.success) {
      dispatch(setNewsList(resApi?.data));
    } else {
      dispatch(setNewsList([]));
    }
  } catch (err) {
    alert(err);
  }
};
