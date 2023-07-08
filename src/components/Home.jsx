import mainImage from "../assets/images/main.jpg";

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
        <button className="rounded-lg border-gray-500 border border-solid bg-violet-300 px-5 py-2 ml-10">
          Buy books
        </button>
      </div>
    </div>
  );
};
