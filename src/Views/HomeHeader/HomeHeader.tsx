import InputBox from "../InputBox/InputBox";
import WhiteLogo from "../Logo/Logo";
import "./HomeHeader.scss";
const HomeHeader = () => {
  return (
    <div className="HomeHeader">
      <div className="HomeHeader__wrapper">
        <WhiteLogo width="103px" height="29px" />
        <InputBox placeholder="Search" />
      </div>
    </div>
  );
};
export default HomeHeader;
