import LinkUser from "../../sass/styled-components/LinkUser";
import "./UserSummary.scss";
const UserSummary = () => {
  const tagedId = "@blanc";
  return (
    <div className="UserSummary">
      <div>
        <b>슬기 Seulgi</b>
      </div>
      <div>끄적끄적 취미 공간 👀</div>
      <LinkUser tagedId={tagedId} />
      <div>youtu.be/Ut1OzEVUiM4</div>
    </div>
  );
};

export default UserSummary;
