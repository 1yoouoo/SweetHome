import SingleDotSvg from "../../Assets/SVG/SingleDotSvg";
import "./PostComment.scss";
import SmallHeartSvg from "../../Assets/SVG/SmallHeartSvg";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import { commentType } from "../PostList/PostList";
interface PostCommentTypeProps {
  comment: commentType;
}
const PostComment = ({ comment }: PostCommentTypeProps) => {
  return (
    <li className="PostComment">
      <span className="PostComment__wrapper">
        <span className="PostComment__left">
          <UserPhoto size="44px" />
        </span>

        <div className="PostComment__center">
          <div className="PostComment__center--wrapper">
            <span className="PostComment__center--wrapper-username">
              username
            </span>
            <span className="PostComment__center--wrapper-dot">
              <SingleDotSvg />
            </span>
            <span className="PostComment__center--wrapper-created-at">
              1시간
            </span>
          </div>
          <div className="PostComment__center--text">
            {comment?.commentContent}
          </div>
          <div className="PostComment__center--comment">
            <span className="PostComment__center--comment-like">좋아요</span>
            <span className="PostComment__center--comment-recomment">
              답글달기
            </span>
          </div>
        </div>
      </span>
      <span className="PostComment__right">
        <SmallHeartSvg />
      </span>
    </li>
  );
};

export default PostComment;
