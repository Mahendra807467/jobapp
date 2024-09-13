import React, { useContext } from 'react';
import { BookmarkContext } from '../context/BookmarkContext';
import '../styles/JobCard.css';

const JobCard = ({ job }) => {
  const { bookmarks, toggleBookmark } = useContext(BookmarkContext);

  const isBookmarked = bookmarks.find((b) => b.id === job.id);

  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.location}</p>
      <p>Salary: {job.salary}</p>
      <p>Phone: {job.phone}</p>
      <button onClick={() => toggleBookmark(job)}>
        {isBookmarked ? 'Unbookmark' : 'Bookmark'}
      </button>
    </div>
  );
};

export default JobCard;