import InputBox from "../InputBox/InputBox";
import WhiteLogo from "../Logo/Logo";
import "./Header.scss";
const Header = () => {
  return (
    <div className="Header">
      <div className="Header__wrapper">
        <WhiteLogo width="103px" height="29px" />
        <InputBox placeholder="Search" />
      </div>
    </div>
  );
};
export default Header;
