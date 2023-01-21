import "./InputBox.scss";
// type
interface InputBoxTypeProps {
  placeholder: string;
  name?: string;
  value?: string;
  type?: string;
  onChangeValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox = (props: InputBoxTypeProps) => {
  const { placeholder, name, value, type, onChangeValue }: InputBoxTypeProps =
    props;
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
          onBlur={() => console.log("out!")}
        />
        <span className="InputBox__label--input--placeholder">
          {placeholder}
        </span>
      </label>
    </>
  );
};
export default InputBox;
