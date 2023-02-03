import UserDetail from "../../Views/UserDetail/UserDetail";
import UserNav from "../../Views/UserNav/UserNav";
import "./UserPage.scss";
import CurrentHeader from "../../Views/UserHeader/CurrentHeader";
import Nav from "../../Views/Nav/Nav";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Greeting from "../../Components/Greeting/Greeting";

export interface slideTypeProps {
  selectedNav: number;
  setSelectedNav: Dispatch<SetStateAction<number>>;
}
export interface GreetingPropTypes {
  selectedNav?: number | undefined;
  posts?: any;
  followers?: any;
  following?: any;
}
const UserPage = () => {
  const [selectedNav, setSelectedNav] = useState<number>(2);
  const [posts, setPosts] = useState();
  const [followers, setFollowers] = useState();
  const [following, setFollowing] = useState();
  const current = "blanc";

  useEffect(() => {
    console.log("UserPage Mount!");
    //posts default Api호출
  }, []);
  return (
    <div className="UserPage">
      <CurrentHeader current={current} />
      <UserDetail />
      <UserNav selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
      <div className="UserPage__nav">
        <Greeting
          selectedNav={selectedNav}
          posts={posts}
          followers={followers}
          following={following}
        />
      </div>
      <Nav />
    </div>
  );
};

export default UserPage;
