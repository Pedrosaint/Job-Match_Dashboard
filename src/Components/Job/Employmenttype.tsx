import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io"; // Import Icon
import { useJobSelection } from "../../Context/JobSelectionContext";


const EmploymentType: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {employmentType, setEmploymentType} = useJobSelection();
  const dropdownRef = useRef<HTMLDivElement>(null);
 

  const employmentOptions = [
    "Part Time",
    "Full Time",
    "Contract",
    "Internship",
    "Other",
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label className="block font-medium text-gray-700">Employment Type</label>

      {/* Selected Option Box */}
      <div
        className="w-full border border-gray-300 px-3 py-2 mt-1 rounded cursor-pointer bg-white flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {employmentType || "--Select--"}
        <IoIosArrowDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <ul className="absolute top-0 left-0 w-full bg-white border border-gray-100 rounded shadow-lg z-50 max-h-60 overflow-auto animate-fadeIn">
          {employmentOptions.map((option, index) => (
            <li
              key={index}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setEmploymentType(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmploymentType;
