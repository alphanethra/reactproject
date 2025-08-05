import { useState, useEffect } from 'react';
import axios from 'axios';

export default function JobSeekerProfile({ userId }) {
  const [profile, setProfile] = useState({
    resume: '',
    workHistory: '',
    skills: '',
    education: ''
  });

  useEffect(() => {
    axios.get(`/api/profile/${userId}`).then(res => {
      setProfile(res.data.profile || {});
    });
  }, [userId]);

  const handleSave = () => {
    axios.put(`/api/profile/${userId}`, { profile })
      .then(() => alert('Profile Updated'));
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10">
      <h2 className="text-2xl font-semibold mb-6">Job Seeker Profile</h2>

      <label className="block mb-2 text-gray-700">Resume</label>
      <textarea
        className="w-full border border-gray-300 rounded-md p-2 mb-4"
        value={profile.resume}
        onChange={(e) => setProfile({ ...profile, resume: e.target.value })}
        placeholder="Paste your resume text here"
      />

      <label className="block mb-2 text-gray-700">Work History</label>
      <textarea
        className="w-full border border-gray-300 rounded-md p-2 mb-4"
        value={profile.workHistory}
        onChange={(e) => setProfile({ ...profile, workHistory: e.target.value })}
        placeholder="Enter previous jobs"
      />

      <label className="block mb-2 text-gray-700">Skills (comma separated)</label>
      <input
        className="w-full border border-gray-300 rounded-md p-2 mb-4"
        value={profile.skills}
        onChange={(e) => setProfile({ ...profile, skills: e.target.value })}
        placeholder="HTML, CSS, JS"
      />

      <label className="block mb-2 text-gray-700">Education</label>
      <input
        className="w-full border border-gray-300 rounded-md p-2 mb-4"
        value={profile.education}
        onChange={(e) => setProfile({ ...profile, education: e.target.value })}
        placeholder="B.Tech in Computer Science"
      />

      <button
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        onClick={handleSave}
      >
        Save Profile
      </button>
    </div>
  );
}

