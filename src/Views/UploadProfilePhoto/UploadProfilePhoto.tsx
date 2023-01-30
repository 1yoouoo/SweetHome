import { useRef, useState } from "react";
import { imageType } from "../UploadPhotos/UploadPhotos";
import defaultProfile from "/Users/blanc/Documents/Project/sns/src/Assets/default_profile.png";
import "./UploadProfilePhoto.scss";
import CirclePlus from "../../Assets/SVG/CirclePlus";

const UploadProfilePhoto = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<imageType>({
    image_file: "",
    preview_URL: "",
  });
  return (
    <div className="UploadProfilePhoto">
      <span className="UploadProfilePhoto__img">
        <img src={defaultProfile} alt="" />
      </span>
      <span
        className="UploadProfilePhoto__upload"
        onClick={() => inputRef.current?.click()}
      >
        <CirclePlus />
      </span>
      <input
        className="UploadProfilePhoto__input"
        ref={inputRef}
        onClick={() => console.log("you clicked +")}
      />
    </div>
  );
};

export default UploadProfilePhoto;
