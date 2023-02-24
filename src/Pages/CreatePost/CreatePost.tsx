import { useEffect, useRef, useState } from "react";
import API from "../../API/API";
import Nav from "../../Views/Nav/Nav";
import TextArea from "../../Views/TextArea/TextArea";
import UploadPhotos from "../../Views/UploadPhotos/UploadPhotos";
import CurrentHeader from "../../Views/UserHeader/CurrentHeader";
import "./CreatePost.scss";
import { useRecoilValue } from "recoil";
import { formDataState } from "../../recoil/snsState";
import ErrorView from "../../Components/ErrorView/ErrorView";
import { useNavigate } from "react-router-dom";
export interface FormdataType {
  image_file: string | Blob;
  preview_URL: string | ArrayBuffer | null;
}

const CreatePost = () => {
  const navigate = useNavigate();
  const formData = useRecoilValue(formDataState);
  const contentRef = useRef<any>(null);
  const [error, setError] = useState<any>(null);
  const onClickSharing = async (e: { preventDefault: () => void }) => {
    try {
      e.preventDefault();

      const formDataToServer = new FormData();
      for (let i = 0; i < formData.length; i++) {
        formDataToServer.append(`image`, formData[i].image_file);
        console.log("formDataToServer", formDataToServer);
      }
      if (formData.length == 0) {
        alert("파일을 첨부해 주세요");
      } else {
        formDataToServer.append(`content`, contentRef.current?.value);
        const response = await API.createPost({
          formDataToServer,
        });
        if (response?.data.error === null) {
          alert(response.data.data.message);
          navigate(-1);
        } else {
          alert(response.data.error.message);
        }
      }
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    console.log("createPost Mount!");
    console.log(formData);
  }, [formData]);
  return (
    <>
      {error ? (
        <ErrorView />
      ) : (
        <>
          <CurrentHeader
            current="새 게시물"
            backwards={true}
            createPost={true}
            onClickSharing={onClickSharing}
          />
          <form className="CreatePost">
            <UploadPhotos />
            <TextArea inputRef={contentRef} />
          </form>
          <Nav />
        </>
      )}
    </>
  );
};

export default CreatePost;
