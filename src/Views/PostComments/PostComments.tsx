import { clickedPostTypeProps } from "../../Pages/PostDetail/PostDetail";
import PostComment from "../PostComment/PostComment";
import { commentType } from "../PostList/PostList";
import "./PostComments.scss";

const PostComments = ({ clickedPost }: clickedPostTypeProps) => {
  return (
    <ul className="PostComments">
      {clickedPost?.postComments.map((postComment: commentType) => {
        return (
          <PostComment postComment={postComment} key={postComment.commentId} />
        );
      })}
    </ul>
  );
};

export default PostComments;
