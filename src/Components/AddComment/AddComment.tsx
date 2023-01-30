import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import API from "../../API/API";
import { commentState } from "../../recoil/snsState";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import { newCommentId, getNickName } from "../../utills/function/function";
import InputBox from "../../Views/InputBox/InputBox";
import "./AddComment.scss";
export interface CommentType {
  commentContent: string;
  commentId: number;
  nickName: string;
  updatedAt: string | Date;
  userProfileImage?: string;
}
const AddComment = () => {
  const { postId } = useParams<string>();
  const [inputValue, setInputValue] = useState<string>("");
  const [comments, setComments] = useRecoilState<CommentType[]>(commentState);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };
  const createComment = async () => {
    const response = await API.createComment({
      content: inputValue,
      postId: postId,
    });
    setComments([
      {
        commentContent: inputValue,
        commentId: newCommentId(comments), // FIXME 정렬된 리스트가 필요함
        nickName: getNickName(),
        updatedAt: new Date(),
      },
      ...comments,
    ]);
    console.log(newCommentId(comments));
    return response;
  };
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Api 호출
    createComment();
  };
  return (
    <form className="AddComment" onSubmit={onSubmit}>
      <span className="AddComment__user">
        <UserPhoto size="44px" />
      </span>
      <span className="AddComment__input">
        <InputBox
          placeholder={`${getNickName()}(으)로 댓글 달기...`}
          type="text"
          name="commentContent"
          onChangeValue={onChangeValue}
        />
        <button className="AddComment__input--button">게시</button>
      </span>
    </form>
  );
};
export default AddComment;
