import "./InputBox.scss";

// type
interface InputBoxTypeProps {
  placeholder?: string;
  name?: string;
  value?: string;
  type?: string;
  onChangeValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef?: any;
}

const InputBox = (props: InputBoxTypeProps) => {
  const {
    placeholder,
    name,
    value,
    type,
    onChangeValue,
    inputRef,
  }: InputBoxTypeProps = props;
  return (
    <>
      <label className="InputBox__label">
        <input
          className="InputBox__label--input"
          name={name}
          value={value}
          onChange={(e) => onChangeValue?.(e)}
          type={type}
          required
          ref={inputRef}
          // onBlur={() => console.log("focus out!")}
        />
        <span className="InputBox__label--input--placeholder">
          {placeholder}
        </span>
      </label>
    </>
  );
};
export default InputBox;
