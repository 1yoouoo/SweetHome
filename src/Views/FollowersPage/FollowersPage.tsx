import { slideTypeProps } from "../../Pages/UserPage/UserPage";
import Follower from "../Follower/Follower";
import "./FollowersPage.scss";

const FollowersPage = ({ slide }: slideTypeProps) => {
  return (
    <ul
      className="FollowersPage"
      style={{ transform: `translateX(-${slide * 500}px)` }}
    >
      <Follower />
    </ul>
  );
};

export default FollowersPage;
