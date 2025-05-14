'use client'
import React from "react";
import { RxDashboard } from "react-icons/rx";
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdFormatListBulletedAdd,
  MdOutlineEmail,
} from "react-icons/md";
import { FaRegCalendarDays, FaFileInvoiceDollar } from "react-icons/fa6";
import {
  RiUserLine,
  RiPagesLine,
  RiPieChartLine,
  RiTableAltLine,
} from "react-icons/ri";
import { BsListTask } from "react-icons/bs";
import { BiTable } from "react-icons/bi";
import { TbMessage } from "react-icons/tb";
import { HiArrowRightEndOnRectangle } from "react-icons/hi2";

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-start text-start pt-4 w-64 min-h-screen overflow-y-hidden scrollbar-hidden">
      <img
        src="./logo.svg"
        width={200}
        height={30}
        className="flex justify-center pb-8 items-center text-gray-100 pl-4"
      />

      {/* Menu */}
      <h1 className="text-[#8a99af] pl-6 pb-2">MENU</h1>
      <div className="flex flex-col text-gray-100 space-y-1">
        <a href="/" className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <RxDashboard />
            <p>Dashboard</p>
          </div>
        </a>
        <a href="/calendar" className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <FaRegCalendarDays />
            <p>Calendar</p>
          </div>
        </a>
        <a href="/profile" className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <RiUserLine />
            <p>Profile</p>
          </div>
        </a>
        <a href="/task" className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <BsListTask />
            <p>Task</p>
          </div>
        </a>
        <a href="/forms" className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <MdFormatListBulletedAdd />
            <p>Forms</p>
          </div>
        </a>
        <a href="/tables" className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <BiTable />
            <p>Tables</p>
          </div>
        </a>
        <a href="/pages" className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <RiPagesLine />
            <p>Pages</p>
          </div>
        </a>
      </div>

      {/* Support */}
      <h1 className="text-[#8a99af] pl-6 pt-4 pb-2">SUPPORT</h1>
      <div className="flex flex-col text-gray-100 space-y-1">
        <a href="/messages" className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <TbMessage />
            <p>Messages</p>
          </div>
        </a>
        <a href="/inbox" className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <MdOutlineEmail />
            <p>Inbox</p>
          </div>
        </a>
        <a href="/invoice" className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <FaFileInvoiceDollar />
            <p>Invoice</p>
          </div>
        </a>
      </div>

      {/* Others */}
      <h1 className="text-[#8a99af] pl-6 pt-4 pb-2">OTHERS</h1>
      <div className="flex flex-col text-gray-100 space-y-1 pb-6">
        <a href="/charts" className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <RiPieChartLine />
            <p>Charts</p>
          </div>
        </a>
        <a href="/uielements" className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <RiTableAltLine />
            <p>UI Elements</p>
          </div>
        </a>
        <a href="/authentication" className="hover:bg-neutral-600 py-2 cursor-pointer">
          <div className="flex items-center gap-2 pl-6">
            <HiArrowRightEndOnRectangle />
            <p>Authentication</p>
          </div>
        </a>
      </div>
    </div>
  );
}
