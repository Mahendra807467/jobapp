import React, { useContext } from 'react';
import JobCard from './JobCard';
import { BookmarkContext } from '../context/BookmarkContext';
import '../styles/Bookmarks.css';

const Bookmarks = () => {
  const { bookmarks } = useContext(BookmarkContext);

  return (
    <div className="bookmarks">
      {bookmarks.length === 0 ? (
        <p>No jobs bookmarked yet.</p>
      ) : (
        bookmarks.map((job) => <JobCard key={job.id} job={job} />)
      )}
    </div>
  );
};

export default Bookmarks;