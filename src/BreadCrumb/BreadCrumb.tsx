import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  return (
    <nav className="text-md text-gray-500 py-4">
      <ul className="flex space-x-2">
        {/* Job Link */}
        <li>
          <Link to="/mainjob" className="text-[#000000B0] hover:underline">
            Job
          </Link>
        </li>


        {/* Dynamic breadcrumbs for specific templates */}
        {paths
          .filter((path) => path !== "mainjob") // Exclude "job" since we added it manually
          .map((path, index) => {
            const fullPath = `/${paths.slice(0, index + 1).join("/")}`;
            return (
              <li key={fullPath} className="flex items-center">
                <span className="mx-2">›</span>
                <Link to={""} className="[#000000B0] hover:underline">
                  {path.replace(/_/g, " ")}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
