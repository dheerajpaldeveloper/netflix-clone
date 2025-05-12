"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { MdOutlineNotifications } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { LuMenu } from "react-icons/lu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [username, setUsername] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const { setTheme } = useTheme();
  const [isIconVisible, setIsIconVisible] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedRole = localStorage.getItem("role")
    if (storedUsername) {
      setUsername(storedUsername);
    }
    if(storedRole){
      setRole(storedRole);
    }
  }, []);

  function handleProfileIcon() {
    setIsIconVisible(!isIconVisible);
  }

  return (
    <div className="flex py-4 justify-between px-4 items-center">
      {/* Search bar */}
      <div className="flex space-x-4">
        <div className="flex items-center lg:hidden md:hidden">
        <Button variant="outline">
            <LuMenu size={25} />
        </Button>
        </div>
        <div>
        <input
          type="text"
          placeholder="Search..."
          className="border-gray-300 border-2 rounded-sm pl-2 py-1 text-sm"
        />
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4 items-center">
        {/* Theme toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Other action buttons (replace these with icons or dropdowns if needed) */}
        <div className="space-x-4">
          <Button variant="outline">
            <MdOutlineNotifications size={25} />
          </Button>
          <Button variant="outline">
            <MdOutlineMessage size={25} />
          </Button>
        </div>

        {/* Username display */}
        <div className="relative text-sm font-medium text-gray-700 dark:text-gray-200">
          {/* Toggle Button */}
          <button
            onClick={handleProfileIcon}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <FaRegUserCircle size={25} />
          </button>

          {/* Toggle Box (Dropdown or Info Card) */}
          {isIconVisible && (
            <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg p-4 z-50">
              <div className=" text-gray-800 dark:text-gray-100">
                User: {username}
              </div>
              <div className=" text-gray-800 dark:text-gray-100">
                role: {role}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
