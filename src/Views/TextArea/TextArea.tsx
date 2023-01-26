import { CreatePostTypeProps } from "../../Pages/CreatePost/CreatePost";
import "./TextArea.scss";

const TextArea = ({ setInputValue, inputValue }: CreatePostTypeProps) => {
  const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.currentTarget.value);
  };
  return (
    <>
      <div className="TextArea">
        <textarea
          className="TextArea__input"
          placeholder="문구 입력..."
          value={inputValue}
          onChange={(e) => onChangeValue(e)}
        />
      </div>
    </>
  );
};

export default TextArea;
