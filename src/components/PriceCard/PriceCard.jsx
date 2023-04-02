import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-indigo-400 text-center mt-4 rounded-md p-4 flex flex-col">
      <h2>
        <span className="text-indigo-700 text-5xl font-extrabold">
          {price.price}
        </span>
        <span className="text-2xl text-white font-bold">/mon</span>
      </h2>
      <h5 className="text-2xl my-6 font-bold">{price.name}</h5>
      <p className="font-bold text-white underline">Features: </p>
      {price.features.map((feature, idx) => (
        <Feature feature={feature} key={idx}></Feature>
      ))}
      <button className="w-full hover:bg-green-700 bg-green-500 py-2 rounded-md text-white mt-auto font-bold">Buy Now</button>
    </div>
  );
};

export default PriceCard;
