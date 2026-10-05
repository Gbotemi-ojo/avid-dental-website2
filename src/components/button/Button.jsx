import React from 'react';
import './Button.css';

const Button = ({ children, onClick }) => {
  return (
    <button className="gradient-btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;