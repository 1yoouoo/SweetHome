export type LogoTypeProps = {
  width: string;
  height: string;
};

export type ButtonTypeProps = {
  width?: string;
  height?: string;
  backgroundColor: string;
  color?: string;
  content: string;
  onClickFollow?: any;
  userId?: any;
  isFollowing?: any;
  setIsFollowing?: React.Dispatch<any> | undefined;
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
