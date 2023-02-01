import { logOut } from "../../utills/function/function";
import UserInfo from "../UserInfo/UserInfo";
import UserSummary from "../UserSummary/UserSummary";
import "./UserDetail.scss";

const UserDetail = () => {
  return (
    <div className="UserDetail">
      <UserInfo />
      <UserSummary />
      <button onClick={logOut}>LOGOUT</button>
    </div>
  );
};

export default UserDetail;
