import SmallHeartSvg from "../../Assets/SVG/SmallHeartSvg";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import { timeFormat } from "../../utills/function/function";
import { ReplyCommentType } from "../ReplyComments/ReplyComments";
import "./ReplyComment.scss";
interface ReplyCommentTypeProps {
  replyComment: ReplyCommentType;
}

function ReplyComment({ replyComment }: ReplyCommentTypeProps) {
  return (
    <li className="ReplyComment">
      <span className="ReplyComment__wrapper">
        <span className="ReplyComment__left">
          <UserPhoto
            size="44px"
            userProfileImage={replyComment.userProfileImageUrl}
          />
        </span>
        <div className="ReplyComment__center">
          <div className="ReplyComment__center--wrapper">
            <b className="ReplyComment__center--wrapper-username">
              {replyComment.nickName}
            </b>
            <div className="ReplyComment__center--text">
              {replyComment.content}
            </div>
          </div>
          <span className="ReplyComment__center--comment-created-at">
            {timeFormat(replyComment.updatedAt)}
          </span>
        </div>
      </span>
      <span className="ReplyComment__right">
        <SmallHeartSvg />
      </span>
    </li>
  );
}

export default ReplyComment;
