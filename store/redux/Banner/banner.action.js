import BannersApi from "./banner.api";
import { setBannersList } from "./banner.reducer";

export const getBannerData = () => async (dispatch) => {
	try {
		const resApi = await BannersApi.getBannerAPI();
		if (resApi?.success) {
			dispatch(setBannersList(resApi?.data));
		} else {
			dispatch(setBannersList([]));
		}
	} catch (err) {
		alert(err);
	}
};
