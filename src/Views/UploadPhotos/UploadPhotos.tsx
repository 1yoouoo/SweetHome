import { useRef, useState } from "react";
import "./UploadPhotos.scss";

export interface imageType {
  image_file: string;
  preview_URL: string | ArrayBuffer | null;
}
const UploadPhotos = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<imageType>({
    image_file: "",
    preview_URL: "",
  });
  const saveImage = (e: any) => {
    e.preventDefault();
    const fileReader = new FileReader();

    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }
    fileReader.onload = () => {
      setImage({
        image_file: e.target.files[0],
        preview_URL: fileReader.result,
      });
    };
  };
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
  const deleteImage = () => {
    setImage({
      image_file: "",
      preview_URL: "img/default_image.png",
    });
  };
  return (
    <div className="UploadPhotos">
      <span
        className="UploadPhotos__add"
        onClick={() => inputRef.current?.click()}
      >
        +
      </span>
      <input
        className="UploadPhotos__input"
        onClick={() => console.log("input click")}
        ref={inputRef}
      />
    </div>
  );
};

export default UploadPhotos;
