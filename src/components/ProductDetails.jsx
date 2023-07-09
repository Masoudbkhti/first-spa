import React from "react";
import { useParams } from "react-router";

export const ProductDetails = ({ products }) => {
  let { id } = useParams();
  const product = products[id];
  const { title, img, price, sliderimg, description } = product;

  return (
    <div>
      <img src={sliderimg} className="w-screen" />
      <div class="flex flex-col gap-5 justify-center items-center py-10 px-10">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
