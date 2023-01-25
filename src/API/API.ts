import axios from "axios";
import { signUpType } from "../types/APIType";
const API_base = "http://192.168.35.126:80";

const API = {
  signUp: async ({ email, name, nickName, password }: signUpType) => {
    // signUp: async (email: any, name: any, nickName: any, password: any) => {
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
};
export default API;
