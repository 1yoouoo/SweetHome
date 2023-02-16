import { useEffect } from "react";
import EllipsisSvg from "../../Assets/SVG/EllipsisSvg";
import SingleDotSvg from "../../Assets/SVG/SingleDotSvg";
import SmallHeartSvg from "../../Assets/SVG/SmallHeartSvg";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import { timeFormat } from "../../utills/function/function";
import "./ReplyComment.scss";

function ReplyComment({ replyComment }: any) {
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
