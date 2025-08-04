import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to JobBoard</h1>
        <p>Your gateway to find the perfect job or hire the best talent.</p>
      </header>

      <div className="landing-buttons">
        <button className="btn employer-btn">Post a Job</button>
        <button className="btn seeker-btn">Find Jobs</button>
      </div>

      <section className="features">
        <div className="feature-item">
          <h3>Easy Job Posting</h3>
          <p>Employers can quickly post job openings and reach top candidates.</p>
        </div>
        <div className="feature-item">
          <h3>Smart Job Search</h3>
          <p>Job seekers can filter jobs by location, salary, and skills.</p>
        </div>
        <div className="feature-item">
          <h3>Application Tracking</h3>
          <p>Keep track of your applications, statuses, and get notifications.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
