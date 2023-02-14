import { clickedPostTypeProps } from "../../Pages/PostDetail/PostDetail";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import UserComment from "../UserComment/UserComment";
import "./PostContent.scss";

const PostContent = ({ postData }: clickedPostTypeProps) => {
  return (
    <div className="PostContent">
      <div className="PostContent__author">
        <UserPhoto
          size="44px"
          userProfileImage={postData?.userProfileImageUrl}
        />
      </div>
      <UserComment postData={postData} />
    </div>
  );
};

export default PostContent;
