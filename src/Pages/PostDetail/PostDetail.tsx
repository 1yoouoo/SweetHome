import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../API/API";
import AddComment from "../../Components/AddComment/AddComment";
import PostComments from "../../Views/PostComments/PostComments";
import PostContent from "../../Views/PostContent/PostContent";
import CurrentHeader from "../../Views/UserHeader/CurrentHeader";
import "./PostDetail.scss";

export interface clickedPostTypeProps {
  post?: any;
  setPost?: any;
}
const PostDetail = () => {
  const { postId } = useParams<string>();
  const [post, setPost] = useState<AxiosResponse | null>(null);

  useEffect(() => {
    const getUserApi = async () => {
      const response = await API.getPost({ postId });
      console.log("check", response);
      setPost(response?.data.data.postDetailResponse);
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
