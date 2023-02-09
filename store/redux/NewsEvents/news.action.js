import NewsApi from "./news.api";
import { setNewsList } from "./news.reducer";

export const getNewData = () => async (dispatch) => {
  try {
    const resApi = await NewsApi.getNewAPI();
    if (resApi.success) {
      const data = resApi?.data?.filter(
        (x) => x.status === true && x.newsfeed === true
      );
      dispatch(setNewsList(data));
    } else {
      dispatch(setNewsList([]));
    }
  } catch (err) {
    alert(err);
  }
};
