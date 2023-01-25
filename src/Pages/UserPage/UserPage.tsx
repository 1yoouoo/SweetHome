import UserDetail from "../../Views/UserDetail/UserDetail";
import UserNav from "../../Views/UserNav/UserNav";
import UserPostList from "../../Views/UserPostList/UserPostList";
import "./UserPage.scss";
import CurrentHeader from "../../Views/UserHeader/CurrentHeader";
import Nav from "../../Views/Nav/Nav";
import FollowersPage from "../../Views/FollowersPage/FollowersPage";
import FollowingPage from "../../Views/FollowingPage/FollowingPage";
import { Dispatch, SetStateAction, useState } from "react";

export interface slideTypeProps {
  slide: number;
  setSlide?: Dispatch<SetStateAction<number>>;
}
const UserPage = () => {
  const [slide, setSlide] = useState(0);
  const current = "blanc";
  return (
    <div className="UserPage">
      <CurrentHeader current={current} />
      <UserDetail />
      <UserNav slide={slide} setSlide={setSlide} />
      <div className="UserPage__slide">
        <UserPostList slide={slide} />
        <FollowersPage slide={slide} />
        <FollowingPage slide={slide} />
      </div>
      <Nav />
    </div>
  );
};

export default UserPage;
