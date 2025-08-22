import React, { useState } from "react";
import "./PostJob.css"; // Optional for styling
import  axios  from "axios";
import { useNavigate } from 'react-router-dom';
const PostJob = () => {
  const navigate= useNavigate();
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  

  const submithandler =  (e) => {
  e.preventDefault(); 
  try {
     axios.post("http://localhost:3000/post", {
      jobtitle: title,
      company: company,
      location: location,
      jobtype: type,
      salary: salary,
      description: description,
    });

    window.alert(`Job posted: ${title} at ${company}\nDetails: ${description}`);
    navigate('/landing');
    setTitle("");
    setCompany("");
    setLocation("");
    setType("");
    setSalary("");
    setDescription("");
  }
   catch (error) {
    console.error("Error posting job:", error);
    alert("Failed to post job. Please try again.");
  }
};



  return (
    <div className="post-job-container">
      <h2>Post a Job</h2>
      <form className="post-job-form" onSubmit={submithandler}>
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          name="title"
          onChange={e => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Company"
          name="company"
          value={company}
          onChange={e => setCompany(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          name="location"
          onChange={e => setLocation(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Job Type (Full-time, Part-time, etc.)"
          value={type}
          name="type"
          onChange={e => setType(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Salary"
          name="salary"
          value={salary}
          onChange={e => setSalary(e.target.value)}
          required
        />
        <textarea
          placeholder="Job Description"
          value={description}
          name="description"
          onChange={e => setDescription(e.target.value)}
          required
        />
        <button  type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;
