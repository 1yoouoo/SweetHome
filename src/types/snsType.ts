export type LogoTypeProps = {
  width: string;
  height: string;
};

export type ButtonTypeProps = {
  width: string;
  height: string;
  backgroundColor: string;
  color: string;
  content: string;
  onClick?: any;
};

export interface SvgPropTypes {
  size: string;
}

export interface CommentsListType {
  commentResponses: any;
  nickName: string;
  postContent: string;
  postId: number;
  updatedAt: string;
  userProfileImage: string;
}
