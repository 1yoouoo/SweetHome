import SingleDotSvg from "../../Assets/SVG/SingleDotSvg";
import "./PostComment.scss";
import SmallHeartSvg from "../../Assets/SVG/SmallHeartSvg";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import { CommentType } from "../AddComment/AddComment";
import EllipsisSvg from "../../Assets/SVG/EllipsisSvg";
import { useState } from "react";
import API from "../../API/API";
import { timeFormat } from "../../utills/function/function";
import { useRecoilState } from "recoil";
import { commentState } from "../../recoil/snsState";
import ReplyCommentView from "../../sass/styled-components/ReplyCommentView";
import ReplyComments from "../ReplyComments/ReplyComments";
interface PostCommentTypeProps {
  comment: CommentType;
}

const PostComment = ({ comment }: PostCommentTypeProps) => {
  const [comments, setComments] = useRecoilState<CommentType[]>(commentState);
  const [commentItem, setCommentItem] = useState(comment);
  const [activatedReplyComments, setActivatedReplyComments] =
    useState<any>(false);
  const [dotToggle, setDotToggle] = useState(false);
  const [editable, setEditable] = useState(false);
  const onToggleActivatedReplyComments = () => {
    setActivatedReplyComments(!activatedReplyComments);
  };
  const onClickViewReplies = () => {
    console.log("hi");
    onToggleActivatedReplyComments();
  };
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentItem({ ...commentItem, commentContent: e.target.value });
  };
  const onClickDot = () => {
    setDotToggle(!dotToggle);
  };
  const deleteComment = async () => {
    const response = await API.deleteComment({ commentId: comment.commentId });
    const success = response?.data.data != null;
    if (success) {
      alert(response?.data.data.message);
      setComments(
        comments.filter((item) => item.commentId !== comment.commentId)
      );
    } else {
      alert(response?.data.error.message);
    }
  };
  const onClickEdit = () => {
    setEditable(!editable);
  };
  const editComment = async () => {
    const response = await API.editComment({
      content: commentItem.commentContent,
      commentId: comment.commentId,
    });
    const success = response?.data.data != null;
    if (success) {
      setCommentItem({
        ...commentItem,
        commentContent: commentItem.commentContent,
      });
      setEditable(!editable);
    } else {
      alert(response?.data.error.message);
      setCommentItem({
        ...commentItem,
        commentContent: commentItem.commentContent,
      });
      setEditable(!editable);
    }
    console.log(commentItem);
  };
  return (
    <>
      <li className="PostComment">
        <span className="PostComment__wrapper">
          <span className="PostComment__left">
            <UserPhoto
              size="44px"
              userProfileImage={commentItem.userProfileImage}
            />
          </span>
          <div className="PostComment__center">
            <div className="PostComment__center--wrapper">
              <span className="PostComment__center--wrapper-username">
                {commentItem.nickName}
              </span>
              <span className="PostComment__center--wrapper-dot">
                <SingleDotSvg />
              </span>
              <span className="PostComment__center--wrapper-created-at">
                {timeFormat(commentItem.updatedAt)}
              </span>
            </div>
            <div className="PostComment__center--text">
              {editable ? (
                <span className="PostComment__center--edit">
                  <input
                    placeholder={commentItem.commentContent}
                    onChange={(e) => onChangeValue(e)}
                  />
                  <button onClick={editComment}>완료</button>
                </span>
              ) : (
                commentItem.commentContent
              )}
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
            <span className={dotToggle ? "activated_dot" : "hidden_dot"}>
              <span onClick={onClickEdit}>수정</span>
              <span onClick={deleteComment}>삭제</span>
            </span>
            <EllipsisSvg />
          </span>
        </span>
      </li>
      {comment.hasReComment && (
        <div className="ReplyComment__wrapper">
          <ReplyCommentView
            replySize={comment.reCommentSize}
            onClickViewReplies={onClickViewReplies}
            onToggleActivatedReplyComments={onToggleActivatedReplyComments}
            activatedReplyComments={activatedReplyComments}
          />
          {activatedReplyComments && <ReplyComments />}
        </div>
      )}
    </>
  );
};

export default PostComment;
