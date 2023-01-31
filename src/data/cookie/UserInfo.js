let userInfo = {
  loggedIn: false,
  id: 0,
  phoneNumber: "",
  fullName: "",
};
export const GetUserInfo = () => {
  return userInfo;
};
export const SetUserInfo = (loginObject) => {
  userInfo = {
    loggedIn: true,
    ...loginObject,
  };
};
export const SignOutUser = () => {
  userInfo = {
    loggedIn: false,
    id: 0,
    phoneNumber: "",
    fullName: "",
  };
};
