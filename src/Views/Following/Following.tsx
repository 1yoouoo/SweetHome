import { useState } from "react";
import EllipsisSvg from "../../Assets/SVG/EllipsisSvg";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import StyledFollowButton from "../StyledFollowButton/StyledFollowButton";
import StyledUnFollowButton from "../StyledFollowButton/StyledUnFollowButton";
import "./Following.scss";

const Following = ({ following }: any) => {
  const userId = following.userId;
  const [isFollowing, setIsFollowing] = useState<boolean>(
    following?.isFollowing
  );
  return (
    <>
      <li className="Following">
        <span className="Following__user">
          <UserPhoto
            size="55px"
            userProfileImage={following.userProfileImageUrl}
          />
          <span className="Follower__user--nickname">{following.nickName}</span>
        </span>
        <span className="Following__action">
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

export default Following;
