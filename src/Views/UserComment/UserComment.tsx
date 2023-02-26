import SingleDotSvg from "../../Assets/SVG/SingleDotSvg";
import { timeFormat } from "../../utills/function/function";
import "./UserComment.scss";
export interface clickedPostTypeProps {
  postData: postData;
}
interface postData {
  nickName: string;
  updatedAt: string;
  content: string;
}
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
