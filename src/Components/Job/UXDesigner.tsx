import React from "react";
import withJobLayout from "./withJobLayout";
import Breadcrumb from "../../BreadCrumb/BreadCrumb";

const UXDesigner: React.FC = () => {
  return (
      <>
      <Breadcrumb />
      <div className="md:p-6 mb-15">
        <h2 className="text-2xl font-bold mb-4">UX Designer</h2>
        <p className="text-gray-700 mb-4">
          We are looking for a talented UX Designer to join our team. You will
          be responsible for creating user-centered designs that enhance
          usability and deliver seamless digital experiences. You will work
          closely with developers, product managers, and stakeholders to craft
          intuitive and visually appealing interfaces.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Responsibilities:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Conduct user research, interviews, and usability testing.</li>
          <li>
            Design wireframes, prototypes, and user flows for digital products.
          </li>
          <li>
            Collaborate with developers to ensure seamless UI implementation.
          </li>
          <li>
            Optimize existing designs based on user feedback and data analysis.
          </li>
          <li>
            Ensure accessibility and usability best practices are followed.
          </li>
          <li>
            Work with branding teams to maintain consistency across products.
          </li>
          <li>Stay updated on UX trends, tools, and best practices.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Required Skills:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Proficiency in UX design tools like Figma, Adobe XD, or Sketch.
          </li>
          <li>Strong understanding of user-centered design principles.</li>
          <li>Experience conducting user research and usability testing.</li>
          <li>
            Ability to create wireframes, prototypes, and high-fidelity designs.
          </li>
          <li>Knowledge of accessibility and responsive design principles.</li>
          <li>Understanding of HTML, CSS, and frontend collaboration.</li>
          <li>Excellent communication and problem-solving skills.</li>
        </ul>
      </div>
    </>
  );
};

export default withJobLayout(UXDesigner);
