import ChevronLeftSvg from "../../Assets/SVG/ChevronLeftSvg";
import Setting from "../../Assets/SVG/Setting";
import PostingButton from "../../sass/styled-components/ShareButton";
import "./CurrentHeader.scss";
interface CurrentHeaderTypeProps {
  current: string;
  createPost?: boolean;
  onClickSharing?: () => void;
}

const CurrentHeader = ({
  current,
  createPost,
  onClickSharing,
}: CurrentHeaderTypeProps) => {
  const isUser = false;
  return (
    <>
      <div className="CurrentHeader">
        {isUser ? <Setting /> : <ChevronLeftSvg />}
        <span className="CurrentHeader__user-id">{current}</span>
        {createPost ? (
          <PostingButton text="공유" onClickSharing={onClickSharing} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default CurrentHeader;
