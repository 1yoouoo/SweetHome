import BookMarkSvg from "../../Assets/SVG/BookMarkSvg";
import EllipsisSvg from "../../Assets/SVG/EllipsisSvg";
import Setting from "../../Assets/SVG/Setting";
import StyledButton from "../StyledButton/StyledButton";
import UserPhoto from "../UserPhoto/UserPhoto";
import "./UserInfo.scss";

const UserInfo = () => {
  const isUser = true;
  return (
    <>
      <div className="UserInfo">
        <UserPhoto />

        <div className="UserInfo__name">
          <div className="UserInfo__name--top">
            <span className="UserInfo__name--top--id">blanc</span>
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
