import { useRecoilState } from "recoil";
import { commentState } from "../../recoil/snsState";
import { CommentType } from "../../Components/AddComment/AddComment";
import PostComment from "../../Components/PostComment/PostComment";
import "./PostComments.scss";

export interface deleteCommentStateTypeProps {
  commentId: number;
}

const PostComments = () => {
  const [comments, setComments] = useRecoilState<CommentType[]>(commentState);
  const deleteCommentState = ({ commentId }: deleteCommentStateTypeProps) => {
    setComments(comments.filter((comment) => comment.commentId !== commentId));
  };
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
