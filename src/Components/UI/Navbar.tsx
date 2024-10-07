import React from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { navLinks } from "../../utils/navLinks";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <NavLink to={"/"}>
            <span className="text-slate-500">Mern</span>
            <span className="text-slate-700">Estate</span>
          </NavLink>
        </h1>
        <form className="bg-slate-100 flex items-center p-3 rounded-lg">
          <input
            type="text"
            placeholder="search for property..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          {navLinks.map((link, i) => {
            const { url, text } = link;
            return (
              <li
                className="hidden sm:inline text-slate-700 hover:underline"
                key={i}
              >
                <NavLink to={url}>{text}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
