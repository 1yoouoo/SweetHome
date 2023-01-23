import PostComment from "../PostComment/PostComment";
import "./PostComments.scss";

const PostComments = ({ clickedPost }: any) => {
  console.log("comments", clickedPost);
  return (
    <ul className="PostComments">
      {clickedPost.postComments.map((postComment: any) => {
        return (
          <PostComment postComment={postComment} key={postComment.commentId} />
        );
      })}
    </ul>
  );
};

export default PostComments;
