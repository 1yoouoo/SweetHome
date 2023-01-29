import StyledButton from "../../Views/StyledButton/StyledButton";
import Logo from "../../Views/Logo/Logo";
import "./SignUpForm.scss";
import InputBox from "../../Views/InputBox/InputBox";
import { useState } from "react";
import API from "../../API/API";
import { useNavigate } from "react-router-dom";
// type
interface inputValueType {
  email: string;
  name: string;
  nickName: string;
  password: string;
}

const SignUpForm = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<inputValueType>({
    email: "",
    name: "",
    nickName: "",
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
    const response = await API.signUp({
      email: inputValue.email,
      nickName: inputValue.nickName,
      name: inputValue.name,
      password: inputValue.password,
    });
    // 성공
    if (response?.data.error === null) {
      alert(response.data.data.message);
      navigate("/login");
      // 실패
    } else {
      alert(response.data.error.message);
    }
  };
  return (
    <>
      <form className="SignUpForm" onSubmit={onSubmit}>
        <Logo width="175px" height="51px" />
        <section className="SignUpForm__input-section">
          <div className="SignUpForm__division">
            <span className="SignUpForm__division--left"></span>
            <span className="SignUpForm__division--or">OR</span>
            <span className="SignUpForm__division--right"></span>
          </div>
          {/* 이메일 폼 */}
          <InputBox
            placeholder="Email"
            name="email"
            value={inputValue.email}
            onChangeValue={onChangeValue}
          />
          {/* 이름 2자이상 10자 이하 */}
          <InputBox
            placeholder="Name"
            name="name"
            value={inputValue.name}
            onChangeValue={onChangeValue}
          />
          {/* 중복 x 2자이상 10자 이하 */}
          <InputBox
            placeholder="NickName"
            name="nickName"
            value={inputValue.nickName}
            onChangeValue={onChangeValue}
          />
          {/* 5자 이상 10자 이하 */}
          <InputBox
            placeholder="Password"
            name="password"
            value={inputValue.password}
            onChangeValue={onChangeValue}
            type="password"
          />
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
