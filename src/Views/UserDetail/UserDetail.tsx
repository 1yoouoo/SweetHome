import { useNavigate } from "react-router-dom";
import API from "../../API/API";
import UserInfo from "../UserInfo/UserInfo";
import UserSummary from "../UserSummary/UserSummary";
import "./UserDetail.scss";

const UserDetail = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const logOut = async () => {
    const data = await API.logOut(token);
    if (data?.data.validation !== null) {
      alert(data?.data.validation.message);
      navigate("/login");
      localStorage.removeItem("token");
    }
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
