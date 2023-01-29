import { Dispatch, SetStateAction, useState } from "react";
import API from "../../API/API";
import Nav from "../../Views/Nav/Nav";
import TextArea from "../../Views/TextArea/TextArea";
import UploadPhotos from "../../Views/UploadPhotos/UploadPhotos";
import CurrentHeader from "../../Views/UserHeader/CurrentHeader";
import "./CreatePost.scss";

export interface CreatePostTypeProps {
  setInputValue: Dispatch<SetStateAction<string>>;
  inputValue: string;
}

const CreatePost = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const onClickSharing = async () => {
    const response = await API.createPost({
      content: inputValue,
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
        <TextArea setInputValue={setInputValue} inputValue={inputValue} />
      </form>
      <Nav />
    </>
  );
};

export default CreatePost;
