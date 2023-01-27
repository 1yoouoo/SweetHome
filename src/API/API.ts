import { logInType } from "./../types/APIType";
import axios from "axios";
import { signUpType } from "../types/APIType";
import { authInstance, defaultInstance } from "./customAPI";
const API_base = "http://192.168.35.126:80";
const API = {
  signUp: async ({ email, name, nickName, password }: signUpType) => {
    const response = await defaultInstance.post(`signup`, {
      email: email,
      nickName: nickName,
      name: name,
      password: password,
    });
    return response;
  },

  logIn: async ({ email, password }: logInType) => {
    const response = await defaultInstance.post(`login`, {
      email: email,
      password: password,
    });
    return response;
  },

  logOut: async (token: any) => {
    const response = await authInstance.post(`logout`, {
      token: token,
    });
    return response;
  },
  createPost: async ({ content }: any) => {
    const response = await authInstance.post(`post`, {
      content: content,
    });
    return response;
  },
  editPost: async ({ content, postId }: any) => {
    const response = await axios.put(`${API_base}/post/${postId}`, {
      content: content,
    });
    if (response.status === 200) {
      return response;
    } else {
      console.log("error", response?.status);
    }
  },
  deletePost: async ({ postId }: any) => {
    const response = await axios.delete(`${API_base}/comment/${postId}`, {
      // postId: postId,
    });
    if (response.status === 200) {
      return response;
    } else {
      console.log("error", response?.status);
    }
  },
  clickedLike: async ({ postId }: any) => {
    const response = await axios.post(`${API_base}/post/${postId}/toggle`, {
      postId: postId,
    });
    if (response.status === 200) {
      return response;
    } else {
      console.log("error", response?.status);
    }
  },
  createComment: async ({ content, postId }: any) => {
    const response = await axios.post(`${API_base}/post/${postId}/comment`, {
      postId: postId,
      content: content,
    });
    if (response.status === 200) {
      return response;
    } else {
      console.log("error", response?.status);
    }
  },
  editComment: async ({ commentId, content }: any) => {
    const response = await axios.put(`${API_base}/comment/${commentId}`, {
      commentId: commentId,
      content: content,
    });
    if (response.status === 200) {
      return response;
    } else {
      console.log("error", response?.status);
    }
  },
  deleteComment: async ({ commentId }: any) => {
    const response = await axios.delete(`${API_base}/comment/${commentId}`, {
      // commentId: commentId,
    });
    if (response.status === 200) {
      return response;
    } else {
      console.log("error", response?.status);
    }
  },
};
export default API;
