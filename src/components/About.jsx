import bookstore from "../assets/images/bookstore.jpg";
export const About = () => {
  return (
    <div>
      <img src={bookstore} class="w-screen"></img>
      <div class="py-20 px-36 flex flex-col justify-center items-center gap-10">
        <h2 class="text-5xl font-bold">About Us</h2>
        <p>
          One of the concerns of Iranians living abroad has always been the
          preparation of Iranian books; Because access to stores that sell
          Iranian books is very limited and usually the desired book can not be
          found there. The Billigbook has solved this long-standing problem, and
          from now on you can easily buy books from Iran anywhere on the planet
          and have your book delivered to your door as soon as possible.
        </p>
      </div>
    </div>
  );
};
