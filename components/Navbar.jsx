import { useState } from "react";
import logo from "../src/assets/Logo.png"

export default function Navbar () {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <header className="bg-[rgb(255,245,245)]">
            <nav className="flex items-center justify-between px-8 py-4">
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="LOGO" className="w-30 h-20" />
                    <div>
                        <h1 className="text-[rgb(220,20,60)] text-2xl font-bold">ResqMe Mechanics</h1>
                        <p className="text-[rgb(139,0,0)] text-sm italic font-semibold"> Mechanics Reimagined</p>
                    </div>
                </div>

                {/* Desktop */}
                <ul className="hidden md:flex space-x-8 text-[rgb(139,0,0)] font-medium" >
                    <li><a href="/" className="hover:text-[rgb(255,69,58)] hover:underline transition">Home</a></li>
                    <li><a href="/services" className="hover:text-[rgb(255,69,58)] hover:underline transition">Services</a></li>
                    <li><a href="/mechanics" className="hover:text-[rgb(255,69,58)] hover:underline transition">Mechanics</a></li>
                    <li><a href="/carwashers" className="hover:text-[rgb(255,69,58)] hover:underline transition">Carwashers</a></li>
                    <li><a href="/contact" className="hover:text-[rgb(255,69,58)] hover:underline transition">Contact us</a></li>
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
                    <a href="/" className="font-semibold block">Home</a>
                    <a href="/services" className="font-semibold block ">Services</a>
                    <a href="/mechanics" className="font-semibold block ">Mechanics</a>
                    <a href="/carwashers" className="font-semibold block ">Carwashers</a>
                    <a href="/contact" className="font-semibold block ">Contact us</a>
                </div>
         )}
        </header>
        </>
    )
}