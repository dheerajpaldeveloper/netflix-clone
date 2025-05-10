'use client'
import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { MdKeyboardArrowUp, MdKeyboardArrowDown, MdFormatListBulletedAdd, MdOutlineEmail } from "react-icons/md";
import { FaRegCalendarDays, FaFileInvoiceDollar } from "react-icons/fa6";
import { RiUserLine, RiPagesLine, RiPieChartLine, RiTableAltLine } from "react-icons/ri";
import { BsListTask } from "react-icons/bs";
import { BiTable } from "react-icons/bi";
import { TbMessage } from "react-icons/tb";
import { HiArrowRightEndOnRectangle } from "react-icons/hi2";

export default function Sidebar() {
  // const [toggle, setToggle] = useState(false);
  // const toggleButton = () => {
  //   setToggle(!toggle);
  // };

  return (
    <div className="flex flex-col justify-start text-start pt-4 w-64 bg-gray-800 min-h-screen overflow-y-hidden scrolbar-hidden">
      <h1 className="flex justify-center text-3xl pb-8 text-gray-100 text-center">TailAdmin</h1>

      {/* Menu */}
      <h1 className="text-[#8a99af] pl-6 pb-2">MENU</h1>
      <div className="flex flex-col text-gray-100 space-y-1">
        <div className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <RxDashboard />
            <a href="/">Dashboard</a>
            {/* {toggle ? (<MdKeyboardArrowUp/>):(<MdKeyboardArrowDown/>)} */}
          </div>
        </div>
        <div className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <FaRegCalendarDays />
            <a href="/calendar">Calendar</a>
          </div>
        </div>
        <div className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <RiUserLine />
            <a href="/profile">Profile</a>
          </div>
        </div>
        <div className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <BsListTask />
            <a href="/task">Task</a>
          </div>
        </div>
        <div className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <MdFormatListBulletedAdd />
            <a href="/forms">Forms</a>
          </div>
        </div>
        <div className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <BiTable />
            <a href="/tables">Tables</a>
          </div>
        </div>
        <div className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <RiPagesLine />
            <a href="/pages">Pages</a>
          </div>
        </div>
      </div>

      {/* Support */}
      <h1 className="text-[#8a99af] pl-6 pt-4 pb-2">SUPPORT</h1>
      <div className="flex flex-col text-gray-100 space-y-1">
        <div className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <TbMessage />
            <a href="/messages">Messages</a>
          </div>
        </div>
        <div className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <MdOutlineEmail />
            <a href="/inbox">Inbox</a>
          </div>
        </div>
        <div className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <FaFileInvoiceDollar />
            <a href="/invoice">Invoice</a>
          </div>
        </div>
      </div>

      {/* Others */}
      <h1 className="text-[#8a99af] pl-6 pt-4 pb-2">OTHERS</h1>
      <div className="flex flex-col text-gray-100 space-y-1 pb-6">
        <div className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <RiPieChartLine />
            <a href="/charts">Charts</a>
          </div>
        </div>
        <div className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <RiTableAltLine />
            <a href="/uielements">UI Elements</a>
          </div>
        </div>
        <div className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <HiArrowRightEndOnRectangle />
            <a href="/authentication">Authentication</a>
          </div>
        </div>
      </div>
    </div>
  );
}
