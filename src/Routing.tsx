import React from "react";
import "./App.scss";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./Views/LoginPage/LoginPage";
import Home from "./Views/Home/Home";

// const { user } = useContext(AuthContext);
const user = false;
const Routing: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
);

export default Routing;
