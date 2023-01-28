import { useNavigate } from "react-router-dom";
import API from "../../API/API";
import UserInfo from "../UserInfo/UserInfo";
import UserSummary from "../UserSummary/UserSummary";
import "./UserDetail.scss";

const UserDetail = () => {
  const navigate = useNavigate();
  const logOut = async () => {
    const response = await API.logOut();
    if (response?.data.error === null) {
      alert(response?.data.data.message);
      navigate("/login");
      localStorage.removeItem("token");
    } else {
      alert(response?.data.error.message);
    }
    // console.log(response);
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
