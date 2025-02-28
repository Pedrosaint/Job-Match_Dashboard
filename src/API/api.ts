import axios from "axios";

const API_URL = "https://67c030f0b9d02a9f2248af90.mockapi.io/api/v1";

export const fetchJobListings = async () => {
  try {
    const response = await axios.get(`${API_URL}/joblisting`);
     console.log("Fetched job data from API:", response.data); 
    const jobs = response.data;

    console.log("Fetched jobs:", jobs); // ✅ Log all fetched jobs

    return jobs; // ✅ Return all jobs (No filtering)
  } catch (error) {
    console.error("Error fetching job listings:", error);
    return [];
  }
};
