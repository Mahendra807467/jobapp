import React from 'react';
import '../styles/JobDetails.css';

const JobDetails = ({ job }) => {
  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <p>Location: {job.location}</p>
      <p>Salary: {job.salary}</p>
      <p>Phone: {job.phone}</p>
      {/* Add any other job-related details */}
    </div>
  );
};

export default JobDetails;