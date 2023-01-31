import { useRecoilState } from "recoil";
import { FormdataType } from "../../Pages/CreatePost/CreatePost";
import { formDataState } from "../../recoil/snsState";
import "./TextArea.scss";

const TextArea = () => {
  const [formData, setFormData] = useRecoilState<FormdataType>(formDataState);
  const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, newPostContent: e.target.value });
    console.log(formData);
  };
  return (
    <>
      <div className="TextArea">
        <textarea
          className="TextArea__input"
          placeholder="문구 입력..."
          value={formData.newPostContent}
          onChange={(e) => onChangeValue(e)}
        />
      </div>
    </>
  );
};

export default TextArea;
