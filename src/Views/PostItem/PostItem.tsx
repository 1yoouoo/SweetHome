import { useState } from "react";
import EllipsisSvg from "../../Assets/SVG/EllipsisSvg";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import { timeFormat } from "../../utills/function/function";
import InteractionBar from "../InteractionBar/InteractionBar";
import { dataType } from "../PostList/PostList";
import "./PostItem.scss";
import sample from "/Users/blanc/Documents/Project/sns/src/Assets/sample.png";

// type
interface dataTypeProps {
  data: dataType;
}
const PostItem = ({ data }: dataTypeProps) => {
  const [likes, setLikes] = useState(data.likes);

  console.log("postItem", data);
  return (
    <>
      <section className="PostItem">
        <div className="PostItem__top">
          <span className="PostItem__top--left">
            <UserPhoto size="44px" />
            <span>{data.nickName}</span>
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
            <span>{data.nickName}</span>
            <span>{data.text}</span>
          </div>
          <div className="PostItem__bottom--comments">
            View all {data.commentsNumber} comments
          </div>
          <div className="PostItem__bottom--posted-at">
            {timeFormat(data.postedAt)}
          </div>
        </div>
      </section>
    </>
  );
};

export default PostItem;
