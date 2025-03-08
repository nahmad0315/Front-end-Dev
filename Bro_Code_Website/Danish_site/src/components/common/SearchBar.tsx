import React from "react";
import { Bell, Search } from "lucide-react";
import Image from 'next/image'

export default function SearchBar() {
  return (
    <div className="flex items-center w-full bg-white p-4 rounded-xl shadow-sm">
      {/* Search Field */}
      <div className="relative flex-1"> 
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
          <Search className="h-5 w-5" />
        </span>
        <input
          type="text"
          placeholder="Try searching..."
          className="w-full pl-10 pr-4 py-2 text-sm rounded-full bg-gray-50 focus:outline-none 
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
        />
      </div>

      {/* Notification Bell & User Info */}
      <div className="flex items-center space-x-6 ml-4">
        {/* Bell Icon (with optional green dot) */}
        <div className="relative">
          <Bell className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-700" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-green-400 ring-2 ring-white"></span>
        </div>

        {/* User Info */}
        <div className="flex items-center space-x-2">
          <Image
            src="https://avatar.iran.liara.run/public/11"
            alt="User Avatar"
            className="h-8 w-8 rounded-full object-cover"
            width={8}
            height={8}
          />
          <div className="text-sm">
            <p className="font-medium text-gray-700 leading-4">Mike Nielsen</p>
            <p className="text-gray-400 leading-4">User</p>
          </div>
        </div>
      </div>
    </div>
  );
}
