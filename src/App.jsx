import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar sits outside Routes so it shows on every page */}
        <Navbar /> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>

        {/* Footer sits outside Routes so it shows on every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

