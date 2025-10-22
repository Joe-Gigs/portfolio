import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = () => {
const [toggle, setToggle] = useState(false);
const handleToggle = () => setToggle(!toggle);

return (
  <header className="flex justify-between px-5 py-4 bg-[#161616] text-white fixed w-full z-10 shadow-md">
    <a href="/portfolio" className="logo text-2xl font-bold text-[#10b981]">
    Jo Giglio
    </a>
    {/* Desktopppppp */}
    <nav className="hidden md:block">
      <ul className="flex space-x-6">
        <li>
          <Link to="/portfolio" className="hover:text-[#10b981] transition-colors duration-300">
          Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-[#10b981] transition-colors duration-300">
          About</Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-[#10b981] transition-colors duration-300">
          Projects</Link>
        </li>
        <li>
          <Link to="/audioreel" className="hover:text-[#10b981] transition-colors duration-300">
          Audio Reel</Link>
        </li>
      </ul>
    </nav>
    {/* Mobile */}
    <nav className={`
    fixed top-0 left-0 w-full h-screen bg-[#1f2937] text-white transform 
    ${toggle ? "translate-x-0" : "translate-x-full"}
    transition-transform duration-300 ease-in-out md:hidden z-20
    `}>
    <ul className="flex flex-col items-center justify-center h-full space-y-6">
      <li>
        <Link to="/" onClick={handleToggle} className="text-2xl">
        Home</Link>
      </li>
      <li>
        <Link to="/about" onClick={handleToggle} className="text-2xl">
        About</Link>
      </li>
      <li>
        <Link to="/projects" onClick={handleToggle} className="text-2xl">
        Projects</Link>
      </li>
    </ul>
    </nav>
    {/* Toggle button */}
    <button onClick={handleToggle} className="block md:hidden focus:outline-none z-30">
      {!toggle ? 
      <AiOutlineMenu size={30} />
      : 
      <AiOutlineClose size={30} />
      }
    </button>
  </header>
  );
}
export default Header;
