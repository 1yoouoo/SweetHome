import LoginButton from "../LoginButton/LoginButton";
import LoginInputBox from "../LoginInputBox/LoginInputBox";
import WhiteLogo from "../Logo/WhiteLogo";
import "./LoginForm.scss";
const LoginForm = () => {
  return (
    <>
      <form className="LoginForm">
        <WhiteLogo />
        <LoginInputBox />
        <LoginInputBox />
        <LoginButton />
        <div className="LoginForm__division">
          <span></span>
          <span>or</span>
          <span></span>
        </div>
        <div>Log in with Facebook</div>
        <div>Forgot password ?</div>
      </form>
    </>
  );
};
export default LoginForm;
