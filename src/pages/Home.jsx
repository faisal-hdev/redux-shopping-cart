import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import AddProduct from "../components/AddProduct";

const Home = () => {
  const products = useSelector((state) => state.products);
  console.log(products);

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2 ">
          {/* Display Products */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-6">
            {products.length ? (
              products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))
            ) : (
              <p>No product found</p>
            )}
          </div>
        </div>
        <div>
          <AddProduct />
        </div>
      </div>
    </div>
  );
};

export default Home;
