import UserDetail from "../../Views/UserDetail/UserDetail";
import UserNav from "../../Views/UserNav/UserNav";
import "./UserPage.scss";
import CurrentHeader from "../../Views/UserHeader/CurrentHeader";
import Nav from "../../Views/Nav/Nav";
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import Greeting from "../../Components/Greeting/Greeting";
import API from "../../API/API";
import { AxiosResponse } from "axios";

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
export interface userInfoType {
  content: string;
  followerSize: number;
  followingSize: number;
  isFollowing: boolean;
  isProfileOwner: boolean;
  nickName: string;
  postSize: number;
  userId: number;
  userName: string;
  userProfileImageUrl: string;
}
export interface post {
  postId: number;
  postImageId: number;
  postImageUrl: string;
}
// interface posts {
//   posts?: post[]
// }
const UserPage = () => {
  const [selectedNav, setSelectedNav] = useState<number>(0);
  const [userInfo, setUserInfo] = useState<userInfoType>();
  const [posts, setPosts] = useState<any>();
  const [currentPage, setCurrentPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);

  const [throttle, setThrottle] = useState(false);
  const [isLoding, setIsLoding] = useState(false);
  const isThrottle = (response: AxiosResponse) => {
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
    const profileResponse = response.data.data.profileResponse;
    setUserInfo(profileResponse.userDetailResponse);
    setPosts(profileResponse.postSlice);
    setIsLastPage(!profileResponse.hasNext);
    setCurrentPage(1);
  };
  const getUser = useCallback(
    async (page: number) => {
      const response = await API.getUser({
        userId: localStorage.getItem("userId"),
        page: page,
      });
      setIsLastPage(!response.data.data.profileResponse.hasNext);
      setCurrentPage(page + 1);
      isThrottle(response);
    },
    [isLastPage, currentPage, throttle]
  );
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
              isLoding={isLoding}
            />
          </div>
          <Nav />
        </div>
      )}
    </>
  );
};

export default React.memo(UserPage);
