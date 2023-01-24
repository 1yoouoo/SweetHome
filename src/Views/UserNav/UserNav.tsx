import { slideTypeProps } from "../../Pages/UserPage/UserPage";
import "./UserNav.scss";

const UserNav = ({ slide, setSlide }: slideTypeProps) => {
  const onClickPosts = () => {
    setSlide?.(0);
  };
  const onClickFollowers = () => {
    setSlide?.(1);
  };
  const onClickFollowing = () => {
    setSlide?.(2);
  };
  return (
    <ul className="UserNav">
      <li
        className="UserNav__slideborder"
        style={{ transform: `translateX(${slide * 166}px)` }}
      ></li>
      <li className="UserNav__posts" onClick={onClickPosts}>
        <span>668</span>
        <span>posts</span>
      </li>
      <li className="UserNav__followers" onClick={onClickFollowers}>
        <span>12.6M</span>
        <span>followers</span>
      </li>
      <li className="UserNav__following" onClick={onClickFollowing}>
        <span>19</span>
        <span>following</span>
      </li>
    </ul>
  );
};

export default UserNav;
