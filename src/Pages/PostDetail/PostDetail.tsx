import ChevronLeftSvg from "../../Assets/SVG/ChevronLeftSvg";
import PostComments from "../../Views/PostComment/PostComments";
import PostContent from "../../Views/PostContent/PostContent";
import CurrentHeader from "../../Views/UserHeader/CurrentHeader";
import "./PostDetail.scss";

const PostDetail = () => {
  const current = "댓글";
  return (
    <div className="PostDetail">
      <CurrentHeader current={current} />
      <ChevronLeftSvg />
      <PostContent />
      <PostComments />
    </div>
  );
};

export default PostDetail;
