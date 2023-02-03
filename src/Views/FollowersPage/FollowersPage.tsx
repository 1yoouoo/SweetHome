import { GreetingPropTypes } from "../../Pages/UserPage/UserPage";
import Follower from "../Follower/Follower";
import "./FollowersPage.scss";

const FollowersPage = ({ followers }: GreetingPropTypes) => {
  return (
    <ul className="FollowersPage">
      <Follower />
    </ul>
  );
};

export default FollowersPage;
