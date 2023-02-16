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
  getPosts: async ({ lastPostId }: any) => {
    const response = await authInstance.get(`posts`, {
      params: { postId: lastPostId },
    });
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
    const response = await authInstance.delete(`post/${postId}`);
    return response;
  },

  clickedLike: async ({ postId }: likeType) => {
    const response = await authInstance.post(`post/${postId}/like`, {
      postId: postId,
    });
    return response;
  },
  clickedUnLike: async ({ postId }: likeType) => {
    const response = await authInstance.delete(`post/${postId}/unlike`);
    return response;
  },
  // 댓글
  getComments: async ({ postId, commentId }: commentsType) => {
    const response = await authInstance.get(`post/${postId}/comments`, {
      params: { commentId: commentId },
    });
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
  // 대댓글
  getReplyComments: async ({ commentId, reCommentId }: commentsType) => {
    const response = await authInstance.get(`comment/${commentId}/recomments`, {
      params: { reCommentId: reCommentId },
    });
    return response;
  },
  createReplyComment: async ({ content, commentId }: commentsType) => {
    const response = await authInstance.post(`comment/${commentId}/recomment`, {
      commentId: commentId,
      content: content,
    });
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
  getUserProfile: async ({ userId, lastPostId }: any) => {
    const response = await authInstance.get(`user/${userId}`, {
      params: { postId: lastPostId },
    });
    return response;
  },
  getFollowings: async ({ userId, lastId }: any) => {
    const response = await authInstance.get(`/user/${userId}/following`, {
      params: { lastId: lastId },
    });
    return response;
  },
  getFollowers: async ({ userId, lastId }: any) => {
    const response = await authInstance.get(`/user/${userId}/follower`, {
      params: { lastId: lastId },
    });
    return response;
  },
};

export default API;
