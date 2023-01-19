import Header from "../HomeHeader/HomeHeader";

import PostList from "../PostList/PostList";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <PostList />
    </div>
  );
};

export default Home;
