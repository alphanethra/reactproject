import React, { useState } from "react";
import "./PostJob.css"; // Optional for styling

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show job details in alert or console.
    alert(`Job posted: ${title} at ${company}\nDetails: ${description}`);
    // You can later send this data to a backend or add to state.
    // Reset form:
    setTitle("");
    setCompany("");
    setLocation("");
    setType("");
    setSalary("");
    setDescription("");
  };

  return (
    <div className="post-job-container">
      <h2>Post a Job</h2>
      <form className="post-job-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={e => setCompany(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={e => setLocation(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Job Type (Full-time, Part-time, etc.)"
          value={type}
          onChange={e => setType(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Salary"
          value={salary}
          onChange={e => setSalary(e.target.value)}
          required
        />
        <textarea
          placeholder="Job Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;
