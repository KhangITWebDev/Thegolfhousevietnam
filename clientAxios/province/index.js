import axios from "axios";
import Cookies from "js-cookie";
import queryString from "query-string";
const provinceAxios = axios.create({
  baseURL: "https://provinces.open-api.vn/api/?depth=3",
  timeout: 20000,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
provinceAxios.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) config.headers.authorization = `Bearer ${token}`;

    return config;
  },
  (err) => {
    console.error(err);
  }
);
provinceAxios.interceptors.response.use(
  (res) => {
    if (res && res.data) return res.data;
    return res;
  },
  (err) => {
    console.error(err);
  }
);
export default provinceAxios;
