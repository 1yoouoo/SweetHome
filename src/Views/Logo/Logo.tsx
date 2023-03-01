import "./Logo.scss";
import { LogoTypeProps } from "../../types/snsType";
import { useNavigate } from "react-router-dom";

const Logo = ({ width, height }: LogoTypeProps) => {
  const navigate = useNavigate();
  return (
    <>
      <span className="logo" onClick={() => navigate("/home")}>
        <img
          src={require("/Users/blanc/Documents/Project/sns/src/Assets/logo.png")}
          alt="logo"
          style={{ width: `${width}`, height: `${height}` }}
        />
      </span>
    </>
  );
};

export default Logo;
