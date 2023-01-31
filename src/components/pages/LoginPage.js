import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import logo from "../../logo.svg";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import Login from "../../operations/Login";
import { useNavigate } from "react-router-dom";
const LoginPage = (props) => {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState({
    operation: {
      success: false,
      message: "",
    },
    phone: {
      value: "",
      validation: "*",
      isValid: false,
    },
    password: {
      value: "",
      validation: "*",
      isValid: false,
      showPassword: false,
    },
  });
  const phoneNumberInputHandler = (e) => {
    let phone = "";
    if (e.target.value !== "" && !/^[0-9\b]+$/.test(e.target.value)) {
      phone = loginState.phone.value;
    } else {
      if (e.target.value.length <= 11) {
        phone = e.target.value;
      } else {
        phone = loginState.phone.value;
      }
      if (phone.length === 11 && phone.startsWith("09")) {
        setLoginState({
          ...loginState,
          phone: {
            value: phone,
            validation: "",
            isValid: true,
          },
          operation: {
            success: false,
            message: "",
          },
        });
        return;
      }
      if (phone === "") {
        setLoginState({
          ...loginState,
          phone: {
            value: phone,
            validation: "*",
            isValid: false,
          },
          operation: {
            success: false,
            message: "",
          },
        });
        return;
      }
      setLoginState({
        ...loginState,
        phone: {
          value: phone,
          validation: "لطفا شماره تماس را بدرستی وارد کنید",
          isValid: false,
        },
        operation: {
          success: false,
          message: "",
        },
      });
      return;
    }
  };
  const passwordInputHandler = (e) => {
    if (e.target.value.length === 0) {
      setLoginState({
        ...loginState,
        password: {
          value: e.target.value,
          validation: "*",
          isValid: false,
          showPassword: loginState.password.showPassword,
        },
        operation: {
          success: false,
          message: "",
        },
      });
      return;
    }
    if (e.target.value.length < 4) {
      setLoginState({
        ...loginState,
        password: {
          value: e.target.value,
          validation: "لطفا رمز عبور را بدرستی وارد کنید",
          isValid: false,
          showPassword: loginState.password.showPassword,
        },
        operation: {
          success: false,
          message: "",
        },
      });
      return;
    }
    if (e.target.value.length > 35) {
      setLoginState({
        ...loginState,
        password: {
          value: e.target.value.substring(0, 35),
          validation: "",
          isValid: true,
          showPassword: loginState.password.showPassword,
        },
        operation: {
          success: false,
          message: "",
        },
      });
      return;
    }
    setLoginState({
      ...loginState,
      password: {
        value: e.target.value,
        validation: "",
        isValid: true,
        showPassword: loginState.password.showPassword,
      },
      operation: {
        success: false,
        message: "",
      },
    });
    return;
  };
  const showPasswordHandler = () => {
    setLoginState({
      ...loginState,
      password: {
        ...loginState.password,
        showPassword: true,
      },
    });
  };
  const hidePasswordHandler = () => {
    setLoginState({
      ...loginState,
      password: {
        ...loginState.password,
        showPassword: false,
      },
    });
  };
  const submitLoginHandler = (e) => {
    e.preventDefault();
    if (loginState.phone.isValid && loginState.password.isValid) {
      const login = Login({
        phoneNumber: loginState.phone.value,
        password: loginState.password.value,
      });
      if (!login.success) {
        setLoginState({
          ...loginState,
          operation: {
            success: login.success,
            message: login.message,
          },
        });
        return;
      }
      props.setUser(login.object);
      navigate("/");
      return;
    }
  };
  return (
    <div className="container noselectable">
      <div className={`${styles.rowMargin} row`}>
        <h6 className="h6 text-center text-secondary">
          {loginState.operation.message}
        </h6>
        <form
          className={`col-xl-5 col-lg-7 col-md-9 col-12 m-auto ${styles.bgForm}`}
        >
          <div className="row">
            <img
              className={`col-4 m-auto ${styles.appLogo}`}
              src={logo}
              alt="react logo"
            />
            <div className={`${styles.m05auto} col-11`}>
              <input
                type="text"
                className="form-control"
                placeholder="Phone number"
                value={loginState.phone.value}
                onChange={phoneNumberInputHandler}
              />
            </div>
            <span
              className={`d-block col-11 m-auto text-right text-secondary ${styles.font09}`}
              dir="rtl"
            >
              {loginState.phone.validation}
            </span>
            <div className={`${styles.m05auto} col-11`}>
              {!loginState.password.showPassword ? (
                <div className="input-group mb-1">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={passwordInputHandler}
                    value={loginState.password.value}
                  />
                  <div className="input-group-append">
                    <span
                      className={`input-group-text bg-white ${styles.borderRadiusLeftFlat} ${styles.cursorPointer}`}
                      onClick={showPasswordHandler}
                    >
                      <Eye size={25} />
                    </span>
                  </div>
                </div>
              ) : (
                <div className="input-group mb-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    onChange={passwordInputHandler}
                    value={loginState.password.value}
                  />
                  <div className="input-group-append">
                    <span
                      className={`input-group-text bg-white ${styles.borderRadiusLeftFlat} ${styles.cursorPointer}`}
                      onClick={hidePasswordHandler}
                    >
                      <EyeSlash size={25} />
                    </span>
                  </div>
                </div>
              )}
            </div>
            <span
              className={`d-block col-11 m-auto text-right text-secondary ${styles.font09}`}
              dir="rtl"
            >
              {loginState.password.validation}
            </span>
            <input
              type="submit"
              className={`${styles.m1auto} d-block col-4 btn btn-sm btn-dark`}
              value="Login"
              onClick={submitLoginHandler}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
