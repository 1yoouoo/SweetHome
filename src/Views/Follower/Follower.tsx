import { useState } from "react";
import EllipsisSvg from "../../Assets/SVG/EllipsisSvg";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import { followerType } from "../Followers/Followers";
import StyledFollowButton from "../StyledFollowButton/StyledFollowButton";
import StyledUnFollowButton from "../StyledFollowButton/StyledUnFollowButton";
import "./Follower.scss";
interface FollowerProps {
  follower: followerType;
}
const Follower = ({ follower }: FollowerProps) => {
  const userId = follower.userId;
  const [isFollowing, setIsFollowing] = useState<boolean>(
    follower?.isFollowing
  );
  return (
    <>
      <li className="Follower">
        <span className="Follower__user">
          <UserPhoto
            size="55px"
            userProfileImage={follower.userProfileImageUrl}
          />
          <span className="Follower__user--nickname">{follower.nickName}</span>
        </span>
        <span className="Follower__action">
          {isFollowing ? (
            <StyledUnFollowButton
              userId={userId}
              setIsFollowing={setIsFollowing}
              isFollowing={isFollowing}
            />
          ) : (
            <StyledFollowButton
              userId={userId}
              setIsFollowing={setIsFollowing}
              isFollowing={isFollowing}
            />
          )}
          <EllipsisSvg />
        </span>
      </li>
    </>
  );
};

export default Follower;
