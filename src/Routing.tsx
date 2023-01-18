import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./Views/LoginPage/LoginPage";
import Home from "./Views/Home/Home";
import Header from "./Views/Header/Header";

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
    </Routes>
  </BrowserRouter>
);

export default Routing;
