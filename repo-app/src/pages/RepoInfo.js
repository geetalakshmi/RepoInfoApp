import React from 'react';
import ReportComponent from '../components/ReportComponent';

function Home() {
  return (
    <div className="product-card">
      <h1>Welcome to the RepoInfo Page</h1>
      {/* Add more content here */}
      <div className="product-grid">
        <div className="product-card">Repo report</div>
        <div className="product-card">Pull Requests</div>
        <div className="product-card">Commits report</div>
        <div className="product-card"><ReportComponent /></div>
        {/* Add more product cards as needed */}
      </div>
    </div>
  );
}

export default Home;