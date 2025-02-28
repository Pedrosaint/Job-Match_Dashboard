import React from "react";
import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom"; // Import useLocation

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isOpen, setIsOpen }) => {
  const location = useLocation(); // Get current route

  // Function to format the route name
  const getPageTitle = () => {
    const path = location.pathname.replace("/", ""); // Remove "/"
    return path ? path.charAt(0).toUpperCase() + path.slice(1) : "Dashboard"; // Capitalize first letter
  };

  return (
    <header className="h-16 flex items-center px-4 relative z-10 ">
      <button onClick={() => setIsOpen(!isOpen)}>
        <Menu className="w-6 h-6" />
      </button>
      <h1 className="text-2xl font-semibold ml-14 ">{getPageTitle()}</h1>
    </header>
  );
};

export default Header;
