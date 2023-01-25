import { logInType } from "./../types/APIType";
import axios from "axios";
import { signUpType } from "../types/APIType";
const API_base = "http://192.168.35.126:80";

const API = {
  signUp: async ({ email, name, nickName, password }: signUpType) => {
    const data = await axios.post(`${API_base}/signup`, {
      email: email,
      nickName: nickName,
      name: name,
      password: password,
    });
    console.log(data.data);
    if (data.status === 200) {
      return data.data;
    } else {
      console.log("error", data?.status);
    }
  },
  logIn: async ({ email, password }: logInType) => {
    const data = await axios.post(`${API_base}/login`, {
      email: email,
      password: password,
    });
    console.log(data.data);
    if (data.status === 200) {
      return data.data;
    } else {
      console.log("error", data?.status);
    }
  },
};
export default API;
