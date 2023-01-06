import fakeClientAxios from "../../../clientAxios/fakeClientAxios";

const getNewAPI = async () => {
	try {
		const resApi = await fakeClientAxios.get(
			`/news?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
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
const NewApi = {
  getNewAPI,
};
export default NewApi;
