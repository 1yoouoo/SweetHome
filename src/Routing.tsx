import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Home from "./Pages/Home/Home";
import UserPage from "./Pages/UserPage/UserPage";
import CreatePost from "./Pages/CreatePost/CreatePost";
import Nav from "./Views/Nav/Nav";
import PostDetail from "./Pages/PostDetail/PostDetail";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";

// const { user } = useContext(AuthContext);
const user = true;
const Routing: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      {/* <Route
        path="/"
        element={user ? <Navigate to="/home" /> : <Navigate to="/login" />}
      /> */}
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<Home />}></Route>
      <Route path="/user" element={<UserPage />}></Route>
      <Route path="/createpost" element={<CreatePost />}></Route>
      <Route path="/post/:postId" element={<PostDetail />}></Route>
    </Routes>
  </BrowserRouter>
);

export default Routing;
