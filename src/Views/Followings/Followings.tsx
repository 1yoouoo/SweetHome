import { GreetingPropTypes } from "../../Pages/UserPage/UserPage";
import Following from "../Following/Following";
import "./Followings.scss";

const Followings = ({ followings }: GreetingPropTypes) => {
  return (
    <ul className="Followings">
      {followings?.map((following: any) => {
        return <Following following={following} key={following.followingId} />;
      })}
    </ul>
  );
};

export default Followings;
