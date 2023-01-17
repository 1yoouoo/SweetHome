import { LoginInputBoxtypeProps } from "../../types/snsType";
import "./LoginInputBox.scss";
const LoginInputBox = ({ placeholder }: LoginInputBoxtypeProps) => {
  return (
    <>
      <label className="LoginInputBox__label">
        <span className="LoginInputBox__label--placeholder">{placeholder}</span>
        <input className="LoginInputBox__label--input" />
      </label>
    </>
  );
};
export default LoginInputBox;
