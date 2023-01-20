import ChevronLeftSvg from "../../Assets/SVG/ChevronLeftSvg";
import PostingButton from "../../sass/styled-components/ShareButton";
import UploadPhotos from "../../Views/UploadPhotos/UploadPhotos";
import UserHeader from "../../Views/UserHeader/UserHeader";
import "./CreatePost.scss";

const CreatePost = () => {
  return (
    <>
      <UserHeader userName="새 게시물" />
      <ChevronLeftSvg />
      <PostingButton text="공유" />
      <div className="UserPage__gap" />

      <div className="CreatePost">
        <UploadPhotos />
        <div className="CreatePost__text">
          <textarea
            className="CreatePost__text--textarea"
            placeholder="문구 입력..."
          />
        </div>
      </div>
    </>
  );
};

export default CreatePost;
