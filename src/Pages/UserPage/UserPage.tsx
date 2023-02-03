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
  followings?: any;
}
const userPageResponse = {
  userDetail: {
    userImg: require(`/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg`),
    nickName: "blanc",
    contentTitle: "contentTitle입니다.",
    contentSubTitle: "content입니다.",
  },

  posts: [
    {
      id: 1,
      img: require(`/Users/blanc/Documents/Project/sns/src/Assets/cat1.jpeg`),
    },
    {
      id: 2,
      img: require(`/Users/blanc/Documents/Project/sns/src/Assets/cat2.jpeg`),
    },
    {
      id: 3,
      img: require(`/Users/blanc/Documents/Project/sns/src/Assets/cat3.jpeg`),
    },
    {
      id: 4,
      img: require(`/Users/blanc/Documents/Project/sns/src/Assets/cat4.jpeg`),
    },
    {
      id: 5,
      img: require(`/Users/blanc/Documents/Project/sns/src/Assets/cat4.jpeg`),
    },
    {
      id: 6,
      img: require(`/Users/blanc/Documents/Project/sns/src/Assets/cat4.jpeg`),
    },
    {
      id: 7,
      img: require(`/Users/blanc/Documents/Project/sns/src/Assets/cat4.jpeg`),
    },
    {
      id: 8,
      img: require(`/Users/blanc/Documents/Project/sns/src/Assets/cat4.jpeg`),
    },
    {
      id: 9,
      img: require(`/Users/blanc/Documents/Project/sns/src/Assets/cat4.jpeg`),
    },
    {
      id: 10,
      img: require(`/Users/blanc/Documents/Project/sns/src/Assets/cat4.jpeg`),
    },
    {
      id: 11,
      img: require(`/Users/blanc/Documents/Project/sns/src/Assets/cat4.jpeg`),
    },
  ],
  followers: [
    {
      followerId: 1,
      userImg: require(`/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg`),
      nickName: "follower_1",
    },
  ],
  followings: [
    {
      followingId: 1,
      userImg: require(`/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg`),
      nickName: "following_1",
    },
  ],
};
const UserPage = () => {
  const [selectedNav, setSelectedNav] = useState<number>(0);
  const [posts, setPosts] = useState<any>();
  const [followers, setFollowers] = useState<any>();
  const [followings, setFollowings] = useState<any>();
  const current = "blanc";

  useEffect(() => {
    setPosts(userPageResponse?.posts);
    setFollowers(userPageResponse?.followers);
    setFollowings(userPageResponse?.followings);
    console.log("UserPage Mount!");
    //posts default Api호출
  }, []);
  return (
    <div className="UserPage">
      <CurrentHeader current={current} />
      <UserDetail userDetail={userPageResponse.userDetail} />
      <UserNav selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
      <div className="UserPage__nav">
        <Greeting
          selectedNav={selectedNav}
          posts={userPageResponse.posts}
          followers={userPageResponse.followers}
          followings={userPageResponse.followings}
        />
      </div>
      <Nav />
    </div>
  );
};

export default UserPage;
