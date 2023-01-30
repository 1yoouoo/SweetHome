import { useEffect, useRef, useState } from "react";
// import { imageType } from "../UploadPhotos/UploadPhotos";
import "./UploadProfilePhoto.scss";
import CirclePlus from "../../Assets/SVG/CirclePlus";
export interface imageType {
  image_file: string;
  preview_URL: any;
}
const UploadProfilePhoto = ({ inputValue, saveImage }: any) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // const sendImageToServer = async () => {
  //   if(image.image_file){
  //     const formData = new FormData()
  //     formData.append('file', image.image_file);
  //     await axios.post('/api/image/upload', formData);
  //     alert("서버에 등록이 완료되었습니다!");
  //     setImage({
  //       image_file: "",
  //       preview_URL: "img/default_image.png",
  //     });
  //   }
  //   else{
  //     alert("사진을 등록하세요!")
  //   }
  // }
  // useEffect(() => {
  // }, [inputValue]);
  return (
    <div className="UploadProfilePhoto">
      <span className="UploadProfilePhoto__img">
        <img src={inputValue?.preview_URL} alt="" />
      </span>
      <span
        className="UploadProfilePhoto__upload"
        onClick={() => inputRef.current?.click()}
      >
        <CirclePlus />
      </span>
      <input
        className="UploadProfilePhoto__input"
        type="file"
        accept="image/*"
        onChange={saveImage}
        ref={inputRef}
        onClick={() => console.log("you clicked +")}
      />
    </div>
  );
};

export default UploadProfilePhoto;
