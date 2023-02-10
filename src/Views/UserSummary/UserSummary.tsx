import { userDetailProps } from "../UserDetail/UserDetail";
import "./UserSummary.scss";
const UserSummary = ({ userDetail }: userDetailProps) => {
  return (
    <div className="UserSummary">
      <div>{userDetail.content}</div>
    </div>
  );
};

export default UserSummary;
