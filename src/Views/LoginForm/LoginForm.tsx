import StyledButton from "../StyledButton/StyledButton";
import Logo from "../Logo/Logo";
import "./LoginForm.scss";
import InputBox from "../InputBox/InputBox";
import { useState } from "react";
import API from "../../API/API";
import { useNavigate } from "react-router-dom";
// type
interface inputValueType {
  email: string;
  password: string;
}
const LoginForm = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<inputValueType>({
    email: "",
    password: "",
  });
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = await API.logIn({
      email: inputValue.email,
      password: inputValue.password,
    });
    if (data?.data.validation === null) {
      // 실패시
      alert(data?.data.error.message);
      setInputValue({ email: "", password: "" });
    } else {
      // 성공시
      const token = data?.headers.token;
      localStorage.setItem("token", token);
      alert(data?.data.validation.message);
      navigate("/home");
    }
  };
  return (
    <>
      <form className="LoginForm" onSubmit={onSubmit}>
        <Logo width="175px" height="51px" />
        <section className="LoginForm__input-section">
          <InputBox
            placeholder="Email"
            name="email"
            value={inputValue.email}
            onChangeValue={onChangeValue}
          />
          <InputBox
            placeholder="Password"
            name="password"
            type="password"
            value={inputValue.password}
            onChangeValue={onChangeValue}
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
