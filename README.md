Job-Match_Dashboard

A powerful job tracking and recommendation system built with React (Vite) and TypeScript. This dashboard helps users find job recommendations based on their skills and preferences while providing a clean and interactive UI.

Features
Job Recommendations – Get AI-powered job matches based on your profile.
Skill-Based Matching – Receive alerts if you lack required skills for a job.
Interactive UI – Smooth user experience with Tailwind CSS and Framer Motion animations.
Context API  – Manage state efficiently for seamless navigation.
API Integration – Fetch job listings dynamically from MockAPI.

Tech Stack
Frontend: React (Vite), TypeScript, TailwindCSS
State Management: Context API 
API Handling: Axios


Installation & Setup

1- Clone the Repository
git clone https://github.com/Pedrosaint/Job-Match_Dashboard.git
cd Job-Match_Dashboard

2- Install Dependencies
npm install

3- Run the Application
npm run dev

API Endpoints
Fetch Job Listings: GET /jobs
(API is integrated inside src/API/api.ts using Axios.)

Deployment
To deploy this project, you can use Vercel or Netlify:

Build the project:
npm run build
upload the dist/ folder to Netlify.

