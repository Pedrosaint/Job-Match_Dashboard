// import { motion } from "framer-motion";
// import React from "react";
// import { ImProfile } from "react-icons/im";
// import { IoBriefcaseSharp } from "react-icons/io5";
// import { RxDashboard } from "react-icons/rx";
// import { Link } from "react-router-dom";

// interface SidebarProps {
//   isOpen: boolean;
//   setIsOpen: (isOpen: boolean) => void;
// }

// const SIDEBAR_ITEMS = [
//   { path: "/", label: "Dashboard", icon: <RxDashboard size={25} /> },
//   { path: "/mainjob", label: "Job", icon: <IoBriefcaseSharp size={25} /> },
//   { path: "/applicant", label: "Applicant", icon: <ImProfile size={25} /> },
// ];

// const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
//   return (
//     <>
//       {/* Overlay when sidebar is open */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-white rounded-tr-2xl rounded-br-2xl border border-gray-200 shadow-xl w-60 z-5"
//           onClick={() => setIsOpen(!isOpen)}
//         />
//       )}

//       <motion.aside
//         initial={{ width: 60 }}
//         animate={{ width: isOpen ? 200 : 60 }}
//         transition={{ duration: 0.3 }}
//         className={`fixed left-0 h-full md:flex flex-col items-center py-4 z-50`}
//       >
//         {/* Sidebar Icons */}
//         <nav className="flex flex-col space-y-6 mt-4 w-full">
//           {SIDEBAR_ITEMS.map((item) => (
//             <Link
//               key={item.path}
//               to={item.path}
//               className="flex items-center space-x-3 px-4 ml-3 w-full py-3"
//             >
//               {item.icon}
//               {isOpen && (
//                 <span className="whitespace-nowrap">{item.label}</span>
//               )}
//             </Link>
//           ))}
//         </nav>
//       </motion.aside>
//     </>
//   );
// };

// export default Sidebar;



import { motion } from "framer-motion";
import React from "react";
import { ImProfile } from "react-icons/im";
import { IoBriefcaseSharp } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";

interface MobileSidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MOBILE_SIDEBAR_ITEMS = [
  { path: "/", label: "Dashboard", icon: <RxDashboard size={25} /> },
  { path: "/mainjob", label: "Job", icon: <IoBriefcaseSharp size={25} /> },
  { path: "/applicant", label: "Applicant", icon: <ImProfile size={25} /> },
];

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* 🔹 Dark overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 "
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 🔹 Sidebar Drawer */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: isOpen ? 0 : -250 }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 h-full w-64 bg-purple-200 shadow-lg z-50"
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700">Menu</h2>
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col space-y-4 mt-6 px-4">
          {MOBILE_SIDEBAR_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center space-x-3 px-4 py-3 rounded-md hover:bg-purple-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              <span className="text-gray-700">{item.label}</span>
            </Link>
          ))}
        </nav>
      </motion.aside>
    </>
  );
};

export default MobileSidebar;
