import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Layout from './Layout/Layout';
import Dashboard from './Components/Dashboard/Dashboard';
import Applicant from './Components/Applicant/Applicant';
import MainJob from './Components/Job/MainJob';
import Frontend from './Components/Job/Frontend';
import BackendDeveloper from './Components/Job/BackendDeveloper';
import UXDesigner from './Components/Job/UXDesigner';

 
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="mainjob" element={<MainJob />} />
        <Route path="frontend" element={<Frontend />} />
        <Route path="backend" element={<BackendDeveloper />} />
        <Route path="ux-designer" element={<UXDesigner />} />
        <Route path="applicant" element={<Applicant />} />
      </Route>
    </>
  )
);



const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App
