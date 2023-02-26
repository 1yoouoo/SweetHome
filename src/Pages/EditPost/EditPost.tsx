import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../API/API";
import ErrorView from "../../Components/ErrorView/ErrorView";
import Nav from "../../Views/Nav/Nav";
import TextArea from "../../Views/TextArea/TextArea";
import UploadPhotos from "../../Views/UploadPhotos/UploadPhotos";
import CurrentHeader from "../../Views/UserHeader/CurrentHeader";
import "./EditPost.scss";

const EditPost = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [error, setError] = useState<unknown>();
  const [inputValue, setInputValue] = useState();
  const { postId } = useParams<string>();

  const onClickSharing = async () => {
    try {
      const response = await API.editPost({
        content: inputRef.current?.value,
      });
      const success = response?.data.error === null;
      if (success) {
        alert(response.data.data.message);
      } else {
        alert(response.data.error.message);
      }
    } catch (error) {
      setError(error);
    }
  };
  const getUserApi = async () => {
    try {
      const response = await API.getPost({ postId });
      console.log("check", response?.data.data);
      setInputValue(response.data.data.postDetailResponse.content);
    } catch (error) {
      setError(error);
    }
  };
  console.log();
  useEffect(() => {
    getUserApi();
  }, []);
  return (
    <>
      {error ? (
        <ErrorView />
      ) : (
        <>
          <CurrentHeader
            current="게시물 수정"
            createPost={true}
            backwards={true}
            onClickSharing={onClickSharing}
          />
          <form className="EditPost">
            <UploadPhotos />
            <TextArea inputRef={inputRef} inputValue={inputValue} />
          </form>
          <Nav />
        </>
      )}
    </>
  );
};

export default EditPost;
