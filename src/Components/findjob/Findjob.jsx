import React, { useEffect, useState } from "react";
import "./Findjob.css";
import axios from "axios";

const jobTypes = ["All", "Full Time", "Part Time", "Contract", "Internship"];

const FindJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [role, setRole] = useState("All");

  // Form States
  const [formData, setFormData] = useState({
    jobtitle: "",
    company: "",
    location: "",
    jobtype: "Full Time",
    salary: "",
    description: "",
  });
  const [editingJob, setEditingJob] = useState(null);

  // Fetch Jobs
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get("http://localhost:3000/find");
      setJobs(res.data);
      setFilteredJobs(res.data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  };

  // Search / Filter
  useEffect(() => {
    let result = jobs;

    if (search.trim()) {
      const term = search.trim().toLowerCase();
      result = result.filter(
        (job) =>
          job.jobtitle.toLowerCase().includes(term) ||
          job.company.toLowerCase().includes(term)
      );
    }

    if (location !== "All") {
      result = result.filter((job) => job.location === location);
    }

    if (role !== "All") {
      result = result.filter((job) => job.jobtype === role);
    }

    setFilteredJobs(result);
  }, [search, location, role, jobs]);

  const uniqueLocations = [
    "All",
    ...Array.from(new Set(jobs.map((job) => job.location))),
  ];

  // Handle Form Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add / Update Job
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingJob) {
        await axios.put(`http://localhost:3000/jobs/${editingJob._id}`, formData);
      } else {
        await axios.post("http://localhost:3000/jobs", formData);
      }

      fetchJobs();
      setFormData({
        jobtitle: "",
        company: "",
        location: "",
        jobtype: "Full Time",
        salary: "",
        description: "",
      });
      setEditingJob(null);
    } catch (err) {
      console.error("Error saving job:", err);
    }
  };

  // Delete Job
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/jobs/${id}`);
      fetchJobs();
    } catch (err) {
      console.error("Error deleting job:", err);
    }
  };

  // Edit Job
  const handleEdit = (job) => {
    setFormData(job);
    setEditingJob(job);
  };

  return (
    <div className="findjobs-container">
      <h2 className="findjobs-title">Find Jobs</h2>

      {/* Job Form */}
      <form onSubmit={handleSubmit} className="job-form">
        <input
          type="text"
          name="jobtitle"
          placeholder="Job Title"
          value={formData.jobtitle}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <select name="jobtype" value={formData.jobtype} onChange={handleChange}>
          {jobTypes.slice(1).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button type="submit">{editingJob ? "Update Job" : "Add Job"}</button>
      </form>

      {/* Search Filters */}
      <div
        style={{
          marginBottom: "1.5rem",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Search by job title or company"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            flex: "2",
          }}
        />
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          {uniqueLocations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          {jobTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Job List */}
      {filteredJobs.length === 0 ? (
        <p>No jobs match your criteria.</p>
      ) : (
        <ul className="job-list">
          {filteredJobs.map((job) => (
            <li className="job-card" key={job._id}>
              <div className="job-title">{job.jobtitle}</div>
              <div className="job-company">{job.company}</div>
              <div className="job-details">
                <span>{job.location} | </span>
                <span>{job.jobtype} | </span>
                <span>Salary: {job.salary}</span>
              </div>
              <div className="job-description">{job.description}</div>
              <div className="job-actions">
                <button onClick={() => handleEdit(job)}>Edit</button>
                <button onClick={() => handleDelete(job._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FindJobs;


