import React from "react";
import MensCarousel from "../components/MensCarousel";
import MensCard from "../components/MensCard";
import { useSelector } from "react-redux";

const Mens = () => {
  const { product } = useSelector((state) => state.product);

  return (
    <div className="bg-primary-subtle">
      <MensCarousel />
      <h6 className="p-3 px-4 display-6 ">MEN'S WEAR</h6>
      <div className="row row-cols-1 row-cols-md-6 g-4 px-5 ">
        {product
          ?.filter((item) => item.category === "men's clothing")
          ?.map((item, index) => (
            <MensCard key={index} i={item} />
          ))}
      </div>
    </div>
  );
};

export default Mens;
