import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import API from "../../API/API";
import AddComment from "../../Components/AddComment/AddComment";
import { commentState } from "../../recoil/snsState";
import PostComments from "../../Views/PostComments/PostComments";
import PostContent from "../../Views/PostContent/PostContent";
import CurrentHeader from "../../Views/UserHeader/CurrentHeader";
import "./PostDetail.scss";
export interface postType {
  nickName?: string;
  postContent?: string;
  updatedAt?: string;
  userProfileImage?: string;
}
export interface clickedPostTypeProps {
  post: any | null;
  setPost?: any;
}
const PostDetail = () => {
  const { postId } = useParams<string>();
  const [post, setPost] = useState<AxiosResponse | postType>({
    nickName: "",
    postContent: "",
    updatedAt: "",
    userProfileImage: "",
  });
  const setComments = useSetRecoilState(commentState);
  useEffect(() => {
    const getUserApi = async () => {
      const response = await API.getComments({ postId });
      console.log("check", response);
      setPost({
        nickName: response?.data.data.postCommentResponse.nickName,
        postContent: response?.data.data.postCommentResponse.postContent,
        updatedAt: response?.data.data.postCommentResponse.updatedAt,
        userProfileImage:
          response?.data.data.postCommentResponse.userProfileImage,
      });
      console.log("post", post);
      setComments(response?.data.data.postCommentResponse.commentResponses);
    };
    getUserApi();
  }, []);
  return (
    <div className="PostDetail">
      <CurrentHeader current="댓글" />
      <PostContent post={post} />
      <PostComments />
      <AddComment />
    </div>
  );
};

export default PostDetail;
