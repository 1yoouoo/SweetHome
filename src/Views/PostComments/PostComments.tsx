import PostComment from "../PostComment/PostComment";
import "./PostComments.scss";

const PostComments = ({ postComments }: any) => {
  console.log("comments", postComments);
  return (
    <ul className="PostComments">
      <PostComment />
    </ul>
  );
};

export default PostComments;
