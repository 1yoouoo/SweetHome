import { useState } from "react";
import HomeHeader from "../../Views/HomeHeader/HomeHeader";
import Nav from "../../Views/Nav/Nav";

import PostList from "../../Views/PostList/PostList";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <HomeHeader />
      <PostList />
      <Nav />
    </div>
  );
};

export default Home;
