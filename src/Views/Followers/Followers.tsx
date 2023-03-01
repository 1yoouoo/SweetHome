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
    async (lastId: number) => {
      const response = await API.getFollowings({
        userId: localStorage.getItem("userId"),
        lastId: lastId,
      });
      setFollowers(
        response.data.data.followingListResponse.followingUserListResponseList
      );
    },
    [followers]
  );
  useEffect(() => {
    console.log("following mount !");
    getFollowers(12);
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
