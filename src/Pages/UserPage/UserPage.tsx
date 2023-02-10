import UserDetail from "../../Views/UserDetail/UserDetail";
import UserNav from "../../Views/UserNav/UserNav";
import "./UserPage.scss";
import CurrentHeader from "../../Views/UserHeader/CurrentHeader";
import Nav from "../../Views/Nav/Nav";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Greeting from "../../Components/Greeting/Greeting";
import API from "../../API/API";

export interface slideTypeProps {
  selectedNav: number;
  setSelectedNav: Dispatch<SetStateAction<number>>;
  userInfo?: any;
}
export interface GreetingPropTypes {
  selectedNav?: number | undefined;
  posts?: any;
  followers?: any;
  followings?: any;
  isLoding?: any;
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
  const [userInfo, setUserInfo] = useState<any>();
  const [posts, setPosts] = useState<any>();
  const [followers, setFollowers] = useState<any>();
  const [currentPage, setCurrentPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(true);

  const [throttle, setThrottle] = useState(false);
  const [isLoding, setIsLoding] = useState(true);
  const isThrottle = (response: any) => {
    if (throttle) return console.log("대기 !");
    if (!throttle) {
      setThrottle(true);
      setTimeout(() => {
        setIsLoding(false);
        console.log("Data provided");
        setPosts([...posts, ...response.data.data.profileResponse.postSlice]);
        setThrottle(false);
      }, 1000);
    }
  };
  const firstGetUser = async () => {
    const response = await API.getUser({
      userId: localStorage.getItem("userId"),
      page: 0,
    });
    setUserInfo(response.data.data.profileResponse.userDetailResponse);
    setPosts(response.data.data.profileResponse.postSlice);
    setIsLastPage(!response.data.data.profileResponse.hasNext);
    setCurrentPage(1);
    return response;
  };
  const getUser = async (page: number) => {
    const response = await API.getUser({
      userId: localStorage.getItem("userId"),
      page: page,
    });
    setIsLastPage(!response.data.data.profileResponse.hasNext);
    setCurrentPage(page + 1);
    await isThrottle(response);
    return response;
  };
  const areAlmostEndPoint = () => {
    const { scrollTop, offsetHeight, scrollHeight } = document.documentElement;
    if (scrollHeight <= scrollTop + offsetHeight && !isLastPage) {
      console.log("touched!");
      getUser(currentPage);
      setIsLoding(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", areAlmostEndPoint);
    return () => window.removeEventListener("scroll", areAlmostEndPoint);
  });
  useEffect(() => {
    console.log("first userPage Mount!");
    firstGetUser();
    setFollowers(userPageResponse?.followers);
  }, []);
  return (
    <>
      {posts && userInfo && (
        <div className="UserPage">
          <CurrentHeader current={userInfo.nickName} setting={true} />
          <UserDetail userDetail={userInfo} />
          <UserNav
            selectedNav={selectedNav}
            setSelectedNav={setSelectedNav}
            userInfo={userInfo}
          />
          <div className="UserPage__nav">
            <Greeting
              selectedNav={selectedNav}
              posts={posts}
              followers={followers}
              isLoding={isLoding}
            />
          </div>
          <Nav />
        </div>
      )}
    </>
  );
};

export default UserPage;
