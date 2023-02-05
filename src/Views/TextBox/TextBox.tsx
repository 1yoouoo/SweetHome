import "./TextBox.scss";

// type
interface TextBoxTypeProps {
  name?: string;
  value?: string;
  onChangeValue?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextBox = (props: TextBoxTypeProps) => {
  const { name, value, onChangeValue }: TextBoxTypeProps = props;
  return (
    <>
      <label className="TextBox__label">
        <textarea
          className="TextBox__label--textarea"
          name={name}
          value={value}
          onChange={(e) => onChangeValue?.(e)}
          required
        />
      </label>
    </>
  );
};
export default TextBox;
