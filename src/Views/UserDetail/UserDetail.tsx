import UserPhoto from "../UserPhoto/UserPhoto";
import "./UserDetail.scss";

const UserDetail = () => {
  return (
    <div className="UserDetail">
      <div>
        <UserPhoto />
        <div>
          <div>
            <span>hi_sseulgi</span>
            <span>...</span>
          </div>
          <div>
            <span>Follow</span>
            <span>Message</span>
            <span>+추가</span>
          </div>
        </div>
      </div>
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
