import { Dispatch, SetStateAction, useState } from "react";
import API from "../../API/API";
import Nav from "../../Views/Nav/Nav";
import TextArea from "../../Views/TextArea/TextArea";
import defaultProfile from "/Users/blanc/Documents/Project/sns/src/Assets/default_profile.png";
import UploadPhotos from "../../Views/UploadPhotos/UploadPhotos";
import CurrentHeader from "../../Views/UserHeader/CurrentHeader";
import "./CreatePost.scss";
import { useRecoilState } from "recoil";
import { formDataState } from "../../recoil/snsState";
export interface FormdataType {
  image_file: string;
  preview_URL: any;
}

export interface CreatePostTypeProps {
  setFormData: Dispatch<
    SetStateAction<{
      image: string;
      preview_URL: any;
    }>
  >;
  formData: any;
}

const CreatePost = () => {
  const [formData, setFormData] = useRecoilState<any>(formDataState);
  const [content, setContent] = useState("");
  const onClickSharing = async (e: any) => {
    e.preventDefault();
    console.log("click");
    console.log("formData", formData);
    const formDataToServer = new FormData();
    for (let i = 0; i < formData.length; i++) {
      formDataToServer.append(`image`, formData[i].image_file);
      console.log("formDataToServer", formDataToServer);
    }
    formDataToServer.append(`content`, content);
    const response = await API.createPost({
      formDataToServer,
    });
    if (response?.data.error === null) {
      alert(response.data.data.message);
    } else {
      alert(response.data.error.message);
    }
  };
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
