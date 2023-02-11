import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IsLoding from "../../Components/IsLoding/IsLoding";
import PostModal from "../../Pages/PostModal/PostModal";
import { GreetingPropTypes, post } from "../../Pages/UserPage/UserPage";
import "./UserPostList.scss";

const UserPostList = ({ posts, isLoding }: GreetingPropTypes) => {
  const navigate = useNavigate();
  const [postModal, setPostModal] = useState(false);
  const toggleModal = () => {
    setPostModal(!postModal);
    console.log("toggleModal", postModal);
  };
  const onClickOutside = (e: any) => {
    e.stopPropagation();
    if (e.target.className == "background") {
      toggleModal();
    }
  };
  return (
    <ul className="UserPostList">
      {postModal && <PostModal toggleModal={onClickOutside} />}
      {posts &&
        posts.map((post: post) => {
          return (
            <li
              className="UserPostList__item"
              key={post.postId}
              onClick={() => {
                toggleModal();
              }}
            >
              <span className="UserPostList__item--img">
                <img src={post.postImageUrl} alt="post" />
              </span>
            </li>
          );
        })}
      {isLoding && <IsLoding height="20" />}
    </ul>
  );
};

export default React.memo(UserPostList);
