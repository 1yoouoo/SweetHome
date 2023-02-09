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
    onClick,
  }: ButtonTypeProps = props;
  const onClickReload = (e: any) => {
    e.preventDefault();
    window.location.reload();
  };
  return (
    <>
      <button
        className="StyledButton"
        // onClick={onClickReload}
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
