import { useEffect, useState } from "react";
import API from "../../API/API";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import { getNickName } from "../../utills/function/function";
import InputBox from "../../Views/InputBox/InputBox";
import "./AddComment.scss";
export interface CommentType {
  commentContent: string;
  commentId: number;
  nickName: string;
  updatedAt: string | Date;
  userProfileImage?: string;
}

const AddComment = ({ onSubmit, onChangeValue }: any) => {
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
