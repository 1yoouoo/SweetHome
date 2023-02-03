import { GreetingPropTypes } from "../../Pages/UserPage/UserPage";
import Following from "../Following/Following";
import "./FollowingPage.scss";

const FollowingPage = ({ following }: GreetingPropTypes) => {
  return (
    <ul className="FollowingPage">
      <Following />
    </ul>
  );
};

export default FollowingPage;
