"use client";

import DashboardSidebar from "@/components/AdminLayout/DashboardSidebar";
import SearchBar from "@/components/common/SearchBar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-backgroundHero min-h-screen flex flex-col md:flex-row">
      {/* SIDEBAR */}
      <aside className="md:w-64 md:min-h-screen border-r">
        <DashboardSidebar />
      </aside>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">
        {/* SEARCH BAR (Top in main area) */}
        <header className="p-4 border-b">
          <SearchBar />
        </header>

        {/* MAIN CONTENT (Below search bar) */}
        <main className="flex-1 p-4 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
