/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import "./UploadProfilePhoto.scss";
import CirclePlus from "../../Assets/SVG/CirclePlus";
export interface imageType {
  image_file: string;
  preview_URL: any;
}
interface UploadProfilePhotoPropsType {
  inputValue: any;
  saveImage: any;
}
const UploadProfilePhoto = ({
  inputValue,
  saveImage,
}: UploadProfilePhotoPropsType) => {
  const inputRef = useRef<HTMLInputElement>(null);

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
