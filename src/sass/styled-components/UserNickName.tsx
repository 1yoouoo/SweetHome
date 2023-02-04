import styled from "styled-components";

const StyledUserNickName = styled.span`
   {
    font-weight: 800;
    margin-left: 5px;
    cursor: pointer;
    :hover {
      color: #a8a8a8;
    }
  }
`;
interface UserNickNamePropTypes {
  nickName: string;
}
const UserNickName = ({ nickName }: UserNickNamePropTypes) => {
  return <StyledUserNickName>{nickName}</StyledUserNickName>;
};
export default UserNickName;
