import { Link } from "react-router-dom";

export const Products = ({ products }) => {
  return (
    <div className="py-20 px-20 flex justify-center">
      <div className="grid grid-cols-3 gap-40">
        {Object.entries(products).map(([id, { title, img, price }]) => (
          <div
            key={id}
            className="rounded-md overflow-hidden shadow-lg py-10 px-5 flex flex-col gap-5"
          >
            <Link to={`/products/${id}`}>
              <img src={img} className="w-auto" />
              <h1 className="text-2xl font-bold">{title} </h1>
              <p>{price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
