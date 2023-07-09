import { Link } from "react-router-dom";

export const Products = ({ products }) => {
  return (
    <div class="py-20 px-36 flex flex-col justify-center items-center gap-10">
      <h2 class="text-5xl font-bold">Our Books</h2>
      <div class="grid grid-cols-3 gap-20">
        {Object.entries(products).map(([id, { title, img, price }]) => (
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
