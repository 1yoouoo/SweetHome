import StyledButton from "../../Views/StyledButton/StyledButton";
import Logo from "../../Views/Logo/Logo";
import "./SignUpForm.scss";
import InputBox from "../../Views/InputBox/InputBox";
import { useState } from "react";
import defaultProfile from "/Users/blanc/Documents/Project/sns/src/Assets/default_profile.png";
import API from "../../API/API";
import { useNavigate } from "react-router-dom";
import UploadProfilePhoto from "../../Views/UploadProfilePhoto/UploadProfilePhoto";
// type
interface inputValueType {
  image_file: string | Blob;
  preview_URL: string | ArrayBuffer | null;
  email: string;
  name: string;
  nickName: string;
  password: string;
}

const SignUpForm = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<inputValueType>({
    image_file: "",
    preview_URL: defaultProfile,
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
    const formData = new FormData();
    formData.append("image", inputValue.image_file);
    formData.append("email", inputValue.email);
    formData.append("name", inputValue.name);
    formData.append("nickName", inputValue.nickName);
    formData.append("password", inputValue.password);
    const response = await API.signUp({
      formData,
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const saveImage = (e: any) => {
    e.preventDefault();
    const fileReader = new FileReader();

    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }
    fileReader.onload = () => {
      setInputValue({
        ...inputValue,
        image_file: e.target.files[0],
        preview_URL: fileReader.result,
      });
    };
  };
  return (
    <>
      <form className="SignUpForm" onSubmit={onSubmit}>
        <Logo width="175px" height="51px" />
        <div className="SignUpForm__profile-photo">
          <UploadProfilePhoto inputValue={inputValue} saveImage={saveImage} />
        </div>

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
