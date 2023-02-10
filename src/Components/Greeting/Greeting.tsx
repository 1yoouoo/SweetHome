import Followers from "../../Views/Followers/Followers";
import Followings from "../../Views/Followings/Followings";
import UserPostList from "../../Views/UserPostList/UserPostList";
interface GreetingPropTypes {
  selectedNav?: any;
  posts?: any;
  followers?: any;
  isLoding?: any;
}
const Greeting = (props: GreetingPropTypes): any => {
  const { selectedNav, posts, followers, isLoding }: GreetingPropTypes = props;
  if (selectedNav == 0) {
    return <UserPostList posts={posts} isLoding={isLoding} />;
  }
  if (selectedNav == 1) {
    return <Followers followers={followers} />;
  }
  if (selectedNav == 2) {
    return <Followings />;
  }
};

export default Greeting;
