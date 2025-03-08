"use client";

import { useState } from "react";
import Link from "next/link";

type MobileMenuProps = {
  menuItems: { name: string; path: string }[];
};

const MobileMenu = ({ menuItems }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(true)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)} // Close menu when clicking outside
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-4/5 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
          onClick={() => setIsOpen(false)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Menu Items */}
        <div className="flex flex-col items-center mt-16 space-y-6 font-body text-navlink text-gray-700">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-lg font-medium cursor-pointer hover:text-black"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {item.name}
            </Link>
          ))}

          {/* Login Button for Mobile */}
          <button className="mt-8 border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition font-normal font-button">
            Login/Signup
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
