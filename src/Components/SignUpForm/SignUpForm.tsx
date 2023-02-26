import StyledButton from "../../Views/StyledButton/StyledButton";
import Logo from "../../Views/Logo/Logo";
import "./SignUpForm.scss";
import InputBox from "../../Views/InputBox/InputBox";
import { useRef, useState } from "react";
import API from "../../API/API";
import { useNavigate } from "react-router-dom";
import UploadProfilePhoto from "../../Views/UploadProfilePhoto/UploadProfilePhoto";
// type
interface inputValueType {
  image_file: string | Blob;
  preview_URL: string | ArrayBuffer | null;
}

const SignUpForm = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement[]>([]);
  const [inputValue, setInputValue] = useState<inputValueType>({
    image_file: "", // default 이미지 파일로 넣어놓기
    preview_URL: "",
  });
  const onSubmit = async (e: React.SyntheticEvent) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      console.log(inputValue.image_file);
      formData.append("image", inputValue.image_file);
      formData.append("email", inputRef.current[0].value);
      formData.append("name", inputRef.current[1].value);
      formData.append("nickName", inputRef.current[2].value);
      formData.append("password", inputRef.current[3].value);
      const response = await API.signUp({
        formData,
      });
      // 성공
      if (response?.data.error === null) {
        alert(response.data.data.message);
        navigate("/login");
      }
    } catch (error: unknown) {
      console.log(error);
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
            inputRef={(el: HTMLInputElement) => (inputRef.current[0] = el)}
          />
          {/* 이름 2자이상 10자 이하 */}
          <InputBox
            placeholder="Name"
            name="name"
            inputRef={(el: HTMLInputElement) => (inputRef.current[1] = el)}
          />
          {/* 중복 x 2자이상 10자 이하 */}
          <InputBox
            placeholder="NickName"
            name="nickName"
            inputRef={(el: HTMLInputElement) => (inputRef.current[2] = el)}
          />
          {/* 5자 이상 10자 이하 */}
          <InputBox
            placeholder="Password"
            name="password"
            inputRef={(el: HTMLInputElement) => (inputRef.current[3] = el)}
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
