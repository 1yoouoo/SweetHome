import EllipsisSvg from "../../Assets/SVG/EllipsisSvg";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import StyledButton from "../StyledButton/StyledButton";
import "./UserInfo.scss";

const UserInfo = ({ userDetail }: any) => {
  const isUser = true;
  return (
    <>
      <div className="UserInfo">
        <span className="UserInfo__photo">
          <UserPhoto size="88px" userProfileImage={userDetail.userImg} />
        </span>

        <div className="UserInfo__name">
          <div className="UserInfo__name--top">
            <span className="UserInfo__name--top--id">
              {userDetail.nickName}
            </span>
            {isUser ? <></> : <EllipsisSvg />}
          </div>
          <div className="UserInfo__name--bottom">
            <span style={{ marginRight: "10px" }}>
              <StyledButton
                width="96px"
                height="32px"
                backgroundColor="#0095f6"
                content="Follow"
                color="#fff"
              />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
