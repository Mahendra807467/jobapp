import React from 'react';
import '../styles/BottomNavigation.css';

const BottomNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bottom-navigation">
      <button
        className={activeTab === 'jobs' ? 'active' : ''}
        onClick={() => setActiveTab('jobs')}
      >
        Jobs
      </button>
      <button
        className={activeTab === 'bookmarks' ? 'active' : ''}
        onClick={() => setActiveTab('bookmarks')}
      >
        Bookmarks
      </button>
    </div>
  );
};

export default BottomNavigation;