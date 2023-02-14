import axios from "axios";
import Cookies from "js-cookie";
import queryString from "query-string";
const bookingClientAxios = axios.create({
  // baseURL: "https://lio-holding-api.vercel.app",
  // baseURL: process.env.API_URL,
  baseURL: "https://betatgh.fostech.vn",
  timeout: 20000,
  mode: "cors",
  headers: {
    // "Access-Control-Allow-Methods": "GET, POST",
    // "Access-Control-Allow-Origin": "*",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

bookingClientAxios.interceptors.request.use(
  (config) => {
    const token = Cookies.get("access_token");
    config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  (err) => {
    // console.error(err);
  }
);
bookingClientAxios.interceptors.response.use(
  (res) => {
    if (res && res.data) return res.data;
    return res;
  },
  (err) => {
    // console.error(err);
  }
);

export default bookingClientAxios;
