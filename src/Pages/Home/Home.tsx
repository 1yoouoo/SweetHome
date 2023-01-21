import { useState } from "react";
import HomeHeader from "../../Views/HomeHeader/HomeHeader";

import PostList from "../../Views/PostList/PostList";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <HomeHeader />
      <PostList />
    </div>
  );
};

export default Home;
