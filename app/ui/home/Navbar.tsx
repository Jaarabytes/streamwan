'use client'
import Link from "next/link";
import { useState } from "react";
export default function Navbar(){
    
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu: any = () => {
        setMenuOpen(!isMenuOpen);
    }

    const navItems = [{name: "Pricing", link: "/pricing"}, {name: "Login", link: "/login"}]
      
    return(
        <nav className={`p-4 flex justify-between items-center sticky top-0 shadow-lg z-50 bg-slate-200`}>

            <Link href={`/`}>
              <button className="inline-flex items-center text-lg font-bold"
              >Streamwan
              </button>
            </Link>

            <button
            className={`sm:hidden h-[50px] w-[50px]`}
            onClick={toggleMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            <ul className={`list-none p-0 sm:flex hidden`}>
                {navItems.map((elem, index) => (
                    <button key={index} className="block rounded-full ml-4 p-3 hover:bg-slate-300 transition duration:500"><Link href={elem.link} className="text-lg">
                    {elem.name}    
                    </Link></button>
                ))}
            </ul>

            <div className={`transition duration-500 h-[100%] overflow-x-hidden fixed z-25 top-0 left-0 bg-white ${isMenuOpen ? 'w-full' : 'w-0'} `}>
            <button className="absolute top-[21px] right-[21px]" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            <ul
            className={`list-none p-0 sm:hidden text-center relative top-[70px]`}
            >
            {navItems.map((elem, index) => (
            <li key={index} className="py-3">
              <Link
                href={elem.link} 
                className="text-xl text-green-900 font-bold hover:underline"
                onClick={toggleMenu}
              >
                {elem.name}
              </Link>
            </li>
            ))}
            </ul>
            </div>
        </nav>
    )
}
