import React from "react";
import { useParams } from "react-router-dom";
import GetProducts from "../../data/Products";
import BasketButton from "./BasketButton";
import styles from "./ProductSingle.module.css";
const ProductSingle = () => {
  const params = useParams();
  const product = GetProducts(parseInt(params.id))[0];
  console.log(product);
  return (
    <div className="container noselectable">
      <div className="row">
        <div className={`${styles.m05auto} ${styles.productSingleCard} col-12`}>
          <div className="row" dir="rtl">
            <div className="col-xl-4 col-lg-4 col-md-5 col-12">
              <div className="row">
                <img src={product.imgUrl} className="col-11 m-auto" />
                <BasketButton item={product} />
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-7 col-12">
              <div className="row">
                {product.descriptions.length === 0 ? (
                  <p
                    className={`col-11  text-right text-danger ${styles.m05auto}`}
                    dir="rtl"
                  >
                    بدون توضیحات
                  </p>
                ) : (
                  product.descriptions.map((desc, index) => {
                    return (
                      <div
                        key={index}
                        className={`col-11  text-right ${styles.m05auto}`}
                      >
                        <h6
                          className="h6 text-right text-secondary"
                          dir="rtl"
                        >{`${desc.title} :`}</h6>
                        <p
                          className={`text-right text-dark ${styles.font09}`}
                          dir="rtl"
                        >
                          {desc.description}
                        </p>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSingle;
