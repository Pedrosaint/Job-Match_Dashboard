import React from "react";
import { useNavigate } from "react-router-dom";

const MainJob: React.FC = () => {
  const navigate = useNavigate();

  // Job roles data
  const jobRoles = [
    { name: "Frontend Developer", path: "/frontend" },
    { name: "Backend Developer", path: "/backend" },
    { name: "UX Designer", path: "/ux-designer" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-10">
      {jobRoles.map((role, index) => (
        <div
          key={index}
          onClick={() => navigate(role.path)}
          className="h-40 flex items-center justify-center bg-purple-500 text-white text-2xl font-bold rounded-2xl cursor-pointer transition duration-300 hover:bg-purple-600"
        >
          {role.name}
        </div>
      ))}
    </div>
  );
};

export default MainJob;
