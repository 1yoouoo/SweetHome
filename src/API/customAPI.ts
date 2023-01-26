import axios from "axios";

const API_base = "http://192.168.35.126:80";

const axiosApi = ({ options }: any) => {
  const instance = axios.create({
    baseURL: "http://192.168.35.126:80/",
    ...options,
  });
  return instance;
};

const axiosAuthApi = ({ options }: any) => {
  const token = localStorage.getItem("token");
  const instance = axios.create({
    baseURL: "http://192.168.35.126:80/",
    ...options,
    headers: {
      token: token,
    },
    ...options,
  });
  return instance;
};

export const defaultInstance = axiosApi(API_base);
export const authInstance = axiosAuthApi(API_base);
