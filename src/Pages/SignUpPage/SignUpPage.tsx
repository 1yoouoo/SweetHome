import { Link } from "react-router-dom";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import "./SignUpPage.scss";

const SignUpPage = () => {
  return (
    <>
      <div className="SignUpPage">
        <div className="SignUpPage__wrapper">
          <SignUpForm />
        </div>

        <div className="SignUpPage__signup">
          <span className="SignUpPage__signup--text">Have an account?</span>
          <Link to="/login" className="SignUpPage__signup--hyperlink">
            Log in
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
