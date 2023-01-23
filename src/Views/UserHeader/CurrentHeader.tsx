import ChevronLeftSvg from "../../Assets/SVG/ChevronLeftSvg";
import Setting from "../../Assets/SVG/Setting";
import PostingButton from "../../sass/styled-components/ShareButton";
import "./CurrentHeader.scss";
interface CurrentHeaderTypeProps {
  current: string;
}

const CurrentHeader = ({ current }: CurrentHeaderTypeProps) => {
  const isUser = false;
  const createpost = false;
  return (
    <>
      <div className="CurrentHeader">
        {isUser ? <Setting /> : <ChevronLeftSvg />}
        <span className="CurrentHeader__user-id">{current}</span>
        {createpost ? <PostingButton text="공유" /> : <></>}
      </div>
    </>
  );
};

export default CurrentHeader;
