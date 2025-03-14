import React from "react";

const Home = () => {
  return (
    <div className="py-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2 bg-slate-400">
          {/* Display Products */}
          Display Products
        </div>
        <div className=" bg-slate-300">Add New Products</div>
      </div>
    </div>
  );
};

export default Home;
