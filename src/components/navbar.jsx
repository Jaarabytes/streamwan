import React from "react";

function Navbar() {
  const items = ["Home", "Offers", "Get in touch", "FAQs"];
  return (
    <nav className="bg-green-800 text-white p-4 flex justify-end sticky top-0 shadow-lg">
      <ul className="list-none p-0">
        {items.map((elem) => (
          <li key={elem} className="inline-block ml-4 px-3">
            <a
              href={elem}
              className="hover:underline transition duration-500 text-lg"
            >
              {elem}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
