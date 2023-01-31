import GetUser from "../data/Users";
import { Failed, Succeed } from "../utilities/Operation";

const Login = (loginObject) => {
  if (loginObject === undefined) {
    return Failed("اطلاعات بدرستی وارد نشده است");
  }
  if (
    loginObject.phoneNumber === undefined ||
    loginObject.password === undefined
  ) {
    return Failed("اطلاعات بدرستی وارد نشده است");
  }
  if (
    !/^[0-9\b]+$/.test(loginObject.phoneNumber) ||
    loginObject.phoneNumber.length !== 11 ||
    !loginObject.phoneNumber.startsWith("09")
  ) {
    return Failed("شماره تماس بدرستی وارد نشده است");
  }
  if (loginObject.password.length === 0) {
    return Failed("رمز عبور بدرستی وارد نشده است");
  }
  const user = GetUser(loginObject.phoneNumber);
  if (user === undefined || user.length === 0) {
    return Failed("اطلاعات کاربری بدرستی وارد نشده است", 404);
  }
  if (user[0].password !== loginObject.password) {
    return Failed("اطلاعات کاربری بدرستی وارد نشده است");
  }
  return Succeed("لاگین با موفقیت انجام شد", {
    id: user[0].id,
    phoneNumber: user[0].phoneNumber,
    fullName: user[0].fullName,
  });
};
export default Login;
