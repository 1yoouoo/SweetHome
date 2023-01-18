import Header from "../Header/Header";
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
