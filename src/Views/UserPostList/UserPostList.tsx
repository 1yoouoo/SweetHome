import React, { useState } from "react";
import IsLoding from "../../Components/IsLoding/IsLoding";
import PostModal from "../../Pages/PostModal/PostModal";
import { GreetingPropTypes, post } from "../../Pages/UserPage/UserPage";
import "./UserPostList.scss";

const UserPostList = ({ posts, isLoding }: GreetingPropTypes) => {
  const [postModal, setPostModal] = useState(false);
  const [postId, setPostId] = useState(1);
  const toggleModal = () => {
    setPostModal(!postModal);
  };
  const onClickPost = (postId: number) => {
    setPostId(postId);
    toggleModal();
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onClickOutside = (e: any) => {
    e.stopPropagation();
    if (e.target.className == "background") {
      toggleModal();
    }
  };
  return (
    <ul className="UserPostList">
      {postModal && <PostModal toggleModal={onClickOutside} postId={postId} />}
      {posts &&
        posts.map((post: post) => {
          return (
            <li
              className="UserPostList__item"
              key={post.postId}
              onClick={() => {
                onClickPost(post.postId);
              }}
            >
              <span className="UserPostList__item--img">
                <img src={post.postImageUrls[0].postImageUrl} alt="post" />
              </span>
            </li>
          );
        })}
      {isLoding && <IsLoding height="20" />}
    </ul>
  );
};

export default React.memo(UserPostList);
