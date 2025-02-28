import React from "react";
import withJobLayout from "./withJobLayout";
import Breadcrumb from "../../BreadCrumb/BreadCrumb";

const Frontend: React.FC = () => {
  return (
    <>
      <Breadcrumb />
      <div className="md:p-6 mb-15">
        <h2 className="text-2xl font-bold mb-4">Frontend Developer</h2>
        <p className="text-gray-700 mb-4">
          We are looking for a skilled Frontend Developer to join our dynamic
          team. You will be responsible for building and optimizing user-facing
          applications, ensuring seamless user experiences, and collaborating
          with backend developers and designers.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Responsibilities:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Develop and maintain responsive web applications using React.js and
            Next.js.
          </li>
          <li>
            Ensure high-performance UI components with modern JavaScript (ES6+)
            and TypeScript.
          </li>
          <li>
            Implement **Tailwind CSS** or other styling frameworks for
            pixel-perfect designs.
          </li>
          <li>
            Collaborate with UX/UI designers to bring mockups to life using
            Figma.
          </li>
          <li>Optimize applications for maximum speed and scalability.</li>
          <li>
            Work closely with backend teams to integrate RESTful APIs and
            GraphQL.
          </li>
          <li>
            Ensure cross-browser compatibility and responsive design principles.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Required Skills:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Proficiency in React.js, Next.js, and TypeScript.</li>
          <li>
            Strong experience with JavaScript (ES6+) and modern frontend
            frameworks.
          </li>
          <li>Expertise in Tailwind CSS, CSS3, and responsive design.</li>
          <li>Familiarity with Figma for UI/UX collaboration.</li>
          <li>
            Understanding of state management (e.g., Redux Toolkit, Context
            API).
          </li>
          <li>Experience integrating REST APIs and GraphQL.</li>
          <li>
            Familiarity with CI/CD pipelines, Git, and modern development
            workflows.
          </li>
        </ul>
      </div>
    </>
  );
};

export default withJobLayout(Frontend);
