import UserPhoto from "../../sass/styled-components/UserPhoto";
import InputBox from "../../Views/InputBox/InputBox";
import "./AddComment.scss";
export interface CommentType {
  commentContent?: string;
  commentId?: number;
  nickName: string;
  updatedAt?: string | Date;
  userProfileImage?: string;
  userProfileImageUrl?: string;
}
interface AddCommentPropsType {
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  inputRef: React.RefObject<HTMLInputElement>;
  getUserProfile?: CommentType | undefined;
}

const AddComment = (props: AddCommentPropsType) => {
  const { onSubmit, inputRef, getUserProfile }: AddCommentPropsType = props;
  return (
    <form className="AddComment" onSubmit={onSubmit}>
      <span className="AddComment__user">
        <UserPhoto
          size="44px"
          userProfileImage={getUserProfile?.userProfileImageUrl}
        />
      </span>
      <span className="AddComment__input">
        <InputBox
          placeholder={`${getUserProfile?.nickName}(으)로 댓글 달기...`}
          type="text"
          inputRef={inputRef}
        />
        <button className="AddComment__input--button">게시</button>
      </span>
    </form>
  );
};
export default AddComment;
