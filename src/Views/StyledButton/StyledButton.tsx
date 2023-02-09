import "./StyledButton.scss";
import { ButtonTypeProps } from "../../types/snsType";

const StyledButton = (props: ButtonTypeProps) => {
  const {
    width,
    height,
    backgroundColor,
    content,
    color,
    onClick,
  }: ButtonTypeProps = props;
  return (
    <>
      <button
        className="StyledButton"
        onClick={() => console.log("재시도 로직")}
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
