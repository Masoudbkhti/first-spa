import contactimg from "../assets/images/contact.jpg";
export const Contact = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div class="grid grid-cols-2">
      <img src={contactimg} class="w-screen"></img>
      <div class="py-20 px-36 flex flex-col justify-center items-center gap-10">
        <h2 class="text-5xl font-bold">Contact Us</h2>
        <form class="flex flex-col gap-3 w-full" onSubmit={formSubmitHandler}>
          <label for="name">Full Name</label>
          <input
            for="name"
            type="text"
            placeholder="Enter your name..."
            class="placeholder:text-black font-semibold border-b border-gray-500 py-2 focus:outline-none"
          ></input>
          <label for="name">Email</label>
          <input
            for="name"
            type="text"
            placeholder="Enter Email..."
            class="placeholder:text-black font-semibold border-b border-gray-500 py-2 focus:outline-none"
          ></input>
          <label for="name">Message</label>
          <input
            for="name"
            type="textarea"
            placeholder="Enter Message..."
            class="placeholder:text-black font-semibold border-b border-gray-500 py-2 focus:outline-none"
          ></input>
          <button className=" bg-violet-700 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded mt-10 w-1/3">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
