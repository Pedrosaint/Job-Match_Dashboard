import React from "react";
import RemoteJobToggle from "../../Remote_Job/RemoteJobToggle";
import { useJobSelection } from "../../Context/JobSelectionContext"; // Import context

const Location: React.FC = () => {
  const { location, setLocation } = useJobSelection(); // Access location state from context

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-between sm:space-x-8 space-y-4 sm:space-y-0 mt-15 px-5">
        {/* Left Side - Location Label, Refresh, Input */}
        <div className="w-full">
          {/* Label */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <label className="font-medium text-purple-700">Location</label>
            </div>
          </div>

          {/* Dropdown Input Field */}
          <select
            className="w-full border border-gray-300 px-3 py-2 mt-2 rounded outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)} // Update context state on change
          >
            <option value="">Select Location</option>
            <option value="New York City">New York City</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="San Francisco">San Francisco</option>
            <option value="Chicago">Chicago</option>
            <option value="Miami">Miami</option>
          </select>
        </div>

        {/* Right Side - Remote Job Toggle */}
        <div className="flex items-center space-x-3 pr-35 ">
          <div className="font-medium whitespace-nowrap text-gray-700">
            Remote Job?
          </div>
          <RemoteJobToggle />
        </div>
      </div>
    </div>
  );
};

export default Location;
