import StyledButton from "../StyledButton/StyledButton";
import Logo from "../Logo/Logo";
import "./SignUpForm.scss";
import InputBox from "../InputBox/InputBox";

const SignUpForm = () => {
  return (
    <>
      <form className="SignUpForm">
        <Logo width="175px" height="51px" />
        <section className="SignUpForm__input-section">
          <div className="SignUpForm__division">
            <span className="SignUpForm__division--left"></span>
            <span className="SignUpForm__division--or">OR</span>
            <span className="SignUpForm__division--right"></span>
          </div>
          <InputBox placeholder="Email" />
          <InputBox placeholder="Name" />
          <InputBox placeholder="NickName" />
          <InputBox placeholder="Password" />
          <div style={{ margin: "20px 0" }}>
            <StyledButton
              width="258px"
              height="34px"
              backgroundColor="#0095f6"
              content="Sign Up"
              color="#fff"
            />
          </div>
        </section>
      </form>
    </>
  );
};
export default SignUpForm;
