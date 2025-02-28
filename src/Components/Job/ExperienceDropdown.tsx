import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useJobSelection } from "../../Context/JobSelectionContext";

const ExperienceDropdown: React.FC = () => {
  const { experience, setExperience } = useJobSelection();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const experienceOptions = [
    "React.js",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
    "Figma",
    "PHP",
    "Laravel",
    "Node.js",
    "Django",
    "Express.js",
    "Next.js",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Firebase",
    "JWT",
    "Java",
    "Adobe XD",
    "Canva",
  ];

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

  const handleCheckboxChange = (option: string) => {
    setExperience(
      experience.includes(option)
        ? experience.filter((item) => item !== option) // Remove if selected
        : [...experience, option] // Add if not selected
    );
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label className="block font-medium text-gray-700">Experience</label>
      <div
        className="w-full border border-gray-300 px-3 py-2 mt-1 rounded cursor-pointer bg-white flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {experience.length > 0 ? experience.join(", ") : "-- Select --"}
        <IoIosArrowDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded shadow-lg z-50 max-h-60 overflow-auto">
          <ul className="py-2">
            {experienceOptions.map((option, index) => (
              <li
                key={index}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2"
              >
                <input
                  type="checkbox"
                  checked={experience.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  className="cursor-pointer"
                />
                <span>{option}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExperienceDropdown;
