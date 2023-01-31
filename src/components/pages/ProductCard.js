import React from "react";
import QueryNavLink from "../../utilities/QueryNavLink";
import BasketButton from "./BasketButton";
import styles from "./ProductCard.module.css";
const ProductCard = (props) => {
  return (
    <div className={`col-xl-4 col-lg-4 col-md-6 col-12 noselectable`}>
      <div className="row">
        <div className={`col-11 ${styles.m05auto} ${styles.cardContainer}`}>
          <div className="row">
            <QueryNavLink
              to={`/products/${props.item.id}`}
              className={`col-11 m-auto`}
            >
              <img
                src={props.item.imgUrl}
                className={`${styles.productCardImg}`}
              />
            </QueryNavLink>
            <h6
              className={`${styles.m05auto} col-11 h6 text-dark text-right`}
              dir="rtl"
            >
              {props.item.name}
            </h6>
            <BasketButton item={props.item} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
