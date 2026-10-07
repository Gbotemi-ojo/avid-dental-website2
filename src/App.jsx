import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Promos from './pages/Promos/Promos';
import PriceList from './pages/PriceList/PriceList';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import BookAppointment from './pages/BookAppointment/BookAppointment'; // <-- Import new page
import './App.css';
//f

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar /> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/promos" element={<Promos />} />
          <Route path="/pricing" element={<PriceList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<BookAppointment />} /> {/* <-- Add Booking route */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
