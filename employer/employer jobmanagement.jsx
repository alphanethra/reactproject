import React, { useState } from 'react';
import './EmployerJobManagement.css';

const EmployerJobManagement = () => {
  const [activeTab, setActiveTab] = useState('post-job');
  const [jobForm, setJobForm] = useState({
    title: '',
    description: '',
    requirements: '',
    salary: '',
    location: '',
    type: ''
  });
  const [editingJobId, setEditingJobId] = useState(null);
  const [selectedJobId, setSelectedJobId] = useState(null);

  // Sample jobs data with applicants
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Frontend Developer',
      description: 'We are looking for a skilled frontend developer proficient in React.js.',
      requirements: '3+ years experience with React, JavaScript, modern CSS',
      salary: '$70,000 - $90,000',
      location: 'San Francisco, CA',
      type: 'full-time',
      applicants: [
        { 
          id: 1, 
          name: 'Alex Johnson', 
          email: 'alex.johnson@example.com', 
          status: 'New', 
          appliedDate: '2023-06-15',
          resume: 'Alex_Johnson_Resume.pdf'
        }
      ]
    },
    {
      id: 2,
      title: 'UX Designer',
      description: 'Creative designer needed to improve user experiences.',
      requirements: 'Portfolio required, 5+ years experience',
      salary: '$80,000 - $100,000',
      location: 'Remote',
      type: 'full-time',
      applicants: []
    }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitJob = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!jobForm.title || !jobForm.description || !jobForm.requirements || 
        !jobForm.salary || !jobForm.location || !jobForm.type) {
      alert('Please fill in all required fields');
      return;
    }

    if (editingJobId) {
      // Update existing job
      setJobs(jobs.map(job => 
        job.id === editingJobId ? { ...jobForm, id: editingJobId, applicants: job.applicants || [] } : job
      ));
    } else {
      // Add new job
      const newJob = {
        ...jobForm,
        id: Math.max(...jobs.map(job => job.id), 0) + 1, // Generate new ID
        applicants: []
      };
      setJobs([...jobs, newJob]);
    }

    // Reset form
    setJobForm({
      title: '',
      description: '',
      requirements: '',
      salary: '',
      location: '',
      type: ''
    });
    setEditingJobId(null);
  };

  const handleEditJob = (job) => {
    setJobForm({
      title: job.title,
      description: job.description,
      requirements: job.requirements,
      salary: job.salary,
      location: job.location,
      type: job.type
    });
    setEditingJobId(job.id);
    setActiveTab('post-job');
  };

  const handleDeleteJob = (id) => {
    if (window.confirm('Are you sure you want to delete this job posting?')) {
      setJobs(jobs.filter(job => job.id !== id));
      if (selectedJobId === id) {
        setSelectedJobId(null);
      }
    }
  };

  const handleApplicantStatusChange = (jobId, applicantId, status) => {
    setJobs(jobs.map(job => {
      if (job.id === jobId) {
        return {
          ...job,
          applicants: job.applicants.map(applicant => 
            applicant.id === applicantId ? { ...applicant, status } : applicant
          )
        };
      }
      return job;
    }));
  };

  return (
    <div className="employer-job-management">
      <div className="container">
        <header className="flex justify-between items-center py-6 border-b">
          <div className="flex items-center gap-4">
            <img 
              src="https://placehold.co/50x50" 
              alt="Company logo with blue and white colors showing a briefcase icon"
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold">Job Management Dashboard</h1>
          </div>
          <button className="btn btn-primary">Logout</button>
        </header>

        <div className="tab-navigation my-8">
          <button
            className={`tab-button ${activeTab === 'post-job' ? 'active' : ''}`}
            onClick={() => setActiveTab('post-job')}
          >
            Post New Job
          </button>
          <button
            className={`tab-button ${activeTab === 'manage-jobs' ? 'active' : ''}`}
            onClick={() => setActiveTab('manage-jobs')}
          >
            Manage Jobs
          </button>
          <button
            className={`tab-button ${activeTab === 'view-applicants' ? 'active' : ''}`}
            onClick={() => setActiveTab('view-applicants')}
          >
            View Applicants
          </button>
        </div>

        <div className="card">
          {activeTab === 'post-job' && (
            <div className="tab-content">
              <h2 className="text-xl font-semibold mb-6">
                {editingJobId ? 'Edit Job Posting' : 'Post New Job'}
              </h2>
              <form onSubmit={handleSubmitJob} className="space-y-4">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Job Title*</label>
                    <input
                      type="text"
                      name="title"
                      value={jobForm.title}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Location*</label>
                    <input
                      type="text"
                      name="location"
                      value={jobForm.location}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Salary Range*</label>
                    <input
                      type="text"
                      name="salary"
                      value={jobForm.salary}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g., $50,000 - $70,000"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Job Type*</label>
                    <select
                      name="type"
                      value={jobForm.type}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    >
                      <option value="">Select...</option>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Contract</option>
                      <option value="internship">Internship</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Job Description*</label>
                  <textarea
                    name="description"
                    value={jobForm.description}
                    onChange={handleInputChange}
                    className="form-input form-textarea"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Requirements*</label>
                  <textarea
                    name="requirements"
                    value={jobForm.requirements}
                    onChange={handleInputChange}
                    className="form-input form-textarea"
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="btn btn-primary">
                    {editingJobId ? 'Update Job' : 'Post Job'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'manage-jobs' && (
            <div className="tab-content">
              <h2 className="text-xl font-semibold mb-6">Manage Job Postings</h2>
              {jobs.length === 0 ? (
                <p className="text-gray-600">No job postings found.</p>
              ) : (
                <div className="space-y-4">
                  {jobs.map(job => (
                    <div key={job.id} className="job-card p-4 border rounded-md">
                      <div className="flex-between">
                        <div>
                          <h3 className="font-medium text-lg">{job.title}</h3>
                          <div className="flex gap-2 mt-1 text-sm text-gray-600">
                            <span>{job.location}</span>
                            <span>•</span>
                            <span>{job.type}</span>
                            <span>•</span>
                            <span>{job.salary}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button 
                            onClick={() => handleEditJob(job)}
                            className="btn btn-secondary"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteJob(job.id)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'view-applicants' && (
            <div className="tab-content">
              <h2 className="text-xl font-semibold mb-6">Applicants</h2>
              <div className="mb-6">
                <label className="form-label block mb-2">Select Job:</label>
                <select
                  value={selectedJobId || ''}
                  onChange={(e) => setSelectedJobId(Number(e.target.value))}
                  className="form-input w-full md:w-1/3"
                >
                  <option value="">Select a job</option>
                  {jobs.map(job => (
                    <option key={job.id} value={job.id}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </div>

              {selectedJobId && (
                <>
                  <h3 className="font-medium mb-4">
                    {jobs.find(j => j.id === selectedJobId)?.title} - Applicants
                    <span className="ml-2 text-gray-600">
                      ({jobs.find(j => j.id === selectedJobId)?.applicants.length})
                    </span>
                  </h3>

                  {jobs.find(j => j.id === selectedJobId)?.applicants.length === 0 ? (
                    <p className="text-gray-600">No applicants yet</p>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="table w-full">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Resume</th>
                            <th>Applied</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {jobs.find(j => j.id === selectedJobId)?.applicants.map(applicant => (
                            <tr key={applicant.id} className="table-row">
                              <td>{applicant.name}</td>
                              <td>{applicant.email}</td>
                              <td>
                                <a 
                                  href={`#${applicant.resume}`} 
                                  className="text-blue-600 hover:underline"
                                >
                                  View
                                </a>
                              </td>
                              <td>{applicant.appliedDate}</td>
                              <td>
                                <span className={`status-badge status-${applicant.status.toLowerCase()}`}>
                                  {applicant.status}
                                </span>
                              </td>
                              <td className="flex gap-2">
                                <select
                                  value={applicant.status}
                                  onChange={(e) => handleApplicantStatusChange(
                                    selectedJobId,
                                    applicant.id,
                                    e.target.value
                                  )}
                                  className="form-input text-sm py-1"
                                >
                                  <option value="New">New</option>
                                  <option value="Reviewed">Reviewed</option>
                                  <option value="Interview">Interview</option>
                                  <option value="Rejected">Rejected</option>
                                </select>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployerJobManagement;




