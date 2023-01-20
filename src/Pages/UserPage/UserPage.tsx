import UserDetail from "../../Views/UserDetail/UserDetail";
import UserNav from "../../Views/UserNav/UserNav";
import UserPostList from "../../Views/UserPostList/UserPostList";
import "./UserPage.scss";
import ChevronLeftSvg from "../../Assets/SVG/ChevronLeftSvg";
import Setting from "../../Assets/SVG/Setting";
import CurrentHeader from "../../Views/UserHeader/CurrentHeader";

const UserPage = () => {
  const isUser = false;
  const userName = "blanc";
  return (
    <div className="UserPage">
      <CurrentHeader userName={userName} />
      {isUser ? <Setting /> : <ChevronLeftSvg />}
      <UserDetail />
      <UserNav />
      <UserPostList />
    </div>
  );
};

export default UserPage;
