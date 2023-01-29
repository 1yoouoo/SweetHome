import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import API from "../../API/API";
import { commentState } from "../../recoil/snsState";
import { CommentType } from "../../Components/AddComment/AddComment";
import PostComment from "../../Components/PostComment/PostComment";
import "./PostComments.scss";

export interface deleteCommentStateTypeProps {
  commentId: number;
}

const PostComments = () => {
  const { postId } = useParams();
  const [comments, setComments] = useRecoilState<CommentType[]>(commentState);
  const deleteCommentState = ({ commentId }: deleteCommentStateTypeProps) => {
    setComments(comments.filter((comment) => comment.commentId !== commentId));
  };
  useEffect(() => {
    const getComments = async () => {
      const response = await API.getComments({ postId });
      const res = response?.data.data.postCommentResponse.commentResponses;
      setComments(res);
    };
    console.log("useEffect. PostComments!");
    getComments();
  }, []);
  console.log(comments);
  return (
    <ul className="PostComments">
      {comments?.map((comment: CommentType) => {
        return (
          <PostComment
            comment={comment}
            key={comment.commentId}
            deleteCommentState={deleteCommentState}
          />
        );
      })}
    </ul>
  );
};

export default PostComments;
