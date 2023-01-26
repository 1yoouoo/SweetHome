import API from "../../API/API";
import UserInfo from "../UserInfo/UserInfo";
import UserSummary from "../UserSummary/UserSummary";
import "./UserDetail.scss";

const UserDetail = () => {
  const token = localStorage.getItem("token");

  const logOut = async () => {
    const data = await API.logOut(token);
    console.log(data);
  };
  return (
    <div className="UserDetail">
      <UserInfo />
      <UserSummary />
      <button onClick={logOut}>LOGOUT</button>
    </div>
  );
};

export default UserDetail;
