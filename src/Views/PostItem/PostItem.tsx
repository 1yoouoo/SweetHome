import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EllipsisSvg from "../../Assets/SVG/EllipsisSvg";
import UserNickName from "../../sass/styled-components/UserNickName";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import { timeFormat } from "../../utills/function/function";
import InteractionBar from "../../Components/InteractionBar/InteractionBar";
import { PostItemType } from "../PostList/PostList";
import "./PostItem.scss";
import { useSetRecoilState } from "recoil";
import { postItemState } from "../../recoil/snsState";

// type
interface postItemTypeProps {
  postItem: PostItemType;
}
const PostItem = ({ postItem }: postItemTypeProps) => {
  const setPostItemState = useSetRecoilState<PostItemType>(postItemState);
  const [likes, setLikes] = useState<number>(postItem.postLikeSize); // postListSize
  const navigate = useNavigate();
  const onClickViewComments = () => {
    setPostItemState(postItem);
    navigate(`/post-detail/${postItem.postId}`);
    localStorage.setItem("userProfileImageUrl", postItem.userProfileImageUrl);
    localStorage.setItem("nickName", postItem.nickName);
    localStorage.setItem("updatedAt", postItem.updatedAt);
    localStorage.setItem("content", postItem.content);
  };
  console.log(postItem);
  return (
    <>
      <section className="PostItem">
        <div className="PostItem__top">
          <span className="PostItem__top--left">
            <UserPhoto
              size="44px"
              userProfileImage={postItem.userProfileImageUrl}
            />
            <UserNickName nickName={postItem.nickName} />
          </span>
          <span className="PostItem__top--right">
            <EllipsisSvg />
          </span>
        </div>
        <div className="PostItem__main">
          <img src={postItem.postImageUrls[0].postImageUrl} alt="sample" />
        </div>
        <div className="PostItem__bottom">
          <InteractionBar
            likes={likes}
            setLikes={setLikes}
            isLike={postItem.isPostLike}
            postId={postItem.postId}
          />
          <div className="PostItem__bottom--likes">{likes} likes</div>
          <div className="PostItem__bottom--content">
            <span>{postItem.nickName}</span>
            <span>{postItem.content}</span>
          </div>
          <div className="PostItem__bottom--comments">
            <span onClick={onClickViewComments}>
              View all {postItem.commentSize} comments
            </span>
          </div>
          <div className="PostItem__bottom--posted-at">
            {timeFormat(postItem?.updatedAt)}
          </div>
        </div>
      </section>
    </>
  );
};

export default PostItem;
