import { Link } from "react-router-dom";
import { Card } from "./Card";
export const Products = () => {
  return (
    <div className="py-20 flex justify-center">
      <div className="grid grid-cols-3 gap-80">
        <Link to="/products/1">
          <Card
            img="./src/assets/images/sizif.jpg"
            title="Afsane Sizif"
            price="20 Euro"
          />
        </Link>
        <Link to="/products/2">
          <Card
            img="./src/assets/images/ikigay.jpg"
            title="Ikigay"
            price="20 Euro"
          />
        </Link>
        <Link to="/products/3">
          <Card
            img="./src/assets/images/sizif.jpg"
            title="Afsane sizif"
            price="20 Euro"
          />
        </Link>
      </div>
    </div>
  );
};
