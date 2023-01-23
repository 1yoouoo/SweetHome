import { newDataTypeProps } from "../../Pages/CreatePost/CreatePost";
import "./TextArea.scss";

const TextArea = ({ setNewData, newData }: newDataTypeProps) => {
  const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewData({
      ...newData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  return (
    <>
      <div className="TextArea">
        <textarea
          className="TextArea__input"
          placeholder="문구 입력..."
          name="postContent"
          onChange={(e) => onChangeValue(e)}
        />
      </div>
    </>
  );
};

export default TextArea;
