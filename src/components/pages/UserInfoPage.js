import React from "react";
import styles from "./UserInfoPage.module.css";
import { GetUserInfo } from "../../data/cookie/UserInfo";
import { DoorOpenFill, PersonCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const UserInfoPage = (props) => {
  const userInfo = GetUserInfo();
  const navigate = useNavigate();
  const signOutHandler = () => {
    props.signOut();
    navigate("/login");
    return;
  };
  return (
    <div className={`container noselectable`}>
      <div className="row">
        <div className={`${styles.m05auto} ${styles.mainContainer} col-12`}>
          <div className="row" dir="rtl">
            <div className="col-3 text-center">
              <PersonCircle size={55} className="text-dark" />
            </div>
            <div className={` col-9 text-right`} dir="rtl">
              <div className="row">
                <div className="col-12 m-auto">
                  <label className="text-secondary">
                    نام و نام خانوادگی :{" "}
                  </label>
                  &nbsp;
                  <label className="text-dark"> {userInfo.fullName}</label>
                </div>
                <div className={`${styles.m05auto} col-12`}>
                  <label className="text-secondary">شماره تماس : </label>
                  &nbsp;
                  <label className="text-dark"> {userInfo.phoneNumber}</label>
                </div>
                <hr />
                <div className="col-12 m-auto">
                  <span onClick={signOutHandler} className={styles.logoutSpan}>
                    <DoorOpenFill size={20} />
                    &nbsp; خروج از نرم افزار
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoPage;
