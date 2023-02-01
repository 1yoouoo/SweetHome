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
  image: string;
  preview_URL: any;
  content: string | ArrayBuffer | null;
}
export interface CreatePostTypeProps {
  setFormData: Dispatch<
    SetStateAction<{
      image: string;
      content: string | ArrayBuffer | null;
      preview_URL: any;
    }>
  >;
  formData: any;
}

const CreatePost = () => {
  const [formData, setFormData] = useRecoilState<FormdataType>(formDataState);

  // const onClickSharing = async (e: any) => {
  //   e.preventDefault();
  //   for (let i = 0; i < e.target.files.length; i++) {
  //     const formDataToServer = new FormData();
  //     formDataToServer.append(`image_${i}`, formData.image);
  //     const fileReader = new FileReader();
  //     if (e.target.files[i]) {
  //       fileReader.readAsDataURL(e.target.files[i]);
  //     }
  //     fileReader.onload = () => {
  //       setFormData({
  //         ...formData,
  //         image: e.target.files[i],
  //         preview_URL: fileReader.result,
  //       });
  //     };
  //     formDataToServer.append("content", formData.content);
  //     const response = await API.createPost({
  //       formData,
  //     });
  //   }
  // };
  return (
    <>
      <CurrentHeader
        current="새 게시물"
        createPost={true}
        // onClickSharing={onClickSharing}
      />
      <form className="CreatePost">
        <UploadPhotos />
        <TextArea />
      </form>
      <Nav />
    </>
  );
};

export default CreatePost;
