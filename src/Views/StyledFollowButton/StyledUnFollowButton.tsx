import "./StyledFollowButton.scss";
import API from "../../API/API";
import { followButtonProps } from "./StyledFollowButton";

const StyledUnFollowButton = (props: followButtonProps) => {
  const { userId, isFollowing, setIsFollowing }: followButtonProps = props;

  const unFollow = async () => {
    const response = await API.unFollow({
      userId: userId,
    });
    if (response?.data.error == null) {
      console.log(response.data.error != null);
      setIsFollowing?.(!isFollowing);
    }
  };

  return (
    <>
      <button
        className="StyledFollowButton"
        onClick={unFollow}
        style={{
          backgroundColor: "#262626",
        }}
      >
        Unfollow
      </button>
    </>
  );
};

export default StyledUnFollowButton;
