/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const API_base = "http://192.168.35.126";
const token = localStorage.getItem("token");
// interface requestType {
//   baseURL: string;
//   options: AxiosInstance;
// }
const axiosApi = ({ options }: any) => {
  const instance = axios.create({
    baseURL: API_base,
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
  instance.defaults.timeout = 10000;
  return instance;
};

const axiosAuthApi = ({ options }: any) => {
  const instance = axios.create({
    baseURL: API_base,
    ...options,
    headers: {
      token: token,
    },
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
  instance.defaults.timeout = 10000;
  return instance;
};

const axiosFormDataApi = ({ options }: any) => {
  const instance = axios.create({
    baseURL: API_base,
    ...options,
    headers: {
      "Content-Type": "multipart/form-data",
    },
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
  instance.defaults.timeout = 10000;
  return instance;
};

const axiosAuthFormDataApi = ({ options }: any) => {
  const instance = axios.create({
    baseURL: API_base,
    ...options,
    headers: {
      token: token,
      "Content-Type": "multipart/form-data",
    },
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
  instance.defaults.timeout = 10000;
  return instance;
};

export const defaultInstance = axiosApi(API_base);
export const authInstance = axiosAuthApi(API_base);
export const formDataInstance = axiosFormDataApi(API_base);
export const authFormDataInstance = axiosAuthFormDataApi(API_base);
