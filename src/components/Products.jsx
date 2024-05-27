import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/CartSlice";

const Products = ({ item }) => {
  const dispatch = useDispatch();

  const AddToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      <div className="col ">
        <div className="card text-start mx-auto d-flex align-items-center justify-content-center">
          <img src={item.image} alt="" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title ">{item.title}</h5>
            <p>{item.description} </p>
            <p className="card-text fs-5  fw-bold">${item.price}</p>
            <div className="text-center">
              <a
                href="#"
                className="btn btn-primary btn-success w-75"
                onClick={() => AddToCart()}
              >
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
