import SingleDotSvg from "../../Assets/SVG/SingleDotSvg";
import "./PostComment.scss";
import SmallHeartSvg from "../../Assets/SVG/SmallHeartSvg";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import { CommentType } from "../AddComment/AddComment";
import EllipsisSvg from "../../Assets/SVG/EllipsisSvg";
import { useEffect, useState } from "react";
import API from "../../API/API";
import { timeFormat } from "../../utills/function/function";
import { useRecoilState, useSetRecoilState } from "recoil";
import { commentState, selectedCommentState } from "../../recoil/snsState";
import ReplyCommentView from "../../sass/styled-components/ReplyCommentView";
import ReplyComments from "../ReplyComments/ReplyComments";
import SmallHeartActivedSvg from "../../Assets/SVG/SmallHeartActivedSvg";
interface PostCommentTypeProps {
  comment: CommentType;
}

const PostComment = ({ comment }: PostCommentTypeProps) => {
  const [comments, setComments] = useRecoilState<CommentType[]>(commentState);
  const [commentItem, setCommentItem] = useState(comment);
  const [activatedReplyComments, setActivatedReplyComments] =
    useState<any>(false);
  const [dotToggle, setDotToggle] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(0);
  const [editable, setEditable] = useState(false);
  const [heartToggle, setHeartToggle] = useState(false);
  const setSelectedComment = useSetRecoilState(selectedCommentState);
  const onToggleActivatedReplyComments = () => {
    setActivatedReplyComments(!activatedReplyComments);
  };
  const onClickViewReplies = () => {
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
  };
  const onClickReply = () => {
    setSelectedComment({
      commentId: comment.commentId,
      nickName: comment.nickName,
      isReply: true,
    });
  };
  const like = async () => {
    const response = await API.commentLike({
      commentId: comment.commentId,
    });
    if (response?.data.error === null) {
      setHeartToggle(!heartToggle);
      setLikes(heartToggle ? likes - 1 : likes + 1);
    } else {
      alert(response?.data.error.message);
    }
  };
  const unLike = async () => {
    const response = await API.commentUnLike({
      commentId: comment.commentId,
    });
    if (response?.data.error === null) {
      setHeartToggle(!heartToggle);
      setLikes(heartToggle ? likes - 1 : likes + 1);
    } else {
      alert(response?.data.error.message);
    }
  };
  const onClickHeart = async () => {
    heartToggle ? unLike() : like();
  };
  useEffect(() => {
    setActivatedReplyComments(false);
  }, [comments]);
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
              <b className="PostComment__center--wrapper-username">
                {commentItem.nickName}
              </b>
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
            </div>
            <div className="PostComment__center--comment">
              {/* {comment.likeSize != 0 && 좋아요 표시} */}
              {/* <span className="PostComment__center--comment-like">1 Likes</span> */}
              <span className="PostComment__center--comment-created-at">
                {timeFormat(commentItem.updatedAt)}
              </span>
              <span
                className="PostComment__center--comment-recomment"
                onClick={onClickReply}
              >
                Reply
              </span>
              <span className="PostComment__center--comment-ellipsis">
                <EllipsisSvg />
              </span>
            </div>
          </div>
        </span>
        <span className="PostComment__right">
          {heartToggle ? (
            <SmallHeartActivedSvg onClickHeart={onClickHeart} />
          ) : (
            <SmallHeartSvg onClickHeart={onClickHeart} />
          )}
          <span className="PostComment__right--dot" onClick={onClickDot}>
            <span className={dotToggle ? "activated_dot" : "hidden_dot"}>
              <span onClick={onClickEdit}>수정</span>
              <span onClick={deleteComment}>삭제</span>
            </span>
          </span>
        </span>
      </li>
      {comment.reCommentSize != 0 && (
        <div>
          <ReplyCommentView
            replySize={comment.reCommentSize}
            onClickViewReplies={onClickViewReplies}
            onToggleActivatedReplyComments={onToggleActivatedReplyComments}
            activatedReplyComments={activatedReplyComments}
          />
          {activatedReplyComments && (
            <ReplyComments commentId={comment.commentId} />
          )}
        </div>
      )}
    </>
  );
};

export default PostComment;
