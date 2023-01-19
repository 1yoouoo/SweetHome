import Header from "../../Views/HomeHeader/HomeHeader";

import PostList from "../../Views/PostList/PostList";
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
