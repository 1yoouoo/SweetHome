import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import CirclePlus from "../../Assets/SVG/CirclePlus";
import { CommentType } from "../../Components/AddComment/AddComment";
import PostComment from "../../Components/PostComment/PostComment";
import { commentState } from "../../recoil/snsState";
import "./PostComments.scss";

export interface deleteCommentStateTypeProps {
  commentId: number;
}
interface PostCommentsProps {
  isLastPage?: boolean;
  getMoreComments?: () => void;
}
const PostComments = ({ isLastPage, getMoreComments }: PostCommentsProps) => {
  const comments = useRecoilValue<CommentType[]>(commentState);
  useEffect(() => {
    console.log("PostComments Mount!");
  }, [comments]);
  return (
    <ul className="PostComments">
      {comments?.map((comment: CommentType) => {
        return <PostComment comment={comment} key={comment.commentId} />;
      })}
      {isLastPage && (
        <div className="PostComments__plus" onClick={getMoreComments}>
          <CirclePlus />
        </div>
      )}
    </ul>
  );
};

export default PostComments;
