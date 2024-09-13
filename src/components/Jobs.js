import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import { fetchJobs } from '../services/api';
import '../styles/Jobs.css';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadMoreJobs = async () => {
    setLoading(true);
    try {
      const data = await fetchJobs(page);
      setJobs((prevJobs) => [...prevJobs, ...data.jobs]);
      setPage((prevPage) => prevPage + 1);
    } catch (err) {
      setError('Failed to load jobs.');
    }
    setLoading(false);
  };

  useEffect(() => {
    loadMoreJobs();
  },);

  const handleScroll = (e) => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      loadMoreJobs();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },);

  return (
    <div className="jobs">
      {error && <p className="error">{error}</p>}
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      {loading && <p className="loading">Loading...</p>}
    </div>
  );
};

export default Jobs;