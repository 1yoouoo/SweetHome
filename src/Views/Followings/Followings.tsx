import { useEffect, useState } from "react";
import API from "../../API/API";
import { GreetingPropTypes } from "../../Pages/UserPage/UserPage";
import Following from "../Following/Following";
import "./Followings.scss";

const Followings = () => {
  const [followings, setFollowings] = useState<any>(null);
  const getFollowings = async (page: number) => {
    console.log("?!");
    const response = await API.getFollowings({
      userId: localStorage.getItem("userId"),
      page: page,
    });
    setFollowings(
      response.data.data.followingListResponse.followingUserListResponseList
    );
  };
  useEffect(() => {
    console.log("following mount !");
    getFollowings(0);
  }, []);
  return (
    <ul className="Followings">
      {followings?.map((following: any) => {
        return <Following following={following} key={following.followId} />;
      })}
    </ul>
  );
};

export default Followings;
