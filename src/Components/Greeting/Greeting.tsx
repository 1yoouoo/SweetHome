import Followers from "../../Views/Followers/Followers";
import FollowingPage from "../../Views/Followings/Followings";
import UserPostList from "../../Views/UserPostList/UserPostList";
interface GreetingPropTypes {
  selectedNav?: any;
  posts?: any;
  followers?: any;
  followings?: any;
}
const Greeting = (props: GreetingPropTypes): any => {
  const { selectedNav, posts, followers, followings }: GreetingPropTypes =
    props;
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
