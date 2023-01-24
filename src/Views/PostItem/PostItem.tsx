import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EllipsisSvg from "../../Assets/SVG/EllipsisSvg";
import UserNickName from "../../sass/styled-components/UserNickName";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import { timeFormat } from "../../utills/function/function";
import InteractionBar from "../InteractionBar/InteractionBar";
import { PostItemType } from "../PostList/PostList";
import "./PostItem.scss";
import sample from "/Users/blanc/Documents/Project/sns/src/Assets/sample.png";

// type
interface postItemTypeProps {
  postItem: PostItemType;
}
const PostItem = ({ postItem }: postItemTypeProps) => {
  const [likes, setLikes] = useState(postItem.likes);
  const navigate = useNavigate();

  return (
    <>
      <section className="PostItem">
        <div className="PostItem__top">
          <span className="PostItem__top--left">
            <UserPhoto size="44px" />
            <UserNickName nickName={postItem.nickName} />
          </span>
          <span className="PostItem__top--right">
            <EllipsisSvg />
          </span>
        </div>
        <div className="PostItem__main">
          <img src={sample} alt="sample" />
        </div>
        <div className="PostItem__bottom">
          <InteractionBar likes={likes} setLikes={setLikes} />
          <div className="PostItem__bottom--likes">{likes} likes</div>
          <div className="PostItem__bottom--content">
            <span>{postItem.nickName}</span>
            <span>{postItem.postContent}</span>
          </div>
          <div className="PostItem__bottom--comments">
            <span onClick={() => navigate(`/post/${postItem.postId}`)}>
              View all {postItem.commentsNumber} comments
            </span>
          </div>
          <div className="PostItem__bottom--posted-at">
            {timeFormat(postItem?.postedAt)}
          </div>
        </div>
      </section>
    </>
  );
};

export default PostItem;
