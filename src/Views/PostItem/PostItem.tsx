import EllipsisSvg from "../../Assets/SVG/EllipsisSvg";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import InteractionBar from "../InteractionBar/InteractionBar";
import { dataType } from "../PostList/PostList";
import "./PostItem.scss";
import sample from "/Users/blanc/Documents/Project/sns/src/Assets/sample.png";
// import sample from "/Users/blanc/Documents/Project/sns/src/Assets/vertical_sample.jpeg";
// type
interface dataTypeProps {
  data: dataType;
}
const PostItem = ({ data }: dataTypeProps) => {
  function timeForToday(value: string) {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return "방금 전";
    if (betweenTime < 60) {
      return `${betweenTime}분 전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간 전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      if (betweenTimeDay < 2) {
        return `어제`;
      }
      return `${betweenTimeDay}일 전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년 전`;
  }

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
          <InteractionBar />
          <div className="PostItem__bottom--likes">{data.likes} likes</div>
          <div className="PostItem__bottom--content">
            <span>{data.nickName}</span>
            <span>{data.text}</span>
          </div>
          <div className="PostItem__bottom--comments">
            View all {data.commentsNumber} comments
          </div>
          <div className="PostItem__bottom--posted-at">
            {timeForToday(data.postedAt)}
          </div>
        </div>
      </section>
    </>
  );
};

export default PostItem;
