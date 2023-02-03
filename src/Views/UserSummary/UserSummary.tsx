import LinkUser from "../../sass/styled-components/LinkUser";
import "./UserSummary.scss";
const UserSummary = ({ userDetail }: any) => {
  const tagedId = "@blanc";
  return (
    <div className="UserSummary">
      <div>
        <b>{userDetail.contentTitle}</b>
      </div>
      <div>{userDetail.contentTitle}</div>
      <LinkUser tagedId={tagedId} />
    </div>
  );
};

export default UserSummary;
