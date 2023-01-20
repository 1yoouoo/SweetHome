import UserPhoto from "../../sass/styled-components/UserPhoto";
import UserComment from "../UserComment/UserComment";
import "./PostContent.scss";

const PostContent = () => {
  return (
    <div className="PostContent">
      <div className="PostContent__author">
        <UserPhoto size="44px" />
      </div>
      <UserComment />
    </div>
  );
};

export default PostContent;
