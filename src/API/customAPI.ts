import axios from "axios";

const API_base = "http://192.168.35.126:80";

const axiosApi = ({ options }: any) => {
  const instance = axios.create({
    baseURL: "http://192.168.35.126:80/",
    ...options,
  });
  instance.interceptors.response.use(
    function (response) {
      console.log("interceptor > response", response);
      return response;
    },
    function (error) {
      console.log("interceptor > error", error);
      return Promise.reject(error);
    }
  );
  instance.interceptors.request.use(
    function (request) {
      console.log("interceptor > request", request);
      return request;
    },
    function (error) {
      console.log("interceptor > error", error);
      return Promise.reject(error);
    }
  );
  return instance;
};

const axiosAuthApi = ({ options }: any) => {
  const instance = axios.create({
    baseURL: "http://192.168.35.126:80/",
    ...options,
  });
  instance.interceptors.response.use(
    function (response) {
      console.log("interceptor > response", response);
      return response;
    },
    function (error) {
      console.log("interceptor > error", error);
      return Promise.reject(error);
    }
  );
  instance.interceptors.request.use(
    function (request) {
      console.log("interceptor > request", request);
      const token = localStorage.getItem("token");
      if (token) {
        request.headers["token"] = token;
      }
      return request;
    },
    function (error) {
      console.log("interceptor > error", error);
      return Promise.reject(error);
    }
  );
  return instance;
};

export const defaultInstance = axiosApi(API_base);
export const authInstance = axiosAuthApi(API_base);
