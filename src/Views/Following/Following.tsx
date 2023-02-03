import EllipsisSvg from "../../Assets/SVG/EllipsisSvg";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import StyledButton from "../StyledButton/StyledButton";
import "./Following.scss";

const Following = ({ following }: any) => {
  console.log(following);
  return (
    <>
      <li className="Following">
        <span className="Following__user">
          <UserPhoto size="55px" userProfileImage={following.userImg} />
          <span className="Follower__user--nickname">{following.nickName}</span>
        </span>
        <span className="Following__action">
          <StyledButton
            width="100px"
            height="34px"
            backgroundColor="#262626"
            content="팔로잉"
            color="#fff"
          />
          <EllipsisSvg />
        </span>
      </li>
    </>
  );
};

export default Following;
