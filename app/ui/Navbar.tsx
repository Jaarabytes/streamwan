'use client'
import Link from "next/link";
import { useState } from "react";


export default function Navbar(){
    
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu: any = () => {
        setMenuOpen(!isMenuOpen);
    }

    const navItems = [{name: "Pricing", link: "/pricing"}, {name: "Login", link: "/login"},]
    
    return(
        <nav className={`p-4 flex justify-between items-center sticky top-0 shadow-lg z-50 bg-slate-200`}>

            {/* {DESKTOP VERSION STARTS HERE} */}

            {/* {SHANKS IMAGE} */}
            <Link href={`/`}>
              <button className="inline-flex items-center text-lg font-bold"
              >Streamwan
              </button>
            </Link>

            {/* Mobile Menu Button */}

            {/* SHOULD ALIGN RIGHT */}
            <button
            className={`sm:hidden h-[50px] w-[50px]`}
            onClick={toggleMenu}
            >
            <i
            className={`fas fa-bars text-slate-600 text-2xl hover:text-neon`}
            ></i>
            </button>

            {/* {DESKTOP MENU} */}
            <ul className={`list-none p-0 sm:flex hidden`}>
                {navItems.map((elem, index) => (
                    <button key={index} className="block rounded-full ml-4 p-3 hover:bg-slate-300 transition duration:500"><Link href={elem.link} className="text-lg">
                    {elem.name}    
                    </Link></button>
                ))}
            </ul>

            {/* {DESKTOP VERSION ENDS HERE} */}

            {/* Mobile Menu */}
            <div className={`transition duration-500 h-[100%] overflow-x-hidden fixed z-25 top-0 left-0 bg-slate-600/90 ${isMenuOpen ? 'w-full' : 'w-0'} `}>
            <button className="absolute top-[45px] right-[45px]" onClick={toggleMenu}>
            <i className="fas fa-times text-2xl text-white"></i>
            </button>
            <ul
            className={`list-none p-0 sm:hidden text-center relative top-[70px]`}
            >
            {navItems.map((elem, index) => (
            <li key={index} className="py-3">
              <Link
                href={elem.link} 
                className="text-xl text-white hover:underline hover:text-neon"
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