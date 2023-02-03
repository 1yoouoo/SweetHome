import FollowersPage from "../../Views/FollowersPage/FollowersPage";
import FollowingPage from "../../Views/FollowingPage/FollowingPage";
import UserPostList from "../../Views/UserPostList/UserPostList";

const Greeting = ({ selectedNav, posts, followers, following }: any): any => {
  if (selectedNav == 0) {
    return <UserPostList posts={posts} />;
  }
  if (selectedNav == 1) {
    return <FollowersPage followers={followers} />;
  }
  if (selectedNav == 2) {
    return <FollowingPage following={following} />;
  }
};

export default Greeting;
