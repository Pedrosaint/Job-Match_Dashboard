import React from "react";
import Location from "./Location";
import ExperienceDropdown from "./ExperienceDropdown";
import Employmenttype from "./Employmenttype";
import Department from "./Department";
import Title from "./Title";
import Salary from "./Salary";
import { useJobSelection } from "../../Context/JobSelectionContext";
import { toast } from "react-toastify";

const withJobLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P) => {
    const { experience } = useJobSelection(); // Get user-selected skills

    //  Example job listing (this should come from your API)
    const job = {
      requiredSkills: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "TypeScript"],
    };

    // Apply function with skill validation
    const handleApply = () => {
      const missingSkills =
        job?.requiredSkills?.filter((skill) => !experience.includes(skill)) ||
        [];

      if (missingSkills.length > 0) {
        toast.info(
          `You are missing these skills: ${missingSkills.join(
            ", "
          )}. Consider upskilling!`
        );
      } else {
        toast.success("Application submitted successfully!");
      }
    };

    return (
      <div className="md:px-20 py-10 px-5">
        <WrappedComponent {...props} />
        <div className="font-poppins font-bold text-2xl text-gray-500 ml-5 mb-10 text-center underline">
          Make Your Selection and Apply
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-5">
          <ExperienceDropdown />
          <Employmenttype />
          <Department />
          <Salary />
          <Title />
        </div>
        <Location />

        {/* Apply Button */}
        <button
          onClick={handleApply}
          className="bg-blue-400 hover:bg-blue-500 text-white font-semibold font-poppins px-6 py-2 text-sm rounded-sm mt-10 ml-6"
        >
          Apply
        </button>
      </div>
    );
  };
};

export default withJobLayout;
