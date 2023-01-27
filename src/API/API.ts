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
    console.log(response);
    if (response.status === 200) {
      return response;
    } else {
      console.log("error", response?.status);
    }
  },
  logOut: async (token: any) => {
    const response = await authInstance.post(`logout`, {
      token: token,
    });
    if (response.status === 200) {
      console.log(response);
      return response;
    } else {
      console.log("error", response?.status);
    }
  },
  createPost: async ({ content, token }: any) => {
    const response = await axios.post(
      `${API_base}/post`,
      {
        content: content,
      },
      {
        headers: { token: token },
      }
    );
    if (response.status === 200) {
      return response;
    } else {
      console.log("error", response?.status);
    }
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
