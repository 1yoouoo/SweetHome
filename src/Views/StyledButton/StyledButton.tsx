import "./StyledButton.scss";
import { ButtonTypeProps } from "../../types/snsType";
import { useNavigate } from "react-router-dom";

const StyledButton = (props: ButtonTypeProps) => {
  const {
    width,
    height,
    backgroundColor,
    content,
    color,
    onClickFollow,
  }: ButtonTypeProps = props;
  console.log(onClickFollow);
  return (
    <>
      <button
        className="StyledButton"
        onClick={onClickFollow}
        style={{
          width: `${width}`,
          height: `${height}`,
          backgroundColor: `${backgroundColor}`,
          color: `${color}`,
        }}
      >
        {content}
      </button>
    </>
  );
};

export default StyledButton;
