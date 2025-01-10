import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import RepoInfo from './pages/RepoInfo';
import './myStyle.css';
import ReportComponent from './components/ReportComponent'; 



function App() {
  return (
    <Router>
      <div className="App">
      
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/repo" element={<RepoInfo />} />
            <Route path="/repo/:username" element={<ReportComponent />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2024 18fiftysix.com, public repo report</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;