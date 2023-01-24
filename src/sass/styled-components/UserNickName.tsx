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
const UserNickName = ({ nickName }: any) => {
  return <StyledUserNickName>{nickName}</StyledUserNickName>;
};
export default UserNickName;
