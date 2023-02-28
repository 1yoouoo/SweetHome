import { useEffect, useRef, useState } from "react";
import API from "../../API/API";
import ErrorView from "../../Components/ErrorView/ErrorView";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import InputBox from "../../Views/InputBox/InputBox";
import StyledButton from "../../Views/StyledButton/StyledButton";
import TextBox from "../../Views/TextBox/TextBox";
import CurrentHeader from "../../Views/UserHeader/CurrentHeader";
import "./EditProfile.scss";

interface inputValueType {
  image_file: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  preview_URL: any;
  nickName: string;
  userName: string;
}

const EditProfile = () => {
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [error, setError] = useState<unknown>();
  const [inputValue, setInputValue] = useState<inputValueType>({
    image_file: "",
    preview_URL: "",
    nickName: "",
    userName: "",
  });
  const fetchUserProfile = async () => {
    try {
      const response = await API.getUserProfile({
        userId: localStorage.getItem("userId"),
      });
      return response.data.data.profileResponse.userDetailResponse;
    } catch (error: unknown) {
      setError(error);
    }
  };
  const getUserProfile = async () => {
    // 이미지 파일로 받아야 버그 안남 FIXME
    try {
      const response = await fetchUserProfile();
      setInputValue({
        ...inputValue,
        preview_URL: response.userProfileImageUrl,
        nickName: response.nickName,
        userName: response.userName,
      });
    } catch (error: unknown) {
      setError(error);
    }
  };
  const onChangeValue = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputValue({
      ...inputValue,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(inputValue);
    console.log(contentRef.current?.value);
    API.updateUserProfile({
      userId: localStorage.getItem("userId"),
      userName: inputValue.userName,
      nickName: inputValue.nickName,
      content: contentRef.current?.value,
    });
    // navigate
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const saveImage = async (e: any) => {
    try {
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
    } catch (error) {
      setError(error);
    }
  };
  const testClick = async () => {
    const formData = new FormData();
    formData.append("image", inputValue.image_file);
    console.log(inputValue);
    const response = await API.updateUserProfileImage({
      userId: localStorage.getItem("userId"),
      formData,
    });
    if (response?.data.error === null) {
      alert(response.data.data.message);
    }
  };
  useEffect(() => {
    getUserProfile();
  }, []);
  return (
    <>
      {error ? (
        <ErrorView />
      ) : (
        <>
          <CurrentHeader current="Edit profile" backwards={true} />
          <div className="EditProfile">
            <form className="Form" onSubmit={onSubmit}>
              <div className="Form__user">
                <UserPhoto
                  size="66px"
                  userProfileImage={inputValue.preview_URL}
                />
                <span className="Form__user--wrapper">
                  <span className="Form__user--username">
                    {inputValue.userName}
                  </span>
                  <label className="Form__user--button" htmlFor="photoInput">
                    change profile Photo
                  </label>
                  <label onClick={testClick}>적용</label>
                  <input
                    className="Form__user--photo"
                    type="file"
                    accept="image/*"
                    id="photoInput"
                    onChange={saveImage}
                  />
                </span>
              </div>
              <div className="Form__name">
                <span className="Form__name--label">NickName</span>
                <InputBox
                  name="name"
                  value={inputValue.nickName}
                  onChangeValue={onChangeValue}
                />
              </div>
              <div className="Form__username">
                <span className="Form__username--label">Username</span>
                <InputBox
                  name="userName"
                  value={inputValue.userName}
                  onChangeValue={onChangeValue}
                />
              </div>
              <div className="Form__content">
                <span className="Form__content--label">Content</span>
                <TextBox name="content" inputRef={contentRef} />
              </div>

              <div className="Form__button">
                <StyledButton
                  width="100px"
                  height="34px"
                  backgroundColor="#0095f6"
                  content="On Submit"
                  color="#fff"
                />
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default EditProfile;
