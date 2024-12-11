import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { GetStartedPage } from './pages/GetStartedPage';
import { Navbar } from './components/Navigation/Navbar';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1a1a2e] text-white overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;