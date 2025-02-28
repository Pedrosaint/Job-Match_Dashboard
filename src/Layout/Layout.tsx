import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MobileSidebar from "./Sidebar";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-purple-200">
      {/* Header */}
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Mobile Sidebar (Hidden on larger screens) */}
      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Main Content with Curved Top-Left */}
        <main className="flex-1 bg-white md:p-6 md:rounded-tl-3xl shadow-lg md:ml-20 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
