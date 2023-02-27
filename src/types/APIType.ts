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
  postId?: number;
  commentId?: number;
  reCommentId?: number;
};
export type commentsType = {
  postId?: string | number;
  commentId?: number;
  content?: string;
  reCommentId?: number;
};
export type followType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userId: any;
  lastId?: number;
  page?: number;
};
export type postsType = {
  lastPostId: number;
};
export type userProfileType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userId: any;
  lastPostId?: number;
  userName?: string;
  nickName?: string;
  content?: string;
};
export type userProfileImageType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userId: any;
  formData: object;
};
