import React, { useState, useEffect } from "react";
import "./App.css";

export default function EmployerJobManagement({ onLogout, user }) {
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState(getEmptyForm());
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    setJobs([
      {
        id: "1",
        title: "Frontend Developer",
        description: "Build UI using React",
        requirements: "React, CSS",
        salary: "₹50,000",
        location: "Hyderabad",
      },
    ]);
  }, []);

  function getEmptyForm() {
    return {
      id: null,
      title: "",
      description: "",
      requirements: "",
      salary: "",
      location: "",
    };
  }

  function saveJob(e) {
    e.preventDefault();
    if (formData.id) {
      setJobs((prev) =>
        prev.map((j) => (j.id === formData.id ? { ...formData } : j))
      );
    } else {
      setJobs((prev) => [
        { ...formData, id: Date.now().toString() },
        ...prev,
      ]);
    }
    setIsFormOpen(false);
  }

  function deleteJob(id) {
    setJobs((prev) => prev.filter((j) => j.id !== id));
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome, {user.email}</h1>
        <button onClick={onLogout} className="logout-btn">Logout</button>
      </header>

      <button
        onClick={() => {
          setFormData(getEmptyForm());
          setIsFormOpen(true);
        }}
        className="primary-btn"
      >
        + Post New Job
      </button>

      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2>{job.title}</h2>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p>{job.description}</p>
            <p className="req">Requirements: {job.requirements}</p>
            <div className="card-actions">
              <button onClick={() => { setFormData(job); setIsFormOpen(true); }}>Edit</button>
              <button className="delete-btn" onClick={() => deleteJob(job.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {isFormOpen && (
        <div className="modal">
          <form onSubmit={saveJob} className="modal-content">
            <h3>{formData.id ? "Edit Job" : "Post New Job"}</h3>
            <input
              placeholder="Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
            <input
              placeholder="Location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
            <input
              placeholder="Salary"
              value={formData.salary}
              onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
            />
            <input
              placeholder="Requirements"
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
            />
            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
            <div className="modal-actions">
              <button type="button" onClick={() => setIsFormOpen(false)}>Cancel</button>
              <button type="submit" className="primary-btn">Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
