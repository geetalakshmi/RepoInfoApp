import React, { useState, useEffect } from 'react';

const ReportComponent = () => {
  const [report, setReport] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await fetch('http://localhost:8080/repos/kubernetes/report');
        //const data = await response.json();
        const data = await response.text()
        setReport(data);
      } catch (error) {
        console.error('Error fetching report:', error);
      }
    };

    fetchReport();
  }, []);

  if (!report) {
    return <div>Loading report...</div>;
  }

  return (
    <div>
      <h2>Kubernetes Report</h2>
      <div dangerouslySetInnerHTML={{ __html: report }} /> {/* Change this line */}
    </div>
  );
};

export default ReportComponent;
