import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../API/API";
import { clickedPostTypeProps } from "../../Pages/PostDetail/PostDetail";
import PostComment from "../PostComment/PostComment";
import { commentType } from "../PostList/PostList";
import "./PostComments.scss";

const PostComments = ({ comments, setComments }: any) => {
  const { postId } = useParams();

  useEffect(() => {
    const getComments = async () => {
      const response = await API.getComments({ postId });
      const res = response?.data.data.postCommentResponse.commentResponses;
      setComments(res);
    };
    getComments();
  }, []);
  return (
    <ul className="PostComments">
      {comments?.map((comment: commentType) => {
        return <PostComment comment={comment} key={comment.commentId} />;
      })}
    </ul>
  );
};

export default PostComments;
