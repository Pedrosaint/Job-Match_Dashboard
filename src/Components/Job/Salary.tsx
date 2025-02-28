import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useJobSelection } from "../../Context/JobSelectionContext";


const Salary: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {salary, setSalary} = useJobSelection();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const SalaryOption = [
    "$50,000 - $80,000",
    "$80,000 - $100,000",
    "$100,000 - $120,000",
    "$120,000 - $150,000",
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
      <label className="flex  justify-between font-medium  items-center gap-1 whitespace-nowrap text-gray-700">
        Salary <span className="text-gray-500"></span>
      </label>

      {/* Selected Option Box */}
      <div
        className="w-full border border-gray-300 px-3 py-2 mt-1 rounded outline-none cursor-pointer bg-white relative flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {salary || "--Select--"}
        <IoIosArrowDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <ul className="absolute top-3 left-0 w-full bg-white border border-gray-300 rounded shadow-lg z-50 max-h-60 overflow-auto animate-fadeIn">
          {SalaryOption.map((option, index) => (
            <li
              key={index}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSalary(option);
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

export default Salary;
