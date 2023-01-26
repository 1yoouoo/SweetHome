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
  const token = localStorage.getItem("token");
  const [inputValue, setInputValue] = useState("");

  const onClickSharing = async () => {
    const data = await API.createPost({
      content: inputValue,
      token: token,
    });
    if (data?.data.validation === null) {
      // 실패시
      alert(data?.data.error.message);
    } else {
      // 성공시
      const token = data?.headers.token;
      localStorage.setItem("token", token);
      alert(data?.data.validation.message);
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
