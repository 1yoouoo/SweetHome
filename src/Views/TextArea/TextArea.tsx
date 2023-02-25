import "./TextArea.scss";
interface TextAreaTypeProps {
  inputRef: React.LegacyRef<HTMLTextAreaElement> | undefined;
  inputValue?: string;
}
const TextArea = ({ inputRef, inputValue }: TextAreaTypeProps) => {
  return (
    <>
      <div className="TextArea">
        <textarea
          className="TextArea__input"
          placeholder="문구 입력..."
          ref={inputRef}
          defaultValue={inputValue}
        />
      </div>
    </>
  );
};

export default TextArea;
