import React, { useState } from "react";
import { HouseFill, PersonFill, Basket2Fill } from "react-bootstrap-icons";
import { GetUserInfo } from "../data/cookie/UserInfo";
import QueryNavLink from "../utilities/QueryNavLink";
import styles from "./Footer.module.css";
const Footer = () => {
  const [userInfoState, setUserInfoState] = useState({
    userInfo: GetUserInfo(),
  });
  return (
    <>
      <div
        className={`${styles.mainContainer} d-none d-sm-none d-md-none d-lg-block d-xl-block container-fluid`}
      >
        <div className="row" dir="rtl">
          <div className="col-12 text-center">
            <span className="text-dark">حق مادی و معنوی </span>
            <a
              className={`${styles.footerLink}`}
              href="https://www.tahlildadeh.com/"
              target="_blank"
            >
              آموزشگاه تحلیل داده
            </a>
          </div>
        </div>
      </div>
      <div
        className={`${styles.mainContainer} d-block d-sm-block d-md-block d-lg-none d-xl-none container-fluid`}
      >
        <div className="row justify-content-between">
          {userInfoState.userInfo.loggedIn ? (
            <>
              <div className="col-4 m-auto text-center">
                <QueryNavLink
                  className={({ isActive }) =>
                    isActive ? `${styles.linkActive} ` : `${styles.link}`
                  }
                  to="/userinfo"
                >
                  <PersonFill size={22} />
                </QueryNavLink>
              </div>
              <div className="col-4 m-auto text-center">
                <QueryNavLink
                  className={({ isActive }) =>
                    isActive ? `${styles.linkActive} ` : `${styles.link}`
                  }
                  to="/"
                >
                  <HouseFill size={22} />
                </QueryNavLink>
              </div>
              <div className="col-4 m-auto text-center">
                <QueryNavLink
                  className={({ isActive }) =>
                    isActive ? `${styles.linkActive}` : `${styles.link}`
                  }
                  to="/products"
                >
                  <Basket2Fill size={22} />
                </QueryNavLink>
              </div>
            </>
          ) : (
            <>
              <div className="col-4 m-auto text-center">
                {" "}
                <QueryNavLink
                  className={({ isActive }) =>
                    isActive ? `${styles.linkActive}` : `${styles.link}`
                  }
                  to="/login"
                >
                  <PersonFill size={22} />
                </QueryNavLink>
              </div>
              <div className="col-4 m-auto text-center">
                <QueryNavLink
                  className={({ isActive }) =>
                    isActive ? `${styles.linkActive}` : `${styles.link}`
                  }
                  to="/"
                >
                  <HouseFill size={22} />
                </QueryNavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Footer;
