import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import PostList from "../PostList/PostList";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <PostList />
      <Nav />
    </div>
  );
};

export default Home;
