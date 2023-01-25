import { useState } from "react";
import { clickedPostTypeProps } from "../../Pages/PostDetail/PostDetail";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import { getNickName } from "../../utills/function/function";
import InputBox from "../InputBox/InputBox";
import "./AddComment.scss";
const AddComment = ({ clickedPost, setClickedPost }: clickedPostTypeProps) => {
  const [inputValue, setInputValue] = useState({
    nickName: getNickName(),
    commentId: 3,
    commentLikes: 3,
    commentContent: "",
    commentedAt: "Sat Jan 21 2023 17:29:28",
  });
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Api 호출
    console.log("clickedPost", clickedPost);
    // setClickedPost({
    //   ...clickedPost,
    //   postComments: [...clickedPost?.postComments, inputValue],
    // });
    // Fix Unsafe usage of optional chaining. If it short-circuits with 'undefined' the evaluation will throw TypeError.

    // input 비우기
    // setInputValue({ ...inputValue, commentContent: "" });
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
