import LinkUser from "../../sass/styled-components/LinkUser";
import "./UserSummary.scss";
const UserSummary = ({ userDetail }: any) => {
  const tagedId = "@blanc";
  return (
    <div className="UserSummary">
      <div>{userDetail.content}</div>
      <LinkUser tagedId={tagedId} />
    </div>
  );
};

export default UserSummary;
