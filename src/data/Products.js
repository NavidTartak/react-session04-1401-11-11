const products = [
  {
    id: 1,
    name: "پیتزا",
    imgUrl: "https://www.delino.com/img/general/food-cats/1.jpg",
    price: 100000,
    discountPercent: 10,
    descriptions: [
      {
        title: "مواد تشکیل دهنده",
        description: "خمیر پیتزا ، پنیر موتزارلا ، پپرونی",
      },
    ],
  },
  {
    id: 2,
    name: "برگر",
    imgUrl: "https://www.delino.com/img/general/food-cats/7.jpg",
    price: 80000,
    discountPercent: 5,
    descriptions: [],
  },
  {
    id: 3,
    name: "پاستا",
    imgUrl: "https://www.delino.com/img/general/food-cats/9.jpg",
    price: 80000,
    discountPercent: 0,
    descriptions: [],
  },
  {
    id: 4,
    name: "استیک",
    imgUrl: "https://www.delino.com/img/general/food-cats/8.jpg",
    price: 170000,
    discountPercent: 3,
    descriptions: [],
  },
  {
    id: 5,
    name: "خوراک برگ",
    imgUrl: "https://www.delino.com/img/general/food-cats/2.jpg",
    price: 120000,
    discountPercent: 0,
    descriptions: [],
  },
  {
    id: 6,
    name: "سالاد سبز",
    imgUrl: "https://www.delino.com/img/general/food-cats/8838.jpg",
    price: 60000,
    discountPercent: 0,
    descriptions: [],
  },
  {
    id: 7,
    name: "مرغ سوخاری",
    imgUrl:
      "https://static.delino.com/Image/Restaurant/Food/3usbq2cp.cfj_280x175.jpg",
    price: 78000,
    discountPercent: 3,
    descriptions: [],
  },
];
const GetProducts = (id) => {
  return id === undefined ? products : products.filter((p) => p.id === id);
};
export default GetProducts;
