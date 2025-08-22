import React, { useState } from 'react';
import './Findjobs.css';

const jobs = [
  {
    _id: "1",
    jobtitle: "Frontend Developer",
    company: "Tech Solutions",
    location: "Remote",
    jobtype: "Full Time",
    salary: "₹10,00,000",
    description: "Build modern UIs with React, collaborate with backend teams, and optimize for performance.",
  },
  {
    _id: "2",
    jobtitle: "Backend Engineer",
    company: "CodeWorks",
    location: "Bangalore",
    jobtype: "Part Time",
    salary: "₹6,00,000",
    description: "Design scalable REST APIs, integrate databases like MongoDB, and ensure security of endpoints.",
  },
  {
    _id: "3",
    jobtitle: "UI/UX Designer",
    company: "Creative Minds",
    location: "Hyderabad",
    jobtype: "Contract",
    salary: "₹5,00,000",
    description: "Create wireframes, design intuitive interfaces, and work with product teams for user testing.",
  }
];

const jobTypes = [
  "All",
  "Full Time",
  "Part Time",
  "Contract"
];

const FindJobs = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [role, setRole] = useState("All");
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  // Apply filter and search when criteria change
  React.useEffect(() => {
    let result = jobs;

    if (search.trim()) {
      const term = search.trim().toLowerCase();
      result = result.filter(
        job =>
          job.jobtitle.toLowerCase().includes(term) ||
          job.company.toLowerCase().includes(term)
      );
    }

    if (location !== "All") {
      result = result.filter(job => job.location === location);
    }

    if (role !== "All") {
      result = result.filter(job => job.jobtype === role);
    }

    setFilteredJobs(result);
  }, [search, location, role]);

  // Extract unique locations for dropdown
  const uniqueLocations = ["All", ...Array.from(new Set(jobs.map(job => job.location)))];

  return (
    <div className="findjobs-container">
      <h2 className="findjobs-title">Find Jobs</h2>
      <div style={{ marginBottom: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="Search by job title or company"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc", flex: "2" }}
        />
        <select
          value={location}
          onChange={e => setLocation(e.target.value)}
          style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        >
          {uniqueLocations.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
        <select
          value={role}
          onChange={e => setRole(e.target.value)}
          style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        >
          {jobTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FindJobs;
