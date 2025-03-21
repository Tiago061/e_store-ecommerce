import React from "react";





export default function Header() {    
    return(
        <header>
            <nav className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
                <a href="/">
                    <img src="/img/logo.svg" alt="logo cyber" className="hover:scale-105 transition-all"/>
                </a>
                
                <div className="relative hidden md:flex items-center justify-center gap-3">
                    <i className="bx bx-search absolute left-3 text-2xl text-gray-500"></i>
                    <input type="text" placeholder="Search..." className="py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500" />
                </div>

                <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
                    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md cursor-pointer">Home</li>
                    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md cursor-pointer">About</li>
                    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md cursor-pointer">Contact Us</li>
                    <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md cursor-pointer">Blog</li>
                    <li><img src="/img/like.svg" alt="favorites" /></li>
                    <li><img src="/img/cart.svg" alt="car" /></li>
                    <li><img src="/img/profile.svg" alt="profile" /></li>
                </ul>
            
                <i className="bx bx-menu xl:hidden block text-5xl cursor-pointer"></i>
            </nav>
        </header>
    );
}
