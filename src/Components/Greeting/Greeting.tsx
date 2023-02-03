import Followers from "../../Views/Followers/Followers";
import FollowingPage from "../../Views/Followings/Followings";
import UserPostList from "../../Views/UserPostList/UserPostList";

const Greeting = ({ selectedNav, posts, followers, followings }: any): any => {
  console.log(followings);
  if (selectedNav == 0) {
    return <UserPostList posts={posts} />;
  }
  if (selectedNav == 1) {
    return <Followers followers={followers} />;
  }
  if (selectedNav == 2) {
    return <FollowingPage followings={followings} />;
  }
};

export default Greeting;
