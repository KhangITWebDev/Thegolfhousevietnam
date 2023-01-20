import ProvinceApi from "./province.api";
import { setDistrict, setProvince, setWard } from "./province.reducer";

export const getProvinceData = () => async (dispatch) => {
  try {
    const resApi = await ProvinceApi.getProvinceAPI();
    if (resApi.success) {
      dispatch(setProvince(resApi?.data));
    } else {
      dispatch(setProvince([]));
    }
  } catch (err) {
    alert(err);
  }
};
// export const getDistrictByProvinceData = (code) => async (dispatch) => {
//   try {
//     const resApi = await ProvinceApi.getDistricByProvinceAPI(code);
//     if (resApi.success) {
//       dispatch(setDistrict(resApi?.data?.data?.data));
//     } else {
//       dispatch(setDistrict([]));
//     }
//   } catch (err) {
//     alert(err);
//   }
// };
// export const getWardByDistrictData = (code) => async (dispatch) => {
//   try {
//     const resApi = await ProvinceApi.getWardByDistrictAPI(code);
//     if (resApi.success) {
//       dispatch(setWard(resApi?.data?.data?.data));
//     } else {
//       dispatch(setWard([]));
//     }
//   } catch (err) {
//     alert(err);
//   }
// };
