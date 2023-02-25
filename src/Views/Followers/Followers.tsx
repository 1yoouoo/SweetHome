import { useCallback, useEffect, useState } from "react";
import API from "../../API/API";
import Follower from "../Follower/Follower";
import "./Followers.scss";
export interface followerType {
  followId: number;
  isFollowing: boolean;
  nickName: string;
  userId: number;
  userName: string;
  userProfileImageUrl: string;
}
const Followers = () => {
  const [followers, setFollowers] = useState<followerType[]>();
  const getFollowers = useCallback(
    async (page: number) => {
      const response = await API.getFollowers({
        userId: localStorage.getItem("userId"),
        page: page,
      });
      setFollowers(
        response.data.data.followerListResponse.followerUserListResponseList
      );
    },
    [followers]
  );
  useEffect(() => {
    console.log("following mount !");
    getFollowers(0);
  }, []);
  return (
    <ul className="Followers">
      {followers?.map((follower: followerType) => {
        return <Follower follower={follower} key={follower.followId} />;
      })}
    </ul>
  );
};

export default Followers;
