import LoginForm from "../LoginForm/LoginForm";
import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <>
      <div className="LoginPage">
        <div className="LoginPage__wrapper">
          <LoginForm />
        </div>
        <div className="LoginPage__signup">
          <span className="LoginPage__signup--text">
            Don't have an account?
          </span>
          <a className="LoginPage__signup--hyperlink">Sign up</a>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
