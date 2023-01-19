import UserDetail from "../UserDetail/UserDetail";
import UserHeader from "../UserHeader/UserHeader";
import "./UserPage.scss";

const UserPage = () => {
  return (
    <div className="UserPage">
      <UserHeader />
      <div className="UserPage__gap" />
      <UserDetail />
    </div>
  );
};

export default UserPage;
