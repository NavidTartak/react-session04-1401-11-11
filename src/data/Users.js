const users = [
  {
    id: 1,
    phoneNumber: "09380437512",
    password: "@navidtartak",
    fullName: "نوید ترتک",
  },
  {
    id: 2,
    phoneNumber: "09120680931",
    password: "@meisammohammadi",
    fullName: "میثم محمدی",
  },
  {
    id: 3,
    phoneNumber: "09039737034",
    password: "@tahliledade",
    fullName: "تحلیل داده",
  },
];
const GetUser = (phoneNumber) => {
  if (phoneNumber === undefined) {
    return users;
  }
  if (users.some((user) => user.phoneNumber === phoneNumber)) {
    return users.filter((user) => user.phoneNumber === phoneNumber);
  }
  return [];
};
export default GetUser;
