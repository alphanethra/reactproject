import React, { useState } from 'react';

export default function JobSeekerProfile() {
  const [resume, setResume] = useState(null);

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-xl">
      <h2 className="text-2xl font-semibold mb-4">Job Seeker Profile</h2>

      <div className="mb-4">
        <label className="block font-medium">Full Name</label>
        <input type="text" placeholder="John Doe" className="w-full border rounded p-2" />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Email</label>
        <input type="email" placeholder="john@example.com" className="w-full border rounded p-2" />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Resume Upload</label>
        <input type="file" onChange={handleResumeUpload} className="w-full" />
        {resume && <p className="mt-2 text-green-600">{resume.name} uploaded</p>}
      </div>

      <div className="mb-4">
        <label className="block font-medium">Work History</label>
        <textarea placeholder="e.g., Software Developer at XYZ" className="w-full border rounded p-2" rows="3"></textarea>
      </div>

      <div className="mb-4">
        <label className="block font-medium">Skills</label>
        <input type="text" placeholder="React, Node.js, SQL" className="w-full border rounded p-2" />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Education</label>
        <input type="text" placeholder="B.Tech, CSE - ABC University" className="w-full border rounded p-2" />
      </div>
    </div>
  );
}