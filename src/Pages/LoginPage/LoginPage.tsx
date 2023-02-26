import { useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../API/API";
import LoginForm from "../../Components/LoginForm/LoginForm";
import "./LoginPage.scss";

const LoginPage = () => {
  const getPage = async () => {
    const response = await API.getHome();
    const { basicImage, logo } = response.data.data.basicDetailResponse;
    localStorage.setItem("logo", logo);
    localStorage.setItem("basicImage", basicImage);
  };
  useEffect(() => {
    getPage();
  }, []);
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
