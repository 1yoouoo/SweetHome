import SingleDotSvg from "../../Assets/SVG/SingleDotSvg";
import { clickedPostTypeProps } from "../../Pages/PostDetail/PostDetail";
import { timeFormat } from "../../utills/function/function";
import "./UserComment.scss";

const UserComment = ({ post }: clickedPostTypeProps) => {
  return (
    <div className="UserComment">
      <div className="UserComment__wrapper">
        <span className="UserComment__username">{post?.nickName}</span>
        <span className="UserComment__dot">
          <SingleDotSvg />
        </span>
        <span className="UserComment__created-at">
          {timeFormat(post?.updatedAt)}
        </span>
      </div>
      <div className="UserComment__text">{post?.postContent}</div>
      <div className="UserComment__comment">
        <span className="UserComment__comment--like">좋아요</span>
        <span className="UserComment__comment--recomment">답글달기</span>
      </div>
    </div>
  );
};

export default UserComment;
