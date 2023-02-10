import {
  commentsType,
  createPostType,
  followType,
  likeType,
  logInType,
  postType,
} from "./../types/APIType";
import { signUpType } from "../types/APIType";
import {
  authFormDataInstance,
  authInstance,
  defaultInstance,
  formDataInstance,
} from "./customAPI";
const API = {
  signUp: async ({ formData }: signUpType) => {
    const response = await formDataInstance.post(`signup`, formData);
    return response;
  },

  logIn: async ({ email, password }: logInType) => {
    const response = await defaultInstance.post(`login`, {
      email: email,
      password: password,
    });
    return response;
  },

  logOut: async () => {
    const response = await authInstance.post(`logout`);
    return response;
  },
  getPost: async ({ postId }: postType) => {
    const response = await authInstance.get(`post/${postId}`);
    return response;
  },

  createPost: async ({ formDataToServer }: createPostType) => {
    const response = await authFormDataInstance.post(`post`, formDataToServer);
    return response;
  },

  editPost: async ({ content, postId }: postType) => {
    const response = await authInstance.put(`post/${postId}`, {
      content: content,
    });
    return response;
  },

  deletePost: async ({ postId }: postType) => {
    const response = await authInstance.delete(`comment/${postId}`);
    return response;
  },

  clickedLike: async ({ postId }: likeType) => {
    const response = await authInstance.post(`${postId}/like`, {
      postId: postId,
    });
    return response;
  },
  clickedUnLike: async ({ postId }: likeType) => {
    const response = await authInstance.delete(`${postId}/unlike`);
    return response;
  },
  getComments: async ({ postId }: commentsType) => {
    const response = await authInstance.get(`post/${postId}/comments`);
    return response;
  },

  createComment: async ({ content, postId }: commentsType) => {
    const response = await authInstance.post(`${postId}/comment`, {
      postId: postId,
      content: content,
    });
    return response;
  },

  editComment: async ({ commentId, content }: commentsType) => {
    const response = await authInstance.put(`comment/${commentId}`, {
      commentId: commentId,
      content: content,
    });
    return response;
  },

  deleteComment: async ({ commentId }: commentsType) => {
    const response = await authInstance.delete(`comment/${commentId}`);
    return response;
  },

  follow: async ({ userId }: followType) => {
    const response = await authInstance.post(`${userId}/follow`);
    return response;
  },

  unFollow: async ({ userId }: followType) => {
    const response = await authInstance.delete(`${userId}/unfollow`);
    return response;
  },
  getUser: async ({ userId, page }: any) => {
    const response = await authInstance.get(`user/${userId}`, {
      params: { page: page },
    });
    return response;
  },
  getFollowings: async ({ userId, page }: any) => {
    const response = await authInstance.get(`/user/${userId}/following`, {
      params: { page: page },
    });
    return response;
  },
  getFollowers: async ({ userId, page }: any) => {
    const response = await authInstance.get(`/user/${userId}/follower`, {
      params: { page: page },
    });
    return response;
  },
};

export default API;
