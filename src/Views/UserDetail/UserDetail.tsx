import { logOut } from "../../utills/function/function";
import UserInfo from "../UserInfo/UserInfo";
import UserSummary from "../UserSummary/UserSummary";
import "./UserDetail.scss";

const UserDetail = ({ userDetail }: any) => {
  return (
    <div className="UserDetail">
      <UserInfo userDetail={userDetail} />
      <UserSummary userDetail={userDetail} />
      <button onClick={logOut}>LOGOUT</button>
    </div>
  );
};

export default UserDetail;
