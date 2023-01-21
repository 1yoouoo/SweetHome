import StyledButton from "../StyledButton/StyledButton";
import Logo from "../Logo/Logo";
import "./SignUpForm.scss";
import InputBox from "../InputBox/InputBox";
import { useState } from "react";
// type
interface inputValueType {
  email: string;
  name: string;
  nickName: string;
  password: string;
}

const SignUpForm = () => {
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
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(inputValue);
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
          <InputBox
            placeholder="Email"
            name="email"
            value={inputValue.email}
            onChangeValue={onChangeValue}
          />
          <InputBox
            placeholder="Name"
            name="name"
            value={inputValue.name}
            onChangeValue={onChangeValue}
          />
          <InputBox
            placeholder="NickName"
            name="nickName"
            value={inputValue.nickName}
            onChangeValue={onChangeValue}
          />
          <InputBox
            placeholder="Password"
            name="password"
            value={inputValue.password}
            onChangeValue={onChangeValue}
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
