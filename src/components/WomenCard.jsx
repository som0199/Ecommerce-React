import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/CartSlice";

const WomenCard = ({ i }) => {
  const dispatch = useDispatch();
  const addProduct = () => {
    dispatch(addToCart(i));
  };
  return (
    <div className="col-lg-3 col-md-6 ">
      <div className="card text-start mb-3 d-flex align-items-center justify-content-center">
        <img src={i.image} alt="" className="card-img-top " />
        <div className="card-body">
          <h5 className="card-title ">{i.title}</h5>
          <p>{i.description} </p>
          <p className="card-text fs-5  fw-bold">${i.price}</p>
          <div className="text-center">
            <a
              href="#"
              className="btn btn-secondary w-75"
              onClick={() => addProduct()}
            >
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomenCard;
