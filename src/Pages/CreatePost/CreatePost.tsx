import { Dispatch, SetStateAction, useEffect, useState } from "react";
import API from "../../API/API";
import Nav from "../../Views/Nav/Nav";
import TextArea from "../../Views/TextArea/TextArea";
import UploadPhotos from "../../Views/UploadPhotos/UploadPhotos";
import CurrentHeader from "../../Views/UserHeader/CurrentHeader";
import "./CreatePost.scss";
import { useRecoilValue } from "recoil";
import { formDataState } from "../../recoil/snsState";
export interface FormdataType {
  image_file: string;
  preview_URL: never;
}

export interface CreatePostTypeProps {
  setFormData: Dispatch<
    SetStateAction<{
      image: string;
      preview_URL: never;
    }>
  >;
  formData: never;
}

const CreatePost = () => {
  const formData = useRecoilValue(formDataState);
  const [content, setContent] = useState("");
  const onClickSharing = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const formDataToServer = new FormData();
    for (let i = 0; i < formData.length; i++) {
      formDataToServer.append(`image`, formData[i].image_file);
      console.log("formDataToServer", formDataToServer);
    }
    if (formData.length == 0) {
      alert("파일을 첨부해 주세요");
    } else {
      formDataToServer.append(`content`, content);
      const response = await API.createPost({
        formDataToServer,
      });
      if (response?.data.error === null) {
        alert(response.data.data.message);
      } else {
        alert(response.data.error.message);
      }
    }
  };
  useEffect(() => {
    console.log("createPost Mount!");
    console.log(formData);
  }, [formData]);
  return (
    <>
      <CurrentHeader
        current="새 게시물"
        createPost={true}
        onClickSharing={onClickSharing}
      />
      <form className="CreatePost">
        <UploadPhotos />
        <TextArea content={content} setContent={setContent} />
      </form>
      <Nav />
    </>
  );
};

export default CreatePost;
