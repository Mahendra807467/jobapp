import React, { useState } from 'react';
import Jobs from './components/Jobs';
import JobDetails from './components/JobDetails';
import Bookmarks from './components/Bookmarks';
import BottomNavigation from './components/BottomNavigation';
import { BookmarkProvider } from './context/BookmarkContext';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = (job) => setSelectedJob(job);

  return (
    <BookmarkProvider>
      <div className="app-container">
        {selectedJob ? (
          <JobDetails job={selectedJob} onBack={() => setSelectedJob(null)} />
        ) : (
          <>
            {activeTab === 'jobs' && <Jobs onJobClick={handleJobClick} />}
            {activeTab === 'bookmarks' && <Bookmarks onJobClick={handleJobClick} />}
            <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          </>
        )}
      </div>
    </BookmarkProvider>
  );
};

export default App