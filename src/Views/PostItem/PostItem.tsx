import EllipsisSvg from "../../Assets/SVG/EllipsisSvg";
import "./PostItem.scss";
import sample from "/Users/blanc/Documents/Project/sns/src/Assets/sample.png";

const PostItem = () => {
  return (
    <section className="PostItem">
      <div className="PostItem__top">
        <span className="PostItem__top--left">
          <span>img</span>
          <span>nickname</span>
        </span>
        <span className="PostItem__top--right">
          <EllipsisSvg />
        </span>
      </div>
      <div className="PostItem__main">
        <img src={sample} alt="sample" />
      </div>
      <div className="PostItem__bottom">hi</div>
    </section>
  );
};

export default PostItem;
