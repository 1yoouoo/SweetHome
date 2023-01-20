import SmallHeartSvg from "../../Assets/SVG/SmallHeartSvg";
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
          <SmallHeartSvg />
        </span>
      </li>

      <li className="PostComment">
        <span className="PostComment__left">
          <UserPhoto size="44px" />
        </span>
        <UserComment />
        <span className="PostComment__right">
          <SmallHeartSvg />
        </span>
      </li>
    </ul>
  );
};

export default PostComments;
