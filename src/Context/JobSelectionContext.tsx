import React, { createContext, useContext, useState } from "react";

// Define the shape of the context state
interface JobSelectionContextType {
  experience: string[];
  employmentType: string;
  department: string;
  salary: string;
  title: string;
  location: string;
  setExperience: (experience: string[]) => void;
  setEmploymentType: (employmentType: string) => void;
  setDepartment: (department: string) => void;
  setSalary: (salary: string) => void;
  setTitle: (title: string) => void;
  setLocation: (location: string) => void;
}

// Create the context with default values
const JobSelectionContext = createContext<JobSelectionContextType | undefined>(
  undefined
);

// Provider Component
export const JobSelectionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [experience, setExperience] = useState<string[]>([]);
  const [employmentType, setEmploymentType] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [salary, setSalary] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  return (
    <JobSelectionContext.Provider
      value={{
        experience,
        employmentType,
        department,
        salary,
        title,
        location,
        setExperience,
        setEmploymentType,
        setDepartment,
        setSalary,
        setTitle,
        setLocation,
      }}
    >
      {children}
    </JobSelectionContext.Provider>
  );
};

// Custom Hook to use the context
export const useJobSelection = () => {
  const context = useContext(JobSelectionContext);
  if (!context) {
    throw new Error(
      "useJobSelection must be used within a JobSelectionProvider"
    );
  }
  return context;
};
