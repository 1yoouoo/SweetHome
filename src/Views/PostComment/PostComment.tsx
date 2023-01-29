import SingleDotSvg from "../../Assets/SVG/SingleDotSvg";
import "./PostComment.scss";
import SmallHeartSvg from "../../Assets/SVG/SmallHeartSvg";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import { CommentType } from "../../Components/AddComment/AddComment";
import EllipsisSvg from "../../Assets/SVG/EllipsisSvg";
import { useState } from "react";
import API from "../../API/API";
interface PostCommentTypeProps {
  comment: CommentType;
}
const PostComment = ({ comment }: PostCommentTypeProps) => {
  const [dotToggle, setDotToggle] = useState(false);
  const onClickDot = () => {
    setDotToggle(!dotToggle);
    console.log(comment.commentId);
  };
  const deleteComment = async () => {
    const response = await API.deleteComment({ commentId: comment.commentId });
    alert(response?.data.data.message);
  };
  return (
    <li className="PostComment">
      <span className="PostComment__wrapper">
        <span className="PostComment__left">
          <UserPhoto size="44px" />
        </span>
        <div className="PostComment__center">
          <div className="PostComment__center--wrapper">
            <span className="PostComment__center--wrapper-username">
              {comment.nickName}
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
        <span className="PostComment__right--dot" onClick={onClickDot}>
          <EllipsisSvg />
          <span className={dotToggle ? "activated_dot" : "hidden_dot"}>
            <span onClick={() => console.log("수정")}>수정</span>
            <span onClick={deleteComment}>삭제</span>
          </span>
        </span>
      </span>
    </li>
  );
};

export default PostComment;
