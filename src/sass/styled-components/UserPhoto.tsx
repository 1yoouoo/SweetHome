import blanc from "/Users/blanc/Documents/Project/sns/src/Assets/blanc.jpeg";
import styled from "styled-components";

interface UserPhotoPropTypes {
  size: string;
}

const StyledUserPhoto = styled.div<UserPhotoPropTypes>`
  .UserPhoto {
    position: relative;
    width: calc(${(props) => props.size});
    height: calc(${(props) => props.size});
    &__gradient {
      display: flex;
      // position: absolute;
      box-sizing: border-box;
      top: 0;
      width: calc(${(props) => props.size} - 3px);
      height: calc(${(props) => props.size} - 3px);
      border-radius: 50%;
      border: double 2px transparent;
      background-image: linear-gradient(black, black),
        radial-gradient(
          circle at bottom left,
          #ff7a00,
          #ffd600,
          #ff0169,
          #d300c5,
          #7638fa
        );
      background-origin: border-box;
      background-clip: content-box, border-box;
      justify-content: center;
      align-items: center;
    }
    &__img--wrapper {
      box-sizing: border-box;
      width: calc(${(props) => props.size} - 8px);
      height: calc(${(props) => props.size} - 8px);
      border-radius: 50%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border: 3px solid #000;
      & > img {
        width: calc(${(props) => props.size} - 14px);
        height: calc(${(props) => props.size} - 14px);
      }
    }
  }
`;

const UserPhoto = ({ size }: UserPhotoPropTypes) => {
  return (
    <StyledUserPhoto size={size}>
      <div className="UserPhoto">
        <div className="UserPhoto__gradient">
          <span className="UserPhoto__img--wrapper">
            <img src={blanc} alt="logo" />
          </span>
        </div>
      </div>
    </StyledUserPhoto>
  );
};

export default UserPhoto;
