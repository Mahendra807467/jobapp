export const fetchJobs = async (page) => {
    const response = await fetch(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
    if (!response.ok) {
      throw new Error('Failed to fetch jobs');
    }
    const data = await response.json();
    return data;
  };