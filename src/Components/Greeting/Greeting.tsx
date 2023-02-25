import React from "react";
import Followers from "../../Views/Followers/Followers";
import Followings from "../../Views/Followings/Followings";
import UserPostList from "../../Views/UserPostList/UserPostList";
interface GreetingPropTypes {
  selectedNav?: number;
  posts?: any;
  isLoding?: boolean;
}
const Greeting = (props: GreetingPropTypes): any => {
  const { selectedNav, posts, isLoding }: GreetingPropTypes = props;
  if (selectedNav == 0) {
    return <UserPostList posts={posts} isLoding={isLoding} />;
  }
  if (selectedNav == 1) {
    return <Followers />;
  }
  if (selectedNav == 2) {
    return <Followings />;
  }
};

export default React.memo(Greeting);
