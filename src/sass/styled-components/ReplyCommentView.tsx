import styled from "styled-components";
interface ReplyCommentView {
  replySize?: number;
  onClickViewReplies?: () => void;
  activatedReplyComments?: boolean;
  onToggleActivatedReplyComments?: () => void;
}
const StyledReplyCommentView = styled.div`
  .ReplyCommentView {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 40px;
    color: rgba(219, 219, 219, 0.8);
    padding: 10px 0;
    font-size: 14px;
    &__border {
      width: 25px;
      border-top: 1px solid rgba(219, 219, 219, 0.8);
      margin: 20px;
    }
  }
`;
function ReplyCommentView({
  replySize,
  onClickViewReplies,
  activatedReplyComments,
  onToggleActivatedReplyComments,
}: ReplyCommentView) {
  return (
    <StyledReplyCommentView>
      <div
        className="ReplyCommentView"
        onClick={
          activatedReplyComments
            ? onToggleActivatedReplyComments
            : onClickViewReplies
        }
      >
        <span className="ReplyCommentView__border"></span>
        {activatedReplyComments ? (
          <span className="ReplyCommentView__text">{`Hide replies`}</span>
        ) : (
          <span className="ReplyCommentView__text">{`View replies (${replySize})`}</span>
        )}
      </div>
    </StyledReplyCommentView>
  );
}

export default ReplyCommentView;
