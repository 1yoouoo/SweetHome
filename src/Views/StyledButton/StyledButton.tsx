import "./StyledButton.scss";
import { ButtonTypeProps } from "../../types/snsType";

const StyledButton = (props: ButtonTypeProps) => {
  const { width, height, backgroundColor, content, color }: ButtonTypeProps =
    props;
  return (
    <>
      <button
        className="StyledButton"
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
