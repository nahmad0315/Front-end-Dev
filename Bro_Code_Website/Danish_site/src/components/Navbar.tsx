"use client"; // ✅ Mark as client component

import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ Use client-side routing
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const pathname = usePathname(); // ✅ Get the current route path

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "#features-section" },
    { name: "Pricing", path: "#pricing-section" },
    { name: "Resources", path: "/resources" },
  ];

  return (
    <nav className="bg-white shadow-md h-navbar flex items-center px-6 md:px-12">
      <div className="container mx-auto flex justify-between items-center w-full">
        {/* Logo */}
        <Link href="/">
          <div className="text-primary font-logo text-logo font-bold leading-[50px]">
            Prop 360°
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-body text-navlink text-textPrimary ml-4 mr-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`cursor-pointer hover:text-black ${
                  pathname === item.path
                    ? "font-bold text-black"
                    : "font-normal"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Login/Signup Button */}
        <Link href="/auth/login">
          <button className="pl-2 pr-2 hidden md:block border border-primary text-primary w-button h-[55px] hover:bg-primary hover:text-white transition font-normal font-button">
            Login/Signup
          </button>
        </Link>

        <MobileMenu menuItems={menuItems} />
      </div>
    </nav>
  );
};

export default Navbar;
