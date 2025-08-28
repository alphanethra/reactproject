import React, { useState } from "react";
import "./JobManagement.css";

function JobManagement() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      description: "Build and maintain UI features.",
      location: "Bangalore",
      salary: "6 LPA",
    },
    {
      id: 2,
      title: "Backend Developer",
      description: "Work with APIs and databases.",
      location: "Hyderabad",
      salary: "8 LPA",
    },
  ]);

  const [newJob, setNewJob] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  const addOrUpdateJob = () => {
    if (editIndex !== null) {
      const updatedJobs = [...jobs];
      updatedJobs[editIndex] = { ...newJob, id: jobs[editIndex].id };
      setJobs(updatedJobs);
      setEditIndex(null);
    } else {
      setJobs([...jobs, { ...newJob, id: jobs.length + 1 }]);
    }
    setNewJob({ title: "", description: "", location: "", salary: "" });
  };

  const editJob = (index) => {
    setNewJob(jobs[index]);
    setEditIndex(index);
  };

  const deleteJob = (index) => {
    setJobs(jobs.filter((_, i) => i !== index));
  };

  return (
    <div className="job-container">
      <h2>Job Management Module</h2>

      {/* Job Form */}
      <div className="job-form">
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={newJob.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Job Description"
          value={newJob.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newJob.location}
          onChange={handleChange}
        />
        <input
          type="text"
          name="salary"
          placeholder="Salary"
          value={newJob.salary}
          onChange={handleChange}
        />
        <button onClick={addOrUpdateJob}>
          {editIndex !== null ? "Update Job" : "Add Job"}
        </button>
      </div>

      {/* Job List */}
      <div className="job-list">
        {jobs.map((job, index) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>
              <strong>Location:</strong> {job.location}
            </p>
            <p>
              <strong>Salary:</strong> {job.salary}
            </p>
            <div className="job-actions">
              <button className="edit-btn" onClick={() => editJob(index)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => deleteJob(index)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobManagement;
