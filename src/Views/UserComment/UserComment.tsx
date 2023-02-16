import SingleDotSvg from "../../Assets/SVG/SingleDotSvg";
import { clickedPostTypeProps } from "../../Pages/PostDetail/PostDetail";
import { timeFormat } from "../../utills/function/function";
import "./UserComment.scss";

const UserComment = ({ postData }: clickedPostTypeProps) => {
  return (
    <div className="UserComment">
      <div className="UserComment__wrapper">
        <span className="UserComment__username">{postData?.nickName}</span>
        <span className="UserComment__dot">
          <SingleDotSvg />
        </span>
        <span className="UserComment__created-at">
          {timeFormat(postData?.updatedAt)}
        </span>
      </div>
      <div className="UserComment__text">{postData?.content}</div>
    </div>
  );
};

export default UserComment;
