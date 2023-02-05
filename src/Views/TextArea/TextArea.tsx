import { Dispatch, SetStateAction } from "react";
import "./TextArea.scss";
interface TextAreaTypeProps {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
}
const TextArea = ({ content, setContent }: TextAreaTypeProps) => {
  const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  return (
    <>
      <div className="TextArea">
        <textarea
          className="TextArea__input"
          placeholder="문구 입력..."
          value={content}
          onChange={(e) => onChangeValue(e)}
        />
      </div>
    </>
  );
};

export default TextArea;
