import React from "react";
import { IoIosSearch } from "react-icons/io";
import { BiHomeAlt2 } from "react-icons/bi";
import { PiFilmSlate } from "react-icons/pi";
import { RiTv2Line } from "react-icons/ri";
import { IoMdTrendingUp } from "react-icons/io";
import { MdOutlineAdd } from "react-icons/md";
import { TbArrowsCross } from "react-icons/tb";


export default function Sidebar() {
  return (
    <div className="flex justify-center items-center h-screen shadow-md bg-black">
      <div className="flex flex-col gap-12 text-gray-50">
        <a href="/search"  className="flex items-center gap-6 border-b-2 border-transparent hover:border-red-600 focus:border-red-600 active:border-red-600 transition duration-200"
        >
          <IoIosSearch size={23} />
        </a>
        <a href="/" className="flex items-center gap-2">
          <BiHomeAlt2 size={23} />
        </a>
        <a href="/movies" className="flex items-center gap-2">
          <PiFilmSlate size={23} />
        </a>
        <a href="/webseries" className="flex items-center gap-2">
          <RiTv2Line size={23} />
        </a>
        <a href="/trending" className="flex items-center gap-2">
          <IoMdTrendingUp size={23} />
        </a>
        <a href="/addList" className="flex items-center gap-2">
          <MdOutlineAdd size={23} />
        </a>
        <a href="/suffleMovies" className="flex items-center gap-2">
          <TbArrowsCross size={23} />
        </a>
      </div>
    </div>
  );
}
