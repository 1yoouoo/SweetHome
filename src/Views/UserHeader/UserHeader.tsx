import "./UserHeader.scss";

const UserHeader = ({ userName }: any) => {
  return (
    <div className="UserHeader">
      <span className="UserHeader__user-id">{userName}</span>
    </div>
  );
};

export default UserHeader;
