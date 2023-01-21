import UserInfo from "../UserInfo/UserInfo";
import UserSummary from "../UserSummary/UserSummary";
import "./UserDetail.scss";

const UserDetail = () => {
  return (
    <div className="UserDetail">
      <UserInfo />
      <UserSummary />
    </div>
  );
};

export default UserDetail;
