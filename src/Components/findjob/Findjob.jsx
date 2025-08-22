import React, { useEffect, useState } from 'react';
import './Findjob.css';
import axios from 'axios';

const jobTypes = ["All", "Full Time", "Part Time", "Contract","Internship"];

const FindJobs = () => {
  const [jobs, setJobs] = useState([]);          
  const [filteredJobs, setFilteredJobs] = useState([]); 
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [role, setRole] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/find");
        setJobs(res.data);       
        setFilteredJobs(res.data); 
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
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
  }, [search, location, role, jobs]);


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
        <select value={location} onChange={e => setLocation(e.target.value)}>
          {uniqueLocations.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
        <select value={role} onChange={e => setRole(e.target.value)}>
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
