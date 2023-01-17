import LoginButton from "../LoginButton/LoginButton";
import LoginInputBox from "../LoginInputBox/LoginInputBox";
import WhiteLogo from "../Logo/WhiteLogo";
import "./LoginForm.scss";

const LoginForm = () => {
  return (
    <>
      <form className="LoginForm">
        <WhiteLogo width="175px" height="51px" />
        <section className="LoginForm__input-section">
          <LoginInputBox placeholder="Phone number, username, or email" />
          <LoginInputBox placeholder="Password" />
          <LoginButton />
        </section>
        <div className="LoginForm__division">
          <span className="LoginForm__division--left"></span>
          <span className="LoginForm__division--or">OR</span>
          <span className="LoginForm__division--right"></span>
        </div>
        <div className="LoginForm__forgot-pw">Forgot password ?</div>
      </form>
    </>
  );
};
export default LoginForm;
