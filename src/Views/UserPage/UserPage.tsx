import UserDetail from "../UserDetail/UserDetail";
import UserHeader from "../UserHeader/UserHeader";
import UserNav from "../UserNav/UserNav";
import "./UserPage.scss";

const UserPage = () => {
  return (
    <div className="UserPage">
      <UserHeader />
      <div className="UserPage__gap" />
      <UserDetail />
      {/* UserNav */}
      <UserNav />
    </div>
  );
};

export default UserPage;
