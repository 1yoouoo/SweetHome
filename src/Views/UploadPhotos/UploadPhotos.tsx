import { newDataTypeProps } from "../../Pages/CreatePost/CreatePost";
import "./UploadPhotos.scss";

const UploadPhotos = ({ setNewData, newData }: newDataTypeProps) => {
  return (
    <div className="UploadPhotos">
      <span className="UploadPhotos__add">+</span>
      <span className="UploadPhotos__add">+</span>
      <span className="UploadPhotos__add">+</span>
      <span className="UploadPhotos__add">+</span>
      <span className="UploadPhotos__add">+</span>
      <span className="UploadPhotos__add">+</span>
      <span className="UploadPhotos__add">+</span>
      <span className="UploadPhotos__add">+</span>
    </div>
  );
};

export default UploadPhotos;
