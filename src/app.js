import React from 'react';
import JobSeekerProfile from './JobSeekerProfile';
import EmployerProfile from './employerProfile';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <JobSeekerProfile />
      <EmployerProfile />
    </div>
  );
}

export default App;
