import { Link } from "react-router-dom";
import LoginForm from "../../Views/LoginForm/LoginForm";
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
          <Link to="/signup" className="LoginPage__signup--hyperlink">
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
