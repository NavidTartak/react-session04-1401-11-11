import GetProducts from "../Products";
let basket = GetProducts().map((p) => {
  return { id: p.id, count: 0 };
});
export const getInBasketCount = (id) => {
  return basket.filter((p) => p.id === id)[0].count;
};
export const increaseBasket = (id) => {
  basket[basket.findIndex((p) => p.id === id)].count++;
};
export const decreaseBasket = (id) => {
  basket[basket.findIndex((p) => p.id === id)].count--;
};
