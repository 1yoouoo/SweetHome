import "./UserNav.scss";
const UserNav = () => {
  return (
    <ul className="UserNav">
      <li className="UserNav__posts">
        <span>668</span>
        <span>posts</span>
      </li>
      <li className="UserNav__followers">
        <span>12.6M</span>
        <span>followers</span>
      </li>
      <li className="UserNav__following">
        <span>19</span>
        <span>following</span>
      </li>
    </ul>
  );
};

export default UserNav;
