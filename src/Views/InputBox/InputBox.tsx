import { InputBoxtypeProps } from "../../types/snsType";
import "./InputBox.scss";
const InputBox = ({ placeholder }: InputBoxtypeProps) => {
  return (
    <>
      <label className="InputBox__label">
        <span className="InputBox__label--placeholder">{placeholder}</span>
        <input className="InputBox__label--input" />
      </label>
    </>
  );
};
export default InputBox;
