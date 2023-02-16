import { useEffect } from "react";
import EllipsisSvg from "../../Assets/SVG/EllipsisSvg";
import SingleDotSvg from "../../Assets/SVG/SingleDotSvg";
import SmallHeartSvg from "../../Assets/SVG/SmallHeartSvg";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import { timeFormat } from "../../utills/function/function";
import "./ReplyComment.scss";

function ReplyComment({ replyComment }: any) {
  useEffect(() => {
    console.log(replyComment);
  }, []);

  return (
    <li className="PostComment">
      <span className="PostComment__wrapper">
        <span className="PostComment__left">
          <UserPhoto
            size="44px"
            userProfileImage={replyComment.userProfileImageUrl}
          />
        </span>
        <div className="PostComment__center">
          <div className="PostComment__center--wrapper">
            <span className="PostComment__center--wrapper-username">
              {replyComment.nickName}
            </span>
            <span className="PostComment__center--wrapper-dot">
              <SingleDotSvg />
            </span>
            <span className="PostComment__center--wrapper-created-at">
              {timeFormat(replyComment.updatedAt)}
            </span>
          </div>
          <div className="PostComment__center--text">
            {replyComment.content}
          </div>
        </div>
      </span>
      <span className="PostComment__right">
        <SmallHeartSvg />
        <span className="PostComment__right--dot">
          <EllipsisSvg />
        </span>
      </span>
    </li>
  );
}

export default ReplyComment;
