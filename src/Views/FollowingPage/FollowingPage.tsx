import { slideTypeProps } from "../../Pages/UserPage/UserPage";
import Following from "../Following/Following";
import "./FollowingPage.scss";

const FollowingPage = ({ slide }: slideTypeProps) => {
  return (
    <ul
      className="FollowingPage"
      style={{ transform: `translateX(-${slide * 500}px)` }}
    >
      <Following />
    </ul>
  );
};

export default FollowingPage;
