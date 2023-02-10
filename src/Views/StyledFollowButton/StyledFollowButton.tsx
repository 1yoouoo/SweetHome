import "./StyledFollowButton.scss";
import API from "../../API/API";
import { Dispatch, SetStateAction } from "react";
export interface followButtonProps {
  userId: number;
  isFollowing: boolean;
  setIsFollowing: Dispatch<SetStateAction<boolean>>;
}
const StyledFollowButton = (props: any) => {
  const { userId, isFollowing, setIsFollowing }: followButtonProps = props;
  const follow = async () => {
    const response = await API.follow({
      userId: userId,
    });
    if (response?.data.error == null) {
      setIsFollowing?.(!isFollowing);
    }
  };

  return (
    <>
      <button
        className="StyledFollowButton"
        onClick={follow}
        style={{
          backgroundColor: "#0095f6",
        }}
      >
        Follow
      </button>
    </>
  );
};

export default StyledFollowButton;
