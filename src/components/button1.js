// Button.js
import React from 'react';
import './button1.css'; // Import the CSS file

const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button className="custom-button" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;