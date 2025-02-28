import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { JobSelectionProvider } from './Context/JobSelectionContext.tsx';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <JobSelectionProvider>
      <App />
    </JobSelectionProvider>
  </StrictMode>
);
