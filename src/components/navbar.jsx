import React, { useState } from "react";

function Navbar() {
  const items = ["Home", "Offers", "Contact", "FAQs"];
  const [menuOpen, setMenuOpen] = useState(false);
  const IDs = {
    Home: "#home",
    Offers: "#offers",
    Contact: "#contact",
    FAQs: "#FAQs"
  }
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="bg-green-800 text-white p-4 flex justify-between items-center sticky top-0 shadow-lg z-50">
      <div className="inline-flex items-center" id="Home">
        <i className="fa-solid fa-wifi fa-fade text-2xl"></i>
      </div>

      {/* Mobile Menu Button */}
      <button
        className={`sm:hidden text-white focus:outline-none`}
        onClick={toggleMenu}
      >
        <i
          className={`fas fa-bars text-xl`}
        ></i>
      </button>

      {/* Desktop Menu */}
      <ul className={`list-none p-0 sm:flex hidden`}>
        {items.map((elem, index) => (
          <li key={index} className="block ml-4 px-3">
            <a
              href={IDs[elem]}
              className="hover:underline transition duration-500 delay-500 text-lg"
            >
              {elem}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className={`transition duration-500 h-[100%] overflow-x-hidden fixed z-25 top-0 left-0 bg-green-900/50 `}>
        <button className="absolute top-[45px] right-[45px]" onClick={toggleMenu}>
          <i className="fas fa-times text-2xl"></i>
        </button>
        <ul
          className={`list-none p-0 ${
            menuOpen ? "w-96" : "w-0"
          } sm:hidden text-center relative top-[70px]`}
        >
          {items.map((elem, index) => (
            <li key={index} className="py-3">
              <a
                href={IDs[elem]}
                className="hover:underline text-xl"
              >
                {elem}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
