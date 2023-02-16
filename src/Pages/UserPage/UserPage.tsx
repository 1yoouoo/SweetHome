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
import ErrorView from "../../Components/ErrorView/ErrorView";

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
  isLoding?: boolean;
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
// 무한 스크롤 2번 씩 됨 .. FIXME
const UserPage = () => {
  const [selectedNav, setSelectedNav] = useState<number>(0);
  const [userInfo, setUserInfo] = useState<userInfoType>();
  const [error, setError] = useState<unknown>(null);
  const [posts, setPosts] = useState<any>();
  const [lastPostId, setLastPostId] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const [throttle, setThrottle] = useState(false);
  const [isLoding, setIsLoding] = useState(false);
  const isThrottle = () => {
    if (throttle) return console.log("대기 !");
    setIsLoding(true);
    if (!throttle) {
      setThrottle(true);
      setTimeout(() => {
        setIsLoding(false);
        setUserProfile(lastPostId);
        console.log("Data provided");
        setThrottle(false);
      }, 1000);
    }
  };
  const fetchUserProfileAtFirstMount = async () => {
    try {
      const response = await API.getUserProfile({
        userId: localStorage.getItem("userId"),
      });
      return response.data.data.profileResponse;
    } catch (error: unknown) {
      setError(error);
    }
  };
  const setUserProfileAtFirstMount = async () => {
    const profileResponse = await fetchUserProfileAtFirstMount();
    setUserInfo(profileResponse.userDetailResponse);
    setPosts(profileResponse.postSlice);
    setIsLastPage(!profileResponse.hasNext);
    setLastPostId(profileResponse.postSlice.at(-1)?.postId);
  };

  const fetchUserProfile = useCallback(async (lastPostId: number) => {
    try {
      const response = await API.getUserProfile({
        userId: localStorage.getItem("userId"),
        lastPostId: lastPostId,
      });
      return response.data.data.profileResponse;
    } catch (error: unknown) {
      setError(error);
    }
  }, []);
  const setUserProfile = async (lastPostId: number) => {
    const profileResponse = await fetchUserProfile(lastPostId);
    setIsLastPage(!profileResponse.hasNext);
    setLastPostId(profileResponse.postSlice.at(-1)?.postId);
    setPosts([...posts, ...profileResponse.postSlice]);
  };

  const areAlmostEndPoint = () => {
    const { scrollTop, offsetHeight, scrollHeight } = document.documentElement;
    if (scrollHeight <= scrollTop + offsetHeight && !isLastPage) {
      console.log("Touched At end of screen!!!");
      isThrottle();
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", areAlmostEndPoint);
    return () => window.removeEventListener("scroll", areAlmostEndPoint);
  });
  useEffect(() => {
    console.log("UserPage Mount!!!");
    setUserProfileAtFirstMount();
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
            {error ? (
              <ErrorView />
            ) : (
              <Greeting
                selectedNav={selectedNav}
                posts={posts}
                isLoding={isLoding}
              />
            )}
          </div>
          <Nav />
        </div>
      )}
    </>
  );
};

export default React.memo(UserPage);
