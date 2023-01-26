import { logInType } from "./../types/APIType";
import axios from "axios";
import { signUpType } from "../types/APIType";
import { defaultInstance } from "./customAPI";
const API_base = "http://192.168.35.126:80";
const API = {
  test: async ({ email, name, nickName, password }: signUpType) => {
    const data = await defaultInstance.post(`signup`, {
      email: email,
      nickName: nickName,
      name: name,
      password: password,
    });
    if (data.status === 200) {
      return data.data;
    } else {
      console.log("error", data?.status);
    }
  },

  signUp: async ({ email, name, nickName, password }: signUpType) => {
    const response = await axios.post(`${API_base}/signup`, {
      email: email,
      nickName: nickName,
      name: name,
      password: password,
    });
    console.log(response.data);
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("error", response?.status);
    }
  },
  logIn: async ({ email, password }: logInType) => {
    const data = await axios.post(`${API_base}/login`, {
      email: email,
      password: password,
    });
    console.log(data);
    if (data.status === 200) {
      return data;
    } else {
      console.log("error", data?.status);
    }
  },
  logOut: async (token: any) => {
    const data = await axios.post(
      `${API_base}/logout`,
      { token: token },
      {
        headers: { token: token },
      }
    );
    if (data.status === 200) {
      return data;
    } else {
      console.log("error", data?.status);
    }
  },
  createPost: async ({ content, token }: any) => {
    const data = await axios.post(
      `${API_base}/post`,
      {
        content: content,
      },
      {
        headers: { token: token },
      }
    );
    if (data.status === 200) {
      return data;
    } else {
      console.log("error", data?.status);
    }
  },
  editPost: async ({ content, postId }: any) => {
    const data = await axios.put(`${API_base}/post/${postId}`, {
      content: content,
    });
    if (data.status === 200) {
      return data;
    } else {
      console.log("error", data?.status);
    }
  },
  deletePost: async ({ postId }: any) => {
    const data = await axios.delete(`${API_base}/comment/${postId}`, {
      // postId: postId,
    });
    if (data.status === 200) {
      return data;
    } else {
      console.log("error", data?.status);
    }
  },
  clickedLike: async ({ postId }: any) => {
    const data = await axios.post(`${API_base}/post/${postId}/toggle`, {
      postId: postId,
    });
    if (data.status === 200) {
      return data;
    } else {
      console.log("error", data?.status);
    }
  },
  createComment: async ({ content, postId }: any) => {
    const data = await axios.post(`${API_base}/post/${postId}/comment`, {
      postId: postId,
      content: content,
    });
    if (data.status === 200) {
      return data;
    } else {
      console.log("error", data?.status);
    }
  },
  editComment: async ({ commentId, content }: any) => {
    const data = await axios.put(`${API_base}/comment/${commentId}`, {
      commentId: commentId,
      content: content,
    });
    if (data.status === 200) {
      return data;
    } else {
      console.log("error", data?.status);
    }
  },
  deleteComment: async ({ commentId }: any) => {
    const data = await axios.delete(`${API_base}/comment/${commentId}`, {
      // commentId: commentId,
    });
    if (data.status === 200) {
      return data;
    } else {
      console.log("error", data?.status);
    }
  },
};
export default API;
