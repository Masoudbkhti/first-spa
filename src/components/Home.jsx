import mainImage from "../assets/images/main.jpg";
import { Link } from "react-router-dom";
export const Home = () => {
  const backgroundImage = `url(${mainImage})`;

  return (
    <div
      style={{ backgroundImage }}
      className="bg-cover h-screen flex flex-col justify-center gap-8 pl-20"
    >
      <div className="bg-gray-400 bg-opacity-50 w-fit rounded-md p-10">
        <h1 className="text-black lg:text-7xl sm:text-5xl font-semibold">
          Send books abroad
        </h1>
        <p className="text-gray-950 mt-10 lg:text-3xl sm:text-xl">
          Buy books from unlimited collection
        </p>
      </div>
      <div>
        <Link to="/products">
          <button className=" bg-violet-700 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded ml-10">
            Buy books
          </button>
        </Link>
      </div>
    </div>
  );
};
