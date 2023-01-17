import LoginForm from "../LoginForm/LoginForm";
import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <>
      <div className="LoginPage">
        <div className="LoginPage__wrapper">
          <LoginForm />
        </div>
        <div>
          <span>Dont'have an account?</span>
          <a>Sign up</a>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
