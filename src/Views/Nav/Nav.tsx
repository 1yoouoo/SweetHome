import CompassSvg from "../../Assets/SVG/CompassSvg";
import HeartSvg from "../../Assets/SVG/HeartSvg";
import HomeSvg from "../../Assets/SVG/HomeSvg";
import MessageSvg from "../../Assets/SVG/MessageSvg";
import PostSvg from "../../Assets/SVG/PostSvg";
import UserSvg from "../../Assets/SVG/UserSvg";
import "./Nav.scss";

const Nav = () => {
  return (
    <>
      <div className="Nav">
        <div className="Nav__wrapper">
          <HomeSvg />
          <CompassSvg />
          <PostSvg />
          <HeartSvg size="24px" />
          <MessageSvg />
          <UserSvg />
        </div>
      </div>
    </>
  );
};

export default Nav;
