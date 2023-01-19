import ChevronLeftSvg from "../../Assets/SVG/ChevronLeftSvg";
import "./UserHeader.scss";

const UserHeader = () => {
  return (
    <div className="UserHeader">
      <ChevronLeftSvg />
      <span className="UserHeader__user-id">name</span>
    </div>
  );
};

export default UserHeader;
