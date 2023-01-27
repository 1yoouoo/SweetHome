import { Dispatch, SetStateAction, useState } from "react";
import API from "../../API/API";
import BookMarkSvg from "../../Assets/SVG/BookMarkSvg";
import CommentsSvg from "../../Assets/SVG/Comments";
import HeartActivedSvg from "../../Assets/SVG/HeartActivedSvg";
import HeartSvg from "../../Assets/SVG/HeartSvg";
import "./InteractionBar.scss";

// type
export interface onClickHeartTypeProps {
  onClickHeart?: () => void;
}
interface InteractionBarTypeProps {
  likes: number;
  setLikes: Dispatch<SetStateAction<number>>;
  postId: number;
}
const InteractionBar = ({
  likes,
  setLikes,
  postId,
}: InteractionBarTypeProps) => {
  const [heartToggle, setHeartToggle] = useState(true);
  // 게시글 리스트 조회 후 좋아요 여부에 따라 로직 달라질 거
  const like = async () => {
    const response = await API.clickedLike({
      postId: postId,
    });
    if (response?.data.error === null) {
      setHeartToggle(!heartToggle);
      setLikes(heartToggle ? likes - 1 : likes + 1);
    } else {
      alert(response?.data.error.message);
    }
  };
  const unLike = async () => {
    const response = await API.clickedUnLike({
      postId: postId,
    });
    if (response?.data.error === null) {
      setHeartToggle(!heartToggle);
      setLikes(heartToggle ? likes - 1 : likes + 1);
    } else {
      alert(response?.data.error.message);
    }
  };
  const onClickHeart = async () => {
    heartToggle ? like() : unLike();
  };
  return (
    <>
      <div className="InteractionBar">
        <span className="InteractionBar__left">
          {heartToggle ? (
            <HeartActivedSvg onClickHeart={onClickHeart} />
          ) : (
            <HeartSvg onClickHeart={onClickHeart} />
          )}
          <CommentsSvg postId={postId} />
        </span>
        <span className="InteractionBar__right">
          <BookMarkSvg />
        </span>
      </div>
    </>
  );
};

export default InteractionBar;
