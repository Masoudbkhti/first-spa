import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <div class="bg-slate-950 h-24 flex justify-between">
        <img
          src="../src/assets/images/billig-book.png"
          class="bg-white"
          alt="billigbook"
        ></img>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </>
  );
};
