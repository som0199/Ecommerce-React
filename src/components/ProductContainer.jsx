import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "./Products";
import { addProduct } from "../Store/ProductSlice";

const ProductContainer = () => {
  // const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  return (
    <div className="home">
      <h1 className="text-center pt-3">All Products</h1>
      <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 p-5 ">
        {product.map((items, index) => (
          <Products key={index} item={items} />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
