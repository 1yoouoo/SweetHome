import StyledButton from "../../Views/StyledButton/StyledButton";
import "./ErrorView.scss";
interface ErrorViewTypeProps {
  height?: string;
}
const ErrorView = () => {
  return (
    <div className="ErrorView">
      <div className="ErrorView__text">Oh, Fuck! Something went wrong !</div>
      <StyledButton
        width="100px"
        height="34px"
        backgroundColor="#0095f6"
        content="Try Again!"
        color="#fff"
      />
    </div>
  );
};

export default ErrorView;
