import React from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./ProductsPage.module.css";
import GetProducts from "../../data/Products";
import ProductCard from "./ProductCard";
const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchProductsHandler = (e) => {
    setSearchParams({ filter: e.target.value });
  };
  return (
    <div className="container">
      <div className="row">
        <label
          className={`${styles.padding0} m-auto text-secondary d-block col-12 text-right`}
          dir="rtl"
        >
          جستجو :
        </label>
        <input
          type="text"
          className={`${styles.m05auto} d-block col-12 form-control form-control-sm`}
          dir="rtl"
          value={searchParams.get("filter")}
          onChange={searchProductsHandler}
        />
      </div>
      <div className="row" dir="rtl">
        {GetProducts()
          .filter((p) => {
            if (!searchParams.get("filter")) return true;
            return p.name
              .toLowerCase()
              .includes(searchParams.get("filter").toLocaleLowerCase());
          })
          .map((p) => {
            return <ProductCard key={p.id} item={p} />;
          })}
      </div>
    </div>
  );
};

export default ProductsPage;
