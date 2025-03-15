/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-black text-center">
        Add New Project
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
        <div>
          <label className="text-sm font-medium block text-gray-600">
            Product Name
          </label>
          <input
            {...register("name", { required: true })}
            className="w-full bg-gray-100 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
            type="text"
            name="name"
            id="name"
            placeholder="Enter Product Name"
          />
        </div>
        {/* Category */}
        <div>
          <label className="text-sm font-medium block text-gray-600">
            Photo Url
          </label>
          <input
            {...register("image", { required: true })}
            className="w-full bg-gray-100 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
            type="text"
            name="image"
            id="image"
            placeholder="http://"
          />
        </div>
        {/* Product image */}
        <div>
          <label className="text-sm font-medium block text-gray-600">
            Category
          </label>
          <select
            {...register("category", { required: true })}
            id="category"
            name="category"
            className="w-full bg-gray-100 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
          >
            <option value="">Choose a category</option>
            <option value="fashion">Fashion</option>
            <option value="gadgets">Gadgets</option>
            <option value="bags">Bags</option>
            <option value="electronics">Electronics</option>
          </select>
          {/* <label className="text-sm font-medium block text-gray-600">
            Image Url
          </label>
          <input
            {...register("image", { required: true })}
            className="w-full bg-gray-100 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
            type="text"
            name="image"
            id="image"
            placeholder="http://"
          /> */}
        </div>
        {/* Price and date */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium block text-gray-600">
              Price
            </label>
            <input
              {...register("price", { required: true })}
              className="w-full bg-gray-100 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
              type="number"
              name="price"
              id="price"
              placeholder="Enter the Price"
            />
          </div>
          <div>
            <label className="text-sm font-medium block text-gray-600">
              Date
            </label>
            <input
              {...register("date", { required: true })}
              className="w-full bg-gray-200 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500"
              type="date"
              name="date"
              id="date"
            />
          </div>
        </div>
        {/* Finally the submit btn */}
        <button type="submit" className="btn btn-primary w-full text-white">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
