import React, { useState } from "react";
import { FilePlusFill, FileMinusFill } from "react-bootstrap-icons";
import styles from "./BasketButton.module.css";
import {
  getInBasketCount,
  increaseBasket,
  decreaseBasket,
} from "../../data/cookie/Basket";
const BasketButton = (props) => {
  const [productCardState, setProductCardState] = useState({
    count: getInBasketCount(props.item.id),
  });
  const increaseBasketHandler = (e) => {
    e.preventDefault();
    increaseBasket(props.item.id);
    setProductCardState({
      count: getInBasketCount(props.item.id),
    });
  };
  const decreaseBasketHandler = (e) => {
    e.preventDefault();
    decreaseBasket(props.item.id);
    setProductCardState({
      count: getInBasketCount(props.item.id),
    });
  };
  if (productCardState.count === 0) {
    return (
      <div className={`col-11 ${styles.m05auto}`}>
        <input
          type="button"
          className="btn btn-sm btn-outline-dark"
          value="افزودن به سبد"
          onClick={increaseBasketHandler}
        />
      </div>
    );
  }
  return (
    <div className={`col-11 ${styles.m05auto}`}>
      <FilePlusFill
        size={25}
        className={`${styles.cursorPointer}`}
        onClick={increaseBasketHandler}
      />
      <label className={`${styles.labelCard} text-center`}>
        {new Number(productCardState.count).toLocaleString("fa-ir")}
      </label>
      <FileMinusFill
        size={25}
        className={`${styles.cursorPointer}`}
        onClick={decreaseBasketHandler}
      />
    </div>
  );
};

export default BasketButton;
