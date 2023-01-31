import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./StartUp.module.css";

const StartUp = (props) => {
  return (
    <>
      <div
        className={`${styles.mainTopSeperator} d-none d-sm-none d-md-none d-lg-block d-xl-block`}
      ></div>
      <Header />
      <Outlet />
      <div className={`${styles.mainBottomSeperator}`}></div>
      <Footer />
    </>
  );
};

export default StartUp;
