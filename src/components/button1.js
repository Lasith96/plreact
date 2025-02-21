// Button.js
import React from 'react';
import './Button1.css'; // Import the CSS file

const Button = ({ children, text, service }) => {
  const handleClick = () => {
    const phone = '411169565'; // your phone number
    let message = "Hi there, I am reaching out as i would like to get a quote";
    
    // Add service-specific message
    if (service) {
      message += ` for ${service} service`;
    }
    
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); // opens WhatsApp in a new tab
  };

  return (
    <button onClick={handleClick} className="button-class">
      {text || children}
    </button>
  );
};

export default Button;