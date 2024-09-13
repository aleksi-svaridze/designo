import { Link, NavLink } from "react-router-dom";
import LogoImage from "../images/logo.png";

export const Footer = () => {
  return (
    <footer className="pt-[250px] pb-10 bg-black">
      <div className="md:container md:px-10 xl:px-[85px]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Link
            to="/"
            className="flex items-center  bg-red-500 gap-x-5 border-b border-white/10 md:border-0 mb-8 pb-8 md:mb-0 md:pb-0"
          >
            <img src={LogoImage} alt="" className="w-6 h-6" />
            <span className="text-2xl text-white leading-6 tracking-[5px] uppercase font-bold font-spartan">
              designo
            </span>
          </Link>

          <nav className="text-white flex flex-col md:flex-row items-center md:items-start gap-x-[42px] uppercase text-sm leading-[14px] tracking-[2px]">
            <NavLink
              to="about"
              className={({ isActive }) => isActive && "border-b border-white"}
            >
              our company
            </NavLink>
            <NavLink
              to="locations"
              className={({ isActive }) => isActive && "border-b border-white"}
            >
              locations
            </NavLink>
            <NavLink
              to="contact"
              className={({ isActive }) => isActive && "border-b border-white"}
            >
              contact
            </NavLink>
          </nav>
        </div>
      </div>
    </footer>
  );
};
