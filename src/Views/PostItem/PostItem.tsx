import EllipsisSvg from "../../Assets/SVG/EllipsisSvg";
import InteractionBar from "../InteractionBar/InteractionBar";
import "./PostItem.scss";
import sample from "/Users/blanc/Documents/Project/sns/src/Assets/sample.png";
// import sample from "/Users/blanc/Documents/Project/sns/src/Assets/vertical_sample.jpeg";

const PostItem = () => {
  return (
    <>
      <section className="PostItem">
        <div className="PostItem__top">
          <span className="PostItem__top--left">
            <span>img</span>
            <span>NICK_NAME</span>
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
          <div className="PostItem__bottom--likes">9 likes</div>
          <div className="PostItem__bottom--content">
            <span>NICK_NAME</span>
            <span>TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_</span>
          </div>
          <div className="PostItem__bottom--comments">View all 3 comments</div>
          <div className="PostItem__bottom--posted-at">17 HOURS AGO</div>
        </div>
      </section>
      <section className="PostItem">
        <div className="PostItem__top">
          <span className="PostItem__top--left">
            <span>img</span>
            <span>NICK_NAME</span>
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
          <div className="PostItem__bottom--likes">9 likes</div>
          <div className="PostItem__bottom--content">
            <span>NICK_NAME</span>
            <span>TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_</span>
          </div>
          <div className="PostItem__bottom--comments">View all 3 comments</div>
          <div className="PostItem__bottom--posted-at">17 HOURS AGO</div>
        </div>
      </section>
    </>
  );
};

export default PostItem;
