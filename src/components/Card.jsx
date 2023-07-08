import { useParams } from "react-router-dom";
export const Card = ({ img, title, price }) => {
  const params = useParams();
  return (
    <div className="rounded-md overflow-hidden">
      <img src={img} className="w-20" />
      <h1>
        {title}
        {params.id}
      </h1>
      <p>{price}</p>
    </div>
  );
};
