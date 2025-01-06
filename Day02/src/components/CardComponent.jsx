import React, { useState } from "react";

const CardComponent = ({ contacts }) => {
  // Initialize a state object to store the count for each product using product.id
  const [productCounts, setProductCounts] = useState({});

  // Increment function for individual product
  const handleClickIncrement = (productId) => {
    setProductCounts((prevCounts) => {
      const currentCount = prevCounts[productId] || 0;
      if (currentCount >= 5) {
        alert("You can't increment more than 5 times");
        return { ...prevCounts, [productId]: 5 }; // Ensure it stays capped at 5
      }
      return { ...prevCounts, [productId]: currentCount + 1 };
    });
  };

  // Decrement function for individual product
  const handleClickDecrement = (productId) => {
    setProductCounts((prevCounts) => {
      const currentCount = prevCounts[productId] || 0;
      if (currentCount === 0) {
        alert("No items to remove");
        return prevCounts;
      }
      return { ...prevCounts, [productId]: currentCount - 1 };
    });
  };

  return (
    <>
      {contacts.map((product) => (
        <div
          key={product.id} // Use product's unique id as the key
          className="hover:shadow-yellow-500 shadow-xl cursor-pointer w-[21rem] h-[32rem] bg-gradient-to-r from-indigo-600 to-indigo-900 rounded-2xl p-8 m-8 ml-16"
        >
          <h1 className="text-center text-white text-2xl p-6">Product Listing</h1>
          <img
            className="w-82 mb-3 bg-contain"
            src={product.image}
            alt="product-img"
          />
          <p className="text-center text-white mb-3">{product.productdesc}</p>
          <div className="flex space-x-5 p-5">
            <button
              className="rounded-2xl w-32 h-10 bg-green-500 p-7 text-center text-white text-2xl"
              onClick={() => handleClickIncrement(product.id)} // Pass product id to the increment handler
            >
              <span className="text-center font-bold relative -top-5"> + </span>
            </button>
            <span className="px-2 top-[12px] relative">{productCounts[product.id] || 0}</span> {/* Display count for this specific product */}
            <button
              className="rounded-2xl w-[140px] h-10 bg-red-600 p-7 text-white text-2xl"
              onClick={() => handleClickDecrement(product.id)} // Pass product id to the decrement handler
            >
              <span className="text-center font-bold relative -top-5"> - </span>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardComponent;
