/* eslint-disable no-unused-vars */
import React from "react";

const ProductCard = ({ product }) => {
  const { id, name, category, price, date, img } = product || {};
  // console.log(product);
  return (
    <div>
      <div className="card bg-white w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl h-[220px] w-full object-cover "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Category : {category}</p>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="flex">
            <p className="font-semibold text-xl">${price}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
