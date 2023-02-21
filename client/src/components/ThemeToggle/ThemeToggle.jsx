import React from 'react';
import './ThemeToggle.scss';

export const ThemeToggle = ({ toggleTheme }) => {
  return (
    <div className='theme'>
      <span className='theme__label'>Dark Mode</span>
      <label className="theme__toggle">
        <input type="checkbox" onChange={toggleTheme}/>
        <span className="theme__toggle-slider round"></span>
      </label>
    </div>
  )
}
