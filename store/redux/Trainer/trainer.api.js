import trainerClientAxios from "../../../clientAxios/trainerClientAxios";

const getTrainerAPI = async () => {
	try {
		const resApi = await trainerClientAxios.get(
			`/restapi/1.0/object/academy.trainer`
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
const TrainerApi = {
	getTrainerAPI,
};
export default TrainerApi;
