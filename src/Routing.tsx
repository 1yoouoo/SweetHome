import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Home from "./Pages/Home/Home";
import UserPage from "./Pages/UserPage/UserPage";
import CreatePost from "./Pages/CreatePost/CreatePost";

// const { user } = useContext(AuthContext);
const user = true;
const Routing: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      {/* <Route
        path="/"
        element={user ? <Navigate to="/home" /> : <Navigate to="/login" />}
      /> */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<Home />}></Route>
      <Route path="/user" element={<UserPage />}></Route>
      <Route path="/createpost" element={<CreatePost />}></Route>
    </Routes>
  </BrowserRouter>
);

export default Routing;
