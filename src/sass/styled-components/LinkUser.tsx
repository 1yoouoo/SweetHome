// import "/src/sass/abstracts/variables";
import styled from "styled-components";

const StyledLinkUser = styled.div`
  color: #dff1ff;
  cursor: pointer;
`;

const LinkUser = ({ tagedId }: any) => {
  return <StyledLinkUser>{tagedId}</StyledLinkUser>;
};
export default LinkUser;
