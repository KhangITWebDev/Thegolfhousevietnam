import axios from "axios";
import Cookies from "js-cookie";
import queryString from "query-string";
const fakeClientAxios = axios.create({
  baseURL: "https://lio-holding-api.vercel.app",
  timeout: 20000,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

fakeClientAxios.interceptors.request.use(
  (config) => {
    //Handle token here ...
    const token = Cookies.get("token");
    if (token) config.headers.authorization = `Bearer ${token}`;

    return config;
  },
  (err) => {
    console.error(err);
  }
);
fakeClientAxios.interceptors.response.use(
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

export default fakeClientAxios;
