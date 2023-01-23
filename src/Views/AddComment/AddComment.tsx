import UserPhoto from "../../sass/styled-components/UserPhoto";
import { getNickName } from "../../utills/function/function";
import InputBox from "../InputBox/InputBox";
import "./AddComment.scss";
const AddComment = () => {
  return (
    <div className="AddComment">
      <span className="AddComment__user">
        <UserPhoto size="44px" />
      </span>
      <span className="AddComment__input">
        <InputBox
          placeholder={`${getNickName()}(으)로 댓글 달기...`}
          type="text"
        />
        <button className="AddComment__input--button">게시</button>
      </span>
    </div>
  );
};
export default AddComment;
