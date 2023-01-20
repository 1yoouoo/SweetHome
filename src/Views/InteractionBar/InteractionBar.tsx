import BookMarkSvg from "../../Assets/SVG/BookMarkSvg";
import CommentsSvg from "../../Assets/SVG/Comments";
import HeartSvg from "../../Assets/SVG/HeartSvg";
import "./InteractionBar.scss";

const InteractionBar = () => {
  return (
    <>
      <div className="InteractionBar">
        <span className="InteractionBar__left">
          <HeartSvg size="24px" />
          <CommentsSvg />
        </span>
        <span className="InteractionBar__right">
          <BookMarkSvg />
        </span>
      </div>
    </>
  );
};

export default InteractionBar;
