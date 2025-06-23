import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioAPI } from './services/api';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setLoading(true);
        const data = await portfolioAPI.getPortfolio();
        setPortfolioData(data);
      } catch (err) {
        setError('Failed to load portfolio data. Please try again later.');
        console.error('Error loading portfolio data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Portfolio</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!portfolioData) {
    return null;
  }

  return (
    <Router>
      <div className="App bg-gray-50 min-h-screen">
        <Header personalInfo={portfolioData.personalInfo} />
        
        <main>
          <Hero personalInfo={portfolioData.personalInfo} />
          
          <About personalInfo={portfolioData.personalInfo} />
          
          <Skills skills={portfolioData.skills} />
          
          <Experience experiences={portfolioData.experiences} />
          
          <Projects projects={portfolioData.projects} />
          
          <Education education={portfolioData.education} />
          
          <Contact personalInfo={portfolioData.personalInfo} />
        </main>
        
        <Footer personalInfo={portfolioData.personalInfo} />
      </div>
    </Router>
  );
}

export default App;
