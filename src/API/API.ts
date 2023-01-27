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
    const response = await authInstance.put(`post/${postId}`, {
      content: content,
    });
    return response;
  },

  deletePost: async ({ postId }: any) => {
    const response = await authInstance.delete(`comment/${postId}`);
    return response;
  },

  clickedLike: async ({ postId }: any) => {
    const response = await authInstance.post(`${postId}/like`, {
      postId: postId,
    });
    return response;
  },
  clickedUnLike: async ({ postId }: any) => {
    const response = await authInstance.delete(`${postId}/unlike`);
    return response;
  },
  getComments: async ({ postId }: any) => {
    const response = await authInstance.get(`post/${postId}/comments`);
    return response;
  },

  createComment: async ({ content, postId }: any) => {
    const response = await authInstance.post(`${postId}/comment`, {
      postId: postId,
      content: content,
    });
    return response;
  },

  editComment: async ({ commentId, content }: any) => {
    const response = await authInstance.post(`comment/${commentId}`, {
      commentId: commentId,
      content: content,
    });
    return response;
  },

  deleteComment: async ({ commentId }: any) => {
    const response = await authInstance.delete(`comment/${commentId}`);
    return response;
  },

  getPost: async ({ postId }: any) => {
    const response = await authInstance.get(`post/${postId}`);
    return response;
  },
};

export default API;
