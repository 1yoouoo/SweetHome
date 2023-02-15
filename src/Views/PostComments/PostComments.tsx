import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import CirclePlus from "../../Assets/SVG/CirclePlus";
import { CommentType } from "../../Components/AddComment/AddComment";
import PostComment from "../../Components/PostComment/PostComment";
import { commentState, selectedCommentState } from "../../recoil/snsState";
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
  const setSelectedComment = useSetRecoilState(selectedCommentState);
  useEffect(() => {
    console.log("post Comments Mount!");
    console.log(comments);
    return () =>
      setSelectedComment({
        commentId: "",
        nickName: "",
      });
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
