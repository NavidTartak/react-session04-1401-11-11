import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./Routing.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "./Main.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { GetUserInfo, SetUserInfo, SignOutUser } from "../data/cookie/UserInfo";
import ProtectedRoute from "../utilities/ProtectedRoute";
import StartUp from "./StartUp";
import UserInfoPage from "./pages/UserInfoPage";
import ProductsPage from "./pages/ProductsPage";
import ProductSingle from "./pages/ProductSingle";
const Routing = () => {
  const [userInfoState, setUserInfoState] = useState({
    userInfo: GetUserInfo(),
  });
  const setUserInfoHandler = (loginObject) => {
    SetUserInfo(loginObject);
    setUserInfoState({
      userInfo: GetUserInfo(),
    });
  };
  const signOutUserHandler = () => {
    SignOutUser();
    setUserInfoState({
      userInfo: GetUserInfo(),
    });
  };
  return (
    <div className={`${styles.mainContainer} container-fluid`}>
      <Router>
        <Routes>
          <Route path="/" element={<StartUp />}>
            <Route index element={<HomePage />} />
            <Route
              path="userinfo"
              element={
                <ProtectedRoute loggedIn={userInfoState.userInfo.loggedIn}>
                  <UserInfoPage signOut={signOutUserHandler} />
                </ProtectedRoute>
              }
            />
            <Route
              path="products"
              element={
                <ProtectedRoute loggedIn={userInfoState.userInfo.loggedIn}>
                  <ProductsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="products/:id"
              element={
                <ProtectedRoute loggedIn={userInfoState.userInfo.loggedIn}>
                  <ProductSingle />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route
            path="login"
            element={<LoginPage setUser={setUserInfoHandler} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
