import { useState } from "react";
import SignUpForm from "../../Views/SignUpForm/SignUpForm";
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
          <a className="SignUpPage__signup--hyperlink">Log in</a>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
