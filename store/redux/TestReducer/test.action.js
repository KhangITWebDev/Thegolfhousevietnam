import testApi from "./test.api";

export const getIndex = () => async (dispatch) => {
  try {
    const resApi = await testApi.getIndex();
    if (resApi.success) {
      dispatch(setFoods(resApi?.data?.data));
    } else {
      dispatch(setFoods([]));
    }
  } catch (err) {
    alert(err);
  }
};
