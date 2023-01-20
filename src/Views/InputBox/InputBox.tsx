import "./InputBox.scss";
// type
interface InputBoxTypeProps {
  placeholder: string;
  name?: string;
  value?: string;
  onChangeValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox = (props: InputBoxTypeProps) => {
  const { placeholder, name, value, onChangeValue }: InputBoxTypeProps = props;
  return (
    <>
      <label className="InputBox__label">
        <span className="InputBox__label--placeholder">{placeholder}</span>
        <input
          className="InputBox__label--input"
          name={name}
          value={value}
          onChange={(e) => onChangeValue?.(e)}
        />
      </label>
    </>
  );
};
export default InputBox;
