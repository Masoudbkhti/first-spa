import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
const PRODUCT_LIST_API = "http://localhost:3000/products";

export const ProductDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productDetails, setProductDetails] = useState({});
  const { id } = useParams();
  const { title, sliderimg, description } = productDetails;

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        setIsLoading(true);
        const rawData = await fetch(`${PRODUCT_LIST_API}/${id}`);
        const data = await rawData.json();
        setIsLoading(false);
        setProductDetails(data);
      } catch (e) {
        setIsLoading(false);
      }
    };
    getProductDetails();
  }, []);
  return (
    <div class="flex flex-col items-center justify-center">
      {isLoading ? <div>Loading...</div> : null}
      <img src={sliderimg} className="w-screen" />
      <div class="flex flex-col gap-5 justify-center items-center py-10 px-10">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
