import React from 'react';

export default function EmployerProfile() {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-xl mt-8">
      <h2 className="text-2xl font-semibold mb-4">Employer Profile</h2>

      <div className="mb-4">
        <label className="block font-medium">Company Name</label>
        <input type="text" placeholder="TechCorp Ltd." className="w-full border rounded p-2" />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Industry</label>
        <input type="text" placeholder="Information Technology" className="w-full border rounded p-2" />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Company Logo</label>
        <input type="file" className="w-full" />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Contact Email</label>
        <input type="email" placeholder="hr@techcorp.com" className="w-full border rounded p-2" />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Phone Number</label>
        <input type="text" placeholder="+91 98765 43210" className="w-full border rounded p-2" />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Posted Jobs</label>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Frontend Developer</li>
          <li>Backend Engineer</li>
          <li>Project Manager</li>
        </ul>
      </div>
    </div>
  );
}
