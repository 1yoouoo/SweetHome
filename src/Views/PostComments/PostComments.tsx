import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../API/API";
import { clickedPostTypeProps } from "../../Pages/PostDetail/PostDetail";
import PostComment from "../PostComment/PostComment";
import { commentType } from "../PostList/PostList";
import "./PostComments.scss";

const PostComments = () => {
  const { postId } = useParams();
  const [comments, setComments] = useState<AxiosResponse | null>();

  useEffect(() => {
    const getUserApi = async () => {
      const response = await API.getComments({ postId });
      setComments(response?.data.data.postDetailResponse);
      console.log("comments", response);
    };
    getUserApi();
  }, []);
  return (
    <ul className="PostComments">
      {/* {comments?.map((comment: commentType) => {
        return (
          <PostComment comment={comment} key={comment.commentId} />
        );
      })} */}
    </ul>
  );
};

export default PostComments;
