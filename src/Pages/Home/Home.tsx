import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import API from "../../API/API";
import HomeHeader from "../../Views/HomeHeader/HomeHeader";
import Nav from "../../Views/Nav/Nav";

import PostList from "../../Views/PostList/PostList";
import "./Home.scss";

const Home = () => {
  const [posts, setPosts] = useState<any>();
  const [throttle, setThrottle] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isLoding, setIsLoding] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const isThrottle = (response: AxiosResponse) => {
    if (throttle) return console.log("대기 !");
    if (!throttle) {
      setThrottle(true);
      setTimeout(() => {
        setIsLoding(false);
        console.log("Data provided");
        setPosts([
          ...posts,
          ...response.data.data.newsFeedListResponse.postListDetailResponses,
        ]);
        setThrottle(false);
      }, 1000);
    }
  };
  const areAlmostEndPoint = () => {
    const { scrollTop, offsetHeight, scrollHeight } = document.documentElement;
    if (scrollHeight <= scrollTop + offsetHeight && !isLastPage) {
      console.log("touched!");
      getPosts(currentPage);
      setIsLoding(true);
    }
  };
  const firstGetPosts = async () => {
    const response = await API.getPosts({
      userId: localStorage.getItem("userId"),
      page: 0,
    });
    const postsResponse = response.data.data.newsFeedListResponse;
    setPosts(postsResponse.postListDetailResponses);
    setIsLastPage(!postsResponse.hasNext);
    setCurrentPage(1);
  };
  const getPosts = async (page: any) => {
    const response = await API.getPosts(page);
    setIsLastPage(!response.data.data.newsFeedListResponse.hasNext);
    setCurrentPage(page + 1);
    isThrottle(response);
    return response.data.data;
  };
  useEffect(() => {
    window.addEventListener("scroll", areAlmostEndPoint);
    return () => window.removeEventListener("scroll", areAlmostEndPoint);
  });
  useEffect(() => {
    console.log("first Homepage Mount!");
    firstGetPosts();
  }, []);
  return (
    <div className="Home">
      <HomeHeader />
      <PostList posts={posts} isLoding={isLoding} />
      <Nav />
      <div className="Home__NavGap"></div>
    </div>
  );
};

export default Home;
