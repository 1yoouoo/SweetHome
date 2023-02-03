import { GreetingPropTypes } from "../../Pages/UserPage/UserPage";
import Follower from "../Follower/Follower";
import "./Followers.scss";

const Followers = ({ followers }: GreetingPropTypes) => {
  return (
    <ul className="Followers">
      {followers?.map((follower: any) => {
        return <Follower follower={follower} key={follower.followerId} />;
      })}
    </ul>
  );
};

export default Followers;
