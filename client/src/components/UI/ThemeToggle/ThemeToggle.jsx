import React from 'react';
import './ThemeToggle.scss';

const ThemeToggle = ({ toggleTheme }) => {
  return (
    <div className="theme">
      <label className="theme__toggle">
        <input type="checkbox" onChange={toggleTheme} defaultChecked />
        <span className="theme__toggle-slider round"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
