import { useState, useEffect } from "react";
import { fetchJobListings } from "../../API/api"; // ✅ Import API function

// ✅ Define Job Type
interface Job {
  id: string;
  title: string;
  company: string;
  location?: string;
  salary?: string;
  matchScore?: number;
}

const Dashboard: React.FC = () => {
  const [showJobs, setShowJobs] = useState(false);
  const [jobListings, setJobListings] = useState<Job[]>([]); // Correct Type

  // ✅ Fetch Job Listings from API
  useEffect(() => {
    const getJobs = async () => {
      try {
        const data: Job[] = await fetchJobListings(); // Ensure correct type
        setJobListings(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    getJobs();
  }, []);

  return (
    <div className="p-6">
      {/*  Toggle Button */}
      <button
        onClick={() => setShowJobs(!showJobs)}
        className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded-md"
      >
        {showJobs ? "Hide Job Recommendations" : "Display Job Recommendations"}
      </button>

      {/* Job Listings */}
      {showJobs && (
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Job Recommendations</h2>
          <ul className="list-disc list-inside">
            {jobListings.length > 0 ? (
              jobListings.map((job) => (
                <li
                  key={job.id}
                  className="flex items-center justify-between p-3 border-b border-gray-300"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {job.title || "No title"}
                    </h3>
                    <p className="text-sm text-gray-600">
                      at{" "}
                      <span className="font-medium text-blue-600">
                        {job.company || "Unknown"}
                      </span>
                      {job.location && ` - ${job.location}`}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-600 font-medium">
                      {job.salary || "Salary not specified"}
                    </p>
                    <p className="text-xs text-gray-500">
                      Match Score: {job.matchScore ?? "N/A"}
                    </p>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No job recommendations yet.</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
