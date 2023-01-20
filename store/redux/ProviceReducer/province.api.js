import provinceAxios from "../../../clientAxios/province";

const getProvinceAPI = async () => {
  try {
    const resApi = await provinceAxios.get();
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
// const getDistricByProvinceAPI = async (code) => {
//   try {
//     const resApi = await provinceAxios.get(
//       `/districts/getByProvince?provinceCode=${code}&limit=-1`
//     );
//     if (resApi)
//       return {
//         success: true,
//         data: resApi,
//       };
//     return {
//       success: false,
//       data: null,
//     };
//   } catch (err) {
//     console.log(err);
//     return {
//       success: false,
//       data: null,
//     };
//   }
// };
// const getWardByDistrictAPI = async (code) => {
//   try {
//     const resApi = await provinceAxios.get(
//       `/wards/getByDistrict?districtCode=${code}&limit=-1`
//     );

//     if (resApi)
//       return {
//         success: true,
//         data: resApi,
//       };
//     return {
//       success: false,
//       data: null,
//     };
//   } catch (err) {
//     console.log(err);
//     return {
//       success: false,
//       data: null,
//     };
//   }
// };
const ProvinceApi = {
  getProvinceAPI,
  // getDistricByProvinceAPI,
  // getWardByDistrictAPI,
};
export default ProvinceApi;
