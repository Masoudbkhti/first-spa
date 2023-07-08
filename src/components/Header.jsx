import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <div class="bg-slate-950 h-24 flex justify-between align-middle px-20 py-5">
        <div class="w-1/2">
          <img
            src="../src/assets/images/billigbook.png"
            class="h-full"
            alt="billigbook"
          ></img>
        </div>
        <div class="text-white w-1/3 flex justify-around items-center text-lg">
          <NavLink to="/" activeClassName="font-bold">
            Home
          </NavLink>
          <NavLink to="/products" activeClassName="font-bold">
            Products
          </NavLink>
          <NavLink to="/about" activeClassName="font-bold">
            About
          </NavLink>
          <NavLink to="/contact" activeClassName="font-bold">
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
};
