import "./UserPhoto.scss";
import blanc from "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg";
const UserPhoto = () => {
  return (
    <div className="UserPhoto">
      <div className="UserPhoto__gradient">
        <span className="UserPhoto__img--wrapper">
          <img src={blanc} alt="logo" />
        </span>
      </div>
    </div>
  );
};

export default UserPhoto;
