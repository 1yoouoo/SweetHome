import { useEffect } from "react";
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
  useEffect(() => {
    console.log("followers mount");
  }, []);
  return (
    <ul className="Followers">
      {/* {followers?.map((follower: followerType) => {
        return <Follower follower={follower} key={follower.followerId} />;
      })} */}
    </ul>
  );
};

export default Followers;
