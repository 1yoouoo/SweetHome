import ChevronLeftSvg from "../../Assets/SVG/ChevronLeftSvg";
import Setting from "../../Assets/SVG/Setting";
import PostingButton from "../../sass/styled-components/ShareButton";
import "./CurrentHeader.scss";
interface CurrentHeaderTypeProps {
  current: string;
  createPost?: boolean;
  backwards?: boolean;
  setting?: boolean;
  onClickSharing?: (e: { preventDefault: () => void }) => Promise<void>;
}

const CurrentHeader = ({
  current,
  createPost,
  onClickSharing,
  setting,
  backwards,
}: CurrentHeaderTypeProps) => {
  const isUser = true;
  return (
    <>
      <div className="CurrentHeader">
        {setting && <Setting />}
        {backwards && <ChevronLeftSvg />}
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
