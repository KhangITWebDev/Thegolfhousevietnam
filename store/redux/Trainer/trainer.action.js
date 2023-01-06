import TrainersApi from "./trainer.api";
import { setTrainersList } from "./trainer.reducer";

export const getTrainerData = () => async (dispatch) => {
  try {
    const resApi = await TrainersApi.getTrainerAPI();
    if (resApi.success) {
      dispatch(setTrainersList(resApi?.data));
    } else {
      dispatch(setTrainersList([]));
    }
  } catch (err) {
    alert(err);
  }
};
