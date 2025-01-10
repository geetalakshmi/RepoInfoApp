import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ReportComponent = () => {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const { username } = useParams();


  useEffect(() => {
    const fetchReport = async () => {
      if (!username) return;

      setLoading(true);
      try {
        console.log('Fetching report...');
        const response = await fetch(`http://localhost:8080/repos/${username}/report`);
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        //const data = await response.json();
        const data = await response.text()
        setReport(data);
      } catch (error) {
        console.error('Error fetching report:', error);
        alert('Failed to fetch report');
      }
      finally {
        setLoading(false);
      }
    };

    if (username) { // Only fetch if username is valid
      fetchReport();
  }
  }, [username]);

  if (loading) {
    return <div>Loading report...</div>; // Use loading state here
}

  return (
    <div>
      <h2>Repository Report for {username}</h2>
      {report ? (
        <div dangerouslySetInnerHTML={{ __html: report }} />
      ) : (
        <p>No report available. Please enter a valid username.</p>
      )}
    </div>
  );
};

export default ReportComponent;