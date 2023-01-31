import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../logo.svg";
import QueryNavLink from "../utilities/QueryNavLink";
import { GetUserInfo } from "../data/cookie/UserInfo";
const Header = () => {
  const [userInfoState, setUserInfoState] = useState({
    userInfo: GetUserInfo(),
  });
  return (
    <div
      className={`${styles.mainContainer} container-fluid d-none d-sm-none d-md-none d-lg-block d-xl-block`}
    >
      <nav
        className={`row justify-content-between noselectable ${styles.font09}`}
      >
        <div className={`col-xl-2 col-lg-3`}>
          <img className={`${styles.logo}`} src={logo} alt="react logo" />
        </div>
        <div className={`col-xl-2 col-lg-1 m-auto text-center`}></div>
        {userInfoState.userInfo.loggedIn ? (
          <>
            <div className="col-5 m-auto"></div>
            <div className={`col-1 m-auto text-center`}>
              <QueryNavLink
                to="/userinfo"
                className={({ isActive }) =>
                  isActive ? `${styles.linkActive}` : `${styles.link}`
                }
              >
                پروفایل
              </QueryNavLink>
            </div>
            <div className={`col-1 m-auto text-center`}>
              <QueryNavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? `${styles.linkActive}` : `${styles.link}`
                }
              >
                سفارش
              </QueryNavLink>
            </div>
            <div className={`col-1 m-auto text-center`}>
              <QueryNavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${styles.linkActive}` : `${styles.link}`
                }
              >
                خانه
              </QueryNavLink>
            </div>
          </>
        ) : (
          <>
            <div className="col-2 m-auto"></div>
            <div className="col-2 m-auto"></div>
            <QueryNavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? `${styles.linkActive} col-2 m-auto btn btn-sm btn-react`
                  : `${styles.link} col-2 m-auto btn btn-sm btn-react`
              }
            >
              ورود به سایت
            </QueryNavLink>
            <div className={`col-2 m-auto text-center`}>
              <QueryNavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${styles.linkActive}` : `${styles.link}`
                }
              >
                صفحه اصلی
              </QueryNavLink>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
