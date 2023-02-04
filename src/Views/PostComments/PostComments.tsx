import { useRecoilValue } from "recoil";
import { CommentType } from "../../Components/AddComment/AddComment";
import PostComment from "../../Components/PostComment/PostComment";
import { commentState } from "../../recoil/snsState";
import "./PostComments.scss";

export interface deleteCommentStateTypeProps {
  commentId: number;
}

const PostComments = () => {
  const comments = useRecoilValue<CommentType[]>(commentState);

  return (
    <ul className="PostComments">
      {comments?.map((comment: CommentType) => {
        return <PostComment comment={comment} key={comment.commentId} />;
      })}
    </ul>
  );
};

export default PostComments;
