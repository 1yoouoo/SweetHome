import { slideTypeProps } from "../../Pages/UserPage/UserPage";
import "./UserNav.scss";

const UserNav = ({ selectedNav, setSelectedNav }: slideTypeProps) => {
  // onClick. 트리거로 비동기 처리해야함
  const onClickPosts = () => {
    setSelectedNav?.(0);
  };
  const onClickFollowers = () => {
    setSelectedNav?.(1);
  };
  const onClickFollowing = () => {
    setSelectedNav?.(2);
  };
  return (
    <ul className="UserNav">
      <li
        className="UserNav__slideborder"
        style={{ transform: `translateX(${selectedNav * 166}px)` }}
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
