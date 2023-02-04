import { useEffect, useState } from "react";
import UserPhoto from "../../sass/styled-components/UserPhoto";
import InputBox from "../../Views/InputBox/InputBox";
import StyledButton from "../../Views/StyledButton/StyledButton";
import CurrentHeader from "../../Views/UserHeader/CurrentHeader";
import "./EditProfile.scss";

const testData = {
  userPhoto: require(`/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg`),
  name: "이지윤",
  userName: "blanc",
  email: "1yoouoo@gmail.com",
  phoneNumber: "01064882739",
};

const EditProfile = () => {
  const [userData, setUserData] = useState<any>();
  const [inputValue, setInputValue] = useState({
    userPhoto: "",
    name: testData.name,
    userName: testData.userName,
    email: testData.email,
    phoneNumber: testData.phoneNumber,
  });
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  useEffect(() => {
    setUserData(testData);
  }, []);
  return (
    <>
      <CurrentHeader current="Edit profile" backwards={true} />
      <div className="EditProfile">
        <form className="Form">
          <div className="Form__user">
            <UserPhoto size="66px" userProfileImage={userData?.userPhoto} />
            <span className="Form__user--username">{userData?.userName}</span>
          </div>
          <div className="Form__name">
            <span className="Form__name--label">Name</span>
            <InputBox
              name="name"
              value={inputValue.name}
              onChangeValue={onChangeValue}
            />
          </div>
          <div className="Form__username">
            <span className="Form__username--label">username</span>
            <InputBox
              name="username"
              value={inputValue.userName}
              onChangeValue={onChangeValue}
            />
          </div>
          <div className="Form__email">
            <span className="Form__email--label">email</span>
            <InputBox
              name="email"
              value={inputValue.email}
              onChangeValue={onChangeValue}
            />
          </div>
          <div className="Form__phonenumber">
            <span className="Form__phonenumber--label">phonenumber</span>
            <InputBox
              name="phonenumber"
              value={inputValue.phoneNumber}
              onChangeValue={onChangeValue}
            />
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
  );
};

export default EditProfile;
