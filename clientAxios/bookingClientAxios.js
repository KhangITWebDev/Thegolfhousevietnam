import axios from "axios";
import Cookies from "js-cookie";
import queryString from "query-string";
const bookingClientAxios = axios.create({
  // baseURL: "https://lio-holding-api.vercel.app",
  // baseURL: process.env.API_URL,
  baseURL: "https://betatgh.fostech.vn",
  timeout: 20000,
  withCredentials: false,
  crossorigin: true,
  mode: "no-cors",
  headers: {
    // "content-type": "application/json",
    // "Access-Control-Allow-Origin": "*",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

bookingClientAxios.interceptors.request.use(
  (config) => {
    //Handle token here ...
    const token = Cookies.get("access_token");
    config.headers.authorization = `Bearer ${token}`;

    return config;
  },
  (err) => {
    console.error(err);
  }
);
bookingClientAxios.interceptors.response.use(
  (res) => {
    if (res && res.data) return res.data;
    return res;
  },
  (err) => {
    //Handle err
    // eslint-disable-next-line no-console
    console.error(err);
    // window.location.href = '/not-found';
  }
);

export default bookingClientAxios;
