import { useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { FormdataType } from "../../Pages/CreatePost/CreatePost";
import { formDataState } from "../../recoil/snsState";
import "./UploadPhotos.scss";

const UploadPhotos = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setFormData = useSetRecoilState<FormdataType[]>(formDataState);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [previewImgList, setPreviewImgList] = useState<any>([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  };
  useEffect(() => {
    setFormData(previewImgList);
  }, [previewImgList]);
  return (
    <>
      <div className="UploadPhotos">
        {previewImgList &&
          previewImgList.map((preview: { preview_URL: string }) => {
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
          accept="image/jpg,image/png,image/jpeg,image/gif"
          ref={inputRef}
          type="file"
        />
      </div>
    </>
  );
};

export default UploadPhotos;
