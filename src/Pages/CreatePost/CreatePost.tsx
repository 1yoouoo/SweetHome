import { Dispatch, SetStateAction, useState } from "react";
import API from "../../API/API";
import Nav from "../../Views/Nav/Nav";
import TextArea from "../../Views/TextArea/TextArea";
import UploadPhotos from "../../Views/UploadPhotos/UploadPhotos";
import CurrentHeader from "../../Views/UserHeader/CurrentHeader";
import "./CreatePost.scss";
export interface FormdataType {
  imageFileList: [];
  newPostContent: string;
}
export interface CreatePostTypeProps {
  setFormData: Dispatch<SetStateAction<any>>;
  formData: any;
}

const CreatePost = () => {
  const [formData, setFormData] = useState({
    imageFileList: [],
    newPostContent: "",
  });

  const onClickSharing = async () => {
    const response = await API.createPost({
      formData: formData,
    });
    // 성공
    if (response?.data.error === null) {
      alert(response.data.data.message);
      // 실패
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
        <TextArea />
      </form>
      <Nav />
    </>
  );
};

export default CreatePost;
