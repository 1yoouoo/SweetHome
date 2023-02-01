import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import API from "../../API/API";
import { FormdataType } from "../../Pages/CreatePost/CreatePost";
import { formDataState } from "../../recoil/snsState";
import "./UploadPhotos.scss";

const UploadPhotos = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useRecoilState<FormdataType>(formDataState);

  // const saveImage = (e: any) => {
  //   e.preventDefault();
  //   for (let i = 0; i < e.target.files.length; i++) {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(e.target.files[i]);
  //     // fileReader.onload = () => {
  //     //   const fileURLs[i] = fileReader.result

  //     //   setPreviewImage([...fileURLs])
  //     //   console.log(formData);
  //     // };
  //     setFormData({
  //       ...formData,
  //       image: e.target.files[i],
  //     });
  //   }
  //   console.log(formData);

  return (
    <>
      {/* {formData && formData.imageFileList[0].name} */}
      <div className="UploadPhotos">
        <span
          className="UploadPhotos__add"
          onClick={() => inputRef.current?.click()}
        >
          +
        </span>
        <input
          className="UploadPhotos__input"
          // onChange={saveImage}
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
