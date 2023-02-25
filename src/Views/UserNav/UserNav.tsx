import React, { useCallback } from "react";
import { slideTypeProps } from "../../Pages/UserPage/UserPage";
import "./UserNav.scss";

const UserNav = ({ selectedNav, setSelectedNav, userInfo }: slideTypeProps) => {
  const onClickPosts = useCallback(() => {
    setSelectedNav?.(0);
  }, [selectedNav]);
  const onClickFollowers = useCallback(() => {
    setSelectedNav?.(1);
  }, [selectedNav]);
  const onClickFollowing = useCallback(() => {
    setSelectedNav?.(2);
  }, [selectedNav]);
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

export default React.memo(UserNav);
