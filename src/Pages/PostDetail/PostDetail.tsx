import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import API from "../../API/API";
import { postItemState } from "../../recoil/snsState";
import AddComment from "../../Views/AddComment/AddComment";
import PostComments from "../../Views/PostComments/PostComments";
import PostContent from "../../Views/PostContent/PostContent";
import { PostItemType } from "../../Views/PostList/PostList";
import CurrentHeader from "../../Views/UserHeader/CurrentHeader";
import "./PostDetail.scss";

export interface clickedPostTypeProps {
  post?: any;
  setPost?: any;
}
const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<AxiosResponse | null>(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getUserApi = async () => {
      const response = await API.getPost({ postId });
      setPost(response?.data.data.postDetailResponse);
    };
    getUserApi();
  }, []);
  return (
    <div className="PostDetail">
      <CurrentHeader current="댓글" />
      <PostContent post={post} />
      <PostComments comments={comments} setComments={setComments} />
      <AddComment comments={comments} setComments={setComments} />
    </div>
  );
};

export default PostDetail;
