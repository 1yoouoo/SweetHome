import logo from "/Users/blanc/Documents/Project/sns/src/Assets/logo.png";
import "./Logo.scss";
import { LogoTypeProps } from "../../types/snsType";
const Logo = ({ width, height }: LogoTypeProps) => {
  return (
    <>
      <span className="logo">
        <img
          src={logo}
          alt="logo"
          style={{ width: `${width}`, height: `${height}` }}
        />
      </span>
    </>
  );
};

export default Logo;
