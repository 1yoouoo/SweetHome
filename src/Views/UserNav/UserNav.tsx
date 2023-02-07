import { slideTypeProps } from "../../Pages/UserPage/UserPage";
import "./UserNav.scss";

const UserNav = ({ selectedNav, setSelectedNav, userInfo }: slideTypeProps) => {
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
        <span>{userInfo.postSize}</span>
        <span>posts</span>
      </li>
      <li className="UserNav__followers" onClick={onClickFollowers}>
        <span>{userInfo.followerSize}</span>
        <span>followers</span>
      </li>
      <li className="UserNav__following" onClick={onClickFollowing}>
        <span>{userInfo.followingSize}</span>
        <span>following</span>
      </li>
    </ul>
  );
};

export default UserNav;
