import React from "react";
import { post } from "../../Pages/UserPage/UserPage";
import Followers from "../../Views/Followers/Followers";
import Followings from "../../Views/Followings/Followings";
import UserPostList from "../../Views/UserPostList/UserPostList";
interface GreetingPropTypes {
  selectedNav?: number;
  posts?: post[];
  isLoding?: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
