import React from "react";
import withJobLayout from "./withJobLayout";
import Breadcrumb from "../../BreadCrumb/BreadCrumb";

const BackendDeveloper: React.FC = () => {
    return (
      <>
        <Breadcrumb />
        <div className="md:p-6 mb-15">
          <h2 className="text-2xl font-bold mb-4">Backend Developer</h2>
          <p className="text-gray-700 mb-4">
            We are seeking a skilled Backend Developer to join our dynamic team.
            You will be responsible for designing, implementing, and maintaining
            scalable backend services, APIs, and databases to support web and
            mobile applications.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Responsibilities:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Develop and maintain secure, scalable, and high-performance
              backend systems.
            </li>
            <li>
              Design and implement RESTful APIs and GraphQL endpoints for
              frontend integration.
            </li>
            <li>
              Work with relational (SQL) and NoSQL databases to optimize data
              storage and retrieval.
            </li>
            <li>
              Implement authentication & authorization systems (e.g., JWT,
              OAuth).
            </li>
            <li>
              Collaborate with frontend developers to integrate APIs
              efficiently.
            </li>
            <li>
              Optimize application performance, security, and reliability.
            </li>
            <li>
              Deploy applications using Docker, Kubernetes, and CI/CD pipelines.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Required Skills:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Proficiency in backend programming languages (Node.js, Python,
              PHP, or Java).
            </li>
            <li>
              Experience with backend frameworks like Express.js, NestJS,
              Django, or Laravel.
            </li>
            <li>
              Strong understanding of databases (PostgreSQL, MySQL, MongoDB,
              Firebase).
            </li>
            <li>
              Experience with authentication methods like JWT, OAuth, or API
              Gateway.
            </li>
            <li>Knowledge of cloud platforms (AWS, Google Cloud, or Azure).</li>
            <li>
              Familiarity with DevOps tools such as Docker, Kubernetes, and
              CI/CD pipelines.
            </li>
            <li>
              Strong debugging, testing, and performance optimization skills.
            </li>
          </ul>
        </div>
      </>
    );
};

export default withJobLayout(BackendDeveloper);
