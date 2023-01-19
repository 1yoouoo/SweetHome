import UserInfo from "../UserInfo/UserInfo";
import "./UserDetail.scss";

const UserDetail = () => {
  return (
    <div className="UserDetail">
      <UserInfo />
      {/* Usersummary */}
      <div>
        <div>슬기 Seulgi </div>
        <div>끄적끄적 취미 공간 👀</div>
        <div>@by.sseulgi</div>
        <div>youtu.be/Ut1OzEVUiM4</div>
      </div>
    </div>
  );
};

export default UserDetail;
