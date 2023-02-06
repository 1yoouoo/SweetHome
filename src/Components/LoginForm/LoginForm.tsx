import StyledButton from "../../Views/StyledButton/StyledButton";
import Logo from "../../Views/Logo/Logo";
import "./LoginForm.scss";
import InputBox from "../../Views/InputBox/InputBox";
import { useRef } from "react";
import API from "../../API/API";
// type
const LoginForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const response = await API.logIn({
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    });
    if (response?.data.error === null) {
      const token = response?.headers.token;
      response.data.data.userLoginResponse;
      localStorage.setItem("token", token);
      console.log(response);
      window.location.reload();
    } else {
      alert(response.data.error.message);
    }
  };
  return (
    <>
      <form className="LoginForm" onSubmit={onSubmit}>
        <Logo width="175px" height="51px" />
        <section className="LoginForm__input-section">
          <InputBox placeholder="Email" inputRef={emailRef} />
          <InputBox
            placeholder="Password"
            inputRef={passwordRef}
            type="password"
          />
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
