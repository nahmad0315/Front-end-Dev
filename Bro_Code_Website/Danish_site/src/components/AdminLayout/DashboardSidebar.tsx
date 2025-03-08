"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/button";
import { Users, LineChart, List, Clipboard, Settings, LogOut, Calendar, Building, Phone, Home } from "lucide-react";
import Link from "next/link";

const Dashboard = () => {
  const pathname = usePathname();

  const tabs = [
    { name: "Dashboard", icon: Home, url: "/user" },
    { name: "Sales Funnel", icon: LineChart, url: "/user/sales-funnel" },
    { name: "Contacts", icon: Phone, url: "/user/contacts" },
    { name: "Properties", icon: Building, url: "/user/properties" },
    { name: "Partners", icon: Users, url: "/user/partners" },
    { name: "Surveys", icon: Clipboard, url: "/user/surveys" },
    { name: "Tasks", icon: List, url: "/user/tasks" },
    { name: "Calendar", icon: Calendar, url: "/user/calendar" },
  ];

  return (
    <div className="flex h-screen p-4 bg-backgroundHero">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg rounded-2xl p-4 flex flex-col justify-between" style={{ borderRadius: 20, boxShadow: "4px 4px 16.5px 0px #0000001A" }}>
        <div>
          {/* Logo */}
          <div className="container mx-auto flex justify-between items-center w-full mb-6">
            <div className="text-primary font-logo text-smallLogo font-bold leading-[50px]">
              Prop 360°
            </div>
          </div>
          <nav>
            {tabs.map((tab) => (
              <Link key={tab.name} href={tab.url} className="block">
                <button
                  className={`flex items-center w-full p-3 my-1 transition hover:bg-gray-200 border-l-4 
                    ${pathname === tab.url ? "bg-gray-300 border-blue-500" : "border-transparent"}`}
                >
                  <tab.icon className="mr-3 text-gray-700" />
                  {tab.name}
                </button>
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <Link href={'/'}>
            <Button className="w-full flex items-center mb-2 bg-red-500 text-white hover:bg-red-600">
              <LogOut className="mr-2" /> Logout
            </Button>
          </Link>
          <Button variant="outline" className="w-full flex items-center border-gray-400 text-gray-700 hover:bg-gray-200">
            <Settings className="mr-2" /> Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
