import { clickedPostTypeProps } from "../../Pages/PostDetail/PostDetail";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import UserComment from "../UserComment/UserComment";
import "./PostContent.scss";

const PostContent = ({ post }: clickedPostTypeProps) => {
  return (
    <div className="PostContent">
      <div className="PostContent__author">
        <UserPhoto size="44px" userProfileImage={post?.userProfileImage} />
      </div>
      <UserComment post={post} />
    </div>
  );
};

export default PostContent;
