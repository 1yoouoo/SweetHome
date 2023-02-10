import { useState } from "react";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import StyledButton from "../StyledButton/StyledButton";
import StyledFollowButton from "../StyledFollowButton/StyledFollowButton";
import StyledUnFollowButton from "../StyledFollowButton/StyledUnFollowButton";
import "./UserInfo.scss";

const UserInfo = ({ userDetail }: any) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(
    userDetail?.isFollowing
  );
  const userId = userDetail?.userId;
  const isOwner = userDetail?.isProfileOwner;
  return (
    <>
      <div className="UserInfo">
        <span className="UserInfo__photo">
          <UserPhoto
            size="88px"
            userProfileImage={userDetail.userProfileImageUrl}
          />
        </span>

        <div className="UserInfo__name">
          <div className="UserInfo__name--top">
            <span className="UserInfo__name--top--id">
              {userDetail.nickName}
            </span>
          </div>
          <div className="UserInfo__name--bottom">
            {isOwner ? (
              <>프로필 주인장</>
            ) : (
              <>
                <span style={{ marginRight: "10px" }}>
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
                </span>
                <span style={{ marginRight: "10px" }}>
                  <StyledButton
                    width="104px"
                    height="32px"
                    backgroundColor="#EFEFEF"
                    content="Message"
                    color="#000"
                  />
                </span>
                <span style={{ marginRight: "10px" }}>
                  <StyledButton
                    width="34px"
                    height="32px"
                    backgroundColor="#EFEFEF"
                    content="+"
                    color="#000"
                  />
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
