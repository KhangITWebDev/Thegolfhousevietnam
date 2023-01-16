import axios from "axios";
import Cookies from "js-cookie";
import queryString from "query-string";
const loginClientAxios = axios.create({
  // baseURL: "https://lio-holding-api.vercel.app",
  // baseURL: process.env.API_URL,
  baseURL: "https://betatgh.fostech.vn",
  timeout: 20000,
  headers: {
    // "content-type": "application/json",
    // "Access-Control-Allow-Origin": "*",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

loginClientAxios.interceptors.request.use(
  (config) => {
    //Handle token here ...
    // config.headers.authorization = `Bearer INZUJvYkwC4kwQYoAl7wZffBfRkTbR9F`;

    return config;
  },
  (err) => {
    console.error(err);
  }
);
loginClientAxios.interceptors.response.use(
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

export default loginClientAxios;
