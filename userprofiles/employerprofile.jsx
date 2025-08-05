import { useState, useEffect } from 'react';
import axios from 'axios';

export default function EmployerProfile({ userId }) {
  const [profile, setProfile] = useState({
    companyName: '',
    companyLogo: '',
    companyDetails: '',
    contactInfo: ''
  });

  useEffect(() => {
    axios.get(`/api/profile/${userId}`).then(res => {
      setProfile(res.data.profile || {});
    });
  }, [userId]);

  const handleSave = () => {
    axios.put(`/api/profile/${userId}`, { profile })
      .then(() => alert('Employer Profile Updated'));
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10">
      <h2 className="text-2xl font-semibold mb-6">Employer Profile</h2>

      <label className="block mb-2 text-gray-700">Company Name</label>
      <input
        className="w-full border border-gray-300 rounded-md p-2 mb-4"
        value={profile.companyName}
        onChange={(e) => setProfile({ ...profile, companyName: e.target.value })}
        placeholder="e.g., OpenAI Technologies"
      />

      <label className="block mb-2 text-gray-700">Company Logo URL</label>
      <input
        className="w-full border border-gray-300 rounded-md p-2 mb-4"
        value={profile.companyLogo}
        onChange={(e) => setProfile({ ...profile, companyLogo: e.target.value })}
        placeholder="https://yourlogo.com/logo.png"
      />

      <label className="block mb-2 text-gray-700">Company Details</label>
      <textarea
        className="w-full border border-gray-300 rounded-md p-2 mb-4"
        value={profile.companyDetails}
        onChange={(e) => setProfile({ ...profile, companyDetails: e.target.value })}
        placeholder="Brief about the company"
      />

      <label className="block mb-2 text-gray-700">Contact Info</label>
      <input
        className="w-full border border-gray-300 rounded-md p-2 mb-4"
        value={profile.contactInfo}
        onChange={(e) => setProfile({ ...profile, contactInfo: e.target.value })}
        placeholder="example@company.com | +91-9876543210"
      />

      <button
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        onClick={handleSave}
      >
        Save Profile
      </button>
    </div>
  );
}

