import EllipsisSvg from "../../Assets/SVG/EllipsisSvg";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import StyledButton from "../StyledButton/StyledButton";
import "./Follower.scss";

const Follower = () => {
  return (
    <>
      <li className="Follower">
        <span className="Follower__user">
          <UserPhoto size="55px" />
          <span className="Follower__user--nickname">nickName</span>
        </span>
        <span className="Follower__action">
          <StyledButton
            width="100px"
            height="34px"
            backgroundColor="#0095f6"
            content="팔로우"
            color="#fff"
          />
          <EllipsisSvg />
        </span>
      </li>
    </>
  );
};

export default Follower;
