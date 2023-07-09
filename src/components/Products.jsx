import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const PRODUCT_LIST_API = "http://localhost:3000/products";

export const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const rawData = await fetch(PRODUCT_LIST_API);
        const data = await rawData.json();
        setIsLoading(false);
        setProductDetails(data);
      } catch (e) {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div class="py-20 px-36 flex flex-col justify-center items-center gap-10">
      <h2 class="text-5xl font-bold">Our Books</h2>
      {isLoading ? <div>Loading...</div> : null}
      <div class="grid grid-cols-3 gap-20">
        {productDetails.map(({ id, title, img, price }) => (
          <div
            key={id}
            class="rounded-md overflow-hidden shadow-lg py-10 px-5 flex flex-col gap-5"
          >
            <Link to={`/products/${id}`}>
              <img src={img} class="w-auto" />
              <h1 class="text-2xl font-bold mt-5">{title} </h1>
            </Link>
            <p>{price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
