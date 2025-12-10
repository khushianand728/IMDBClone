"use client";

import React from 'react'
import Menuitem from '@/components/Menuitem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 ">

      {/* IMDb Logo on Right */}
      <div className="flex gap-4 my-auto ml-36">
        <Menuitem title="Home" address="/" Icon={AiFillHome} />
        <Menuitem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>

        {/* Theme Toggle on Left */}

      <Link href="/" className="flex gap-1 items-center mr-3">
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
        <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDB</span>
        <span className="text-xl hidden sm:inline">Clone</span>
      </Link>


    </div>
  );
}
