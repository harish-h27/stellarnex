import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <div className="flex justify-center w-full mt-10" id="navbar-main-1">
      <div className="flex justify-between w-4/12">
        <div className="transition ease-in-out delay-150 duration-300 hover:bg-brand-color1 w-42 px-5 py-1 rounded-2xl ">
          <NavLink to="/website" className="no-underline flex items-center">
            Website{" "}
          </NavLink>
        </div>
        <div className="transition ease-in-out delay-150 duration-300 hover:bg-brand-color1 w-42 px-5 py-1 rounded-2xl">
          <NavLink to="/branding" className="no-underline flex items-center">
            Branding
          </NavLink>
        </div>
        <div className="transition ease-in-out delay-150 duration-300 hover:bg-brand-color1 w-42 px-5 py-1 rounded-2xl ">
          <NavLink to="/marketing" className="no-underline flex items-center">
            Marketing{" "}
          </NavLink>
        </div>
        <div className="transition ease-in-out delay-150 duration-300 hover:bg-brand-color1 w-42 px-5 py-1 rounded-2xl">
          <NavLink to="/about" className="no-underline ">
            About
          </NavLink>
        </div>
        <div className="transition ease-in-out delay-150 duration-300 hover:bg-brand-color1 w-42 px-5 py-1 rounded-2xl">
          <NavLink to="/contact" className="no-underline ">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Website", link: "/website" },
    { id: 2, text: "Branding", link: "/branding" },
    { id: 3, text: "Marketing", link: "/marketing" },
    { id: 4, text: "About", link: "/about" },
    { id: 5, text: "Contact", link: "/contact" },
  ];

  return (
    <div
      className="bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white fixed z-50 w-full"
      id="navbar-main-2"
    >
      <NavLink to="/" className="w-full text-3xl font-bold text-white">StellarNex.</NavLink>
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-black rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            onClick={handleNav}
          >
            {item.text}
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500 z-50"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-50"
        }
      >
        {/* Mobile Logo */}
        <NavLink to="/" className="w-full text-3xl font-bold text-white m-4">
        <h1 className="relative left-4"> StellarNex.</h1>
        </NavLink>

        {navItems.map((item) => {
          return (
            <div className="">
              <NavLink
                to={item.link}
                className="w-full m-4 mt-5 inline-block text-lg"
                onClick={handleNav}
              >
                {item.text}
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const MainBar: React.FC = () => {
  return (
    <>
      <Navbar /> : <Navigation />{" "}
    </>
  );
};

export default MainBar;
