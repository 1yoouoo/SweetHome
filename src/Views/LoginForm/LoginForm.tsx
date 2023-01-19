import StyledButton from "../StyledButton/StyledButton";
import LoginInputBox from "../InputBox/InputBox";
import Logo from "../Logo/Logo";
import "./LoginForm.scss";

const LoginForm = () => {
  return (
    <>
      <form className="LoginForm">
        <Logo width="175px" height="51px" />
        <section className="LoginForm__input-section">
          <LoginInputBox placeholder="Phone number, username, or email" />
          <LoginInputBox placeholder="Password" />
          <div style={{ margin: "20px 0" }}>
            <StyledButton
              width="258px"
              height="34px"
              backgroundColor="#0095f6"
              content="Log In"
              color="#fff"
            />
          </div>
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
