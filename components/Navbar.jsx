"use client";
import Link from "next/link";
import Image from "next/image";
import ToggleBtn from "./ToggleBtn";
import React, { useState } from "react";
import AgapeLogo from "../public/SVG//logo.svg";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full px-[3rem] lg:px-[5rem] py-[1rem] lg:py-[.8rem] bg-agape-dark-blue dark:bg-slate-200 text-slate-50 dark:text-slate-950 ${
          menuOpen ? "z-50" : "z-10"
        }`}
      >
        <nav className='flex flex-col lg:flex-row lg:items-center justify-between'>
          <div className='flex items-center justify-between'>
            <h2 className='font-bold text-2xl'>Agape</h2>
            <div className='flex items-center gap-[1rem] lg:hidden'>
              <>
                <ToggleBtn />
              </>
              <button className='bg-agape-yellow dark:bg-agape-yellow font-semibold rounded-md px-[1.5rem] py-[.7rem] text-slate-50 dark:text-slate-950'>
                Chat
              </button>
              <button onClick={toggleMenu}>
                {menuOpen ? (
                  <HiOutlineX size={30} />
                ) : (
                  <HiOutlineMenuAlt3 size={30} />
                )}
              </button>
            </div>
          </div>
          <ul
            className={`${
              menuOpen
                ? "flex flex-col justify-between absolute py-4 gap-[3rem] font-medium text-slate-950 w-full md:w-[100vw] px-[3rem] top-[77px] transition-all ease-in-out duration-500 bg-slate-200 z-[1] md:z-auto md:left-0"
                : "hidden lg:flex lg:flex-row lg:items-center lg:text-slate-50"
            }lg:flex lg:items-center lg:text-slate-50 lg:flex-row gap-[3rem] font-medium text-slate-50 w-full left-0 md:w-auto px-[3rem] transition-all ease-in-out duration-500`}
          >
            <li className='hover:border-b-2 hover:border-agape-yellow'>
              <Link href='#'>Home</Link>
            </li>
            <li className='hover:border-b-2 hover:border-agape-yellow'>
              <Link href='#'>FAQ</Link>
            </li>
            <li className='hover:border-b-2 hover:border-agape-yellow'>
              <Link href='#'>Shop</Link>
            </li>
            <li className='hover:border-b-2 hover:border-agape-yellow'>
              <Link href='#'>Blog</Link>
            </li>
            <li className='hover:border-b-2 hover:border-agape-yellow'>
              <Link href='#'>Join Us</Link>
            </li>
            <li className='hover:border-b-2 hover:border-agape-yellow'>
              <Link href='#'>Our Services</Link>
            </li>
            <div className='hidden lg:block'>
              <ToggleBtn color='white' />
            </div>
            <button className='bg-agape-yellow font-semibold rounded-md px-[1.5rem] py-[.7rem] hover:bg-agape-light-blue'>
              Contact Us
            </button>
          </ul>
        </nav>
      </div>
    </>
  );
}
