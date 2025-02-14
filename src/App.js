import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

// Temporary placeholder components
const Residential = () => <div style={{padding: "100px 20px"}}>Residential Page</div>;
const Commercial = () => <div style={{padding: "100px 20px"}}>Commercial Page</div>;
const Testimonials = () => <div style={{padding: "100px 20px"}}>Testimonials Page</div>;
const About = () => <div style={{padding: "100px 20px"}}>About Page</div>;

export default App;
