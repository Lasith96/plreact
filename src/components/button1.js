// Button.js
import React from 'react';
import './button1.css'; // Import the CSS file

const Button = ({ children }) => {
  const handleClick = () => {
    const phone = '0435610636'; // your phone number
    const message = "Hi there, I am reaching out as i would like to get a quote for a cleaning service";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); // opens WhatsApp in a new tab
  };

  return (
    <button onClick={handleClick} className="button-class">
      {children}
    </button>
  );
};

export default Button;