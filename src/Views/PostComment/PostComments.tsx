import HeartSvg from "../../Assets/SVG/HeartSvg";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import UserComment from "../UserComment/UserComment";
import "./PostComments.scss";

const PostComments = () => {
  return (
    <ul className="PostComments">
      <li className="PostComment">
        <span className="PostComment__left">
          <UserPhoto size="44px" />
        </span>
        <UserComment />
        <span className="PostComment__right">
          <HeartSvg size="12px" />
        </span>
      </li>

      <li className="PostComment">
        <span className="PostComment__left">
          <UserPhoto size="44px" />
        </span>
        <UserComment />
        <span className="PostComment__right">
          <HeartSvg size="12px" />
        </span>
      </li>
    </ul>
  );
};

export default PostComments;
