import React, { useCallback, useEffect, useState } from "react";
import API from "../../API/API";
import Following from "../Following/Following";
import "./Followings.scss";
export interface followingType {
  followId: number;
  isFollowing: boolean;
  nickName: string;
  userId: number;
  userName: string;
  userProfileImageUrl: string;
}

const Followings = () => {
  const [followings, setFollowings] = useState<followingType[]>();
  const getFollowings = useCallback(
    async (page: number) => {
      const response = await API.getFollowings({
        userId: localStorage.getItem("userId"),
        page: page,
      });
      setFollowings(
        response.data.data.followingListResponse.followingUserListResponseList
      );
    },
    [followings]
  );
  useEffect(() => {
    console.log("following mount !");
    getFollowings(0);
  }, []);
  return (
    <ul className="Followings">
      {followings?.map((following: followingType) => {
        return <Following following={following} key={following.followId} />;
      })}
    </ul>
  );
};

export default React.memo(Followings);
