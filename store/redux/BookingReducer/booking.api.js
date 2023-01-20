import bookingClientAxios from "../../../clientAxios/bookingClientAxios";

const getLocationApi = async () => {
  try {
    const resApi = await bookingClientAxios.get(
      `/restapi/1.0/object/academy.location`
    );
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
const BookingApi = {
  getLocationApi,
};
export default BookingApi;
