import React from "react";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <div className=" w-[80%] flex bg-slate-100 mx-auto my-10 p-5 border-2 border-gray-300 rounded-lg">
        <div className=" border border-indigo-300 w-fit p-2 m-2">
          <h2>Computer:</h2>
          <p>Product description goes here</p>
          <button className=" border bg-amber-300 px-2 py-1 rounded-2xl mt-2
          hover:bg-amber-400">
            Buy Now
          </button>
        </div>

        <div className=" border border-indigo-300 w-fit p-2 m-2">
          <h2>Laptop core i7:</h2>
          <p>Product description goes here</p>
          <button className=" border bg-amber-300 px-2 py-1 rounded-2xl mt-2
          hover:bg-amber-400">
            Buy Now
          </button>
        </div>
      </div>
      <footer>--- Product footer ---</footer>
    </div>
  );
};

export default Products;
