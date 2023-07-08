import { useParams } from "react-router-dom";
export const Card = ({ img, title, price }) => {
  const params = useParams();
  return (
    <div className="rounded-md overflow-hidden shadow-lg py-10 px-5 flex flex-col gap-5">
      <img src={img} className="w-auto" />
      <h1 className="text-2xl font-bold">
        {title}
        {params.id}
      </h1>
      <p>{price}</p>
    </div>
  );
};
