import UserDetail from "../../Views/UserDetail/UserDetail";
import UserHeader from "../../Views/UserHeader/UserHeader";
import UserNav from "../../Views/UserNav/UserNav";
import UserPostList from "../../Views/UserPostList/UserPostList";
import "./UserPage.scss";
import ChevronLeftSvg from "../../Assets/SVG/ChevronLeftSvg";
import Setting from "../../Assets/SVG/Setting";

const UserPage = () => {
  const isUser = false;
  const userName = "blanc";
  return (
    <div className="UserPage">
      <UserHeader userName={userName} />
      {isUser ? <Setting /> : <ChevronLeftSvg />}

      <div className="UserPage__gap" />
      <UserDetail />
      <UserNav />
      <UserPostList />
      <div className="UserPage__gap" />
    </div>
  );
};

export default UserPage;
