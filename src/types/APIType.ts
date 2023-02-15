export type signUpType = {
  formData: object;
};
export type logInType = {
  email?: string;
  password?: string;
};
export type createPostType = {
  formDataToServer: object;
};
export type postType = {
  postId?: number | string;
  content?: string;
  formData?: never;
};
export type likeType = {
  postId: number;
};
export type commentsType = {
  postId?: string | number;
  commentId?: number;
  content?: string;
  reCommentId?: number;
};
export type followType = {
  userId: number;
};
