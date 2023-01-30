export type signUpType = {
  formData: object;
  // image_file: object;
  // preview_URL?: any;
  // email: string;
  // name: string;
  // nickName: string;
  // password: string;
};
export type logInType = {
  email: string;
  password: string;
};
export type postType = {
  postId?: number | string;
  content?: string;
};
export type likeType = {
  postId: number;
};
export type commentsType = {
  postId?: string | number;
  commentId?: number;
  content?: string;
};
export type followType = {
  userId: number;
};
