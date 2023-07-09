import React from "react";
import { useParams } from "react-router";

export const ProductDetails = ({ products }) => {
  let { id } = useParams();
  const product = products[id];
  const { title, img, price } = product;

  return (
    <div className="rounded-md overflow-hidden shadow-lg py-10 px-5 flex flex-col gap-5">
      <img src={img} className="w-auto" />
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{price}</p>
    </div>
  );
};
