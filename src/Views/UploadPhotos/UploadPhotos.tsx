import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import API from "../../API/API";
import { FormdataType } from "../../Pages/CreatePost/CreatePost";
import defaultProfile from "/Users/blanc/Documents/Project/sns/src/Assets/default_profile.png";
import { formDataState } from "../../recoil/snsState";
import "./UploadPhotos.scss";

const UploadPhotos = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useRecoilState<FormdataType[]>(formDataState);
  const [previewImgList, setPreviewImgList] = useState<any>([]);

  const saveImage = (e: any) => {
    e.preventDefault();
    const fileReader = new FileReader();

    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }
    fileReader.onload = () => {
      setPreviewImgList([
        ...previewImgList,
        { image_file: e.target.files[0], preview_URL: fileReader.result },
      ]);
    };
    setFormData(previewImgList);
  };
  return (
    <>
      <div className="UploadPhotos">
        {previewImgList &&
          previewImgList.map((preview: any) => {
            return (
              <span className="UploadPhotos__preview" key={preview.preview_URL}>
                <img
                  className="UploadPhotos__preview--img"
                  src={preview.preview_URL}
                  alt=""
                />
              </span>
            );
          })}

        <span
          className="UploadPhotos__add"
          onClick={() => inputRef.current?.click()}
        >
          +
        </span>
        <input
          className="UploadPhotos__input"
          onChange={saveImage}
          multiple
          accept="image/jpg,image/png,image/jpeg,image/gif"
          ref={inputRef}
          type="file"
        />
        <span onClick={() => console.log(formData)}>test</span>
      </div>
    </>
  );
};

export default UploadPhotos;
