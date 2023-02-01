import { useRecoilState } from "recoil";
import { FormdataType } from "../../Pages/CreatePost/CreatePost";
import { formDataState } from "../../recoil/snsState";
import "./TextArea.scss";
interface TextAreaTypeProps {
  content?: string;
  setContent?: any;
}
const TextArea = ({ content, setContent }: TextAreaTypeProps) => {
  const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    console.log(content);
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
