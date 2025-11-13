import { useState } from "react";
import logo from "../src/assets/Logo.png"
import { NavLink } from "react-router-dom";

export default function Navbar () {
    const [menuOpen, setMenuOpen] = useState(false);

     const linkClasses = ({ isActive }) =>
    `hover:text-[rgb(255,69,58)] hover:underline transition-all ${
      isActive ? "text-[rgb(220,20,60)] font-semibold underline" : ""
    }`;

    return (
        <>
        <header className="bg-[rgb(255,245,245)]">
            <nav className="flex items-center justify-between px-8 py-4">
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="LOGO" className="w-25 h-25" />                    
                </div>

                {/* Desktop */}
                <ul className="hidden md:flex space-x-8 text-[rgb(139,0,0)] font-medium" >
                    <li><NavLink to="/" className={linkClasses}>Home</NavLink></li>
                    <li><NavLink to="/services" className={linkClasses}>Services</NavLink></li>
                    <li><NavLink to="/mechanics" className={linkClasses}>Mechanics</NavLink></li>
                    <li><NavLink to="/carwashers" className={linkClasses}>Carwashers</NavLink></li>
                    <li><NavLink to="/contact" className={linkClasses}>Contact Us</NavLink></li>
                </ul>

                {/* Hamburger */}
                <button className="md:hidden flex flex-col cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="h-1 w-6 bg-[rgb(139,0,0)] mb-1"></div>
                    <div className="h-1 w-6 bg-[rgb(139,0,0)] mb-1"></div>
                    <div className="h-1 w-6 bg-[rgb(139,0,0)]"></div>
                </button>
            </nav>
            {/* Mobile */}
            {menuOpen && (               
                <div className="md:hidden bg-[rgb(255,245,245)] text-[rgb(139,0,0)] flex flex-col space-y-4 py-4 px-6 shadow-inner">
                    <NavLink to="/" className={linkClasses} onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/services" className={linkClasses} onClick={() => setMenuOpen(false)}>Services</NavLink>
                    <NavLink to="/mechanics" className={linkClasses} onClick={() => setMenuOpen(false)}>Mechanics</NavLink>
                    <NavLink to="/carwashers" className={linkClasses} onClick={() => setMenuOpen(false)}>Carwashers</NavLink>
                    <NavLink to="/contact" className={linkClasses} onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
                </div>
         )}
        </header>
        </>
    )
}