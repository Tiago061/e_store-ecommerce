'use client';

import React, { useState } from "react";
import Link from 'next/link';







export default function Header() {   

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return(
        <header>
            <nav className="flex justify-between items-center py-6 px-8 md:px-32 bg-white drop-shadow-md">
                <Link href="/">
                    <img src="/img/logo.svg" alt="logo cyber" className="hover:scale-105 transition-all"/>
                </Link>
                
                <div className="relative hidden md:flex items-center justify-center gap-3 ">
                    <i className="bx bx-search absolute left-3 text-2xl text-gray-500"></i>
                    <input type="text" placeholder="Search" className="py-2 pl-10 rounded-xl bg-gray-100 w-96 h-14 font-inter" />
                </div>

                <ul className="hidden xl:flex items-center gap-12 text-base">
                    <li className="p-3 text-black font-bold hover:bg-black hover:text-white rounded-md cursor-pointer font-inter">Home</li>
                    <li className="p-3 hover:font-semibold  hover:bg-black hover:text-white rounded-md cursor-pointer font-inter">About</li>
                    <li className="p-3 hover:font-semibold  hover:bg-black hover:text-white rounded-md cursor-pointer font-inter">Contact Us</li>
                    <li className="p-3 hover:font-semibold  hover:bg-black hover:text-white rounded-md cursor-pointer font-inter">Blog</li>
                    <li><img src="/img/like.svg" alt="favorites" className="cursor-pointer hover:scale-105 transition-all"/></li>
                    <li><img src="/img/cart.svg" alt="car" className="cursor-pointer hover:scale-105 transition-all"/></li>
                    <li><img src="/img/profile.svg" alt="profile" className="cursor-pointer hover:scale-105 transition-all"/></li>
                </ul>

                <div className="xl:hidden " >
                    <i className="bx bx-menu xl:hidden block text-5xl cursor-pointer " onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
                </div>

                <ul className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`} style={{transition : "transform 0.3 ease, opacity 0.3s ease"}}>
                    <li className="list-none w-full text-center p4 hover:bg-black hover:text-white transition-all cursor-pointer font-inter">Home</li>
                    <li className="list-none w-full text-center p4 hover:bg-black hover:text-white transition-all cursor-pointer font-inter">About</li>
                    <li className="list-none w-full text-center p4 hover:bg-black hover:text-white transition-all cursor-pointer font-inter">Contact Us</li>
                    <li className="list-none w-full text-center p4 hover:bg-black hover:text-white transition-all cursor-pointer font-inter">Blog</li>
                </ul>
            </nav>
        </header>
    );
}
