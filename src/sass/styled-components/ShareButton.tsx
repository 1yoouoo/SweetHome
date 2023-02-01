import styled from "styled-components";

const StyledPostingButton = styled.div`
  color: #0095f6;
  cursor: pointer;
  position: absolute;
  z-index: 3;
  top: 0;
  right: 0;
  width: 30px;
  height: 20px;
  font-size: 16px;
  padding: 4px 5px;
  margin: 8px;
`;
interface postingButtonTypeProps {
  text: string;
  onClickSharing?: (e: any) => Promise<void>;
}
const PostingButton = ({ text, onClickSharing }: postingButtonTypeProps) => {
  return (
    <StyledPostingButton onClick={onClickSharing}>{text}</StyledPostingButton>
  );
};
export default PostingButton;
