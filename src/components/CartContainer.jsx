import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementQty, incrementQty, removeFromCart } from "../Store/CartSlice";

const CartContainer = ({ i }) => {
  const { product } = useSelector((state) => state.product);
  let { title, image, id, price, qty } = i;
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  // const handleAdd = (i) => {
  //   dispatch(addToCart(i));
  // };

  const handleIncrement = (id) => {
    dispatch(incrementQty(id));
  };

  const handleDecrement = (id) => {
    qty > 1 ? dispatch(decrementQty(id)) : (qty = 0);
  };

  let Total = (price * qty).toFixed(2);

  return (
    <div className="col-lg-3 col-md-6  ">
      <div className="card text-start m-3 mb-3 d-flex align-items-center justify-content-center">
        <img src={image} alt="" className="card-img-top" />
        <div className="card-body ">
          <h5 className="card-title text-secondary">{title}</h5>
          <span className="d-flex align-item-center justify-content-between">
            <p className="card-text fs-5  fw-bold">${price}</p>
          </span>
          <div className="d-flex align-items-start  justify-content-evenly py-2 ">
            <h6>Qty :</h6>
            <div className="mx-3"></div>
            <div className="d-flex align-items-center justify-content-center flex-row">
              <i
                class="fa-solid fa-minus "
                onClick={() => handleDecrement(id)}
              ></i>

              <h6 className="fs-lg-4 fw-semibold my-1 mx-2">{qty}</h6>

              <i
                class="fa-solid fa-plus "
                onClick={() => handleIncrement(id)}
              ></i>
            </div>
          </div>
          <span className="d-flex align-items-center justify-content-between">
            <h5>Total </h5>
            <h5>${Total}</h5>
          </span>
          <div className="text-center">
            <a
              href="#"
              className="btn btn-danger btn-info w-75"
              onClick={() => handleRemove(id)}
            >
              Remove
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
