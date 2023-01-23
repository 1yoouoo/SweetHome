import UserDetail from "../../Views/UserDetail/UserDetail";
import UserNav from "../../Views/UserNav/UserNav";
import UserPostList from "../../Views/UserPostList/UserPostList";
import "./UserPage.scss";

import CurrentHeader from "../../Views/UserHeader/CurrentHeader";
import Nav from "../../Views/Nav/Nav";

const UserPage = () => {
  const current = "blanc";
  return (
    <div className="UserPage">
      <CurrentHeader current={current} />
      <UserDetail />
      <UserNav />
      <UserPostList />
      <Nav />
    </div>
  );
};

export default UserPage;
