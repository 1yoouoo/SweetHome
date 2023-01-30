import { AxiosResponse } from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../API/API";
import Nav from "../../Views/Nav/Nav";
import TextArea from "../../Views/TextArea/TextArea";
import UploadPhotos from "../../Views/UploadPhotos/UploadPhotos";
import CurrentHeader from "../../Views/UserHeader/CurrentHeader";
import "./EditPost.scss";

export interface EditPostTypeProps {
  setInputValue: Dispatch<SetStateAction<string>>;
  inputValue: string;
}

const EditPost = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { postId } = useParams<string>();

  const onClickSharing = async () => {
    const response = await API.editPost({
      content: inputValue,
    });
    const success = response?.data.error === null;
    if (success) {
      alert(response.data.data.message);
    } else {
      alert(response.data.error.message);
    }
  };
  useEffect(() => {
    const getUserApi = async () => {
      const response = await API.getPost({ postId });
      console.log("check", response?.data.data);
      setInputValue(response?.data.data.postDetailResponse.content);
    };
    console.log();
    getUserApi();
  }, []);
  return (
    <>
      <CurrentHeader
        current="게시물 수정"
        createPost={true}
        onClickSharing={onClickSharing}
      />
      <form className="EditPost">
        <UploadPhotos />
        <TextArea setInputValue={setInputValue} inputValue={inputValue} />
      </form>
      <Nav />
    </>
  );
};

export default EditPost;
