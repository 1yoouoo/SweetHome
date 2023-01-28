import { useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../API/API";
import { clickedPostTypeProps } from "../../Pages/PostDetail/PostDetail";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import { newCommentId, getNickName } from "../../utills/function/function";
import InputBox from "../InputBox/InputBox";
import "./AddComment.scss";
const AddComment = ({ comments, setComments }: any) => {
  const { postId } = useParams();
  const [inputValue, setInputValue] = useState("");
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };
  const createComment = async () => {
    const response = await API.createComment({
      content: inputValue,
      postId: postId,
    });
    setComments([
      ...comments,
      {
        commentContent: inputValue,
        commentId: newCommentId(comments),
        nickName: getNickName(),
        updatedAt: new Date(),
      },
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
