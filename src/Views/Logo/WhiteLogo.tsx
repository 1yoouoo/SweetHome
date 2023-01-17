import logo from "/Users/blanc/Documents/Project/sns/src/Assets/logo.png";
import "./Logo.scss";
import { WhiteLogoTypeProps } from "../../types/snsType";
const WhiteLogo = ({ width, height }: WhiteLogoTypeProps) => {
  return (
    <>
      <span className="logo">
        <img
          className="logo__white"
          src={logo}
          alt="logo"
          style={{ width: `${width}`, height: `${height}` }}
        />
      </span>
    </>
  );
};

export default WhiteLogo;
