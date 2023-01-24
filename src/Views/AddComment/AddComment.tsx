import { useState } from "react";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import { getNickName } from "../../utills/function/function";
import InputBox from "../InputBox/InputBox";
import "./AddComment.scss";
const AddComment = () => {
  const [inputValue, setInputValue] = useState({
    nickName: getNickName(),
    createdAt: new Date(),
    content: "",
  });
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    console.log(inputValue.content);
  };
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Api 호출

    // input 비우기
    setInputValue({ ...inputValue, content: "" });
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
          name="content"
          onChangeValue={onChangeValue}
        />
        <button className="AddComment__input--button">게시</button>
      </span>
    </form>
  );
};
export default AddComment;
